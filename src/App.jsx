import { useState, useEffect } from 'react';
import { ConfigProvider, theme } from 'antd';
import { useTheme } from 'next-themes';
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
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : true;

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: isDark
          ? {
              colorPrimary: '#6366F1',
              borderRadius: 12,
              colorBgContainer: '#030712',
              colorBgElevated: '#111827',
              colorText: '#f9fafb',
              colorTextDescription: '#9ca3af',
              colorBorder: '#374151'
            }
          : {
              colorPrimary: '#6366F1',
              borderRadius: 12,
              colorBgContainer: '#ffffff',
              colorBgElevated: '#ffffff',
              colorText: '#0f172a',
              colorTextDescription: '#475569',
              colorBorder: '#cbd5e1'
            }
      }}
    >
      <main className="relative bg-white dark:bg-gray-950 text-slate-900 dark:text-gray-50 transition-colors duration-300 min-h-screen">
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
    </ConfigProvider>
  );
}
