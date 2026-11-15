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

export type FaqItem = { question: string; answer: string };

export const faqGeneral: readonly FaqItem[] = [
  {
    "question": "Combien coûte un agencement sur mesure à Bordeaux ?",
    "answer": "Il n'y a pas de tarif de série : chaque projet reçoit un devis détaillé après la visite et la validation des plans. Le budget dépend des dimensions, des rangements, des finitions et des contraintes de la pièce."
  },
  {
    "question": "Faut-il avoir des plans ou des idées précises ?",
    "answer": "Non. Une photo de la pièce, les dimensions approximatives et l'usage souhaité suffisent pour démarrer. Le dessin vient ensuite, avec vous."
  },
  {
    "question": "Les visuels 3D sont-ils inclus ?",
    "answer": "Oui, la conception comprend des plans et des visuels 3D du meuble dans la pièce, ajustés par e-mail jusqu'à validation avant fabrication."
  },
  {
    "question": "Intervenez-vous en dehors de Bordeaux ?",
    "answer": "Nous travaillons à Bordeaux et dans la métropole. Pour une adresse plus éloignée, contactez-nous pour en discuter."
  }
];

export const faqDressing: readonly FaqItem[] = [
  {
    "question": "Faut-il refaire toute la chambre pour installer un dressing ?",
    "answer": "Non. Dans la plupart des cas, le dressing se pose dans la pièce existante, sans travaux lourds. Nous vérifions les murs et les sols lors de la visite pour anticiper les reprises nécessaires."
  },
  {
    "question": "Combien de temps prend un dressing sur mesure ?",
    "answer": "Le délai dépend de la complexité et du planning de l'atelier. Il est précisé dans le devis, à la validation des plans. Nous tenons les délais annoncés : c'est l'un des points les plus souvent salués par nos clients."
  },
  {
    "question": "Peut-on intégrer un dressing dans un renfoncement ou sous une pente ?",
    "answer": "Oui, c'est même l'un des intérêts du sur-mesure : exploiter une niche, un recoin ou une hauteur de plafond irrégulière. Le meuble est dessiné pour la forme exacte de l'espace."
  },
  {
    "question": "Travaillez-vous en dehors de Bordeaux ?",
    "answer": "Nous intervenons à Bordeaux et dans la métropole. Pour une adresse plus éloignée, contactez-nous : nous étudions au cas par cas."
  }
];

export type RealizationProject = {
  slug: string; category: string; title: string; image: string; alt: string; href: string;
  description: string; detail: string; tags: readonly string[];
};

// Full project stories from the original /realisations page.
// The homepage intentionally keeps its original five compact cards above.
export const realizationProjects: readonly RealizationProject[] = [
  {
    "slug": "bureau",
    "category": "Bureau & télétravail",
    "title": "Un bureau dans une pièce en coin",
    "image": "/images/bureau.jpg",
    "alt": "Bureau sur mesure dans une pièce de forme biscornue",
    "href": "/sur-mesure/bureau",
    "description": "Une pièce biscornue, sans un seul angle droit. Le meuble a été dessiné sur mesure pour épouser la forme exacte du mur, avec les rangements là où ils étaient possibles.",
    "detail": "Ce projet a demandé plusieurs allers-retours de conception : recherche d'un meuble équivalent en magasin, sans succès, puis modélisation 3D pour valider chaque centimètre avant la fabrication.",
    "tags": [
      "Pièce atypique",
      "Conception 3D"
    ]
  },
  {
    "slug": "teletravail",
    "category": "Bureau & télétravail",
    "title": "Un espace de télétravail taillé pour l'appartement",
    "image": "/images/arche-paysage.jpg",
    "alt": "Bibliothèque et bureau sur mesure en chêne clair dans un appartement bordelais",
    "href": "/sur-mesure/bureau",
    "description": "Un poste de travail fixe, mais qui ne mange pas la pièce : plan sur mesure, rangements fermés, passage des câbles prévu dès le dessin.",
    "detail": "Les plans et les visuels 3D ont été ajustés progressivement par e-mail jusqu'à validation, avant la prise de mesures définitive sur place.",
    "tags": [
      "Sur mesure",
      "Visuels 3D"
    ]
  },
  {
    "slug": "dressing",
    "category": "Dressing & placards",
    "title": "Un dressing qui suit la pièce",
    "image": "/images/dressing.jpg",
    "alt": "Dressing sur mesure en bois clair avec portes à lattes",
    "href": "/sur-mesure/dressing",
    "description": "Penderies, étagères et tiroirs répartis selon les usages réels du client, dans une chambre où chaque centimètre compte.",
    "detail": "Le dressing habille toute la hauteur, avec des façades alignées au millimètre et des joues de finition qui reprennent le nu du mur.",
    "tags": [
      "Sur mesure",
      "Finitions"
    ]
  },
  {
    "slug": "bibliotheque",
    "category": "Bibliothèque & rangements",
    "title": "Une bibliothèque du sol au plafond",
    "image": "/images/bibliotheque.jpg",
    "alt": "Bibliothèque sur mesure du sol au plafond",
    "href": "/sur-mesure/bibliotheque",
    "description": "De la conception à l'installation, une bibliothèque dessinée pour un séjour, avec les livres du client comme point de départ.",
    "detail": "Hauteurs d'étagères calculées au format des ouvrages, montants fins pour ne pas alourdir la pièce, intégration discrète des prises.",
    "tags": [
      "Conception",
      "Pose"
    ]
  },
  {
    "slug": "escalier",
    "category": "Rangements",
    "title": "Un rangement sous escalier, porte cintrée",
    "image": "/images/escalier.jpg",
    "alt": "Rangement sous escalier avec porte cintrée",
    "href": "/sur-mesure/rangement-sous-escalier",
    "description": "L'espace perdu sous l'escalier devient un rangement fermé, avec une porte cintrée qui suit la pente de la marche.",
    "detail": "La porte a été cintrée en atelier pour suivre exactement la courbe de l'escalier, puis ajustée sur place à la pose.",
    "tags": [
      "Ajustement sur place",
      "Pièce atypique"
    ]
  },
  {
    "slug": "cuisine",
    "category": "Cuisine",
    "title": "Une cuisine dessinée pour la pièce",
    "image": "/images/cuisine.jpg",
    "alt": "Cuisine sur mesure en bois clair",
    "href": "/sur-mesure/cuisine",
    "description": "Des façades sans poignées, un plan de travail continu et des rangements pensés pour la circulation réelle de la cuisine.",
    "detail": "Chaque élément a été calé sur les murs existants pour éviter les faux aplombs et gagner les centimètres que les meubles standard laissent perdre.",
    "tags": [
      "Sur mesure",
      "Sur place"
    ]
  },
  {
    "slug": "fenetres",
    "category": "Rénovation",
    "title": "Fenêtres bois restaurées, double vitrage ajouté",
    "image": "/images/fenetres.jpg",
    "alt": "Fenêtre bois restaurée avec double vitrage",
    "href": "/sur-mesure/fenetres-bois",
    "description": "Plutôt que de remplacer les fenêtres, elles ont été restaurées et équipées d'un double vitrage : le cachet d'origine, le confort en plus.",
    "detail": "Une alternative à la fenêtre neuve, avec les économies réalisées sur le remplacement et l'isolation d'origine conservée dans le bâti ancien.",
    "tags": [
      "Rénovation",
      "Isolation"
    ]
  }
];
