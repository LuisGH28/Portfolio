import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Locale, Messages } from "@/data/i18n";

type ResearchProps = {
  locale: Locale;
  messages: Messages;
};

export function Research({ locale, messages }: ResearchProps) {
  return (
    <section id="research" className="border-t border-line pt-11">
      <h2 className="text-2xl font-semibold text-white">{messages.research.title}</h2>
      <div className="mt-6 border-l border-accent/35 pl-5">
        <p className="font-mono text-sm text-accent">{messages.research.topic}</p>
        <p className="mt-3 text-sm leading-7 text-zinc-300">{messages.research.area}</p>
        <p className="mt-4 text-sm leading-7 text-zinc-400">{messages.research.description}</p>
        <p className="mt-4 font-mono text-xs leading-6 text-zinc-500">
          {messages.research.notes.join(", ")}
        </p>
        <Link
          href={`/${locale}/projects/mirage`}
          className="mt-5 inline-flex items-center gap-2 text-sm text-accent outline-none transition hover:text-blue-300 focus-visible:text-blue-300"
        >
          {messages.research.readMore}
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
