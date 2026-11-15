import type { Metadata } from "next";
import { Breadcrumb, Container, Eyebrow, Lead, SectionTitle } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand } from "@/components/CtaBand";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Dressings, bibliothèques, bureaux, rangements sous escalier et cuisines sur mesure : quelques projets livrés à Bordeaux par PK Agencement.",
};

// Page reconstituée : aucune capture de /realisations n'a été fournie. Elle reprend les cartes de l'accueil.
export default function RealisationsPage() {
  return (
    <>
      <section className="pb-20 pt-10 md:pb-24">
        <Container>
          <Breadcrumb current="Réalisations" />
          <Eyebrow className="mt-8">Réalisations</Eyebrow>
          <SectionTitle as="h1" className="mt-5 max-w-[11em]">Des meubles dessinés pour une pièce.</SectionTitle>
          <Lead className="mt-5 max-w-[32rem] !text-[16px]">Quelques projets livrés à Bordeaux, du premier croquis à la pose.</Lead>
          <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
            ))}
          </div>
        </Container>
      </section>
      <CtaBand title="On commence par un appel ?" />
    </>
  );
}
