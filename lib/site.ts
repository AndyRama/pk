export const site = {
  name: "PK Agencement",
  tagline: "Menuisier agenceur à Bordeaux",
  phone: "07 66 46 83 45",
  phoneHref: "tel:+33766468345",
  address: ["44 Rue du Faubourg des Arts", "33300 Bordeaux"],
  rating: "5,0",
  reviewCount: 23,
  googleUrl: "https://www.google.com/maps/search/?api=1&query=PK%20Agencement%20Bordeaux",
  hours: [
    { day: "Lundi", value: "À partir de 8h" },
    { day: "Mardi – Vendredi", value: "Horaires à confirmer" },
    { day: "Samedi", value: "Horaires à confirmer" },
    { day: "Dimanche", value: "Fermé" },
  ],
} as const;

const q = encodeURIComponent("44 Rue du Faubourg des Arts 33300 Bordeaux");
export const mapsEmbedUrl = `https://www.google.com/maps?q=${q}&output=embed`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${q}`;

export const services = [
  { slug: "dressing", label: "Dressing sur mesure", short: "Dressing", image: "/images/dressing.jpg" },
  { slug: "bibliotheque", label: "Bibliothèque sur mesure", short: "Bibliothèque", image: "/images/bibliotheque.jpg" },
  { slug: "bureau", label: "Bureau sur mesure", short: "Bureau", image: "/images/bureau.jpg" },
  { slug: "rangement-sous-escalier", label: "Rangement sous escalier", short: "Rangement sous escalier", image: "/images/escalier.jpg" },
  { slug: "cuisine", label: "Cuisine sur mesure", short: "Cuisine", image: "/images/cuisine.jpg" },
  { slug: "fenetres-bois", label: "Fenêtres bois & double vitrage", short: "Rénovation de fenêtres bois", image: "/images/fenetres.jpg" },
] as const;

export const mainNav = [
  { label: "Réalisations", href: "/realisations" },
  { label: "Notre méthode", href: "/notre-methode" },
  { label: "À propos", href: "/a-propos" },
] as const;
