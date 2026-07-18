import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsCounter from "./components/StatsCounter";
import ServicesSection from "./components/ServicesSection";
import CommitmentSection from "./components/CommitmentSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsCounter />
        <SectionDivider label="415V / 3-PHASE SUPPLY" tone="orange" />
        <ServicesSection />
        <CommitmentSection />
        <SectionDivider label="TESTED · COMMISSIONED · VERIFIED" tone="light" />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
