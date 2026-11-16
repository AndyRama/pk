# PK Agencement

Site vitrine de **PK Agencement**, menuisier agenceur à Bordeaux, consacré à l’agencement sur mesure et à la rénovation de fenêtres bois avec ajout de double vitrage.

Le projet reprend le site d’origine [PK Bordeaux Design sur Base44](https://pk-bordeaux-design.base44.app) dans une application Next.js avec App Router, TypeScript et Tailwind CSS v3. Il présente l’atelier, sa méthode, ses savoir-faire, ses réalisations et ses coordonnées. Les polices Fraunces et Inter sont auto-hébergées via les paquets Fontsource.

- [Dépôt GitHub](https://github.com/AndyRama/pk)
- [Aperçu Vercel déclaré pour le projet](https://pk-bay.vercel.app)

> **État du projet :** le formulaire est une interface sans envoi de demande ni téléversement de fichiers. Les images et les informations légales nécessitent encore des validations avant publication définitive. L’URL d’aperçu est déclarée pour le projet ; sa présence ne prouve ni son fonctionnement actuel ni une mise en production validée.

## Fonctionnalités présentes

- Accueil, présentation de l’atelier, méthode de travail, réalisations et page Contact.
- Six pages sur mesure : dressing, bibliothèque, bureau, rangement sous escalier, cuisine et rénovation de fenêtres bois avec double vitrage.
- Chaque page de savoir-faire comporte une introduction, une description détaillée, des points clés, des sous-sections, des visuels et légendes, une FAQ, un témoignage et des liens vers les autres services.
- Sept projets détaillés sur la page Réalisations, distincts de la sélection de cinq projets utilisée sur l’accueil.
- Vingt-huit réponses de FAQ restaurées : quatre questions générales sur la méthode et quatre pour chacun des six savoir-faire.
- Navigation responsive, menu mobile, appels à l’action, coordonnées, itinéraires et carte Google Maps intégrée sans clé API.
- Métadonnées globales et de pages, aperçu Open Graph et carte Twitter.
- Favicon PK noir et doré, icône PNG et icône Apple suivant les conventions de fichiers Next.js.
- Boutons et cartes avec le traitement `rounded-md` déjà présent dans les composants.

Les six pages sur mesure, les sept projets de Réalisations, la page Contact et les vingt-huit réponses de FAQ reprennent les textes restaurés du site d’origine. Les routes existantes `/sur-mesure/[slug]` sont conservées. Préserver ces descriptions complètes lors des prochaines reprises, sans les remplacer par des résumés.

Les avis, leurs attributions, la note et le nombre d’avis affichés sont enregistrés dans les sources, sans synchronisation automatique avec Google. Les pages légales précisent que les avis issus du site d’origine sont reformulés et ne constituent pas des citations exactes ; leur provenance, leur exactitude et les autorisations nécessaires restent à vérifier.

## Stack et prérequis

Versions résolues dans [package-lock.json](package-lock.json) :

- **Next.js 16.4.6**, avec App Router.
- **React et React DOM 19.3.1**.
- **TypeScript 7.0.2**.
- **Tailwind CSS 3.4.19**, PostCSS et Autoprefixer.
- **Fraunces Variable et Inter Variable 5.3.0**, importées depuis les paquets `@fontsource-variable` et servies localement par l’application.

Utiliser npm et une version de Node.js respectant la contrainte **`>=20.9.0`** de Next.js verrouillé ; privilégier une version LTS maintenue compatible. La version de `@types/node` n’est pas une contrainte de runtime. Le dépôt ne fournit ni `.nvmrc` ni version Node.js imposée dans le manifeste. Conserver le lockfile npm et utiliser `npm ci` pour une installation reproductible.

## Installation et développement

```bash
git clone https://github.com/AndyRama/pk.git
cd pk
npm ci
npm run dev
```

Le serveur de développement utilise `http://localhost:3000` par défaut. Aucune base de données, clé de messagerie ou configuration de stockage de fichiers n’est nécessaire au fonctionnement actuel : ces intégrations ne sont pas implémentées.

### Domaine et environnement

La variable **`NEXT_PUBLIC_SITE_URL`** est lue dans [app/layout.tsx](app/layout.tsx) pour définir `metadataBase`. Sans elle, la base des métadonnées reste `http://localhost:3000`.

En local, la définir si nécessaire dans un fichier `.env.local` non versionné. Sur l’hébergement cible, renseigner cette variable dans la configuration d’environnement avec l’origine HTTPS absolue réellement retenue pour le site, puis reconstruire et redéployer. Ne pas considérer automatiquement le domaine d’aperçu comme le domaine définitif.

Ce réglage permet notamment de résoudre les URLs relatives des métadonnées sociales ; il ne crée pas à lui seul de balise canonique. Le dépôt ne définit actuellement pas d’URL `alternates.canonical`, de sitemap ni de fichier robots dédié. Prévoir leur configuration et leur vérification dans une évolution distincte si nécessaire.

[next.config.ts](next.config.ts) contient une origine réseau autorisée pour le développement (`allowedDevOrigins`), sans effet de configuration du domaine de production. Les polices étant fournies par des paquets locaux, elles ne sont pas récupérées par `next/font/google` pendant le build.

## Tests et build

Commandes à exécuter depuis la racine, après installation des dépendances :

```bash
# Tests Node.js existants, dont rendus React côté serveur
node --test tests/*.test.cjs

# Construction du site pour la production
npm run build

# Démarrage du build précédemment généré
npm run start
```

Les scripts npm du [manifeste](package.json) sont `dev`, `build`, `start` et `lint`. Il n’existe pas de script `npm test`. Le script `lint` pointe vers `next lint`, commande non prise en charge par Next.js 16 : ne pas le considérer comme un contrôle utilisable en l’état. Sa correction nécessite une modification distincte du code ou de la configuration.

Les fichiers de [tests](tests) couvrent la restitution des contenus et FAQ, les pages légales et la confidentialité, les icônes ainsi que les arrondis des boutons et cartes. Plusieurs tests utilisent le compilateur SWC de Next.js et le rendu React côté serveur ; les fixtures de référence sont dans [tests/fixtures](tests/fixtures).

Ces commandes sont des instructions de maintenance, pas un compte rendu d’exécution : aucun test applicatif, build ou démarrage serveur n’a été réalisé pour cette réécriture documentaire. Un build réussi ne vaudrait ni validation juridique, ni preuve d’envoi du formulaire, ni recette du déploiement réel.

## Pages principales

- `/` : accueil et section de contact accessible par `/#contact`.
- `/notre-methode` : méthode de travail et FAQ générale.
- `/a-propos` : présentation de l’atelier.
- `/realisations` : sept projets détaillés.
- `/contact` : présentation du contact, coordonnées, carte et formulaire inactif.
- `/sur-mesure/dressing` : dressing sur mesure.
- `/sur-mesure/bibliotheque` : bibliothèque sur mesure.
- `/sur-mesure/bureau` : bureau sur mesure.
- `/sur-mesure/rangement-sous-escalier` : rangement sous escalier.
- `/sur-mesure/cuisine` : cuisine sur mesure.
- `/sur-mesure/fenetres-bois` : rénovation de fenêtres bois et double vitrage.
- `/mentions-legales` : mentions légales avec informations en attente de validation.
- `/politique-de-confidentialite` : politique décrivant les limites du formulaire et les échanges avec les services tiers.

Les six pages de savoir-faire sont générées à partir de la liste des services ; un slug inconnu aboutit à une page introuvable.

## Organisation et personnalisation

```text
app/                 Routes, métadonnées, styles globaux et icônes Next.js
  sur-mesure/[slug]/ Rendu partagé des six savoir-faire
components/          Navigation, formulaire, photos et sections réutilisables
lib/                 Coordonnées, contenus, services et validations légales
public/images/       Illustrations et logo source
 tests/              Tests Node.js et fixtures de référence
docs/                Éléments de validation juridique avant publication
```

### Où modifier quoi

- **Téléphone, adresse de l’atelier, horaires, note et liens Google, liste des services :** [lib/site.ts](lib/site.ts). Le lien `googleUrl`, initialement à renseigner, contient désormais une recherche Google Maps ; valider qu’elle mène au bon établissement. Vérifier aussi `phoneHref`, dont l’URI est actuellement masquée, indépendamment du numéro affiché.
- **Sélection de projets de l’accueil, sept réalisations détaillées, étapes, avis et FAQ générale :** [lib/content.ts](lib/content.ts).
- **Descriptions complètes des six savoir-faire, sous-sections, FAQ, témoignages et légendes :** [lib/serviceContent.ts](lib/serviceContent.ts).
- **Rendu des savoir-faire :** [app/sur-mesure/[slug]/page.tsx](app/sur-mesure/[slug]/page.tsx).
- **Header, footer, formulaire et sections partagées :** [components](components), notamment [ContactForm.tsx](components/ContactForm.tsx), [ContactSection.tsx](components/ContactSection.tsx) et [ui.tsx](components/ui.tsx).
- **Palette et typographie :** [tailwind.config.ts](tailwind.config.ts) ; styles globaux dans [app/globals.css](app/globals.css). Conserver le choix `rounded-md` des boutons et cartes sans modifier globalement les autres arrondis.
- **Documents légaux et points non confirmés :** [mentions légales](app/mentions-legales/page.tsx), [confidentialité](app/politique-de-confidentialite/page.tsx), [lib/legalContent.ts](lib/legalContent.ts) et [dossier de validation](docs/LEGAL-VALIDATION.md).

### Images et identité visuelle

Les images de [public/images](public/images) proviennent de rognages de captures et sont de basse définition. Les remplacer par les originaux Base44, en conservant les mêmes noms de fichiers pour ne pas casser les références, après vérification de leur provenance et des droits d’utilisation.

Le badge « Visuel d’ambiance » est hérité du site d’origine et activé par défaut par le composant `Photo`. La prop `badge={false}` sur `<Photo>` permet de le retirer ; ne le faire que lorsque la nature et la provenance du visuel le justifient. Une image illustrative ne prouve pas qu’un chantier a été réalisé par l’atelier. Le portrait de l’atelier possède également un emplacement « Photo à réaliser » à remplacer par un visuel validé.

Les fichiers [app/favicon.ico](app/favicon.ico), [app/icon.png](app/icon.png) et [app/apple-icon.png](app/apple-icon.png) sont détectés automatiquement par Next.js. Le favicon comporte les tailles 16, 32 et 48 px ; les PNG sont prévus en 192 px et 180 px. Le logo source reste dans [public/images/logo.png](public/images/logo.png).

## Formulaire : fonctionnement réel

[components/ContactForm.tsx](components/ContactForm.tsx) intercepte la soumission avec `preventDefault()` et ne déclenche aucun traitement d’envoi. Il affiche explicitement que les demandes ne sont pas transmises et invite à utiliser le téléphone indiqué sur la page.

- Les champs affichés sont le nom, le téléphone, l’e-mail, le type de projet, la pièce, le budget, le délai, la description du projet, les fichiers et une case relative à la politique de confidentialité.
- Les listes disposent d’options provisoires dans le composant. Les options de type, pièce, budget et délai restent à rapprocher de celles du site d’origine : leur restitution complète n’est pas acquise.
- Aucun route handler de contact, envoi Brevo/SMTP, enregistrement de demande ou stockage privé des fichiers n’est branché.
- Les photos et plans sélectionnés restent dans le navigateur : le formulaire ne téléverse et ne stocke aucun fichier côté serveur. Les anciennes mentions de stockage privé ont été remplacées par une information explicite sur cette limite.
- L’interface annonce cinq fichiers maximum et 8 Mo, avec JPG, PNG, WEBP et PDF. Ces limites ne sont pas contrôlées par une validation applicative ; le formulaire utilise aussi `noValidate`. Les attributs `required` et `accept` ne constituent donc pas une validation serveur.

L’évolution envisagée dans le code est l’ajout de react-hook-form et Zod, d’un route handler, d’un envoi Brevo/SMTP et d’un stockage privé des fichiers. Ce sont des travaux prévus, pas des dépendances ou des services déjà opérationnels. Avant activation, définir la validation des champs et pièces jointes, la protection anti-abus, la gestion des erreurs, les destinataires, la sécurité et les durées de conservation. Mettre ensuite les textes du formulaire et la politique de confidentialité en accord avec le traitement effectivement livré.

## Checklist avant publication

- [ ] Vérifier les coordonnées et horaires dans `lib/site.ts`, les liens téléphoniques actuellement masqués et la destination des liens Google.
- [ ] Définir le domaine retenu avec `NEXT_PUBLIC_SITE_URL`, reconstruire puis contrôler les URLs sociales ; traiter séparément les balises canoniques, le sitemap et les règles d’exploration souhaitées.
- [ ] Remplacer les images basse définition par des originaux autorisés, réaliser le portrait manquant et conserver une signalétique exacte des visuels d’ambiance.
- [ ] Faire valider les descriptions commerciales, les avis reformulés, leurs attributions, la note et le nombre d’avis, sans supposer d’autorisation de reproduction.
- [ ] Compléter et justifier l’e-mail, le capital social, la direction de publication, l’hébergeur effectif, l’assurance professionnelle et le médiateur. Distinguer l’adresse de l’atelier du siège social décrit dans les mentions légales.
- [ ] Faire vérifier les textes légaux structurés et adaptés au fonctionnement réel, ainsi que les points de [docs/LEGAL-VALIDATION.md](docs/LEGAL-VALIDATION.md). Leur présence ne vaut pas conformité juridique complète.
- [ ] Décider si le formulaire reste inactif ou activer un traitement serveur testé, sans promesse prématurée d’envoi ou de stockage privé.
- [ ] Évaluer les requêtes et éventuels cookies de Google Maps, les obligations de consentement et les traitements propres à l’hébergement réel.
- [ ] Exécuter les tests et le build, résoudre l’écart du script de lint dans un chantier distinct, puis contrôler les dépendances, les liens, les métadonnées et le rendu responsive sur le déploiement cible.

La carte est une iframe Google Maps sans clé, déjà signalée dans la politique de confidentialité. Elle peut établir des connexions tierces lors de son chargement, même différé. Les liens d’avis et d’itinéraires ouvrent également des services Google : un formulaire inactif ne signifie pas qu’aucune donnée technique n’est échangée avec un tiers.

## Droits et contributions

Le dépôt ne contient actuellement aucune licence générale de réutilisation. Cela ne constitue pas une autorisation de reprendre librement le code, les textes, la marque, les photographies ou les avis. Les dépendances, polices et autres ressources tierces restent soumises à leurs propres licences et conditions ; aucune politique de licence d’un autre projet n’est transférée ici.

La reprise du site Base44 et la présence d’assets dans le dépôt ne prouvent pas des droits de redistribution. Vérifier les titulaires, les licences et les autorisations applicables avant toute réutilisation ou publication.

Pour contribuer, travailler sur une branche, préserver les contenus substantiels et les routes existantes, effectuer les contrôles adaptés puis ouvrir une pull request. La relecture, la fusion et la mise en ligne restent des étapes distinctes.
