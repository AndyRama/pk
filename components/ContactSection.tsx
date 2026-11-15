import Link from "next/link";
import { Button, Container, Eyebrow, Lead, PhoneIcon, SectionTitle } from "./ui";
import { ContactForm } from "./ContactForm";
import { mapsDirectionsUrl, mapsEmbedUrl, site } from "@/lib/site";

const lab = "text-[9px] font-medium uppercase tracking-[0.2em] text-muted";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[5fr_6fr] lg:gap-16">
          <div>
            <Eyebrow>Parlons de votre projet</Eyebrow>
            <SectionTitle className="mt-5 max-w-[10em]">Dites-nous ce que la pièce ne vous permet pas de faire.</SectionTitle>
            <Lead className="mt-5 max-w-[27rem] !text-[16px]">Quelques photos, les dimensions approximatives et l'usage souhaité suffisent pour démarrer. Nous revenons vers vous pour convenir d'une visite.</Lead>

            <dl className="mt-8 space-y-5 border-t border-line pt-6">
              <div>
                <dt className={lab}>Atelier</dt>
                <dd className="mt-1.5 text-[13px] leading-snug">{site.address[0]}<br />{site.address[1]}</dd>
              </div>
              <div>
                <dt className={lab}>Téléphone</dt>
                <dd className="mt-1.5 text-[13px]"><a href={site.phoneHref} className="hover:text-gold">{site.phone}</a></dd>
              </div>
              <div>
                <dt className={lab}>Horaires</dt>
                <dd className="mt-1.5 space-y-0.5 text-[13px] text-muted">
                  {site.hours.map((h) => (
                    <p key={h.day}>{h.day} · <span className="text-ink">{h.value}</span></p>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={mapsDirectionsUrl} variant="outline" external>Itinéraire <span aria-hidden>→</span></Button>
              <Button href={site.phoneHref} variant="solid"><PhoneIcon /> Appeler</Button>
            </div>

            <div className="relative mt-7 aspect-[16/9] overflow-hidden border border-line bg-sand">
              <iframe title="Carte : PK Agencement, 44 rue du Faubourg des Arts, Bordeaux" src={mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 h-full w-full grayscale-[0.4]" />
            </div>
          </div>

          <div>
            <ContactForm />
            <p className="mt-4 flex flex-wrap items-start justify-between gap-3 text-[11px] leading-relaxed text-body">
              <span>Les fichiers sélectionnés restent dans votre navigateur : aucun fichier n’est envoyé ou stocké par ce formulaire.</span>
              <Link href="/politique-de-confidentialite" className="underline underline-offset-2 hover:text-ink">Politique de confidentialité</Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
