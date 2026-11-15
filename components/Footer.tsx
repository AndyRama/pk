import Link from "next/link";
import { Container, PhoneIcon } from "./ui";
import { services, site } from "@/lib/site";

const pin = (
  <svg aria-hidden width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M8 14.5s4.5-4.2 4.5-7.8a4.5 4.5 0 0 0-9 0c0 3.6 4.5 7.8 4.5 7.8Z" /><circle cx="8" cy="6.7" r="1.6" /></svg>
);

export function Footer() {
  return (
    <footer className="bg-sand">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.5fr_1.2fr_0.8fr_1fr]">
        <div>
          <img src="images/logo.png" alt="" width={60} height={60} aria-hidden="true" />
          <span className="font-serif text-[22px] font-normal tracking-[-0.02em]">Agencement </span>
          <span className="font-serif text-[22px] font-normal tracking-[-0.02em]">Bordeaux</span>
          <p className="mt-4 max-w-[19rem] text-[13px] leading-relaxed text-body">Menuisier agenceur à Bordeaux. Agencement et mobilier sur mesure conçus, fabriqués et posés par Kevin et Pauline.</p>
          <ul className="mt-5 space-y-2 text-[13px] text-body">
            <li className="flex items-center gap-2"><span className="text-gold">{pin}</span>{site.address[0]}, {site.address[1]}</li>
            <li><a href={site.phoneHref} className="flex items-center gap-2 hover:text-ink"><PhoneIcon className="text-gold" />{site.phone}</a></li>
          </ul>
        </div>

        <nav aria-label="Sur-mesure">
          <h3 className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-muted">Sur-mesure</h3>
          <ul className="mt-5 space-y-3 text-[13px] text-body">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/sur-mesure/${s.slug}`} className="hover:text-ink">{s.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Le site">
          <h3 className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-muted">Le site</h3>
          <ul className="mt-5 space-y-3 text-[13px] text-body">
            <li><Link href="/realisations" className="hover:text-ink">Réalisations</Link></li>
            <li><Link href="/notre-methode" className="hover:text-ink">Notre méthode</Link></li>
            <li><Link href="/a-propos" className="hover:text-ink">À propos</Link></li>
            <li><Link href="/#contact" className="hover:text-ink">Contact</Link></li>
          </ul>
        </nav>

        <div>
          <h3 className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-muted">Horaires</h3>
          <dl className="mt-5 space-y-2.5 text-[13px]">
            {site.hours.map((h) => (
              <div key={h.day}>
                <dt className="text-muted">{h.day}</dt>
                <dd className="text-ink">{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
      <div className="border-t border-line">
        <Container className="flex flex-col gap-3 py-6 text-[11px] text-body md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} PK Agencement — Menuisier agenceur, Bordeaux | site Crée avec par Andy Ramaroson</p>
          <p className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-ink">Mentions légales</Link>
            <Link href="/politique-de-confidentialite" className="hover:text-ink">Politique de confidentialité</Link>
            <Link href={site.googleUrl} className="hover:text-ink">Avis Google</Link>
          </p>
        </Container>
      </div>
    </footer>
  );
}
