import { HeroAssembly } from "@/components/sections/HeroAssembly";
import { Positioning } from "@/components/sections/Positioning";
import { Pillars } from "@/components/sections/Pillars";
import { MarketGap } from "@/components/sections/MarketGap";
import { CategoryTeaser } from "@/components/sections/CategoryTeaser";
import { WhyUs } from "@/components/sections/WhyUs";
import { CTABand } from "@/components/sections/CTABand";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <HeroAssembly />
      <Positioning />
      <Pillars />
      <MarketGap />
      <CategoryTeaser />
      <WhyUs />
      <CTABand text="Be part of the find." />
    </main>
  );
}
