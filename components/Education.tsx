import { SectionHeader } from "@/components/SectionHeader";
import type { Messages } from "@/data/i18n";

type EducationProps = {
  messages: Messages;
};

export function Education({ messages }: EducationProps) {
  return (
    <section id="education" className="border-t border-line pt-11 lg:border-t-0 lg:pt-0">
      <SectionHeader title={messages.education.title} />
      <div className="space-y-7">
        {messages.education.items.map((item) => (
          <article key={item.degree}>
            <h3 className="text-sm font-semibold text-white">{item.degree}</h3>
            <p className="mt-1 text-sm text-zinc-400">{item.institution}</p>
            <p className="mt-2 font-mono text-xs text-accent">{item.date}</p>
            {"description" in item && item.description ? (
              <p className="mt-3 text-xs leading-6 text-zinc-400">{item.description}</p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
