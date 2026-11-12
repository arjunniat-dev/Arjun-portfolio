import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Sparkles, Terminal, Code2, Cpu, Brain, Database } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

const ROLES = [
  'Aspiring AI & Machine Learning Engineer',
  'B.Tech Undergrad at Joy University',
  'Passionate Python & C++ Programmer',
  'Future Software Developer',
  'Neural Network & Data Explorer',
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(70);

  // Smooth typewriter effect for the roles
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      setTypingSpeed(70);
    } else {
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1);

        setDisplayText(nextText);
        setTypingSpeed(isDeleting ? 35 : 70);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Subtle ambient glow gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-purple-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/10 blur-[100px] pointer-events-none" />

      {/* Floating programming & AI symbols */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <span
          className="absolute top-28 left-[8%] text-cyan-400/20 font-mono text-xl animate-bounce"
          style={{ animationDuration: '6s' }}
        >
          &lt;/&gt;
        </span>
        <span
          className="absolute top-44 right-[10%] text-indigo-400/20 font-mono text-2xl animate-pulse"
          style={{ animationDuration: '4s' }}
        >
          &#123; py &#125;
        </span>
        <span
          className="absolute bottom-36 left-[15%] text-purple-400/20 font-mono text-lg animate-bounce"
          style={{ animationDuration: '7s' }}
        >
          &lambda; = f(x)
        </span>
        <span
          className="absolute bottom-48 right-[14%] text-blue-400/20 font-mono text-xl animate-pulse"
          style={{ animationDuration: '5s' }}
        >
          010101
        </span>
        <span
          className="absolute top-1/2 left-[3%] text-cyan-300/15 font-mono text-sm hidden lg:block"
        >
          &nabla;W + &part;L/&part;w
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status kicker without pill badges */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-cyan-400 font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
              <span>B.Tech in Artificial Intelligence &amp; Machine Learning</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400">Class of 2030</span>
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                M. Tirumalai <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Arjun</span>
              </h1>

              {/* Subtitle & Animated Role */}
              <p className="text-base sm:text-lg text-slate-300 font-medium pt-1">
                B.Tech Student <span className="text-cyan-400 font-normal">|</span> Programmer <span className="text-cyan-400 font-normal">|</span> Future Software Developer
              </p>
            </div>

            {/* Dynamic Animated Typing Box */}
            <div className="h-10 flex items-center bg-[#0d1326]/80 border border-slate-800 rounded-lg px-4 py-2 w-full max-w-lg shadow-inner">
              <Terminal className="w-4 h-4 text-cyan-400 mr-2.5 shrink-0" />
              <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
                {displayText}
                <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 translate-y-0.5 animate-pulse" />
              </span>
            </div>

            {/* Introduction Quote */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl bg-gradient-to-b from-slate-200 to-slate-400 bg-clip-text">
              &ldquo;Hello! I&apos;m M. Tirumalai Arjun, an aspiring AI and Machine Learning engineer currently pursuing my B.Tech degree. I am passionate about programming, exploring emerging technologies, building innovative solutions, and continuously improving my technical skills. My goal is to become a skilled technology professional and contribute to the future of artificial intelligence.&rdquo;
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => onNavigate('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-slate-200 hover:text-white bg-[#0e162b] hover:bg-[#14203d] border border-slate-700/80 hover:border-cyan-500/50 transition-all shadow-sm hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Frame with Profile Picture and Neural Artwork */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer glowing halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/30 via-indigo-500/30 to-purple-500/20 rounded-3xl blur-xl opacity-75" />

              {/* Main Card Frame */}
              <div className="relative glass-panel rounded-2xl p-4 sm:p-5 border border-slate-700/70 shadow-2xl overflow-hidden group">
                {/* Visual Neural Accent Background Header */}
                <div className="relative h-28 sm:h-32 w-full rounded-xl overflow-hidden mb-4 border border-slate-800">
                  <img
                    src="/src/assets/images/neural_ai_hero_visual_1794466990964.jpg"
                    alt="Neural Network Visualization"
                    className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020] via-transparent to-black/30" />
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm border border-slate-700/60 text-[11px] font-mono text-cyan-300">
                    <Brain className="w-3.5 h-3.5" />
                    <span>AI / ML Track</span>
                  </div>
                </div>

                {/* Profile Portrait & Identity Lockup */}
                <div className="flex items-center gap-4 px-1 pb-2">
                  <div className="relative shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-cyan-400/60 shadow-lg shadow-cyan-500/20 bg-slate-900">
                      <img
                        src="/assets/aistudio/WhatsApp_Image_2026-11-12_at_9.52.22_AM_b43791be.jpeg"
                        alt="M. Tirumalai Arjun"
                        className="w-full h-full object-cover object-[50%_15%]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#0a1020] flex items-center justify-center text-[9px] text-white font-bold" title="Active Student & Trainee">
                      ✓
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-bold text-white truncate">M. Tirumalai Arjun</h2>
                    <p className="text-xs text-cyan-400 font-mono truncate">@arjunniat-dev</p>
                    <div className="mt-1 text-xs text-slate-400 flex flex-col gap-0.5">
                      <span>Joy University · NIAT / NxtWave</span>
                      <span className="text-slate-500 text-[11px]">SkillOrbit Internship Trainee</span>
                    </div>
                  </div>
                </div>

                {/* Mini Tech stack indicator */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-3 font-mono text-[11px]">
                    <span className="text-cyan-300">Python</span>
                    <span className="text-slate-600">/</span>
                    <span className="text-indigo-300">C++</span>
                    <span className="text-slate-600">/</span>
                    <span className="text-blue-300">AI / ML</span>
                  </div>
                  <span className="text-[11px] text-slate-500">Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI / Highlights Strip below hero split */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">2030</div>
              <div className="text-xs text-slate-400">B.Tech AI &amp; ML Target</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-800/50 text-indigo-400 shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">7+</div>
              <div className="text-xs text-slate-400">Programming Languages</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-800/50 text-purple-400 shrink-0">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">SkillOrbit</div>
              <div className="text-xs text-slate-400">Internship Training</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-800/50 text-blue-400 shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">100%</div>
              <div className="text-xs text-slate-400">Growth &amp; Innovation Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
