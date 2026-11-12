import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { NeuralCanvas } from './components/NeuralCanvas';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050713] text-slate-100 relative bg-cyber-grid selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Real-time Interactive Neural Canvas Background */}
      <NeuralCanvas />

      {/* Primary Top Bar */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection onNavigate={handleNavigate} />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 hover:scale-110 active:scale-95 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}
    </div>
  );
}
