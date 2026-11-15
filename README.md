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
- **Contenus absents des captures** : réponses des FAQ (`[Réponse à compléter]`), contenu détaillé des pages sur-mesure autres que Dressing, page Réalisations (reconstituée depuis l'accueil). Une phrase du paragraphe « Ce qui se joue vraiment » (Dressing) était masquée par le header sur la capture : à vérifier.
- Carte : iframe Google Maps sans clé (à adapter selon la politique cookies). Pages légales : stubs.
