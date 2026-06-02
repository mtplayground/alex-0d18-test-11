import { Container } from "@/components/ui/container";

export const valuePropositions = [
  {
    title: "GitHub-native",
    summary:
      "Code ownership stays in your own repository, with project history and delivery context preserved where your team already works.",
  },
  {
    title: "Autonomous SDLC",
    summary:
      "Plan, build, deploy, and operate move as one continuous workflow from conversation to shipped software.",
  },
  {
    title: "Production-ready & Secure",
    summary:
      "Output is shaped around maintainable architecture, validation, accessibility, and security-aware defaults.",
  },
] as const;

export function ValueProposition() {
  return (
    <section
      id="value-proposition"
      aria-labelledby="value-proposition-title"
      className="bg-surface-muted/60 text-foreground border-t"
    >
      <Container className="py-section-sm sm:py-section">
        <div className="max-w-readable">
          <p className="text-brand-700 mb-3 text-sm font-semibold tracking-wide uppercase">
            Core benefits
          </p>
          <h2
            id="value-proposition-title"
            className="text-brand-950 text-3xl leading-tight font-semibold sm:text-4xl"
          >
            A software team that works where your product already lives.
          </h2>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {valuePropositions.map((item) => (
            <article key={item.title} className="border-border border-t pt-6">
              <h3 className="text-xl leading-snug font-semibold">
                {item.title}
              </h3>
              <p className="text-ink-muted mt-4 leading-7">{item.summary}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
