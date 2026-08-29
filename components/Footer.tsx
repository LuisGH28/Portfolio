import { links } from "@/data/site";
import type { Messages } from "@/data/i18n";

type FooterProps = {
  messages: Messages;
};

export function Footer({ messages }: FooterProps) {
  return (
    <footer className="border-t border-white/[0.04] px-6 py-6 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>{messages.footer.copyright}</p>
        <div className="flex gap-4">
          <a className="transition hover:text-white" href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="transition hover:text-white" href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
