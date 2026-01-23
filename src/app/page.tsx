import PremiumHero from "@/components/home/PremiumHero";
import FeatureCards from "@/components/home/FeatureCards";
import AboutSection from "@/components/home/AboutSection";
import ProductCategories from "@/components/home/ProductCategories";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import NewArrivals from "@/components/home/NewArrivals";
import ContactOverview from "@/components/home/ContactOverview";

export default function Home() {
  return (
    <>
      <PremiumHero />
      <FeatureCards />
      <AboutSection />
      <NewArrivals />
      <ProductCategories />
      <StatsSection />
      <Testimonials />
      <ContactOverview />
    </>
  );
}
