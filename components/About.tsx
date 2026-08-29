import { Globe2, GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import type { Messages } from "@/data/i18n";

const factIcons = [MapPin, Globe2, GraduationCap] as const;

type AboutProps = {
  messages: Messages;
};

export function About({ messages }: AboutProps) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-7xl border-t border-line px-6 py-14 md:px-10 lg:px-16"
    >
      <div className="grid gap-9 md:grid-cols-[210px_1fr_0.9fr] md:items-start lg:gap-16">
        <div>
          <h2 id="about-heading" className="text-2xl font-semibold text-white">
            {messages.about.title}
          </h2>
          <div className="relative mt-7 aspect-[0.92] max-w-[210px] overflow-hidden rounded-md border border-white/15 bg-panel">
            <Image
              src="/profile/luis-gonzalez.webp"
              alt="Luis González"
              fill
              sizes="210px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-xl">
          <div className="space-y-5 text-sm leading-7 text-zinc-300">
            {messages.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-7 space-y-3">
            {messages.about.facts.map((fact, index) => {
              const Icon = factIcons[index];
              return (
                <li key={fact} className="flex items-center gap-3 text-sm text-zinc-300">
                  <Icon size={16} className="text-zinc-200" strokeWidth={1.6} />
                  {fact}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-zinc-300">{messages.about.interestsTitle}</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {messages.about.interests.map((interest) => (
              <span
                key={interest}
                className="rounded-md border border-white/[0.05] bg-white/[0.04] px-3 py-2 text-xs text-zinc-400"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
