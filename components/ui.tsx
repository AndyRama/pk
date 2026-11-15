import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1168px] px-6 md:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-muted ${className}`}>
      <span aria-hidden className="h-px w-6 bg-gold/70" />
      {children}
    </p>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`tracking-[0.1em] text-gold ${className}`}>
      ★★★★★
    </span>
  );
}

export function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <path d="M3.2 2h2.4l1.1 3-1.5 1a8 8 0 0 0 3.8 3.8l1-1.5 3 1.1v2.4a1.4 1.4 0 0 1-1.5 1.4A10.8 10.8 0 0 1 1.8 3.5 1.4 1.4 0 0 1 3.2 2Z" />
    </svg>
  );
}

const variants = {
  solid: "bg-ink text-cream hover:bg-ink/85",
  outline: "border border-ink/20 text-ink hover:border-ink",
  gold: "bg-gold text-white hover:bg-gold/90",
  "outline-light": "border border-cream/30 text-cream hover:border-cream",
} as const;

export function Button({
  href,
  variant = "solid",
  children,
  className = "",
  external = false,
}: {
  href: string;
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`rounded-md inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function SectionTitle({
  as: Tag = "h2",
  children,
  className = "",
}: {
  as?: "h1" | "h2";
  children: ReactNode;
  className?: string;
}) {
  const size = Tag === "h1" ? "text-[clamp(2.6rem,5.2vw,4.1rem)] leading-[1.02]" : "text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.08]";
  return <Tag className={`tracking-[-0.025em] ${size} ${className}`}>{children}</Tag>;
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[17px] leading-[1.7] text-body ${className}`}>{children}</p>;
}

export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
      <ol className="flex items-center gap-2">
        <li><Link href="/" className="hover:text-ink">Accueil</Link></li>
        <li aria-hidden>›</li>
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}

/** Photo avec le badge « Visuel d'ambiance » du site d'origine (à retirer quand les vraies photos arrivent). */
export function Photo({
  src,
  alt,
  sizes,
  badge = true,
  priority = false,
  className = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  sizes: string;
  badge?: boolean;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-sand ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      {badge && (
        <span className="absolute bottom-3 left-3 rounded-full bg-cream/90 px-2.5 py-1 text-[8px] font-medium uppercase tracking-[0.16em] text-body">
          Visuel d'ambiance
        </span>
      )}
    </div>
  );
}

export function PhotoPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-md flex flex-col justify-end border border-line bg-[#EDEAE3] p-2 ${className}`}>
      <div className="rounded-md flex flex-1 flex-col justify-end border border-line/80 p-5">
        <p className="flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.2em] text-muted">
          <svg aria-hidden width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.1"><rect x="1.5" y="3.5" width="13" height="9.5" rx="1" /><circle cx="8" cy="8.2" r="2.4" /><path d="M5.5 3.5 6.5 2h3l1 1.5" /></svg>
          Photo à réaliser
        </p>
        <p className="mt-2 font-serif text-[15px] font-normal leading-snug">Kevin et Pauline dans leur atelier à Bordeaux</p>
        <p className="mt-2 text-[11px] leading-relaxed text-muted">Portrait de Kevin et Pauline dans l'atelier, lumière naturelle, plans larges puis détail des mains. Pas de pose figée, pas de sourire forcé.</p>
      </div>
    </div>
  );
}

export function Dot() {
  return <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />;
}
