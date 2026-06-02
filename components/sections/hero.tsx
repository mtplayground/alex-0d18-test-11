import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { seoDefaults } from "@/lib/seo";

const heroPositioning =
  "myClawTeam turns founder conversations into planned, built, deployed, and operated software inside your own repository.";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="bg-background text-foreground"
    >
      <Container className="py-section-sm sm:py-section flex min-h-svh items-center">
        <div className="max-w-readable">
          <p className="text-brand-700 mb-5 text-sm font-semibold tracking-wide uppercase">
            {seoDefaults.siteName}
          </p>
          <p className="text-lead text-accent-500 mb-4 font-medium">
            {seoDefaults.tagline}
          </p>
          <h1
            id="hero-title"
            className="text-brand-950 text-4xl leading-none font-semibold sm:text-5xl lg:text-6xl"
          >
            Agent Team for Founders
          </h1>
          <p className="text-lead text-ink-muted mt-6">{heroPositioning}</p>
          <div className="mt-8">
            <Button asChild size="lg" className="h-11 px-5 text-base">
              <a href="#hero" aria-label="Start a conversation with myClawTeam">
                Start a conversation
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
