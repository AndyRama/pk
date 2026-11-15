# PK Agencement — clone Next.js

Clone de https://pk-bordeaux-design.base44.app : Next.js (App Router), TypeScript, Tailwind v3. Polices auto-hébergées (Fraunces + Inter via fontsource).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Pages
`/` · `/notre-methode` · `/a-propos` · `/realisations` · `/sur-mesure/[slug]` (dressing, bibliotheque, bureau, rangement-sous-escalier, cuisine, fenetres-bois) · mentions légales · politique de confidentialité

## Où modifier quoi
- `lib/site.ts` : téléphone, adresse, horaires, note Google, liens (`googleUrl` à renseigner), liste des services
- `lib/content.ts` : réalisations, étapes, avis, questions de FAQ
- `components/` : header, footer, formulaire, sections partagées · `tailwind.config.ts` : palette

## À faire
- **Formulaire** (`components/ContactForm.tsx`) : mise en page seule, il n'envoie rien. Prévu : react-hook-form + zod, route handler, Brevo/SMTP, stockage privé des fichiers. Les options des listes (type, pièce, budget, délai) sont à reprendre du site d'origine.
- **Images** (`public/images`) : rognées depuis les captures, donc basse définition. À remplacer par les originaux Base44 (mêmes noms). Le badge « Visuel d'ambiance » est celui du site d'origine : prop `badge={false}` sur `<Photo>` pour le retirer.
- **Contenus restaurés** : les six pages sur-mesure, les sept projets de Réalisations, la page Contact et les 28 réponses de FAQ reprennent les textes du site d’origine. Les routes existantes `/sur-mesure/[slug]` sont conservées.
- **Pages légales** : textes structurés et adaptés au fonctionnement réel du clone. Les informations non confirmées (e-mail, capital, direction de publication, hébergeur, assurance et médiateur) sont identifiées dans les pages et `docs/LEGAL-VALIDATION.md` ; leur présence ne vaut pas conformité juridique complète.
- Carte : iframe Google Maps sans clé, signalée dans la politique de confidentialité. Le formulaire ne transmet toujours aucune demande et ne téléverse aucun fichier ; les mentions de stockage privé héritées ont été remplacées par une information explicite sur cette limite.
