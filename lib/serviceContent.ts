import type { FaqItem } from "./content";
import type { services } from "./site";

export type ServiceSlug = (typeof services)[number]["slug"];
export type ServiceContent = {
  heading: string;
  eyebrow: string;
  intro: string;
  description: string;
  bullets: readonly string[];
  subsections: readonly { title: string; text: string }[];
  realizations: readonly { title: string; caption: string; image: string; alt: string }[];
  faqTitle: string;
  faqs: readonly FaqItem[];
  testimonial: { text: string; attribution: string };
  ctaTitle: string;
};

// Verbatim published copy recovered from the original six service pages.
// Original SEO routes map to the clone's existing /sur-mesure/[slug] URLs.
export const serviceContent: Record<ServiceSlug, ServiceContent> = {
  "dressing": {
    "heading": "Dressing sur mesure à Bordeaux",
    "eyebrow": "DRESSING SUR MESURE",
    "intro": "Un dressing qui rentre dans votre chambre, pas l'inverse. Nous dessinons chaque penderie, étagère et tiroir à partir de la pièce réelle, de vos vêtements et de vos habitudes.",
    "description": "Dans un appartement bordelais, la chambre fait souvent office de tout : lit, rangements, parfois bureau. Un dressing sur mesure permet de récupérer la hauteur, les renfoncements et les angles que les meubles standards laissent perdre. Le gain se joue au centimètre, et c'est exactement là que nous travaillons.",
    "bullets": [
      "Mesures sur place, y compris murs et angles irréguliers",
      "Répartition penderies, tiroirs et étagères selon vos usages",
      "Façades alignées, joues de finition qui reprennent le nu du mur",
      "Visuels 3D validés avant fabrication"
    ],
    "subsections": [
      {
        "title": "Ce qui se joue avant le premier coup de scie",
        "text": "Nous commençons par vider la question : combien de manteaux, de chaussures, de linge à plat ? Vient ensuite la pièce elle-même — la place de la porte, la fenêtre, le radiateur, la hauteur sous plafond. Le meuble est dessiné à partir de ces contraintes, jamais d'un module standard. Les plans vous sont envoyés par e-mail, avec les visuels 3D, jusqu'à ce que tout soit juste."
      },
      {
        "title": "Fabrication et pose",
        "text": "Le dressing est fabriqué à l'atelier puis posé sur place. Les ajustements se font à la pose : réglage des façades, alignement des joints, mise au nu des murs. Une fois parti, le meuble doit fermer sans forcer et sans jeu."
      }
    ],
    "realizations": [
      {
        "title": "Un dressing qui suit la pièce",
        "caption": "Penderies, étagères et tiroirs répartis selon les usages réels du client, dans une chambre où chaque centimètre compte.",
        "image": "/images/dressing.jpg",
        "alt": "Dressing sur mesure en bois clair avec portes à lattes"
      }
    ],
    "faqTitle": "Dressing sur mesure : vos questions",
    "faqs": [
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
    ],
    "testimonial": {
      "text": "« Un accompagnement de A à Z : première visite, prise de mesures, plans envoyés par e-mail, ajustements progressifs jusqu'à validation. Les délais annoncés ont été tenus et la pose s'est faite sans mauvaise surprise. »",
      "attribution": "PRÉNOM N. · AVIS GOOGLE · JUILLET 2026"
    },
    "ctaTitle": "Un projet de dressing sur mesure à Bordeaux ?"
  },
  "bibliotheque": {
    "heading": "Bibliothèque sur mesure à Bordeaux",
    "eyebrow": "BIBLIOTHÈQUE SUR MESURE",
    "intro": "Une bibliothèque n'est pas un meuble de plus : c'est un mur entier qui doit tenir, respirer et accueillir vos livres. Nous la concevons, la fabriquons et l'installons de bout en bout.",
    "description": "Une bibliothèque du commerce impose ses hauteurs d'étagères et ses longueurs. Résultat : des albums couchés, des rayonnages vides, des montants trop larges qui mangent la pièce. Sur mesure, ce sont vos formats qui commandent — et la bibliothèque peut intégrer les prises, un radiateur, un passage de porte ou une niche.",
    "bullets": [
      "Hauteurs d'étagères calculées selon vos ouvrages",
      "Intégration des prises, radiateurs et renfoncements",
      "Montants fins pour ne pas alourdir le séjour",
      "De la conception à l'installation"
    ],
    "subsections": [
      {
        "title": "Concevoir avec ce que vous avez déjà",
        "text": "Nous partons de votre bibliothèque actuelle : les formats, le poids, ce qui doit rester à portée de main et ce qui peut monter. Le dessin tient compte de la lumière, des circulations et du regard depuis l'entrée du séjour. Les visuels 3D permettent de valider les proportions avant de lancer l'atelier."
      },
      {
        "title": "Un meuble qui se pose, pas qui s'ajoute",
        "text": "À la pose, la bibliothèque est calée au nu des murs, avec des jeux maîtrisés. Les livres sont ressortis avant de partir : le meuble n'a d'intérêt que rempli."
      }
    ],
    "realizations": [
      {
        "title": "Une bibliothèque du sol au plafond",
        "caption": "De la conception à l'installation, une bibliothèque dessinée pour un séjour, avec les livres du client comme point de départ.",
        "image": "/images/bibliotheque.jpg",
        "alt": "Bibliothèque sur mesure du sol au plafond"
      }
    ],
    "faqTitle": "Bibliothèque sur mesure : vos questions",
    "faqs": [
      {
        "question": "Une bibliothèque sur mesure peut-elle monter jusqu'au plafond ?",
        "answer": "Oui, c'est souvent le cas dans les appartements bordelais : cela limite la poussière sur le dessus et gagne de la place. La hauteur exacte est relevée lors de la visite."
      },
      {
        "question": "Comment sont choisies les hauteurs d'étagères ?",
        "answer": "À partir de vos livres et objets. Nous relevons les formats dominants et prévoyons des rangées hautes pour les grands ouvrages, plus basses pour le format poche."
      },
      {
        "question": "Une bibliothèque sur mesure est-elle fixée au mur ?",
        "answer": "Le meuble est conçu pour être stable et solidaire du mur lorsque c'est nécessaire, notamment en grande hauteur. La fixation est prévue à l'étude, selon le support."
      },
      {
        "question": "Peut-on prévoir une partie fermée, pour le télétravail ou le rangement ?",
        "answer": "Oui. Une bibliothèque peut intégrer des caissons fermés, un plan de travail ou une niche technique sous forme de meuble mixte."
      }
    ],
    "testimonial": {
      "text": "« Une bibliothèque conçue et installée de bout en bout, avec beaucoup d'écoute sur ce que nous voulions y ranger. Nous étions recommandés par des amis, et nous recommanderons à notre tour. »",
      "attribution": "PRÉNOM N. · AVIS GOOGLE · MARS 2026"
    },
    "ctaTitle": "Un projet de bibliothèque sur mesure à Bordeaux ?"
  },
  "bureau": {
    "heading": "Bureau sur mesure à Bordeaux",
    "eyebrow": "BUREAU SUR MESURE",
    "intro": "Un poste de travail qui ne ressemble pas à un bureau de bureau. Dessiné pour la pièce, à la bonne hauteur, avec les rangements et les câbles pensés dès le départ.",
    "description": "Beaucoup de nos clients arrivent avec la même phrase : « on a cherché, ça n'existe pas ». Une pièce en coin, un pan de mur de 137 cm, une fenêtre à ne pas bloquer. Le sur-mesure répond exactement à ce cas de figure : le meuble est dessiné pour l'espace disponible, pas pour une longueur catalogue.",
    "bullets": [
      "Solutions pour les pièces biscornues et les angles",
      "Hauteur de travail adaptée à votre morphologie et à votre chaise",
      "Passage des câbles, éclairage et rangements intégrés",
      "Modélisation 3D avant fabrication"
    ],
    "subsections": [
      {
        "title": "Un projet qui se dessine en plusieurs allers-retours",
        "text": "Sur un bureau, les cotes se discutent : profondeur du plan, hauteur de l'écran, place des jambes, ouverture des tiroirs. Nous vous envoyons les plans et les visuels 3D, vous nous dites ce qui ne va pas, nous ajustons. C'est ce dialogue par e-mail qui permet d'arriver à un meuble juste, dans une pièce qui ne l'était pas."
      },
      {
        "title": "Travailler chez soi sans envahir la pièce",
        "text": "Un bureau ouvert dans un séjour doit rester discret. Nous travaillons les proportions et les fermetures pour qu'une fois la journée terminée, le meuble redevienne un simple meuble."
      }
    ],
    "realizations": [
      {
        "title": "Un bureau dans une pièce en coin",
        "caption": "Une pièce biscornue, sans un seul angle droit. Le meuble a été dessiné sur mesure pour épouser la forme exacte du mur, avec les rangements là où ils étaient possibles.",
        "image": "/images/bureau.jpg",
        "alt": "Bureau sur mesure dans une pièce de forme biscornue"
      },
      {
        "title": "Un espace de télétravail taillé pour l'appartement",
        "caption": "Un poste de travail fixe, mais qui ne mange pas la pièce : plan sur mesure, rangements fermés, passage des câbles prévu dès le dessin.",
        "image": "/images/arche-paysage.jpg",
        "alt": "Bibliothèque et bureau sur mesure en chêne clair dans un appartement bordelais"
      }
    ],
    "faqTitle": "Bureau sur mesure : vos questions",
    "faqs": [
      {
        "question": "Peut-on faire un bureau dans une pièce aux murs non parallèles ?",
        "answer": "Oui. C'est un cas que nous avons déjà traité : le plan est découpé selon les angles réels relevés sur place, ce qu'aucun meuble standard ne permet."
      },
      {
        "question": "Quelle hauteur pour un bureau sur mesure ?",
        "answer": "La hauteur est déterminée avec vous, en fonction de votre taille et du siège utilisé, pour un vrai confort de travail sur la durée."
      },
      {
        "question": "Peut-on intégrer les câbles et l'éclairage ?",
        "answer": "Oui : passages de câbles, prises accessibles, éclairage sous étagère. Ces points sont décidés au moment du dessin, pas après la pose."
      },
      {
        "question": "Combien coûte un bureau sur mesure ?",
        "answer": "Chaque bureau fait l'objet d'un devis détaillé, après la visite et la validation des plans. Il n'y a pas de tarif de série : le prix dépend des dimensions, des rangements et des finitions."
      }
    ],
    "testimonial": {
      "text": "« Nous voulions un bureau dans une pièce en coin, avec des murs qui ne se croisent pas droit. Personne ne proposait quelque chose d'adapté. PK Agencement a dessiné le meuble pour la pièce exactement, avec des visuels 3D en amont. Le résultat est original et parfaitement ajusté. »",
      "attribution": "PRÉNOM N. · AVIS GOOGLE · SEPTEMBRE 2026"
    },
    "ctaTitle": "Un projet de bureau sur mesure à Bordeaux ?"
  },
  "rangement-sous-escalier": {
    "heading": "Rangement sous escalier sur mesure, à Bordeaux",
    "eyebrow": "RANGEMENT SOUS ESCALIER",
    "intro": "Sous un escalier, il y a souvent plusieurs mètres cubes qui ne servent à rien. Nous les transformons en rangement fermé, avec une porte qui suit la pente et une finition qui ne crie pas.",
    "description": "L'espace sous escalier cumule les difficultés : pente, hauteur qui varie, mur parfois de guingois. C'est le type de projet où le sur-mesure est indispensable — et où la porte cintrée devient la pièce maîtresse, parce qu'elle doit suivre la marche tout en restant parfaitement ajustée.",
    "bullets": [
      "Porte cintrée qui suit la pente de l'escalier",
      "Rangements fermés ou ouverts, tiroirs et penderie",
      "Ajustements fins à la pose",
      "Finitions cohérentes avec le reste de la pièce"
    ],
    "subsections": [
      {
        "title": "Le cintrage, un travail d'atelier",
        "text": "Une porte cintrée ne se découpe pas sur place : elle se prépare à l'atelier, à partir du relevé de la courbe de l'escalier, puis s'ajuste à la pose. Le jeu entre la porte et le limon doit rester régulier sur toute la longueur, sinon le meuble paraît faux."
      },
      {
        "title": "Ce qu'on y range vraiment",
        "text": "Avant de dessiner, nous demandons ce qui doit y entrer : chaussures, manteaux, aspirateur, valises. C'est ce qui détermine les hauteurs et les séparations — et évite un rangement qui finit vide ou encombré."
      }
    ],
    "realizations": [
      {
        "title": "Un rangement sous escalier, porte cintrée",
        "caption": "L'espace perdu sous l'escalier devient un rangement fermé, avec une porte cintrée qui suit la pente de la marche.",
        "image": "/images/escalier.jpg",
        "alt": "Rangement sous escalier avec porte cintrée"
      }
    ],
    "faqTitle": "Rangement sous escalier : vos questions",
    "faqs": [
      {
        "question": "Peut-on fermer un escalier déjà existant ?",
        "answer": "Oui. Nous relevons la pente et l'espace disponible, puis dessinons un meuble fermé qui vient s'encastrer sous l'escalier, sans le démonter."
      },
      {
        "question": "La porte cintrée est-elle fragile ?",
        "answer": "Non, à condition d'être correctement réalisée. Le cintrage est préparé à l'atelier puis ajusté à la pose pour répartir les contraintes."
      },
      {
        "question": "Le rangement peut-il servir de penderie d'entrée ?",
        "answer": "Oui, c'est l'un des usages les plus fréquents : une partie penderie, une partie chaussures, une partie rangement fermé pour l'entretien."
      },
      {
        "question": "Combien d'espace faut-il sous l'escalier ?",
        "answer": "Cela varie selon la configuration. Une visite sur place permet de définir ce qui est réellement exploitable et ce qui restera inaccessibile."
      }
    ],
    "testimonial": {
      "text": "« Le rangement sous escalier avec sa porte cintrée est une réussite. Les finitions sont soignées et l'espace perdu est devenu le rangement le plus utile de la maison. »",
      "attribution": "PRÉNOM N. · AVIS GOOGLE · MAI 2026"
    },
    "ctaTitle": "Un projet de rangement sous escalier à Bordeaux ?"
  },
  "cuisine": {
    "heading": "Cuisine sur mesure à Bordeaux",
    "eyebrow": "CUISINE SUR MESURE",
    "intro": "Une cuisine se dessine autour de trois choses : qui cuisine, comment on circule, et ce que les murs permettent. Le reste — les façades, le plan, les rangements — en découle.",
    "description": "Les cuisines en kit imposent des modules de 60 cm. Sur un pan de mur de 217 cm, cela laisse un vide qu'on cache avec une plinthe. Une cuisine sur mesure supprime ces compromis : chaque caisson est calé sur les murs existants, et le plan de travail reste continu.",
    "bullets": [
      "Caissons calés sur les murs réels, sans vide masqué",
      "Circulation et zones de travail définies avec vous",
      "Façades et quincaillerie choisies à l'étude",
      "Plan de travail continu et raccords nets"
    ],
    "subsections": [
      {
        "title": "Le dessin avant les matériaux",
        "text": "Nous commençons par le plan de circulation : position de l'évier, de la plaque, des zones de préparation, des rangements lourds. Les visuels 3D permettent ensuite de valider l'ensemble, puis de choisir les façades et les finitions."
      },
      {
        "title": "Une cuisine fabriquée pour la pièce",
        "text": "Les faux aplombs, les murs qui ne se croisent pas droit, les passages de gaines : tout est repris dans le meuble plutôt que rhabillé après coup. C'est la partie invisible, et c'est celle qui fait la différence dans le temps."
      }
    ],
    "realizations": [
      {
        "title": "Une cuisine dessinée pour la pièce",
        "caption": "Des façades sans poignées, un plan de travail continu et des rangements pensés pour la circulation réelle de la cuisine.",
        "image": "/images/cuisine.jpg",
        "alt": "Cuisine sur mesure en bois clair"
      }
    ],
    "faqTitle": "Cuisine sur mesure : vos questions",
    "faqs": [
      {
        "question": "Réalisez-vous une cuisine complète ou seulement des éléments ?",
        "answer": "Les deux. Nous pouvons réaliser la cuisine dans son ensemble ou remplacer un élément précis, par exemple un plan de travail ou un caisson qui ne correspond pas aux dimensions de la pièce."
      },
      {
        "question": "Peut-on conserver les appareils électroménagers existants ?",
        "answer": "Oui, à condition de disposer de leurs dimensions et des notices d'encastrement. Cela se vérifie au moment de l'étude."
      },
      {
        "question": "Qui pose la plomberie et l'électricité ?",
        "answer": "Les raccordements techniques sont réalisés par des professionnels qualifiés. Nous coordonnons leur passage avec la pose de la cuisine."
      },
      {
        "question": "Combien de temps pour une cuisine sur mesure ?",
        "answer": "Le délai est indiqué dans le devis, après validation des plans. Il dépend des finitions choisies et de la charge de l'atelier."
      }
    ],
    "testimonial": {
      "text": "« Deux jeunes artisans attentifs, serviables et de bon conseil. Ils ont même réparé une table spontanément, sans rien demander en retour. La qualité environnementale des matériaux et l'organisation du chantier nous ont également marqués. »",
      "attribution": "PRÉNOM N. · AVIS GOOGLE · AVRIL 2026"
    },
    "ctaTitle": "Un projet de cuisine sur mesure à Bordeaux ?"
  },
  "fenetres-bois": {
    "heading": "Rénovation de fenêtres bois et double vitrage, à Bordeaux",
    "eyebrow": "RÉNOVATION DE FENÊTRES BOIS",
    "intro": "Plutôt que de déposer des fenêtres anciennes en bon état, nous les restaurons et leur ajoutons un double vitrage. Le cachet du bâti reste, le confort progresse, la facture baisse.",
    "description": "Dans l'ancien bordelais, les fenêtres bois participent à l'identité de l'appartement. Les remplacer par de l'alu ou du PVC change le caractère de la façade et coûte cher. La restauration avec ajout de double vitrage est une troisième voie, plus économique et plus respectueuse de l'existant.",
    "bullets": [
      "Diagnostic de l'état réel des menuiseries",
      "Remise en état du bois et des ouvrants",
      "Ajout d'un double vitrage sur le châssis existant",
      "Réglages, joints et quincaillerie"
    ],
    "subsections": [
      {
        "title": "Pourquoi garder ses fenêtres",
        "text": "Une fenêtre bois d'origine qui a été entretenue peut largement dépasser le siècle. Ce qui la met en difficulté, c'est le simple vitrage et des joints fatigués — deux points qui se traitent sans tout casser. La restauration conserve la finesse des profils, l'aspect extérieur et le cachet intérieur."
      },
      {
        "title": "Ce que change le double vitrage",
        "text": "Le double vitrage améliore le confort thermique et acoustique, et limite la condensation en hiver. Sur des fenêtres conservées, il apporte l'essentiel du gain de confort pour un budget inférieur à celui d'un remplacement complet."
      }
    ],
    "realizations": [
      {
        "title": "Fenêtres bois restaurées, double vitrage ajouté",
        "caption": "Plutôt que de remplacer les fenêtres, elles ont été restaurées et équipées d'un double vitrage : le cachet d'origine, le confort en plus.",
        "image": "/images/fenetres.jpg",
        "alt": "Fenêtre bois restaurée avec double vitrage"
      }
    ],
    "faqTitle": "Rénovation de fenêtres bois : vos questions",
    "faqs": [
      {
        "question": "Peut-on ajouter un double vitrage sur n'importe quelle fenêtre bois ?",
        "answer": "Non, cela dépend de l'état et de la profondeur de la feuillure existante. Un diagnostic sur place permet de dire si la restauration est pertinente ou si le remplacement s'impose."
      },
      {
        "question": "Est-ce vraiment moins cher qu'un remplacement ?",
        "answer": "Dans la plupart des cas, oui : on conserve le bâti et les ouvrants existants. Le devis permet de comparer précisément."
      },
      {
        "question": "Les fenêtres gardent-elles leur aspect d'origine ?",
        "answer": "Oui : c'est justement l'intérêt de la restauration. Les profils, les moulures et les proportions restent ceux d'origine."
      },
      {
        "question": "Intervenez-vous sur des fenêtres très abîmées ?",
        "answer": "Cela s'évalue au cas par cas. Lorsque le bois est trop atteint, nous vous le disons clairement plutôt que de restaurer à perte."
      }
    ],
    "testimonial": {
      "text": "« Nous avons fait restaurer nos fenêtres en bois avec ajout d'un double vitrage. C'était exactement ce que nous cherchions : garder nos fenêtres d'origine plutôt que de les remplacer, et faire des économies. Le cachet est resté, le confort est là. »",
      "attribution": "PRÉNOM N. · AVIS GOOGLE · JUIN 2026"
    },
    "ctaTitle": "Un projet de rénovation de fenêtres bois à Bordeaux ?"
  }
};
