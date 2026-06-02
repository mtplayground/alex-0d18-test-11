import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ValueProposition } from "@/components/sections/value-proposition";

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
