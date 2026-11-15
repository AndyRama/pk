import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" aria-label="PK Agencement, Bordeaux — accueil" className="flex items-center gap-2.5">
      <img src="images/logo.png" alt="" width={40} height={40} aria-hidden="true" />
      {/* <span className="font-serif text-[22px] font-normal leading-none tracking-[-0.02em]">PK</span> */}
      <span className="text-[8px] font-medium uppercase leading-[1.35] tracking-[0.22em] text-body">
        Agencement
        <br />
        Bordeaux
      </span>
    </Link>
  );
}
