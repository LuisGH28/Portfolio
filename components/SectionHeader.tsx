import type { ReactNode } from "react";

type SectionHeaderProps = {
  title: string;
  action?: ReactNode;
  eyebrow?: string;
};

export function SectionHeader({ title, action, eyebrow }: SectionHeaderProps) {
  return (
    <div className="mb-7 flex items-end justify-between gap-4">
      <div>
        {eyebrow ? <p className="mb-2 font-mono text-xs text-accent">{eyebrow}</p> : null}
        <h2 className="text-2xl font-semibold tracking-normal text-white">{title}</h2>
      </div>
      {action}
    </div>
  );
}
