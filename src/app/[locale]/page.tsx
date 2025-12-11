import { FeaturesSection } from "@/components/features-section";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <div className="py-1">
        <HeroSection />
      </div>
      <FeaturesSection />
    </>
  );
}
