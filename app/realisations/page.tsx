import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb, Container, Eyebrow, Lead, Photo, SectionTitle } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";
import { realizationProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Chaque réalisation part d'une contrainte réelle : un angle, une pente, une hauteur sous plafond, un meuble introuvable ailleurs. Voici ce que ça donne une fois posé.",
};

export default function RealisationsPage() {
  return (
    <>
      <section className="pb-20 pt-10 md:pb-24">
        <Container>
          <Breadcrumb current="Réalisations" />
          <div className="mt-8 grid items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-14">
            <div>
              <Eyebrow>Réalisations</Eyebrow>
              <SectionTitle as="h1" className="mt-5 max-w-[11em]">Des projets pensés pour une pièce précise.</SectionTitle>
              <Lead className="mt-5 max-w-[32rem] !text-[16px]">Chaque réalisation part d'une contrainte réelle : un angle, une pente, une hauteur sous plafond, un meuble introuvable ailleurs. Voici ce que ça donne une fois posé.</Lead>
            </div>
            <Photo src="/images/bibliotheque.jpg" alt="Bibliothèque sur mesure du sol au plafond" sizes="(min-width: 768px) 45vw, 100vw" priority className="aspect-[4/3]" />
          </div>
          <div className="mt-16 space-y-16 md:mt-20 md:space-y-24">
            {realizationProjects.map((project, index) => (
              <article key={project.slug} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <Photo src={project.image} alt={project.alt} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[4/3]" />
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <Eyebrow>{project.category}</Eyebrow>
                  <h2 className="mt-4 text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.15] tracking-[-0.02em]">{project.title}</h2>
                  <p className="mt-4 text-[14px] leading-[1.8] text-body">{project.description}</p>
                  <p className="mt-3 text-[13px] leading-[1.8] text-body">{project.detail}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => <li key={tag} className="border border-line px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-muted">{tag}</li>)}
                  </ul>
                  <Link href={project.href} className="mt-5 inline-block text-[12px] hover:text-gold">En savoir plus sur ce savoir-faire <span aria-hidden>↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand title="Votre pièce a aussi ses contraintes." />
    </>
  );
}
