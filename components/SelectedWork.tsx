import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { links } from "@/data/site";
import { featuredProjects } from "@/data/projects";
import type { Locale, Messages } from "@/data/i18n";

type SelectedWorkProps = {
  locale: Locale;
  messages: Messages;
};

export function SelectedWork({ locale, messages }: SelectedWorkProps) {
  return (
    <section id="work" className="mx-auto max-w-7xl border-t border-line px-6 py-12 md:px-10 lg:px-16">
      <SectionHeader
        title={messages.projects.title}
        eyebrow={messages.projects.featured}
        action={
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 text-sm text-accent transition hover:text-blue-300 sm:inline-flex"
          >
            {messages.projects.viewAll}
            <ArrowRight size={15} />
          </a>
        }
      />
      <div className="grid gap-8 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} locale={locale} messages={messages} />
        ))}
      </div>
    </section>
  );
}
