import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Stats from './components/sections/Stats';
import Contact from './components/sections/Contact';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import HireMeModal from './components/HireMeModal';

export default function Home() {
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);

  return (
    <main className="relative">
      <CustomCursor />
      <BackToTop />
      <ScrollProgress />
      
      <Navbar onHireMeClick={() => setIsHireMeOpen(true)} />
      <Hero onHireMeClick={() => setIsHireMeOpen(true)} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      {/* <Stats /> */}
      <Contact />
      <Footer />

      <HireMeModal isOpen={isHireMeOpen} onClose={() => setIsHireMeOpen(false)} />
    </main>
  );
}
