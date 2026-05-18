import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Combat from "@/components/sections/Combat";
import Visuals from "@/components/sections/Visuals";
import Movement from "@/components/sections/Movement";
import Blink from "@/components/sections/Blink";
import Configs from "@/components/sections/Configs";
import UI from "@/components/sections/UI";
import Injection from "@/components/sections/Injection";
import Mappings from "@/components/sections/Mappings";
import FeatureGrid from "@/components/FeatureGrid";
import Comparison from "@/components/Comparison";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Combat />
      <Visuals />
      <Movement />
      <Blink />
      <Configs />
      <UI />
      <Injection />
      <Mappings />
      <FeatureGrid />
      <Comparison />
      <CTA />
      <Footer />
    </main>
  );
}
