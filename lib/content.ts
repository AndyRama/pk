export const projects = [
  { slug: "bureau", category: "Bureau & télétravail", title: "Un bureau dans une pièce en coin", image: "/images/bureau.jpg", alt: "Bureau et étagères en chêne sur mesure, dans un angle de pièce", href: "/sur-mesure/bureau" },
  { slug: "dressing", category: "Dressing & placards", title: "Un dressing qui suit la pièce", image: "/images/dressing.jpg", alt: "Dressing en chêne avec façades à tasseaux sous un plan incliné", href: "/sur-mesure/dressing" },
  { slug: "bibliotheque", category: "Bibliothèque & rangements", title: "Une bibliothèque du sol au plafond", image: "/images/bibliotheque.jpg", alt: "Bibliothèque en chêne du sol au plafond dans un salon haussmannien", href: "/sur-mesure/bibliotheque" },
  { slug: "escalier", category: "Rangements", title: "Un rangement sous escalier, porte cintrée", image: "/images/escalier.jpg", alt: "Rangement sous escalier avec porte cintrée en chêne", href: "/sur-mesure/rangement-sous-escalier" },
  { slug: "cuisine", category: "Cuisine", title: "Une cuisine dessinée pour la pièce", image: "/images/cuisine.jpg", alt: "Cuisine en chêne clair avec plan de travail en pierre", href: "/sur-mesure/cuisine" },
] as const;

export const steps = [
  { title: "Premier échange", text: "Un appel ou un message, avec les photos de la pièce si vous en avez. On cadre le projet, la pièce concernée et ce que vous voulez régler." },
  { title: "Visite et prises de mesures", text: "Passage sur place à Bordeaux et alentours : mesures réelles, murs, angles, arrivées, contraintes d'accès. C'est là que se jouent les bons ajustements." },
  { title: "Conception et visuels 3D", text: "Plans et visuels 3D du meuble dans la pièce, avec les matériaux et les proportions. Vous visualisez le projet avant qu'il ne soit construit." },
  { title: "Ajustements", text: "Les plans évoluent avec vous, par e-mail, jusqu'à validation définitive. Rien ne part en fabrication sans votre accord." },
  { title: "Fabrication à l'atelier", text: "Le meuble est fabriqué dans notre atelier, rue du Faubourg des Arts, avec le soin apporté aux assemblages et aux finitions." },
  { title: "Pose et finitions", text: "Installation sur place, réglages, ajustements au millimètre et nettoyage du chantier. On ne part pas tant que tout ne ferme pas parfaitement." },
];

export const reviews = [
  { text: "Nous voulions un bureau dans une pièce en coin, avec des murs qui ne se croisent pas droit. Personne ne proposait quelque chose d'adapté. PK Agencement a dessiné le meuble pour la pièce exactement, avec des visuels 3D en amont. Le résultat est original et parfaitement ajusté.", date: "Septembre 2026", reply: "Merci beaucoup ! Cette pièce nous a donné du fil à retordre, et c'est ce qui rend le résultat satisfaisant." },
  { text: "Un accompagnement de A à Z : première visite, prise de mesures, plans envoyés par e-mail, ajustements progressifs jusqu'à validation. Les délais annoncés ont été tenus et la pose s'est faite sans mauvaise surprise.", date: "Juillet 2026", reply: "Merci pour votre confiance tout au long du projet, et pour la clarté de vos retours à chaque étape." },
  { text: "Nous avons fait restaurer nos fenêtres en bois avec ajout d'un double vitrage. C'était exactement ce que nous cherchions : garder nos fenêtres d'origine plutôt que de les remplacer, et faire des économies. Le cachet est resté, le confort est là.", date: "Juin 2026", reply: "Ravie que vous ayez gardé vos fenêtres d'origine : c'est souvent la meilleure décision sur le bâti ancien." },
  { text: "Le rangement sous escalier avec sa porte cintrée est une réussite. Les finitions sont soignées et l'espace perdu est devenu le rangement le plus utile de la maison.", date: "Mai 2026", reply: "Merci ! La porte cintrée a demandé quelques ajustements à la pose, mais le rendu valait le travail." },
  { text: "Deux jeunes artisans attentifs, serviables et de bon conseil. Ils ont même réparé une table spontanément, sans rien demander en retour. La qualité environnementale des matériaux et l'organisation du chantier nous ont également marqués.", date: "Avril 2026", reply: "C'est normal, la table n'avait besoin que de quelques minutes. Merci pour ce retour !" },
  { text: "Une bibliothèque conçue et installée de bout en bout, avec beaucoup d'écoute sur ce que nous voulions y ranger. Nous étions recommandés par des amis, et nous recommanderons à notre tour.", date: "Mars 2026", reply: "Merci à vos amis, et merci à vous pour ce projet de bibliothèque." },
];

// Les réponses des FAQ n'étaient pas visibles sur les captures (accordéons fermés) : à reprendre du site d'origine.
export const faqGeneral = [
  "Combien coûte un agencement sur mesure à Bordeaux ?",
  "Faut-il avoir des plans ou des idées précises ?",
  "Les visuels 3D sont-ils inclus ?",
  "Intervenez-vous en dehors de Bordeaux ?",
];
export const faqDressing = [
  "Faut-il refaire toute la chambre pour installer un dressing ?",
  "Combien de temps prend un dressing sur mesure ?",
  "Peut-on intégrer un dressing dans un renfoncement ou sous une pente ?",
  "Travaillez-vous en dehors de Bordeaux ?",
];
export const faqAnswerPlaceholder = "[Réponse à compléter]";
