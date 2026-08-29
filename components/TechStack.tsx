import type { Messages } from "@/data/i18n";

type TechStackProps = {
  messages: Messages;
};

export function TechStack({ messages }: TechStackProps) {
  return (
    <section
      id="technologies"
      aria-labelledby="technologies-heading"
      className="mx-auto max-w-7xl border-t border-line px-6 py-12 md:px-10 lg:px-16"
    >
      <h2 id="technologies-heading" className="text-2xl font-semibold text-white">
        {messages.technologies.title}
      </h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {messages.technologies.groups.map(([label, items]) => (
          <div key={label}>
            <h3 className="mb-3 text-sm font-medium text-white">{label}</h3>
            <p className="text-sm leading-7 text-zinc-400">{items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
