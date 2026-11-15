import Link from "next/link";
import { Photo } from "./ui";
import type { projects } from "@/lib/content";

type Project = (typeof projects)[number];

export function ProjectCard({ project, aspect = "aspect-[4/3]", sizes = "(min-width: 768px) 50vw, 100vw" }: { project: Project; aspect?: string; sizes?: string }) {
  return (
    <article className="rounded-md">
      <Link href={project.href} className="group block">
        <Photo src={project.image} alt={project.alt} sizes={sizes} className={`rounded-md ${aspect}`} />
        <div className="mt-3 flex items-start justify-between">
          <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-gold">{project.category}</p>
          <span aria-hidden className="text-xs leading-none text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
        </div>
        <h3 className="mt-1.5 text-[17px] font-normal leading-snug">{project.title}</h3>
      </Link>
    </article>
  );
}
