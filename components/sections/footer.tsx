import { Container } from "@/components/ui/container";
import { seoDefaults } from "@/lib/seo";

const footerLinks = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-inverse text-ink-inverse">
      <Container className="py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span
              className="bg-accent-500 text-surface-inverse inline-flex size-9 items-center justify-center rounded-md text-sm font-bold"
              aria-hidden="true"
            >
              m
            </span>
            <div>
              <p className="font-semibold">{seoDefaults.siteName}</p>
              <p className="text-sm text-zinc-400">
                © {year} {seoDefaults.siteName}. All rights reserved.
              </p>
            </div>
          </div>
          <nav aria-label="Footer links">
            <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-zinc-300">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
