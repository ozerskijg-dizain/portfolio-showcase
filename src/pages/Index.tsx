import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import PricingSection from "@/components/sections/PricingSection";
import AboutSection from "@/components/sections/AboutSection";
import WebsiteTypesSection from "@/components/sections/WebsiteTypesSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar onScrollTo={scrollTo} />
      <HeroSection onScrollTo={scrollTo} />
      <PortfolioSection />
      <ServicesSection onScrollTo={scrollTo} />
      <WhyUsSection />
      <HowItWorksSection />
      <ProblemsSection onScrollTo={scrollTo} />
      <PricingSection onScrollTo={scrollTo} />
      <AboutSection />
      <WebsiteTypesSection />
      <FAQSection />
      <ContactSection />

      <footer className="border-t border-border py-6 px-6 text-center text-muted-foreground text-sm bg-card">
        <p>© 2025 Вебожитель — Разработка сайтов и автоматизация бизнеса</p>
      </footer>

      <ScrollToTop />
    </div>
  );
}
