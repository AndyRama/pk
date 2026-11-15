import { Button, Container, PhoneIcon } from "./ui";
import { site } from "@/lib/site";

export function CtaBand({ title }: { title: React.ReactNode }) {
  return (
    <section className="bg-ink text-cream">
      <Container className="flex flex-col justify-between gap-8 py-14 md:flex-row md:items-center">
        <div className="max-w-[34rem]">
          <h2 className="text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.08] tracking-[-0.025em]">{title}</h2>
          <p className="mt-4 text-[13px] leading-relaxed text-cream/70">Décrivez-nous la pièce, l'usage et vos contraintes. Nous revenons vers vous pour convenir d'une visite et prendre les mesures sur place.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/#contact" variant="gold">Parlez-nous de votre projet <span aria-hidden>→</span></Button>
          <Button href={site.phoneHref} variant="outline-light"><PhoneIcon /> {site.phone}</Button>
        </div>
      </Container>
    </section>
  );
}
