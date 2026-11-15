import Link from "next/link";
import { Container, Eyebrow, Lead, SectionTitle, Stars } from "./ui";
import { reviews } from "@/lib/content";
import { site } from "@/lib/site";

export function Reviews() {
  return (
    <section className="bg-sand py-20 md:py-24">
      <Container>
        <Eyebrow>Avis clients</Eyebrow>
        <SectionTitle className="mt-5">{site.rating} sur Google, sur {site.reviewCount} avis.</SectionTitle>
        <div className="mt-4 flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <Lead className="!text-[16px]">Des particuliers de Bordeaux, en appartement et en maison.</Lead>
          <Link href={site.googleUrl} className="text-[13px] hover:text-gold">Lire tous les avis sur Google ↗</Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure key={i} className="rounded-md flex flex-col border border-line bg-card p-6">
              <span aria-hidden className="font-serif text-2xl leading-none text-gold/60">“</span>
              <blockquote className="mt-3 flex-1 text-[13px] leading-[1.75] text-ink/85">{r.text}</blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium">Prénom N.</span>
                  <Stars className="text-[11px]" />
                </div>
                <p className="mt-1 text-[11px] text-muted">Avis Google · {r.date}</p>
                <p className="mt-3 border-l border-line pl-3 text-[11px] leading-relaxed text-muted">{r.reply}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
