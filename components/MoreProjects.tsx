import { ArrowRight, Braces, ExternalLink } from "lucide-react";
import Link from "next/link";
import { TechTag } from "@/components/TechTag";
import type { Locale, Messages } from "@/data/i18n";
import { secondaryProjects } from "@/data/projects";

type MoreProjectsProps = {
  locale: Locale;
  messages: Messages;
};

export function MoreProjects({ locale, messages }: MoreProjectsProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 md:px-10 lg:px-16">
      <p className="mb-5 font-mono text-xs text-accent">{messages.projects.other}</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {secondaryProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/${locale}/projects/${project.slug}`}
            className="group flex gap-4 rounded-md border border-line bg-white/[0.018] p-4 outline-none transition hover:-translate-y-0.5 hover:border-accent/45 focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-accent/10 bg-white/[0.035] text-accent">
              <Braces size={19} />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium text-white">{project.name}</span>
              <span className="mt-1 line-clamp-2 block text-xs leading-5 text-zinc-400">
                {messages.projects.items[project.slug as keyof typeof messages.projects.items] ??
                  project.description}
              </span>
              <span className="mt-3 flex flex-wrap gap-2">
                {project.technologies.slice(0, 2).map((technology) => (
                  <TechTag key={technology}>{technology}</TechTag>
                ))}
              </span>
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-6 flex justify-start sm:justify-center">
        <a
          href="https://github.com/LuisGH28"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-line px-4 text-sm font-medium text-accent outline-none transition hover:border-accent/60 hover:text-blue-300 focus-visible:ring-2 focus-visible:ring-accent"
        >
          {messages.projects.viewAll}
          <ExternalLink size={13} />
          <ArrowRight size={13} />
        </a>
      </div>
    </section>
  );
}
