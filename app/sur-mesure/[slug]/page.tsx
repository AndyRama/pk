import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb, Button, Container, Dot, Eyebrow, Lead, Photo, PhoneIcon, SectionTitle, Stars } from "@/components/ui";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { serviceContent } from "@/lib/serviceContent";
import { services, site } from "@/lib/site";

const h1: Record<string, string[]> = {
  dressing: ["Dressing", "sur mesure", "à Bordeaux"],
  bibliotheque: ["Bibliothèque", "sur mesure", "à Bordeaux"],
  bureau: ["Bureau", "sur mesure", "à Bordeaux"],
  "rangement-sous-escalier": ["Rangement", "sous escalier", "sur mesure, à Bordeaux"],
  cuisine: ["Cuisine", "sur mesure", "à Bordeaux"],
  "fenetres-bois": ["Rénovation de", "fenêtres bois", "et double vitrage,", "à Bordeaux"],
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  const content = serviceContent[service.slug];
  return { title: content.heading, description: content.intro };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const content = serviceContent[service.slug];
  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="pb-16 pt-10 md:pb-20">
        <Container>
          <Breadcrumb current={content.eyebrow} />
          <div className="mt-8 grid items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14">
            <div>
              <Eyebrow>{content.eyebrow} · Bordeaux</Eyebrow>
              <h1 className="mt-5 text-[clamp(2.6rem,5.2vw,4.1rem)] leading-[1.02] tracking-[-0.025em]">
                {h1[slug].map((line) => (<span key={line} className="block">{line}{" "}</span>))}
              </h1>
              <Lead className="mt-5 max-w-[28rem] !text-[16px]">{content.intro}</Lead>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/#contact">Demander un devis</Button>
                <Button href={site.phoneHref} variant="outline"><PhoneIcon /> {site.phone}</Button>
              </div>
            </div>
            <Photo src={service.image} alt={content.realizations[0].alt} sizes="(min-width: 768px) 52vw, 100vw" priority className="aspect-[4/3]" />
          </div>

          <div className="mt-20">
            <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
              <div>
                <h2 className="text-[22px] font-normal tracking-[-0.01em]">Ce qui se joue vraiment</h2>
                <p className="mt-4 max-w-[34rem] text-[15px] leading-[1.8] text-body">{content.description}</p>
              </div>
              <ul className="space-y-3 border-t border-line pt-5 text-[13px] text-ink/85">
                {content.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3"><Dot />{bullet}</li>
                ))}
              </ul>
            </div>
            <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
              {content.subsections.map((subsection) => (
                <div key={subsection.title}>
                  <h3 className="text-[17px] font-normal">{subsection.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.8] text-body">{subsection.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-sand py-20 md:py-24">
        <Container>
          <Eyebrow>Réalisations</Eyebrow>
          <SectionTitle className="mt-5">Ce que ça donne une fois posé.</SectionTitle>
          <div className={content.realizations.length > 1 ? "mt-10 grid gap-8 md:grid-cols-2" : "mt-10"}>
            {content.realizations.map((realization) => (
              <figure key={realization.title} className={content.realizations.length > 1 ? "max-w-[35rem]" : "max-w-[30rem]"}>
                <Photo src={realization.image} alt={realization.alt} sizes={content.realizations.length > 1 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 30rem, 100vw"} className="aspect-[4/3]" />
                <figcaption className="mt-3">
                  <p className="font-serif text-[15px]">{realization.title}</p>
                  <p className="mt-1 text-[12px] leading-relaxed text-body">{realization.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[4fr_8fr] md:gap-16">
            <div>
              <Eyebrow>Questions fréquentes</Eyebrow>
              <SectionTitle className="mt-5 max-w-[7em]">{content.faqTitle}</SectionTitle>
              <p className="mt-4 max-w-[16rem] text-[12px] leading-relaxed text-body">Une question qui n'est pas là ? Appelez-nous, on répond plus vite au téléphone.</p>
            </div>
            <Faq items={content.faqs} />
          </div>
          <figure className="mt-16 border border-line bg-card p-6 md:p-8">
            <Stars className="text-[12px]" />
            <blockquote className="mt-4 max-w-[44rem] font-serif text-[15px] font-light italic leading-relaxed">{content.testimonial.text}</blockquote>
            <figcaption className="mt-4 text-[9px] font-medium uppercase tracking-[0.2em] text-muted">{content.testimonial.attribution}</figcaption>
          </figure>
        </Container>
      </section>

      <section className="pb-20 md:pb-24">
        <Container>
          <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-muted">Autres savoir-faire</p>
          <ul className="mt-4 gap-x-8 md:columns-2">
            {others.map((s) => (
              <li key={s.slug} className="break-inside-avoid border-b border-line first:border-t md:first:border-t-0">
                <Link href={`/sur-mesure/${s.slug}`} className="flex items-center justify-between py-3.5 text-[13px] text-body hover:text-ink">
                  {s.slug === "fenetres-bois" ? s.short : s.label}
                  <span aria-hidden className="text-xs text-muted">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand title={content.ctaTitle} />
    </>
  );
}
