const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const Module = require('node:module');
const { transformSync } = require('next/dist/build/swc');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const root = path.resolve(__dirname, '..');
const resolve = Module._resolveFilename;
Module._resolveFilename = function(id, ...args) {
  return resolve.call(this, id.startsWith('@/') ? path.join(root, id.slice(2)) : id, ...args);
};
for (const ext of ['.ts', '.tsx']) require.extensions[ext] = (module, filename) => module._compile(transformSync(fs.readFileSync(filename, 'utf8'), {
  filename, module: { type: 'commonjs' },
  jsc: { parser: { syntax: 'typescript', tsx: filename.endsWith('.tsx') }, transform: { react: { runtime: 'automatic' } }, target: 'es2020' },
}).code, filename);
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const stripRadius = value => value.replace(/ className="rounded-md"/g, '').replace(/rounded-md /g, '');
const stripHtml = value => value.replace(/ class="rounded-md"/g, '').replace(/rounded-md /g, '');
async function renderRoutes() {
  const routes = {};
  for (const dir of fs.readdirSync(path.join(root, 'app'), { withFileTypes: true })) {
    const file = dir.isDirectory() ? `app/${dir.name}/page.tsx` : dir.name === 'page.tsx' ? 'app/page.tsx' : null;
    if (file && fs.existsSync(path.join(root, file))) routes[file] = renderToStaticMarkup(await require(path.join(root, file)).default());
  }
  const page = require('../app/sur-mesure/[slug]/page.tsx');
  for (const params of page.generateStaticParams()) routes[`/sur-mesure/${params.slug}`] = renderToStaticMarkup(await page.default({ params: Promise.resolve(params) }));
  return routes;
}
// Fixture capture is an explicit development-only operation, never performed by tests.
if (process.env.CAPTURE_RADIUS_BASELINE === '1') {
  (async () => {
    const files = JSON.parse(fs.readFileSync(process.env.RADIUS_TRACKED_FILES, 'utf8'));
    const sources = Object.fromEntries(files.map(file => [file, hash(fs.readFileSync(path.join(root, file)))]));
    const routes = Object.fromEntries(Object.entries(await renderRoutes()).map(([route, html]) => [route, hash(html)]));
    fs.writeFileSync(path.join(__dirname, 'fixtures/rounded-md-baseline.json'), JSON.stringify({ base: process.env.RADIUS_BASE, sources, routes }, null, 2) + '\n');
  })().catch(error => { console.error(error); process.exitCode = 1; });
} else {
  const baseline = require('./fixtures/rounded-md-baseline.json');
  test('all actual buttons and card roots render rounded-md across registered routes', async () => {
    const routes = await renderRoutes();
    let checked = 0;
    for (const [route, html] of Object.entries(routes)) {
      const tags = html.match(/<(?:button|a|article|figure|form|aside|div|label|details)\b[^>]*>/g) || [];
      for (const tag of tags) {
        const target = /^<(button|form|aside)\b/.test(tag) || tag.startsWith('<article') && !/class="grid /.test(tag) || /class="[^"]*(?:bg-card|cursor-pointer|border border-line bg-cream p-4|border border-line bg-\[#EDEAE3\]|border border-line\/80 p-5|border-t border-line pt-5)/.test(tag) && !tag.startsWith('<details') || tag.startsWith('<a ') && /class="[^"]*(?:uppercase|justify-center)/.test(tag);
        if (!target) continue;
        checked++;
        assert.match(tag, /class="[^"]*\brounded-md\b/, `${route}: ${tag}`);
      }
    }
    assert.ok(checked > 70, `Only ${checked} button/card instances covered`);
    const { Button } = require('../components/ui.tsx');
    for (const variant of ['solid', 'outline', 'gold', 'outline-light']) assert.match(renderToStaticMarkup(React.createElement(Button, { href: '/contact', variant }, 'Contact')), /rounded-md/);
  });
  test('header buttons and project-card image clipping use scoped rounded-md', () => {
    const { PathnameContext } = require('next/dist/shared/lib/hooks-client-context.shared-runtime');
    const { Header } = require('../components/Header.tsx');
    const html = renderToStaticMarkup(React.createElement(PathnameContext.Provider, { value: '/' }, React.createElement(Header)));
    const buttons = html.match(/<button\b[^>]*>/g);
    assert.equal(buttons.length, 2);
    for (const button of buttons) assert.match(button, /rounded-md/);
    assert.match(html, /<a[^>]*class="rounded-md bg-ink/);
    const { ProjectCard } = require('../components/ProjectCard.tsx');
    const { projects } = require('../lib/content.ts');
    const card = renderToStaticMarkup(React.createElement(ProjectCard, { project: projects[0] }));
    assert.match(card, /<article class="rounded-md">/);
    assert.match(card, /class="relative overflow-hidden bg-sand rounded-md aspect-/);
    const { Photo } = require('../components/ui.tsx');
    const photo = renderToStaticMarkup(React.createElement(Photo, { src: projects[0].image, alt: projects[0].alt, sizes: '100vw' }));
    assert.doesNotMatch(photo, /rounded-md/);
    assert.match(photo, /rounded-full/);
  });
  test('only scoped radius additions change authentic production source bytes', () => {
    for (const [file, expected] of Object.entries(baseline.sources)) {
      let source = fs.readFileSync(path.join(root, file));
      if (file.endsWith('.tsx')) source = stripRadius(source.toString()).replace('className={`' + '${aspect}`}', 'className={aspect}');
      assert.equal(hash(source), expected, file);
    }
  });
  test('all route HTML remains byte-identical apart from added corner utilities', async () => {
    const routes = await renderRoutes();
    assert.deepEqual(Object.keys(routes), Object.keys(baseline.routes));
    for (const [route, html] of Object.entries(routes)) assert.equal(hash(stripHtml(html)), baseline.routes[route], route);
  });
}
