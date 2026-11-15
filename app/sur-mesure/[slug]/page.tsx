import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb, Button, Container, Dot, Eyebrow, Lead, Photo, PhoneIcon, SectionTitle, Stars } from "@/components/ui";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { faqDressing } from "@/lib/content";
import { services, site } from "@/lib/site";

const h1: Record<string, string[]> = {
  dressing: ["Dressing", "sur mesure", "à Bordeaux"],
  bibliotheque: ["Bibliothèque", "sur mesure", "à Bordeaux"],
  bureau: ["Bureau", "sur mesure", "à Bordeaux"],
  "rangement-sous-escalier": ["Rangement", "sous escalier", "à Bordeaux"],
  cuisine: ["Cuisine", "sur mesure", "à Bordeaux"],
  "fenetres-bois": ["Fenêtres bois", "& double vitrage", "à Bordeaux"],
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.label} à Bordeaux`,
    description: `${s.label} à Bordeaux par PK Agencement : conception 3D, fabrication à l'atelier et pose sur place.`,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const isDressing = slug === "dressing";
  const others = ["bibliotheque", "rangement-sous-escalier", "fenetres-bois", "bureau", "cuisine", "dressing"]
    .filter((x) => x !== slug)
    .map((x) => services.find((s) => s.slug === x)!);

  return (
    <>
      <section className="pb-16 pt-10 md:pb-20">
        <Container>
          <Breadcrumb current={service.label} />
          <div className="mt-8 grid items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14">
            <div>
              <Eyebrow>{service.label} · Bordeaux</Eyebrow>
              <h1 className="mt-5 text-[clamp(2.6rem,5.2vw,4.1rem)] leading-[1.02] tracking-[-0.025em]">
                {h1[slug].map((l) => (<span key={l} className="block">{l}</span>))}
              </h1>
              <Lead className="mt-5 max-w-[28rem] !text-[16px]">
                {isDressing
                  ? "Un dressing qui rentre dans votre chambre, pas l'inverse. Nous dessinons chaque penderie, étagère et tiroir à partir de la pièce réelle, de vos vêtements et de vos habitudes."
                  : /* TODO : texte d'introduction d'origine à reprendre */ `${service.label} dessiné, fabriqué et posé à la mesure de la pièce, à Bordeaux.`}
              </Lead>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/#contact">Demander un devis</Button>
                <Button href={site.phoneHref} variant="outline"><PhoneIcon /> {site.phone}</Button>
              </div>
            </div>
            <Photo src={service.image} alt={`${service.label} à Bordeaux, réalisation PK Agencement`} sizes="(min-width: 768px) 52vw, 100vw" priority className="aspect-[4/3]" />
          </div>

          {isDressing ? (
            <div className="mt-20">
              <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
                <div>
                  <h2 className="text-[22px] font-normal tracking-[-0.01em]">Ce qui se joue vraiment</h2>
                  {/* Une partie de ce paragraphe était masquée par le header sur la capture : à vérifier. */}
                  <p className="mt-4 max-w-[34rem] text-[15px] leading-[1.8] text-body">
                    Dans un appartement bordelais, la chambre fait souvent office de tout : lit, rangements, parfois bureau. Un dressing sur mesure permet de récupérer la hauteur, les renfoncements et les angles que les meubles standards laissent perdus. Le gain se joue au centimètre, et c'est là que nous travaillons.
                  </p>
                </div>
                <ul className="space-y-3 border-t border-line pt-5 text-[13px] text-ink/85">
                  {["Mesures sur place, y compris murs et angles irréguliers", "Répartition penderies, tiroirs et étagères selon vos usages", "Façades alignées, joues de finition qui reprennent le nu du mur", "Visuels 3D validés avant fabrication"].map((t) => (
                    <li key={t} className="flex items-start gap-3"><Dot />{t}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
                <div>
                  <h3 className="text-[17px] font-normal">Ce qui se joue avant le premier coup de scie</h3>
                  <p className="mt-3 text-[14px] leading-[1.8] text-body">Nous commençons par vider la question : combien de manteaux, de chaussures, de linge à plat ? Vient ensuite la pièce elle-même — la place de la porte, la fenêtre, le radiateur, la hauteur sous plafond. Le meuble est dessiné à partir de ces contraintes, jamais d'un module standard. Les plans vous sont envoyés par e-mail, avec les visuels 3D, jusqu'à ce que tout soit juste.</p>
                </div>
                <div>
                  <h3 className="text-[17px] font-normal">Fabrication et pose</h3>
                  <p className="mt-3 text-[14px] leading-[1.8] text-body">Le dressing est fabriqué à l'atelier puis posé sur place. Les ajustements se font à la pose : réglage des façades, alignement des joints, mise au nu des murs. Une fois parti, le meuble doit fermer sans forcer et sans jeu.</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="mt-16 max-w-[34rem] text-[12px] text-muted">[À COMPLÉTER] Le contenu détaillé de cette page n'était pas sur les captures fournies : à reprendre du site d'origine.</p>
          )}
        </Container>
      </section>

      {isDressing && (
        <>
          <section className="border-y border-line bg-sand py-20 md:py-24">
            <Container>
              <Eyebrow>Réalisations</Eyebrow>
              <SectionTitle className="mt-5">Ce que ça donne une fois posé.</SectionTitle>
              <figure className="mt-10 max-w-[30rem]">
                <Photo src="/images/dressing.jpg" alt="Dressing en chêne avec façades à tasseaux, sous le plan incliné d'une chambre" sizes="(min-width: 768px) 30rem, 100vw" className="aspect-[4/3]" />
                <figcaption className="mt-3">
                  <p className="font-serif text-[15px]">Un dressing qui suit la pièce</p>
                  <p className="mt-1 text-[12px] leading-relaxed text-body">Penderies, étagères et tiroirs répartis selon les usages réels du client, dans une chambre où chaque centimètre compte.</p>
                </figcaption>
              </figure>
            </Container>
          </section>

          <section className="py-20 md:py-24">
            <Container>
              <div className="grid gap-10 md:grid-cols-[4fr_8fr] md:gap-16">
                <div>
                  <Eyebrow>Questions fréquentes</Eyebrow>
                  <SectionTitle className="mt-5 max-w-[7em]">Dressing sur mesure : vos questions</SectionTitle>
                  <p className="mt-4 max-w-[16rem] text-[12px] leading-relaxed text-body">Une question qui n'est pas là ? Appelez-nous, on répond plus vite au téléphone.</p>
                </div>
                <Faq items={faqDressing} />
              </div>

              <figure className="mt-16 border border-line bg-card p-6 md:p-8">
                <Stars className="text-[12px]" />
                <blockquote className="mt-4 max-w-[44rem] font-serif text-[15px] font-light italic leading-relaxed">
                  « Un accompagnement de A à Z : première visite, prise de mesures, plans envoyés par e-mail, ajustements progressifs jusqu'à validation. Les délais annoncés ont été tenus et la pose s'est faite sans mauvaise surprise. »
                </blockquote>
                <figcaption className="mt-4 text-[9px] font-medium uppercase tracking-[0.2em] text-muted">Prénom N. · Avis Google · Juillet 2026</figcaption>
              </figure>
            </Container>
          </section>
        </>
      )}

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

      <CtaBand title={isDressing ? <>Un projet de dressing<br />sur mesure à Bordeaux ?</> : <>Un projet de {service.short.toLowerCase()}<br />à Bordeaux ?</>} />
    </>
  );
}
