type TechTagProps = {
  children: string;
};

export function TechTag({ children }: TechTagProps) {
  return (
    <span className="rounded-md border border-white/[0.05] bg-white/[0.055] px-2.5 py-1 text-[11px] leading-none text-zinc-300 transition group-hover:border-accent/20">
      {children}
    </span>
  );
}
