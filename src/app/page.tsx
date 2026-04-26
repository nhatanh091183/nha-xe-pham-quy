import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { FloatingButtons } from "@/components/ui/FloatingButtons";

// Thứ tự landing page: Hero → Dịch vụ → Bảng giá → Cam kết → CTA
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-[56px] md:pb-0">
        <Hero />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
