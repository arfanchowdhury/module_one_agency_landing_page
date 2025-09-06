import { CompaniesLogo } from "./components/CompaniesLogo";
import { FAQSection } from "./components/FAQSection";
import { FooterSection } from "./components/FooterSection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PricingSection } from "./components/PricingSection";
import { Service } from "./components/Service";
import { StatsSection } from "./components/StatsSection";
import { TestimonialSection } from "./components/TestimonialSection";
import { TrialSection } from "./components/TrialSection";

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <CompaniesLogo />
      <Service />
      <StatsSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <TrialSection />
      <FooterSection />
    {/* end section */}
    </>
  );
}
