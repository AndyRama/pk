import type { FaqItem } from "@/lib/content";

export function Faq({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="border-t border-line">
      {items.map(({ question, answer }) => (
        <details key={question} className="group border-b border-line">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-[14px] font-medium">
            {question}
            <span aria-hidden className="text-gold transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="max-w-[40rem] pb-5 text-[14px] leading-relaxed text-body">{answer}</p>
        </details>
      ))}
    </div>
  );
}
