const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const { transformSync } = require('next/dist/build/swc');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const root = path.resolve(__dirname, '..');
const resolve = Module._resolveFilename;
Module._resolveFilename = function(id, ...args) {
  return resolve.call(this, id.startsWith('@/') ? path.join(root, id.slice(2)) : id, ...args);
};
for (const ext of ['.ts', '.tsx']) {
  require.extensions[ext] = (module, filename) => module._compile(transformSync(fs.readFileSync(filename, 'utf8'), {
    filename, module: { type: 'commonjs' },
    jsc: { parser: { syntax: 'typescript', tsx: filename.endsWith('.tsx') }, transform: { react: { runtime: 'automatic' } }, target: 'es2020' },
  }).code, filename);
}
const fixtures = require('./fixtures/recovered-content.json');
const normalize = value => value.replace(/\s+/g, ' ').trim();
const text = html => normalize(html.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>'));

test('general FAQ renders all four recovered question-answer pairs without placeholders', () => {
  const { faqGeneral } = require('../lib/content.ts');
  const { Faq } = require('../components/Faq.tsx');
  const source = fixtures.find(f => f.route === '/notre-methode');
  assert.deepEqual(faqGeneral, source.faqs);
  const html = renderToStaticMarkup(React.createElement(Faq, { items: faqGeneral }));
  const rendered = text(html);
  for (const faq of source.faqs) {
    assert.ok(rendered.includes(faq.question), faq.question);
    assert.ok(rendered.includes(faq.answer), faq.answer);
  }
  assert.equal((html.match(/<details/g) || []).length, 4);
  assert.doesNotMatch(rendered, /à compléter|Réponse à compléter/i);
});

for (const source of fixtures.filter(f => f.clone_route.startsWith('/sur-mesure/'))) {
  test(`${source.clone_route} renders every recovered description, bullet, subsection, realization, FAQ and testimonial`, async () => {
    const { default: Page, generateMetadata } = require('../app/sur-mesure/[slug]/page.tsx');
    const slug = source.clone_route.split('/').pop();
    const props = { params: Promise.resolve({ slug }) };
    const html = renderToStaticMarkup(await Page(props));
    const rendered = text(html);
    for (const paragraph of source.paragraphs) assert.ok(rendered.includes(paragraph), `Missing source paragraph: ${paragraph}`);
    for (const faq of source.faqs) {
      assert.ok(rendered.includes(faq.question), faq.question);
      assert.ok(rendered.includes(faq.answer), faq.answer);
    }
    for (const item of source.elements.filter(e => ['h2', 'h3', 'li'].includes(e.tag))) {
      assert.ok(rendered.toLocaleLowerCase('fr').includes(item.text.toLocaleLowerCase('fr')), `Missing ${item.tag}: ${item.text}`);
    }
    assert.equal((html.match(/<details/g) || []).length, 4);
    assert.doesNotMatch(rendered, /à compléter|contenu détaillé de cette page|dessiné, fabriqué et posé à la mesure de la pièce/i);
    const metadata = await generateMetadata(props);
    const hero = source.sections[0].text.split('\n\n')[3];
    assert.equal(metadata.description, hero, 'metadata uses the distinct source introduction, not generic service filler');
  });
}

test('service content exports all six complete source records and exactly 24 service FAQs', () => {
  const { serviceContent } = require('../lib/serviceContent.ts');
  const sourceServices = fixtures.filter(f => f.clone_route.startsWith('/sur-mesure/'));
  assert.deepEqual(Object.keys(serviceContent).sort(), sourceServices.map(f => f.clone_route.split('/').pop()).sort());
  let count = 0;
  for (const source of sourceServices) {
    const data = serviceContent[source.clone_route.split('/').pop()];
    assert.deepEqual(data.faqs, source.faqs);
    assert.equal(data.subsections.length, 2);
    assert.equal(data.bullets.length, 4);
    assert.equal(data.realizations.length, source.clone_route.endsWith('/bureau') ? 2 : 1);
    count += data.faqs.length;
  }
  assert.equal(count, 24);
});


for (const route of ['/', '/a-propos', '/notre-methode', '/realisations', '/contact']) {
  test(`${route} preserves all original description paragraphs and published FAQ`, async () => {
    const source = fixtures.find(f => f.route === route);
    const file = path.join(root, 'app', route === '/' ? '' : route.slice(1), 'page.tsx');
    assert.ok(fs.existsSync(file), `Missing original route ${route}`);
    const Page = require(file).default;
    const html = renderToStaticMarkup(await Page());
    const rendered = text(html);
    for (const paragraph of source.paragraphs) {
      // The source promises private uploads; this clone has no upload handler.
      // Keep the source fixture immutable and assert the documented factual correction.
      const originalStorage = "Vos photos et plans sont stockés de façon privée et ne servent qu'à l'étude de votre projet. Politique de confidentialité";
      const expected = ['/', '/contact'].includes(route) && paragraph === originalStorage
        ? 'Les fichiers sélectionnés restent dans votre navigateur : aucun fichier n’est envoyé ou stocké par ce formulaire. Politique de confidentialité'
        : paragraph;
      assert.ok(rendered.includes(expected), `Missing source paragraph or explicit correction: ${expected}`);
      if (expected !== paragraph) assert.ok(!rendered.includes(paragraph), 'Unsupported original storage promise remains visible');
    }
    for (const faq of source.faqs) {
      assert.ok(rendered.includes(faq.question), faq.question);
      assert.ok(rendered.includes(faq.answer), faq.answer);
    }
    assert.equal((html.match(/<details/g) || []).length, source.faqs.length);
    assert.doesNotMatch(rendered, /\[À COMPLÉTER\]|Réponse à compléter/i);
  });
}

test('realisations contains all seven full project stories, tags and existing service destinations', () => {
  const Page = require('../app/realisations/page.tsx').default;
  const html = renderToStaticMarkup(React.createElement(Page));
  const rendered = text(html);
  const source = fixtures.find(f => f.route === '/realisations');
  assert.equal((html.match(/<article/g) || []).length, 7);
  assert.ok(rendered.includes(source.heading));
  for (const element of source.elements.filter(e => ['h2', 'li'].includes(e.tag))) {
    assert.ok(rendered.toLocaleLowerCase('fr').includes(element.text.toLocaleLowerCase('fr')), element.text);
  }
  assert.equal((html.match(/En savoir plus sur ce savoir-faire/g) || []).length, 7);
  const { realizationProjects } = require('../lib/content.ts');
  assert.equal(realizationProjects.length, 7);
  assert.equal(realizationProjects.filter(p => p.href === '/sur-mesure/bureau').length, 2);
  assert.equal(realizationProjects[1].image, '/images/arche-paysage.jpg');
  assert.equal(realizationProjects[6].href, '/sur-mesure/fenetres-bois');
  for (const project of realizationProjects) assert.ok(fs.existsSync(path.join(root, 'public', project.image)));
});

test('all 13 recovered source routes map to preserved clone routes, with distinct service metadata', async () => {
  assert.equal(fixtures.length, 13);
  assert.equal(new Set(fixtures.map(f => f.clone_route)).size, 13);
  const { generateStaticParams, generateMetadata } = require('../app/sur-mesure/[slug]/page.tsx');
  const params = generateStaticParams();
  assert.equal(params.length, 6);
  const descriptions = [];
  for (const f of fixtures) {
    const routeFile = f.clone_route.startsWith('/sur-mesure/') ? 'app/sur-mesure/[slug]/page.tsx' : `app${f.clone_route === '/' ? '' : f.clone_route}/page.tsx`;
    assert.ok(fs.existsSync(path.join(root, routeFile)), routeFile);
  }
  for (const param of params) descriptions.push((await generateMetadata({ params: Promise.resolve(param) })).description);
  assert.equal(new Set(descriptions).size, 6);
  assert.deepEqual(await generateMetadata({ params: Promise.resolve({ slug: 'missing' }) }), {});
});
