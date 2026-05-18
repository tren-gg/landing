import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Combat from "@/components/sections/Combat";
import Visuals from "@/components/sections/Visuals";
import Blink from "@/components/sections/Blink";
import Configs from "@/components/sections/Configs";
import Injection from "@/components/sections/Injection";
import Performance from "@/components/sections/Performance";
import Mappings from "@/components/sections/Mappings";
import FeatureGrid from "@/components/FeatureGrid";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Combat />
      <Visuals />
      <Blink />
      <Configs />
      <Injection />
      <Performance />
      <Mappings />
      <FeatureGrid />
      <CTA />
      <Footer />
    </main>
  );
}
