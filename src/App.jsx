import { CompaniesLogo } from "./components/CompaniesLogo";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Service } from "./components/Service";
import { StatsSection } from "./components/StatsSection";
import { TestimonialSection } from "./components/TestimonialSection";

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <CompaniesLogo />
      <Service />
      <StatsSection />
      <TestimonialSection />
    </>
  );
}
