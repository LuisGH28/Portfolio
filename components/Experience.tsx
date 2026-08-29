import { SectionHeader } from "@/components/SectionHeader";
import type { Messages } from "@/data/i18n";

type ExperienceProps = {
  messages: Messages;
};

export function Experience({ messages }: ExperienceProps) {
  return (
    <section id="experience" className="border-t border-line pt-11 lg:border-t-0 lg:pt-0">
      <SectionHeader title={messages.experience.title} />
      <div className="relative">
        <div className="absolute bottom-8 left-2 top-3 w-px bg-accent/25" />
        <div className="space-y-10">
          {messages.experience.items.map((item) => (
            <article key={`${item.date}-${item.role}`} className="relative pl-12">
              <span className="absolute left-0 top-1 h-4 w-4 rounded-full border border-accent bg-ink" />
              <h3 className="text-base font-semibold text-white">{item.role}</h3>
              <p className="mt-1 text-sm text-zinc-400">
                {item.organization} · {item.date}
              </p>
              <p className="mt-2 text-sm text-accent">{item.area}</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300">{item.description}</p>
              <p className="mt-3 font-mono text-xs leading-6 text-zinc-500">{item.tech}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
