import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Mail, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Skills', id: 'skills' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="relative border-t border-slate-800 bg-[#04060f] text-slate-400 py-14 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
          {/* Identity lockup */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-xs font-mono font-bold">
                TA
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight">
                M. Tirumalai Arjun
              </h3>
            </div>
            <p className="text-xs text-cyan-400 font-mono">
              Aspiring AI &amp; Machine Learning Engineer · B.Tech Student
            </p>
            <p className="text-xs text-slate-300 italic pt-1 max-w-md">
              &ldquo;Building Today. Innovating Tomorrow. Exploring the Future of AI.&rdquo;
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => onNavigate(link.id)}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/arjunniat-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/arjun-undefined-b357a5447/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="https://instagram.com/txru_a.rxjn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/50 transition-colors"
              aria-label="Instagram Profile"
              title="@txru_a.rxjn"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href="mailto:tirumalaiarjun09@gmail.com"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Email Arjun"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 hover:bg-cyan-900 hover:text-cyan-200 transition-all ml-2 cursor-pointer shadow-sm shadow-cyan-500/20"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} M. Tirumalai Arjun. All rights reserved.</p>
          <p className="flex items-center gap-1.5 justify-center">
            <span>Crafted with</span>
            <span className="text-cyan-400 font-mono">React &amp; Tailwind CSS</span>
            <span>for the future of Artificial Intelligence</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
