import type { Metadata } from "next";
import { Breadcrumb, Button, Container, Eyebrow, Lead, Photo, PhotoPlaceholder, PhoneIcon, SectionTitle } from "@/components/ui";
import { Reviews } from "@/components/Reviews";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos : Kevin & Pauline, menuisiers à Bordeaux",
  description: "Kevin et Pauline, deux artisans et un atelier à Bordeaux : PK Agencement conçoit, fabrique et pose des meubles sur mesure.",
};

const values = [
  { title: "Le bois d'abord", text: "Nous travaillons la matière pour ce qu'elle est : un matériau vivant, qui se travaille, s'assemble et se répare. Les matériaux sont choisis avec vous selon le projet." },
  { title: "Un chantier tenu", text: "Protection des sols, évacuation des chutes, nettoyage en fin de journée. L'organisation du chantier fait partie du travail, pas d'un bonus." },
  { title: "Le service en plus", text: "Ça nous arrive de réparer une table en passant, sans rien demander. Ce n'est pas une prestation, c'est la façon dont on travaille." },
];

export default function AProposPage() {
  return (
    <>
      <section className="pb-20 pt-10 md:pb-24">
        <Container>
          <Breadcrumb current="À propos" />
          <div className="mt-8 grid items-start gap-10 md:grid-cols-[1.1fr_1fr] md:gap-14">
            <div className="md:pt-10">
              <Eyebrow>Kevin & Pauline</Eyebrow>
              <SectionTitle as="h1" className="mt-5 max-w-[9em]">Deux artisans, un atelier à Bordeaux.</SectionTitle>
              <Lead className="mt-5 max-w-[30rem] !text-[16px]">PK Agencement est une jeune entreprise de menuiserie et d'agencement. Nous concevons, fabriquons et posons nous-mêmes, dans un atelier du quartier des Chartrons.</Lead>
            </div>
            <Photo src="/images/rabot.jpg" alt="Mains d'un menuisier passant le rabot sur une planche, copeaux et poussière de bois" sizes="(min-width: 768px) 45vw, 100vw" priority className="aspect-[4/3]" />
          </div>

          <div className="mt-20 grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
            <div className="max-w-[34rem] space-y-5 text-[15px] leading-[1.8] text-body">
              <p>Nous avons lancé PK Agencement avec une idée simple : faire des meubles qui n'existent pas dans les catalogues, parce que les pièces dans lesquelles on vit ne sont jamais standard. Un appartement bordelais, c'est un angle rentrant, une fenêtre mal placée, un mur qui ne croise pas l'autre droit.</p>
              <p>Nous travaillons en duo. Kevin à l'atelier, Pauline sur la conception et le suivi : vous parlez toujours aux mêmes personnes, de la première visite à la dernière vis. C'est ce qui nous permet de tenir les délais et de garder le fil sur chaque détail.</p>
              <p>Notre atelier se trouve au 44 rue du Faubourg des Arts, à Bordeaux. Vous pouvez nous appeler, nous envoyer des photos, ou passer prendre rendez-vous.</p>
              <div className="flex flex-wrap gap-3 pt-3">
                <Button href={site.phoneHref}><PhoneIcon /> {site.phone}</Button>
                <Button href="/#contact" variant="outline">Nous écrire</Button>
              </div>
            </div>
            <div className="max-w-[22rem]">
              <PhotoPlaceholder className="aspect-[4/5]" />
              <Photo src="/images/escalier.jpg" alt="Rangement sous escalier avec porte cintrée en chêne" sizes="(min-width: 768px) 22rem, 100vw" className="mt-3 aspect-[3/2]" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-sand py-16">
        <Container className="grid gap-8 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="border-t border-line pt-5">
              <h3 className="text-[17px] font-normal">{v.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-body">{v.text}</p>
            </div>
          ))}
        </Container>
      </section>

      <Reviews />
      <CtaBand title="Passons à votre pièce" />
    </>
  );
}
