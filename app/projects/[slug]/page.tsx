import { redirect } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectRedirect({ params }: ProjectPageProps) {
  const { slug } = await params;
  redirect(`/en/projects/${slug}`);
}
