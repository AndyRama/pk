"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { PhoneIcon } from "./ui";
import { mainNav, services, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [sub, setSub] = useState(false);
  const subRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenu(false);
    setSub(false);
  }, [pathname]);

  useEffect(() => {
    if (!sub) return;
    const onClick = (e: MouseEvent) => {
      if (!subRef.current?.contains(e.target as Node)) setSub(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSub(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [sub]);

  const link = "text-[13px] text-ink/80 transition-colors hover:text-ink";

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-[68px] w-full max-w-[1168px] items-center justify-between px-6 md:px-8">
        <Logo />

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 lg:flex">
          <Link href="/realisations" className={link}>Réalisations</Link>
          <div ref={subRef} className="relative">
            <button type="button" aria-expanded={sub} aria-haspopup="true" onClick={() => setSub((v) => !v)} className={`rounded-md ${link} inline-flex items-center gap-1.5`}>
              Sur-mesure
              <svg aria-hidden width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="m2 3.5 3 3 3-3" /></svg>
            </button>
            {sub && (
              <ul className="absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2 border border-line bg-cream py-2 shadow-[0_12px_32px_-12px_rgba(24,24,27,0.18)]">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/sur-mesure/${s.slug}`} className="block px-5 py-2.5 text-[13px] text-ink/80 hover:bg-sand hover:text-ink">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {mainNav.slice(1).map((l) => (
            <Link key={l.href} href={l.href} className={link} aria-current={pathname === l.href ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={site.phoneHref} className="inline-flex items-center gap-2 text-[13px] text-ink/80 hover:text-ink">
            <PhoneIcon /> {site.phone}
          </a>
          <Link href="/#contact" className="rounded-md bg-ink px-5 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-cream transition-colors hover:bg-ink/85">
            Un projet
          </Link>
        </div>

        <button type="button" className="rounded-md -mr-2 p-2 text-[10px] font-medium uppercase tracking-[0.18em] lg:hidden" aria-expanded={menu} aria-controls="menu-mobile" onClick={() => setMenu((v) => !v)}>
          {menu ? "Fermer" : "Menu"}
        </button>
      </div>

      {menu && (
        <nav id="menu-mobile" aria-label="Navigation mobile" className="max-h-[calc(100dvh-68px-80px-env(safe-area-inset-bottom))] overflow-y-auto border-t border-line bg-cream px-6 pb-8 pt-2 lg:hidden">
          <ul className="divide-y divide-line">
            <li><Link href="/realisations" className="block py-4 font-serif text-xl">Réalisations</Link></li>
            <li>
              <p className="pt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">Sur-mesure</p>
              <ul className="pb-3 pt-1">
                {services.map((s) => (
                  <li key={s.slug}><Link href={`/sur-mesure/${s.slug}`} className="block py-2 text-[15px] text-body">{s.label}</Link></li>
                ))}
              </ul>
            </li>
            {mainNav.slice(1).map((l) => (
              <li key={l.href}><Link href={l.href} className="block py-4 font-serif text-xl">{l.label}</Link></li>
            ))}
          </ul>
        </nav>
      )}
    </header>
    <nav aria-label="Actions rapides" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-3 border-t border-line bg-cream px-4 pt-4 pb-[calc(16px+env(safe-area-inset-bottom))] lg:hidden">
      <Link href="/#contact" className="rounded-md inline-flex min-h-12 items-center justify-center bg-ink px-3 text-[10px] font-medium uppercase tracking-[0.16em] text-cream transition-colors hover:bg-ink/85">Devis</Link>
      <a href={site.phoneHref} className="rounded-md inline-flex min-h-12 items-center justify-center gap-2 border border-ink/20 px-3 text-[10px] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-sand"><PhoneIcon /> Téléphone</a>
    </nav>
    </>
  );
}
