import PremiumHero from "@/components/home/PremiumHero";
import FeaturedImages from "@/components/home/FeaturedImages";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import MostSellingUniforms from "@/components/home/MostSellingUniforms";
import AchievementsSection from "@/components/home/AchievementsSection";
import ProductCategories from "@/components/home/ProductCategories";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import NewArrivals from "@/components/home/NewArrivals";
import ContactOverview from "@/components/home/ContactOverview";
import HomeMap from "@/components/home/HomeMap";

export default function Home() {
  return (
    <>
      <PremiumHero />
      <WhyChooseUs />

      <FeaturedImages />
      <AboutSection />
      <MostSellingUniforms />
      <NewArrivals />
      <ProductCategories />
      <AchievementsSection />
      <StatsSection />
      <Testimonials />
      <ContactOverview />
      <HomeMap />
    </>
  );
}
