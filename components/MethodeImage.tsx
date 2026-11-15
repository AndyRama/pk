import { Container, Eyebrow, Lead, Photo, SectionTitle } from "./ui";

function Drawing() {
  return (
    <svg viewBox="55 30 410 225" role="img" aria-label="Dessin d'atelier : élévation d'une bibliothèque, 2 480 mm de large" className="h-full w-full">
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M10 0H0V10" fill="none" stroke="#E4DFD6" strokeWidth="0.5" /></pattern>
      </defs>
      <rect x="70" y="42" width="380" height="196" fill="url(#grid)" />
      <text x="100" y="52" fontSize="6.5" letterSpacing="0.6" fill="#8E8A84">BIBLIOTHÈQUE — ÉLÉVATION</text>
      <g fill="none" stroke="#3A3834" strokeWidth="1.3">
        <rect x="100" y="60" width="320" height="162" />
        <path d="M207 60v162M313 60v162M100 114h320M100 168h320" />
      </g>
      <path d="M100 236h320M100 232v8M420 232v8" stroke="#8E8A84" strokeWidth="0.8" />
      <text x="260" y="250" fontSize="7" textAnchor="middle" fill="#6B6862">2 480 mm</text>
      <text x="436" y="141" fontSize="7" fill="#6B6862" transform="rotate(90 436 141)" textAnchor="middle">H 2 400</text>
    </svg>
  );
}

export function MethodeImage() {
  return (
    <section className="bg-sand py-20 md:py-24">
      <Container>
        <Eyebrow>La méthode, en une image</Eyebrow>
        <SectionTitle className="mt-5">Du dessin d'atelier à la pièce finie.</SectionTitle>
        <Lead className="mt-5 max-w-[34rem] !text-[16px]">
          Chaque projet est dessiné avant d'être fabriqué : plans cotés, visuels 3D, ajustements successifs. Vous validez le meuble à l'écran avant qu'il ne soit assemblé à l'atelier.
        </Lead>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <figure>
            <div className="rounded-md aspect-[4/3] border border-line bg-cream p-4"><Drawing /></div>
            <figcaption className="mt-3 flex justify-between text-[11px] text-body"><span className="text-[9px] font-medium uppercase tracking-[0.2em] text-gold">01 — Le projet</span><span>Dessin d'atelier · vue de face</span></figcaption>
          </figure>
          <figure>
            <Photo src="/images/arche-paysage.jpg" alt="Bibliothèque en chêne avec niche cintrée et bureau, parquet en point de Hongrie" sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[4/3]" />
            <figcaption className="mt-3 flex justify-between text-[11px] text-body"><span className="text-[9px] font-medium uppercase tracking-[0.2em] text-gold">02 — La réalisation</span><span>Pose terminée, Bordeaux</span></figcaption>
          </figure>
        </div>
        <p className="mt-6 max-w-[34rem] text-[11px] leading-relaxed text-muted">Emplacement prévu pour le couple rendu 3D / photo finale : mêmes cadrage et angle de prise de vue, envoyés par Kevin et Pauline avec l'accord du client.</p>
      </Container>
    </section>
  );
}
