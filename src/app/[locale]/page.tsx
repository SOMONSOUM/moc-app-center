import { FeaturesSection } from "@/components/features-section";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <div className="py-20">
        <HeroSection />
      </div>
      <FeaturesSection />
    </>
  );
}
