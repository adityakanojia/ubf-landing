import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ScrollReveal from "./components/ScrollReveal";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Pillars from "./components/Pillars";
import Initiatives from "./components/Initiatives";
import Unique from "./components/Unique";
import Numbers from "./components/Numbers";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Pillars />
        <Initiatives />
        <Unique />
        <Numbers />
        <Gallery />
      </main>
      <CTA />
      <Footer />
      <ScrollReveal />
    </>
  );
}
