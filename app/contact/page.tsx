import type { Metadata } from "next";
import { Breadcrumb, Container, Eyebrow, Lead, SectionTitle } from "@/components/ui";
import { ContactSection } from "@/components/ContactSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact : parlez-nous de votre projet",
  description: "Un appel, un message, quelques photos : c'est suffisant pour démarrer. Nous revenons vers vous pour convenir d'une visite et prendre les mesures sur place.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-10">
        <Container>
          <Breadcrumb current="Contact" />
          <Eyebrow className="mt-8">Contact</Eyebrow>
          <SectionTitle as="h1" className="mt-5 max-w-[12em]">Parlez-nous de votre projet.</SectionTitle>
          <Lead className="mt-5 max-w-[36rem] !text-[16px]">Un appel, un message, quelques photos : c'est suffisant pour démarrer. Nous revenons vers vous pour convenir d'une visite et prendre les mesures sur place.</Lead>
          <p className="mt-5 text-[13px] text-body">Atelier · {site.address.join(", ")}</p>
        </Container>
      </section>
      <ContactSection />
    </>
  );
}
