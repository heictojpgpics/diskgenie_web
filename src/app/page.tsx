import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { Stats } from "@/components/landing/stats";
import { Lenses } from "@/components/landing/lenses";
import { Features } from "@/components/landing/features";
import { CleanupVideo } from "@/components/landing/cleanup-video";
import { Themes } from "@/components/landing/themes";
import { Safety } from "@/components/landing/safety";
import { Pricing } from "@/components/landing/pricing";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fbf1ee] text-[#3b2428]">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Lenses />
        <Features />
        <CleanupVideo />
        <Themes />
        <Safety />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
