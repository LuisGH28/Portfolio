import { BrainCircuit, Code2, Landmark, Watch } from "lucide-react";
import type { Messages } from "@/data/i18n";

const focusIcons = [Watch, Landmark, BrainCircuit, Code2] as const;

type ProfessionalFocusProps = {
  messages: Messages;
};

export function ProfessionalFocus({ messages }: ProfessionalFocusProps) {
  const focusItems = messages.focus.map(([title, subtitle], index) => ({
    title,
    subtitle,
    icon: focusIcons[index]
  }));

  return (
    <section
      aria-label="Professional focus"
      className="mx-auto grid max-w-7xl grid-cols-1 gap-5 border-t border-line px-6 py-7 sm:grid-cols-2 md:px-10 lg:grid-cols-4 lg:px-16"
    >
      {focusItems.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="flex items-center gap-4">
            <Icon size={20} className="shrink-0 text-zinc-300" strokeWidth={1.6} />
            <div>
              <h2 className="text-sm font-medium text-white">{item.title}</h2>
              <p className="mt-1 text-xs text-zinc-500">{item.subtitle}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
