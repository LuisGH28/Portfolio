import { redirect } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export default async function ProjectRedirect({ params }: ProjectPageProps) {
  const { slug } = await params;
  redirect(`/en/projects/${slug}`);
}
