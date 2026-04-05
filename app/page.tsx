import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PhilosophySection from "./components/PhilosophySection";
import ProjectsSection from "./components/ProjectsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PhilosophySection />
        <ProjectsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
