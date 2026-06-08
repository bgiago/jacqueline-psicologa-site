import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Identification from "@/components/sections/Identification";
import MirrorCards from "@/components/sections/MirrorCards";
import About from "@/components/sections/About";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import Courage from "@/components/sections/Courage";
import Reflections from "@/components/sections/Reflections";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Pular para o conteúdo</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Identification />
        <MirrorCards />
        <About />
        <HowItWorks />
        <Services />
        <Courage />
        <Reflections />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
