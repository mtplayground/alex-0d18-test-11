import {
  CheckCircle2,
  GitBranch,
  MessagesSquare,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";

type Feature = Readonly<{
  title: string;
  description: string;
  icon: LucideIcon;
}>;

export const features: readonly Feature[] = [
  {
    title: "Production-ready output",
    description:
      "Code is organized for maintainability, static export builds, and handoff-ready deployment paths.",
    icon: CheckCircle2,
  },
  {
    title: "Security focus",
    description:
      "Implementation choices favor explicit configuration, safe defaults, and reviewable repository changes.",
    icon: ShieldCheck,
  },
  {
    title: "Conversational workflow",
    description:
      "Founders describe intent in plain language while the work is planned, built, and validated in code.",
    icon: MessagesSquare,
  },
  {
    title: "Full repository ownership",
    description:
      "Every change lands in your GitHub repo, preserving history, context, and control for your team.",
    icon: GitBranch,
  },
] as const;

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="bg-surface-muted/60 text-foreground border-t"
    >
      <Container className="py-section-sm sm:py-section">
        <div className="max-w-readable">
          <p className="text-brand-700 mb-3 text-sm font-semibold tracking-wide uppercase">
            Features
          </p>
          <h2
            id="features-title"
            className="text-brand-950 text-3xl leading-tight font-semibold sm:text-4xl"
          >
            Built for founders who need working software, not ceremony.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card key={feature.title} className="h-full">
                <CardHeader className="gap-4">
                  <span
                    className="border-border text-brand-700 bg-background inline-flex size-10 items-center justify-center rounded-md border"
                    aria-hidden="true"
                  >
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription className="mt-3 leading-6">
                      {feature.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
