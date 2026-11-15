import type { Metadata } from "next";
import { Breadcrumb, Container, Dot, Eyebrow, Lead, Photo, SectionTitle } from "@/components/ui";
import { StepsList } from "@/components/Steps";
import { MethodeImage } from "@/components/MethodeImage";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { faqGeneral } from "@/lib/content";

export const metadata: Metadata = {
  title: "Notre méthode : conception 3D et agencement sur mesure",
  description: "Six étapes, de la première visite à la pose : plans cotés, visuels 3D et validation avant fabrication. La méthode de PK Agencement, menuisier agenceur à Bordeaux.",
};

const validate = ["Plans cotés du meuble", "Visuels 3D dans la pièce", "Choix des finitions et de la quincaillerie", "Délai de fabrication indiqué au devis"];

export default function MethodePage() {
  return (
    <>
      <section className="pb-16 pt-10 md:pb-20">
        <Container>
          <Breadcrumb current="Notre méthode" />
          <div className="mt-8 grid items-start gap-10 md:grid-cols-[1.1fr_1fr] md:gap-14">
            <div>
              <Eyebrow>Notre méthode</Eyebrow>
              <SectionTitle as="h1" className="mt-5 max-w-[9em]">On dessine d'abord. On coupe ensuite.</SectionTitle>
              <Lead className="mt-5 max-w-[30rem] !text-[16px]">Un meuble sur mesure coûte plus cher qu'un meuble de série : il doit donc être juste du premier coup. C'est le rôle de la conception — et c'est là que se joue la différence.</Lead>
            </div>
            <Photo src="/images/rabot.jpg" alt="Mains d'un menuisier passant le rabot sur une planche, copeaux et poussière de bois en lumière" sizes="(min-width: 768px) 45vw, 100vw" priority className="aspect-[4/3]" />
          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-[5fr_7fr] md:gap-16">
            <div>
              <h2 className="text-[clamp(1.7rem,3vw,2.3rem)] leading-[1.1] tracking-[-0.02em]">Les six étapes, dans l'ordre.</h2>
              <Lead className="mt-4 max-w-[22rem] !text-[15px]">Elles sont les mêmes pour tous les projets. Ce qui change, c'est le temps passé sur chacune selon la complexité de la pièce.</Lead>
            </div>
            <StepsList />
          </div>
        </Container>
      </section>

      <MethodeImage />

      <section className="py-20 md:py-24">
        <Container className="grid items-center gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <div>
            <Eyebrow>Ce que vous validez</Eyebrow>
            <SectionTitle className="mt-5 max-w-[10em]">Rien ne part en atelier sans votre accord.</SectionTitle>
            <Lead className="mt-5 max-w-[30rem] !text-[16px]">Les plans et les visuels 3D vous sont envoyés par e-mail, avec les dimensions et les matériaux. Vous répondez, nous ajustons, jusqu'à ce que tout corresponde à ce que vous avez en tête.</Lead>
            <ul className="mt-6 space-y-2.5 text-[13px] text-body">
              {validate.map((v) => (<li key={v} className="flex items-start gap-3"><Dot />{v}</li>))}
            </ul>
          </div>
          <Photo src="/images/bureau-portrait.jpg" alt="Bureau et étagères triangulaires sur mesure dans un angle de pièce" sizes="(min-width: 768px) 45vw, 100vw" className="aspect-[4/5] max-w-[28rem] md:ml-auto" />
        </Container>
      </section>

      <section className="bg-sand py-20 md:py-24">
        <Container className="grid gap-10 md:grid-cols-[4fr_8fr] md:gap-16">
          <div>
            <Eyebrow>Questions fréquentes</Eyebrow>
            <SectionTitle className="mt-5">Avant de nous écrire</SectionTitle>
          </div>
          <Faq items={faqGeneral} />
        </Container>
      </section>

      <CtaBand title="On commence par un appel ?" />
    </>
  );
}
