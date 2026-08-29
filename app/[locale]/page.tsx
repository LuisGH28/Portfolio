import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MoreProjects } from "@/components/MoreProjects";
import { Navbar } from "@/components/Navbar";
import { ProfessionalFocus } from "@/components/ProfessionalFocus";
import { Research } from "@/components/Research";
import { SelectedWork } from "@/components/SelectedWork";
import { TechStack } from "@/components/TechStack";
import { isLocale, type Locale, locales, messages } from "@/data/i18n";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const t = messages[locale];

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        es: "/es"
      }
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: "website",
      locale: locale === "en" ? "en_US" : "es_MX",
      siteName: "Luis González"
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description
    }
  };
}

export default async function Home({ params }: PageProps) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale: Locale = rawLocale;
  const t = messages[locale];

  return (
    <>
      <Navbar locale={locale} messages={t} />
      <main>
        <Hero messages={t} />
        <ProfessionalFocus messages={t} />
        <About messages={t} />
        <SelectedWork locale={locale} messages={t} />
        <MoreProjects locale={locale} messages={t} />
        <section className="mx-auto grid max-w-7xl gap-14 border-t border-line px-6 py-12 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
          <Experience messages={t} />
          <div className="space-y-12 lg:border-l lg:border-line lg:pl-10">
            <Education messages={t} />
            <Research locale={locale} messages={t} />
          </div>
        </section>
        <TechStack messages={t} />
        <Contact messages={t} />
      </main>
      <Footer messages={t} />
    </>
  );
}
