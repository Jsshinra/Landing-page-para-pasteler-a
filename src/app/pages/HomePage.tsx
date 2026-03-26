import { HeroSection } from "../components/HeroSection";
import { CustomCakesSection } from "../components/CustomCakesSection";
import { GallerySection } from "../components/GallerySection";
import { HowToOrderSection } from "../components/HowToOrderSection";
import { SocialSection } from "../components/SocialSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { CTASection } from "../components/CTASection";
import { FAQPreviewSection } from "../components/FAQPreviewSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CustomCakesSection />
      <GallerySection />
      <HowToOrderSection />
      <FAQPreviewSection />
      <SocialSection />
      {/* <TestimonialsSection /> */}
      <CTASection />
    </>
  );
}