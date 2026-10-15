import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectVisualProps = {
  project: Project;
};

export function ProjectVisual({ project }: ProjectVisualProps) {
  if (project.variant === "network") {
    return (
      <div className="relative aspect-[1.64] min-h-[205px] overflow-hidden rounded-md bg-[#0b111d]">
        <div className="tech-grid absolute inset-0 opacity-40" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 260" aria-hidden="true">
          <path className="network-line" d="M52 62 154 38 238 67 359 42" />
          <path className="network-line" d="M52 62 122 184 238 67 338 185" />
          <path className="network-line" d="M154 38 177 132 338 185 359 42" />
          <path className="network-line" d="M88 166 238 67 278 214 122 184Z" />
          <path className="network-line" d="M52 62 278 214 359 42 88 166" />
          <path className="network-line" d="M122 184 177 132 338 185" />
          {([
            [52, 62, "#2f80ff"],
            [154, 38, "#2f80ff"],
            [238, 67, "#7c3aed"],
            [359, 42, "#2f80ff"],
            [88, 166, "#7c3aed"],
            [122, 184, "#2f80ff"],
            [177, 132, "#2f80ff"],
            [278, 214, "#7c3aed"],
            [338, 185, "#2f80ff"]
          ] satisfies Array<[number, number, string]>).map(([cx, cy, fill]) => (
            <circle
              key={`${cx}-${cy}`}
              className="network-dot"
              cx={cx}
              cy={cy}
              r="4"
              fill={fill}
            />
          ))}
        </svg>
      </div>
    );
  }

  if (project.variant === "terminal") {
    return (
      <div className="relative aspect-[1.64] min-h-[205px] overflow-hidden rounded-md bg-[#080b10] p-6 sm:p-9">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.18),transparent_15rem),radial-gradient(circle_at_80%_70%,rgba(47,128,255,0.14),transparent_13rem)]" />
        <div className="relative ml-auto max-w-[260px] rounded-md border border-white/10 bg-white/[0.035] p-5 font-mono text-xs text-zinc-400 shadow-panel">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-emerald-400/50 text-emerald-300">
              AI
            </span>
            <div>
              <p className="font-semibold text-white">AI Git Assistant</p>
              <p className="mt-1 text-[10px] text-zinc-500">$ ai-commit</p>
            </div>
          </div>
          <p>Analizando cambios...</p>
          <p>Generando sugerencias inteligentes...</p>
          <div className="mt-4 rounded border border-white/10 bg-black/30 p-3 text-[10px] leading-5 text-emerald-200">
            Sugerencia: feat(auth): add JWT authentication and improve session handling
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[1.64] min-h-[205px] overflow-hidden rounded-md bg-[#10131a]">
      {project.image ? (
        <Image
          src={project.image}
          alt={`Vista previa de ${project.name}`}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.035]"
          priority={project.recent || project.name === "MichiXO"}
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
}
