const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const swc = require('next/dist/build/swc');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const root = path.resolve(__dirname, '..');
const resolve = Module._resolveFilename;
Module._resolveFilename = function (request, parent, ...rest) {
  return resolve.call(this, request.startsWith('@/') ? path.join(root, request.slice(2)) : request, parent, ...rest);
};
for (const ext of ['.ts', '.tsx']) {
  require.extensions[ext] = (module, filename) => module._compile(swc.transformSync(fs.readFileSync(filename, 'utf8'), {
    filename, jsc: { parser: { syntax: 'typescript', tsx: ext === '.tsx' }, transform: { react: { runtime: 'automatic' } }, target: 'es2017' }, module: { type: 'commonjs' },
  }).code, filename);
}
test('contact copy matches the inactive form instead of promising storage or delivery', () => {
  const { ContactSection } = require('../components/ContactSection.tsx');
  const html = renderToStaticMarkup(React.createElement(ContactSection));
  const body = text(html);
  assert.ok(body.includes('Ce formulaire ne transmet actuellement aucune demande'));
  assert.ok(body.includes('Les fichiers sélectionnés restent dans votre navigateur'));
  assert.ok(!/stockés de façon privée|Aucune donnée n.est transmise à un tiers/.test(body));
  assert.match(html, /href="\/politique-de-confidentialite"/);
});

const legal = require('../app/mentions-legales/page.tsx');
const privacy = require('../app/politique-de-confidentialite/page.tsx');
const render = (page) => renderToStaticMarkup(React.createElement(page.default));
const text = (html) => html.replace(/<[^>]+>/g, ' ').replace(/&#x27;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ');

test('legal page renders verified publisher identity with separate registered office and atelier', () => {
  const html = render(legal);
  const body = text(html);
  for (const value of ['PK AGENCEMENT', 'SARL', '990752131', '99075213100013', '190 rue Achard', '44 Rue du Faubourg des Arts', 'Siège social', 'Atelier']) assert.ok(body.includes(value), value);
  assert.match(html, /<h1[^>]*>Mentions légales<\/h1>/);
  assert.ok(legal.metadata.description?.length > 50);
  assert.ok(!body.includes('[À COMPLÉTER]'));
});

test('legal disclosures render one honest pending-validation callout and substantive sections', () => {
  const html = render(legal); const body = text(html);
  assert.equal((html.match(/<aside/g) || []).length, 1);
  for (const label of ['Informations en attente de validation', 'E-mail', 'Capital social', 'Direction de la publication', 'Hébergeur', 'Assurance professionnelle', 'Médiateur de la consommation', 'Responsable de la publication', 'Hébergement', 'Propriété intellectuelle', 'Avis clients', 'reformulés', 'ne constituent pas des citations', 'autorisations', 'ne vaut pas certification']) assert.ok(body.includes(label), label);
  assert.match(html, /href="\/politique-de-confidentialite"/);
  assert.match(html, /href="https:\/\/entreprendre.service-public.gouv.fr\/vosdroits\/F37351"/);
  assert.ok(!/publiées avec l’accord|publiés après accord|1990-12|1995-07/.test(body));
});

test('privacy renders the real inactive form and external navigation data boundaries', () => {
  const html = render(privacy); const body = text(html);
  for (const value of ['Qui traite vos données', 'PK AGENCEMENT', '190 rue Achard', 'Données collectées', 'nom et prénom', 'téléphone', 'e-mail', 'budget', 'délai', 'photos et plans', 'ne transmet aucune demande', 'aucun téléversement', 'Pourquoi et sur quelle base', 'mesures précontractuelles', 'Durée de conservation', 'Destinataires', 'Google Maps', 'adresse IP', 'journaux techniques', 'ne permet pas de garantir', 'Vos droits', 'accès', 'rectification', 'effacement', 'limitation', 'opposition', 'portabilité', 'un mois', 'Hébergement des données']) assert.ok(body.includes(value), value);
  for (const href of ['/mentions-legales', 'tel:+33766468345', 'https://www.cnil.fr/fr/plaintes', 'https://www.cnil.fr/fr/les-droits-pour-maitriser-vos-donnees-personnelles', 'https://policies.google.com/privacy?hl=fr']) assert.ok(html.includes(`href="${href}"`), href);
  assert.equal((html.match(/<aside/g) || []).length, 1);
  assert.ok(privacy.metadata.description?.length > 50);
  assert.notEqual(privacy.metadata.description, legal.metadata.description);
  assert.ok(!/12 mois|ne dépose pas de cookie|aucun traceur|stockés de façon privée|mailto:|\[À COMPLÉTER\]/.test(html));
  assert.match(html, /aria-label="Fil d&#x27;Ariane"/);
  assert.match(html, /divide-y divide-line/);
});

