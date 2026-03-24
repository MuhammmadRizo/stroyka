import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SalesSection from "@/components/SalesSection";
import CategoriesSection from "@/components/CategoriesSection";
import PopularProductsSection from "@/components/PopularProductsSection";
import BrandsSection from "@/components/BrandsSection";
import ReviewsSection from "@/components/ReviewsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SalesSection />
        <CategoriesSection />
        <PopularProductsSection />
        <BrandsSection />
        <ReviewsSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
