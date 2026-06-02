import {
  Activity,
  ClipboardList,
  Code2,
  Rocket,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";

type HowItWorksStep = Readonly<{
  title: string;
  description: string;
  icon: LucideIcon;
}>;

export const howItWorksSteps: readonly HowItWorksStep[] = [
  {
    title: "Plan",
    description:
      "We turn the conversation into scoped work, architecture, and a delivery path.",
    icon: ClipboardList,
  },
  {
    title: "Build",
    description:
      "Implementation lands in your repository with typed, review-ready code.",
    icon: Code2,
  },
  {
    title: "Deploy",
    description:
      "Static builds and release steps are prepared so shipping stays direct.",
    icon: Rocket,
  },
  {
    title: "Operate",
    description:
      "The product keeps improving through fixes, checks, and production-minded iteration.",
    icon: Activity,
  },
] as const;

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="bg-background text-foreground border-t"
    >
      <Container className="py-section-sm sm:py-section">
        <div className="max-w-readable">
          <p className="text-brand-700 mb-3 text-sm font-semibold tracking-wide uppercase">
            How it works
          </p>
          <h2
            id="how-it-works-title"
            className="text-brand-950 text-3xl leading-tight font-semibold sm:text-4xl"
          >
            From first conversation to operated product.
          </h2>
        </div>
        <ol className="mt-10 grid gap-8 md:grid-cols-4">
          {howItWorksSteps.map((step, index) => {
            const Icon = step.icon;
            const stepNumber = String(index + 1).padStart(2, "0");

            return (
              <li
                key={step.title}
                className="border-border grid gap-4 border-l pl-5 md:border-t md:border-l-0 md:pt-6 md:pl-0"
              >
                <div className="flex items-center gap-3">
                  <span className="text-brand-700 text-sm font-semibold">
                    {stepNumber}
                  </span>
                  <span
                    className="border-border text-brand-700 bg-background inline-flex size-9 items-center justify-center rounded-md border"
                    aria-hidden="true"
                  >
                    <Icon className="size-5" />
                  </span>
                </div>
                <div>
                  <h3 className="text-xl leading-snug font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-ink-muted mt-3 leading-7">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
