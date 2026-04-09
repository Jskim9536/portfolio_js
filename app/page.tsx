import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImpactSection from "./components/ImpactSection";
import PhilosophySection from "./components/PhilosophySection";
import ProjectsSection from "./components/ProjectsSection";
import CareerTimeline from "./components/CareerTimeline";
import CompanyLogoMarquee from "./components/CompanyLogoMarquee";
import SkillsSection from "./components/SkillsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ImpactSection />
        <PhilosophySection />
        <ProjectsSection />
        <CareerTimeline />
        <CompanyLogoMarquee />
        <SkillsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
