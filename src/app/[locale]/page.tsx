import { FeaturesSection } from "@/components/features-section";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <div className=" bg-[#F2F2F2]">
        <HeroSection />
      </div>
      <FeaturesSection />
    </>
  );
}
