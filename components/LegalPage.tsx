import type { ReactNode } from "react";
import { Breadcrumb, Container, Eyebrow } from "@/components/ui";
import { legalValidationItems } from "@/lib/legalContent";

export function LegalPage({ title, eyebrow, intro, children }: { title: string; eyebrow: string; intro: string; children: ReactNode }) {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <Breadcrumb current={title} />
        <div className="mt-8 max-w-[48rem]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-[15em] text-[clamp(2.2rem,4.5vw,3.2rem)] leading-[1.05] tracking-[-0.02em]">{title}</h1>
          <p className="mt-5 max-w-[30rem] text-[16px] leading-relaxed text-body">{intro}</p>
          <aside aria-labelledby="legal-validation-title" className="rounded-md mt-10 border border-gold/40 bg-card p-5 md:p-7">
            <h2 id="legal-validation-title" className="text-xl">Informations en attente de validation</h2>
            <p className="mt-3 text-[13px] leading-relaxed text-body">Cette version décrit les éléments vérifiés et les limites actuelles du site. Elle reste incomplète et ne vaut pas certification de conformité. Les informations suivantes doivent être confirmées par PK Agencement avant validation définitive :</p>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-[13px] leading-relaxed text-body">
              {legalValidationItems.map(({ label, detail }) => <li key={label}><strong className="font-medium text-ink">{label} :</strong> {detail}</li>)}
            </ul>
          </aside>
          <div className="mt-10 divide-y divide-line">{children}</div>
        </div>
      </Container>
    </section>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return <section className="py-7 first:pt-0"><h2 className="text-xl">{title}</h2><div className="mt-4 space-y-3 text-[14px] leading-[1.8] text-body [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-ink/35 hover:[&_a]:decoration-ink">{children}</div></section>;
}
