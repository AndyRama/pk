import Link from "next/link";
import { Button, Container, Eyebrow, Lead, Photo, PhotoPlaceholder, PhoneIcon, SectionTitle, Stars } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";
import { MethodeImage } from "@/components/MethodeImage";
import { StepsGrid } from "@/components/Steps";
import { Reviews } from "@/components/Reviews";
import { ContactSection } from "@/components/ContactSection";
import { projects } from "@/lib/content";
import { site } from "@/lib/site";

const renovation = [
  { title: "On garde le bois d'origine", text: "Le cachet du bâti ancien reste intact, plutôt que remplacé par une menuiserie neuve.", icon: <path d="M3 13c0-6 4-9 10-10 0 6-3 10-9 10m0 0 5-5" /> },
  { title: "Double vitrage ajouté", text: "Le confort thermique et acoustique progresse, sans déposer les fenêtres existantes.", icon: <path d="M3 3h10v10H3zM6 3v10M10 3v10" /> },
  { title: "Moins cher qu'un remplacement", text: "Restaurer coûte généralement moins qu'une fenêtre neuve, à qualité équivalente.", icon: <path d="M11 4.5A4 4 0 1 0 11 11.5M3 6.5h6M3 9.5h6" /> },
];

const about = [
  { title: "Un duo, deux paires de mains", text: "Kevin et Pauline suivent chaque projet ensemble : la conception, les mesures, l'atelier et la pose. Vous parlez toujours aux mêmes personnes." },
  { title: "Le sur-mesure comme point de départ", text: "Un meuble qui rentre dans une pièce biscornue ne s'achète pas en magasin. Nous partons de vos murs, de vos usages et de vos contraintes." },
  { title: "Le chantier propre", text: "Protection des sols, évacuation des chutes, nettoyage en fin de journée. L'organisation du chantier fait partie du travail." },
];

export default function Home() {
  const [bureau, dressing, biblio, escalier, cuisine] = projects;
  return (
    <>
      {/* Hero */}
      <section className="py-12 md:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1px_1fr] lg:gap-12">
          <div className="max-w-[32rem]">
            <Eyebrow>Menuisier agenceur — Bordeaux</Eyebrow>
            <h1 className="mt-6 max-w-[6.6em] text-[clamp(2.6rem,5.2vw,4.1rem)] leading-[1.02] tracking-[-0.025em]">
              Le sur-mesure pensé pour <br/> <em className="text-gold">votre</em> espace.
            </h1>
            <Lead className="mt-6">
              Dressings, bibliothèques, bureaux, rangements sous escalier. Kevin et Pauline dessinent, fabriquent et posent chaque meuble à la mesure de la pièce — de la première visite à la dernière vis.
            </Lead>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/#contact">Parlez-nous de votre projet <span aria-hidden>→</span></Button>
              <Button href={site.phoneHref} variant="outline"><PhoneIcon /> {site.phone}</Button>
            </div>
            <p className="mt-6 flex items-center gap-2 text-[12px] text-body">
              <Stars className="text-[11px]" /> <span><strong className="font-medium text-ink">{site.rating}/5</strong> — {site.reviewCount} avis Google</span>
            </p>
          </div>
          <div aria-hidden className="hidden h-full min-h-[24rem] w-px bg-line lg:block" />
          <figure>
            <Photo src="/images/hero-arche.jpg" alt="Bibliothèque et bureau sur mesure en chêne, niche cintrée, pièce haussmannienne à parquet en point de Hongrie" sizes="(min-width: 1024px) 560px, 100vw" priority className="aspect-[4/5]" />
            <figcaption className="mt-3 text-right text-[9px] font-medium uppercase tracking-[0.2em] text-muted">Bibliothèque & bureau sur mesure · Bordeaux</figcaption>
          </figure>
        </Container>
      </section>

      {/* Bandeau repères */}
      <div className="border-y border-line bg-sand">
        <Container className="grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="py-5 md:pr-8"><p className="flex items-center gap-2 font-serif text-[17px]">{site.rating}/5 <Stars className="text-[11px]" /></p><p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-muted">{site.reviewCount} avis Google</p></div>
          <div className="py-5 md:px-8"><p className="font-serif text-[17px]">Bordeaux</p><p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-muted">Atelier au 44 rue du Faubourg des Arts</p></div>
          <div className="py-5 md:pl-8"><p className="font-serif text-[17px]">Sur mesure</p><p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-muted">Conception, fabrication et pose</p></div>
        </Container>
      </div>

      {/* Réalisations */}
      <section className="py-20 md:py-24">
        <Container>
          <Eyebrow>Réalisations</Eyebrow>
          <SectionTitle className="mt-5 max-w-[26em]">Des meubles dessinés pour une pièce, pas pour un catalogue.</SectionTitle>
          <Lead className="mt-4 !text-[16px]">Quelques projets livrés à Bordeaux, du premier croquis à la pose.</Lead>
          <Link href="/realisations" className="mt-5 inline-block text-[13px] hover:text-gold">Toutes les réalisations ↗</Link>

          <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-[1.45fr_1fr]">
            <ProjectCard project={bureau} aspect="aspect-[5/4]" sizes="(min-width: 768px) 58vw, 100vw" />
            <div className="grid gap-10">
              <ProjectCard project={dressing} sizes="(min-width: 768px) 40vw, 100vw" />
              <ProjectCard project={biblio} sizes="(min-width: 768px) 40vw, 100vw" />
            </div>
          </div>
          <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2">
            <ProjectCard project={escalier} aspect="aspect-[3/2]" />
            <ProjectCard project={cuisine} aspect="aspect-[3/2]" />
          </div>
        </Container>
      </section>

      <MethodeImage />

      {/* Notre méthode */}
      <section className="py-20 md:py-24">
        <Container>
          <Eyebrow>Notre méthode</Eyebrow>
          <SectionTitle className="mt-5">Six étapes, aucune improvisation.</SectionTitle>
          <Lead className="mt-5 max-w-[32rem] !text-[16px]">Le déroulé est le même pour un dressing, une bibliothèque ou une cuisine. Ce qui change, c'est ce que la pièce vous impose.</Lead>
          <div className="mt-12"><StepsGrid /></div>
        </Container>
      </section>

      {/* Rénovation */}
      <section className="bg-sand py-20 md:py-24">
        <Container className="grid items-center gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <Photo src="/images/fenetres.jpg" alt="Fenêtres en bois restaurées avec double vitrage, vue sur la pierre blonde de Bordeaux" sizes="(min-width: 768px) 48vw, 100vw" className="aspect-[4/3]" />
          <div>
            <Eyebrow>Rénovation</Eyebrow>
            <SectionTitle className="mt-5 max-w-[11em]">Vos fenêtres en bois méritent mieux qu'un remplacement.</SectionTitle>
            <Lead className="mt-5 !text-[16px]">Nous restaurons les menuiseries bois existantes et leur ajoutons un double vitrage. Une alternative au remplacement, pensée pour les appartements bordelais.</Lead>
            <ul className="mt-7 space-y-5">
              {renovation.map((r) => (
                <li key={r.title} className="flex gap-3">
                  <svg aria-hidden width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#AB8149" strokeWidth="1.1" className="mt-0.5 shrink-0">{r.icon}</svg>
                  <div>
                    <p className="text-[13px] font-medium">{r.title}</p>
                    <p className="mt-1 text-[12px] leading-relaxed text-body">{r.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/sur-mesure/fenetres-bois" className="mt-7 inline-block text-[13px] hover:text-gold">Rénovation de fenêtres bois →</Link>
          </div>
        </Container>
      </section>

      {/* À propos */}
      <section className="py-20 md:py-24">
        <Container className="grid gap-12 md:grid-cols-[5fr_7fr] md:gap-16">
          <div className="max-w-[24rem]">
            <PhotoPlaceholder className="aspect-[4/5]" />
            <Photo src="/images/rabot.jpg" alt="Mains d'un menuisier passant le rabot sur une planche de chêne" sizes="(min-width: 768px) 24rem, 100vw" className="mt-3 aspect-[3/2]" />
          </div>
          <div>
            <Eyebrow>Kevin & Pauline</Eyebrow>
            <SectionTitle className="mt-5 max-w-[14em]">Un atelier à Bordeaux, deux artisans derrière chaque meuble.</SectionTitle>
            <Lead className="mt-5 max-w-[34rem] !text-[16px]">PK Agencement est une jeune entreprise de menuiserie et d'agencement. Conception, fabrication, pose : tout se passe entre nos mains, au 44 rue du Faubourg des Arts.</Lead>
            <div className="mt-8 max-w-[34rem] border-t border-line">
              {about.map((a) => (
                <div key={a.title} className="border-b border-line py-5">
                  <h3 className="text-[15px] font-normal">{a.title}</h3>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-body">{a.text}</p>
                </div>
              ))}
            </div>
            <Link href="/a-propos" className="mt-6 inline-block text-[13px] hover:text-gold">En savoir plus sur PK Agencement</Link>
          </div>
        </Container>
      </section>

      <Reviews />
      <ContactSection />
    </>
  );
}
