import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { features, Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import {
  howItWorksSteps,
  HowItWorks,
} from "@/components/sections/how-it-works";
import { Hero } from "@/components/sections/hero";
import {
  valuePropositions,
  ValueProposition,
} from "@/components/sections/value-proposition";

describe("section components", () => {
  it("renders the hero copy and CTA", () => {
    render(<Hero />);

    expect(screen.getByText("myClawTeam")).toBeInTheDocument();
    expect(
      screen.getByText("You just talk, we handle the rest"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Agent Team for Founders",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "myClawTeam turns founder conversations into planned, built, deployed, and operated software inside your own repository.",
      ),
    ).toBeInTheDocument();

    const cta = screen.getByRole("link", {
      name: "Start a conversation with myClawTeam",
    });
    expect(cta).toHaveTextContent("Start a conversation");
    expect(cta).toHaveAttribute("href", "#hero");
    expect(cta).toHaveAttribute("data-slot", "button");
    expect(screen.getAllByRole("link")).toHaveLength(1);
  });

  it("renders the value proposition section with all benefit copy", () => {
    render(<ValueProposition />);

    expect(screen.getByText("Core benefits")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "A software team that works where your product already lives.",
      }),
    ).toBeInTheDocument();

    for (const proposition of valuePropositions) {
      expect(
        screen.getByRole("heading", {
          level: 3,
          name: proposition.title,
        }),
      ).toBeInTheDocument();
      expect(screen.getByText(proposition.summary)).toBeInTheDocument();
    }
  });

  it("renders the how it works walkthrough in four steps", () => {
    render(<HowItWorks />);

    expect(screen.getByText("How it works")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "From first conversation to operated product.",
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(4);

    for (const [index, step] of howItWorksSteps.entries()) {
      expect(
        screen.getByText(String(index + 1).padStart(2, "0")),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { level: 3, name: step.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(step.description)).toBeInTheDocument();
    }
  });

  it("renders the features grid with four feature cards", () => {
    const { container } = render(<Features />);

    expect(screen.getByText("Features")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Built for founders who need working software, not ceremony.",
      }),
    ).toBeInTheDocument();
    expect(container.querySelectorAll('[data-slot="card"]')).toHaveLength(4);

    for (const feature of features) {
      expect(screen.getByText(feature.title)).toBeInTheDocument();
      expect(screen.getByText(feature.description)).toBeInTheDocument();
    }
  });

  it("renders the footer brand mark, copyright, and links", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");
    expect(within(footer).getByText("myClawTeam")).toBeInTheDocument();
    expect(
      within(footer).getByText(/All rights reserved\./),
    ).toBeInTheDocument();

    const footerLinks = within(footer).getAllByRole("link");
    expect(footerLinks).toHaveLength(4);

    for (const linkName of ["GitHub", "LinkedIn", "Privacy", "Terms"]) {
      expect(
        within(footer).getByRole("link", { name: linkName }),
      ).toHaveAttribute("href", "#");
    }
  });
});
