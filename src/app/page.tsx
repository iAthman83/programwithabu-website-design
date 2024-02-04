import ExpertiseSection from "@/sections/ExpertiseSection";
import HeroSection from "@/sections/HeroSection";

export default async function Home() {
  return (
    <main className="space-y-[100px]">
      <HeroSection />
      <ExpertiseSection />
    </main>
  );
}
