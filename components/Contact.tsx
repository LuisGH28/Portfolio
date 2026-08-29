import { Github, Linkedin, Mail } from "lucide-react";
import { links } from "@/data/site";
import type { Messages } from "@/data/i18n";

const contactItems = [
  { label: links.emailLabel, href: links.email, icon: Mail },
  { label: "github.com/LuisGH28", href: links.github, icon: Github },
  { label: "linkedin.com/in/luigidev28", href: links.linkedin, icon: Linkedin }
];

type ContactProps = {
  messages: Messages;
};

export function Contact({ messages }: ContactProps) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-7xl border-t border-line px-6 py-16 md:px-10 lg:px-16"
    >
      <div className="max-w-2xl">
        <h2 id="contact-heading" className="text-2xl font-semibold text-white">
          {messages.contact.title}
        </h2>
        <p className="mt-5 text-sm leading-7 text-zinc-400">{messages.contact.text}</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-3 text-sm text-zinc-400 outline-none transition hover:text-white focus-visible:text-white"
                >
                  <Icon size={17} className="text-zinc-300" />
                  <span className="break-all">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href={links.email}
          className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-white outline-none transition hover:bg-blue-500 focus-visible:ring-2 focus-visible:ring-accent"
        >
          {messages.contact.cta}
        </a>
      </div>
    </section>
  );
}
