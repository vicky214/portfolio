import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SystemDesignCaseStudy from "@/components/SystemDesignCaseStudy";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <SystemDesignCaseStudy />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
