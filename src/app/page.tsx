import ExpertiseSection from "@/sections/ExpertiseSection";
import HeroSection from "@/sections/HeroSection";
import MyWorkSection from "@/sections/MyWorkSection";

export default async function Home() {
  return (
    <main className="mb-8 space-y-[100px]">
      <HeroSection />
      <ExpertiseSection />
      <MyWorkSection />
    </main>
  );
}
