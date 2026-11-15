"use client";

import type { FormEvent } from "react";

// Mise en page seulement : le formulaire n'envoie rien pour l'instant.
// TODO (2e temps) : react-hook-form + zod, route handler (/api/contact), envoi Brevo/SMTP, stockage privé des fichiers.

const field =
  "w-full appearance-none border-0 border-b border-ink/20 bg-transparent px-0 py-2.5 text-[14px] text-ink placeholder:text-muted/70 focus:border-ink focus:outline-none focus:ring-0";
const label = "block text-[9px] font-medium uppercase tracking-[0.2em] text-muted";

// TODO : options des listes à reprendre du site d'origine (non visibles sur les captures).
const lists = {
  type: ["Dressing", "Bibliothèque", "Bureau", "Rangement sous escalier", "Cuisine", "Fenêtres bois & double vitrage", "Autre"],
  piece: ["Chambre", "Salon", "Entrée", "Cuisine", "Bureau", "Escalier", "Autre"],
  budget: ["Je ne sais pas encore", "À définir ensemble"],
  delai: ["Pas pressé", "Dans les 3 mois", "Dès que possible"],
};

function Select({ id, name, text, options }: { id: string; name: string; text: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={id} className={label}>{text}</label>
      <div className="relative">
        <select id={id} name={name} defaultValue="" className={`${field} pr-6`}>
          <option value="" disabled>Choisir…</option>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        <svg aria-hidden width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2" className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-body"><path d="m2 3.5 3 3 3-3" /></svg>
      </div>
    </div>
  );
}

export function ContactForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7 border border-line bg-card p-6 md:p-8">
      <div>
        <label htmlFor="nom" className={label}>Nom et prénom *</label>
        <input id="nom" name="nom" required autoComplete="name" className={field} />
      </div>
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="tel" className={label}>Téléphone *</label>
          <input id="tel" name="tel" type="tel" required autoComplete="tel" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>E-mail *</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <Select id="type" name="type" text="Type de projet" options={lists.type} />
        <Select id="piece" name="piece" text="Pièce concernée" options={lists.piece} />
        <Select id="budget" name="budget" text="Budget indicatif" options={lists.budget} />
        <Select id="delai" name="delai" text="Délai souhaité" options={lists.delai} />
      </div>
      <div>
        <label htmlFor="projet" className={label}>Votre projet</label>
        <textarea id="projet" name="projet" rows={3} placeholder="Dimensions approximatives, ce qui vous gêne dans la pièce, ce que vous aimeriez ranger…" className={`${field} resize-none`} />
      </div>
      <div>
        <label className="flex cursor-pointer items-center justify-center gap-2 border border-dashed border-ink/25 px-4 py-3 text-[12px] text-body transition-colors hover:border-ink focus-within:outline focus-within:outline-2 focus-within:outline-gold">
          <svg aria-hidden width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="m13 7.5-5 5a3 3 0 0 1-4.2-4.2l5.2-5.2a2 2 0 0 1 2.8 2.8L6.8 11" /></svg>
          Ajouter des photos ou un plan (5 max, 8 Mo)
          <input type="file" name="fichiers" multiple accept="image/jpeg,image/png,image/webp,application/pdf" className="sr-only" />
        </label>
        <p className="mt-2 text-[10px] text-muted">Formats acceptés : JPG, PNG, WEBP, PDF.</p>
      </div>
      <label className="flex items-start gap-3 text-[11px] leading-relaxed text-body">
        <input type="checkbox" name="consentement" required className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-ink" />
        J'accepte que PK Agencement utilise ces informations pour me recontacter au sujet de mon projet. Aucune donnée n'est transmise à un tiers.
      </label>
      <button type="submit" className="flex w-full items-center justify-center gap-3 bg-ink px-6 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-cream transition-colors hover:bg-ink/85">
        Envoyer ma demande <span aria-hidden>→</span>
      </button>
    </form>
  );
}
