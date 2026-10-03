import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { Proof } from "@/components/landing/proof";
import { Lenses } from "@/components/landing/lenses";
import { CleanupVideo } from "@/components/landing/cleanup-video";
import { Features } from "@/components/landing/features";
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
        <Proof />
        <Lenses />
        <CleanupVideo />
        <Features />
        <Themes />
        <Safety />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
