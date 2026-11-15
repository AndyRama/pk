import type { Metadata } from "next";
import { Container } from "@/components/ui";

export const metadata: Metadata = { title: "Politique de confidentialité" };

export default function Page() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <h1 className="text-[clamp(2.2rem,4.5vw,3.2rem)] leading-[1.05] tracking-[-0.02em]">Politique de confidentialité</h1>
        <p className="mt-6 max-w-[34rem] text-body">[À COMPLÉTER] Contenu juridique à rédiger (éditeur, hébergeur, traitement des données du formulaire).</p>
      </Container>
    </section>
  );
}
