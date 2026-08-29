import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/ProjectVisual";
import { TechTag } from "@/components/TechTag";
import { isLocale, locales, messages } from "@/data/i18n";
import { projectDetails } from "@/data/project-details";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug
    }))
  );
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const project = getProjectBySlug(slug);
  const t = messages[locale];

  if (!project) {
    return {
      title: t.meta.title
    };
  }

  const description =
    t.projects.items[project.slug as keyof typeof t.projects.items] ?? project.description;

  return {
    title: `${project.name} | Luis González`,
    description,
    alternates: {
      canonical: `/${locale}/projects/${project.slug}`,
      languages: {
        en: `/en/projects/${project.slug}`,
        es: `/es/projects/${project.slug}`
      }
    },
    openGraph: {
      title: `${project.name} | Luis González`,
      description,
      type: "article"
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale: rawLocale, slug } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const locale = rawLocale;
  const t = messages[locale];
  const details = projectDetails[locale][project.slug] ?? project.detail;
  const description =
    t.projects.items[project.slug as keyof typeof t.projects.items] ?? project.description;
  const relatedProjects = projects
    .filter((candidate) => candidate.slug !== project.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen px-6 py-8 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-sm text-zinc-400 outline-none transition hover:text-white focus-visible:text-white"
        >
          <ArrowLeft size={15} />
          {t.projectPage.back}
        </Link>

        <section className="grid gap-10 border-b border-line py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-mono text-sm text-accent">{t.projectPage.caseStudy}</p>
            <h1 className="mt-4 font-mono text-4xl font-extrabold leading-tight text-white md:text-6xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">{description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <TechTag key={technology}>{technology}</TechTag>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-line px-5 text-sm font-semibold text-white outline-none transition hover:border-accent focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Github size={16} />
                  GitHub
                </a>
              ) : null}
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-white outline-none transition hover:bg-blue-500 focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {t.projectPage.open}
                  <ExternalLink size={15} />
                </a>
              ) : null}
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-line bg-panel">
            <ProjectVisual project={project} />
          </div>
        </section>

        <section className="grid gap-8 border-b border-line py-10 md:grid-cols-2">
          <InfoBlock title={t.projectPage.overview} text={details.overview} />
          <InfoBlock title={t.projectPage.problem} text={details.problem ?? t.projectPage.pendingProblem} />
          <InfoBlock
            title={t.projectPage.architecture}
            text={details.architecture ?? t.projectPage.pendingArchitecture}
          />
          <InfoList
            title={t.projectPage.decisions}
            items={details.decisions ?? [t.projectPage.pendingDecision]}
          />
          <InfoList
            title={t.projectPage.challenges}
            items={details.challenges ?? [t.projectPage.pendingChallenge]}
          />
          <InfoList title={t.projectPage.stack} items={project.technologies} />
        </section>

        <section className="py-10">
          <h2 className="text-2xl font-semibold text-white">{t.projectPage.related}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedProjects.map((related) => (
              <Link
                key={related.slug}
                href={`/${locale}/projects/${related.slug}`}
                className="rounded-md border border-line bg-white/[0.018] p-4 outline-none transition hover:border-accent/45 focus-visible:ring-2 focus-visible:ring-accent"
              >
                <h3 className="text-sm font-semibold text-white">{related.name}</h3>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-zinc-400">
                  {t.projects.items[related.slug as keyof typeof t.projects.items] ??
                    related.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-md border border-line bg-white/[0.018] p-5">
      <h2 className="text-sm font-semibold text-white">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-zinc-300">{text}</p>
    </article>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-md border border-line bg-white/[0.018] p-5">
      <h2 className="text-sm font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-300">
        {items.map((item) => (
          <li key={item} className="border-l border-accent/35 pl-3">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
