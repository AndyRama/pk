import { faqAnswerPlaceholder } from "@/lib/content";

export function Faq({ items }: { items: readonly string[] }) {
  return (
    <div className="border-t border-line">
      {items.map((q) => (
        <details key={q} className="group border-b border-line">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-[14px] font-medium">
            {q}
            <span aria-hidden className="text-gold transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="max-w-[40rem] pb-5 text-[14px] leading-relaxed text-body">{faqAnswerPlaceholder}</p>
        </details>
      ))}
    </div>
  );
}
