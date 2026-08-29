import { ArrowDownToLine, ArrowRight, Mail } from "lucide-react";
import { links } from "@/data/site";
import type { Messages } from "@/data/i18n";

type HeroProps = {
  messages: Messages;
};

export function Hero({ messages }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden pt-20">
      <div className="tech-grid absolute inset-x-0 top-0 h-[660px] opacity-75" />
      <div className="noise absolute inset-0 opacity-[0.08]" />
      <div className="absolute left-[54%] top-52 h-1 w-1 rounded-full bg-accent shadow-[0_0_14px_rgba(47,128,255,0.8)]" />

      <div className="relative mx-auto grid min-h-[530px] max-w-7xl items-center gap-10 px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-10 lg:min-h-[600px] lg:px-16">
        <div className="max-w-2xl">
          <h1 className="font-mono text-5xl font-extrabold leading-[0.96] tracking-normal text-white sm:text-6xl lg:text-[4.8rem]">
            {messages.hero.name}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-3xl font-medium leading-tight text-zinc-300 sm:text-4xl">
            <span>{messages.hero.role}</span>
            <span className="h-9 w-0.5 bg-accent" aria-hidden="true" />
          </div>
          <p className="mt-6 max-w-md text-lg leading-8 text-zinc-300">{messages.hero.description}</p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-semibold text-white shadow-[0_14px_38px_rgba(47,128,255,0.35)] outline-none transition hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:ring-2 focus-visible:ring-accent"
            >
              {messages.hero.projects}
              <ArrowRight size={16} />
            </a>
            <a
              href={links.cv}
              download
              className="inline-flex h-12 items-center justify-center gap-3 rounded-md border border-line bg-white/[0.02] px-6 text-sm font-semibold text-white outline-none transition hover:-translate-y-0.5 hover:border-zinc-500 focus-visible:ring-2 focus-visible:ring-accent"
            >
              {messages.hero.cv}
              <ArrowDownToLine size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-md border border-line bg-white/[0.02] px-6 text-sm font-semibold text-white outline-none transition hover:-translate-y-0.5 hover:border-zinc-500 focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Mail size={16} />
              {messages.hero.contact}
            </a>
          </div>
        </div>

        <div className="relative min-h-[320px] md:min-h-[430px]">
          <div className="absolute left-10 top-16 h-56 w-[75%] rounded-xl border border-accent/10 bg-accent/5 blur-3xl" />
          <div className="code-window relative mx-auto mt-8 max-w-[370px] rotate-[-3deg] rounded-xl border border-white/15 bg-[#101620]/85 shadow-panel backdrop-blur-md transition duration-500 hover:rotate-[-2deg] md:mt-0 lg:translate-y-10">
            <div className="flex h-11 items-center gap-2 rounded-t-xl border-b border-white/[0.06] bg-white/[0.045] px-5">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" />
            </div>
            <pre className="overflow-hidden p-6 font-mono text-[11px] leading-6 text-zinc-300 sm:text-xs">
              <code>
                <span className="text-blue-300">const</span>{" "}
                <span className="text-cyan-200">engineer</span>{" "}
                <span className="text-zinc-500">=</span>{" "}
                <span className="text-zinc-200">{"{"}</span>
                {"\n  "}
                <span className="text-sky-300">name</span>:{" "}
                <span className="text-amber-300">&apos;Luis González&apos;</span>,
                {"\n  "}
                <span className="text-sky-300">focus</span>:{" "}
                <span className="text-zinc-200">[</span>
                <span className="text-emerald-300">&apos;{messages.hero.codeFocus[0]}&apos;</span>,{" "}
                <span className="text-emerald-300">&apos;{messages.hero.codeFocus[1]}&apos;</span>,{" "}
                <span className="text-emerald-300">&apos;{messages.hero.codeFocus[2]}&apos;</span>
                <span className="text-zinc-200">]</span>,
                {"\n  "}
                <span className="text-sky-300">notes</span>:{" "}
                <span className="text-emerald-300">&apos;{messages.hero.codeNote}&apos;</span>
                {"\n"}
                <span className="text-zinc-200">{"};"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
