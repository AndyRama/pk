import { steps } from "@/lib/content";

export function StepsGrid() {
  return (
    <ol className="grid gap-x-8 gap-y-8 md:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.title} className="border-t border-line pt-5">
          <span className="text-[9px] font-medium tracking-[0.2em] text-gold">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-3 text-[17px] font-normal leading-snug">{s.title}</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-body">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function StepsList() {
  return (
    <ol className="border-b border-line">
      {steps.map((s, i) => (
        <li key={s.title} className="grid grid-cols-[3rem_1fr] border-t border-line py-6">
          <span className="pt-1 text-[9px] font-medium tracking-[0.2em] text-gold">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3 className="text-[17px] font-normal leading-snug">{s.title}</h3>
            <p className="mt-2 max-w-[28rem] text-[13px] leading-relaxed text-body">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
