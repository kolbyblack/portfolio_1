import { CustomCursor } from "@/components/CustomCursor";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Capabilities } from "@/components/Capabilities";
import { Philosophy } from "@/components/Philosophy";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <Hero />
      <Manifesto />
      <About />
      <Experience />
      <Projects />
      <Capabilities />
      <Philosophy />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
