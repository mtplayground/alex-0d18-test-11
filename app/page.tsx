import type { Metadata } from "next";

import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ValueProposition } from "@/components/sections/value-proposition";
import { createMetadata, seoDefaults } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Agent Team for Founders",
  description: seoDefaults.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ValueProposition />
        <HowItWorks />
        <Features />
      </main>
      <Footer />
    </>
  );
}
