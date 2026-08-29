import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectVisual } from "@/components/ProjectVisual";
import { TechTag } from "@/components/TechTag";
import type { Project } from "@/data/projects";
import type { Locale, Messages } from "@/data/i18n";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  messages: Messages;
};

export function ProjectCard({ project, locale, messages }: ProjectCardProps) {
  const description =
    messages.projects.items[project.slug as keyof typeof messages.projects.items] ?? project.description;
  const cta = project.slug === "mirage" ? messages.projects.viewResearch : messages.projects.viewProject;

  return (
    <article className="group">
      <Link
        href={`/${locale}/projects/${project.slug}`}
        className="block rounded-md outline-none transition duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-accent"
      >
        <div className="overflow-hidden rounded-md border border-line bg-panel transition duration-300 group-hover:border-accent/50">
          <ProjectVisual project={project} />
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-semibold tracking-normal text-white">{project.name}</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-300">{description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((technology) => (
              <TechTag key={technology}>{technology}</TechTag>
            ))}
          </div>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
            {cta}
            <ArrowRight size={15} />
          </span>
        </div>
      </Link>
    </article>
  );
}
