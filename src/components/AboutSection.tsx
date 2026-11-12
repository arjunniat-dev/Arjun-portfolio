import React from 'react';
import { Brain, Code, Rocket, BookOpen, Lightbulb, Compass, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'Interest in AI & Machine Learning',
      description:
        'Fascinated by neural networks, supervised learning algorithms, predictive modeling, and intelligent data systems that can understand patterns and solve complex challenges.',
      color: 'from-cyan-500/20 to-blue-500/10',
      iconColor: 'text-cyan-400',
    },
    {
      icon: Code,
      title: 'Passion for Programming & Engineering',
      description:
        'Dedicated to mastering foundational and modern languages including Python, C, C++, and Java. Focusing on strong algorithmic problem-solving and clean software architecture.',
      color: 'from-indigo-500/20 to-purple-500/10',
      iconColor: 'text-indigo-400',
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning Mindset',
      description:
        'Believer in proactive daily practice, exploring developer documentation, dissecting open-source codebases, and expanding knowledge through hands-on projects and internship coursework.',
      color: 'from-purple-500/20 to-pink-500/10',
      iconColor: 'text-purple-400',
    },
    {
      icon: Rocket,
      title: 'Career Ambition as AI/ML Engineer',
      description:
        'Aiming to design scalable machine learning pipelines, contribute to cutting-edge AI research, and build technological products that create meaningful real-world impact.',
      color: 'from-blue-500/20 to-cyan-500/10',
      iconColor: 'text-blue-400',
    },
  ];

  return (
    <section id="about" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider mb-2">
            <span>ABOUT ME</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">ASPIRING ENGINEER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Curious Mind, Disciplined Coder, and Future Innovator
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            I am a first-year B.Tech undergraduate specializing in Artificial Intelligence and Machine Learning at Joy University in collaboration with NIAT / NxtWave. My journey is defined by curiosity, a hunger for deep technical knowledge, and the ambition to shape tomorrow&apos;s intelligent systems.
          </p>
        </div>

        {/* Narrative & Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Profile Image & Personal Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative glass-panel rounded-2xl p-6 border border-slate-800">
              <div className="aspect-[4/5] w-full rounded-xl overflow-hidden mb-6 border border-slate-700/60 shadow-lg relative bg-slate-900">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-11-12_at_9.52.22_AM_b43791be.jpeg"
                  alt="M. Tirumalai Arjun"
                  className="w-full h-full object-cover object-[50%_15%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060815] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-semibold text-white">M. Tirumalai Arjun</p>
                  <p className="text-xs text-cyan-400 font-mono">B.Tech AI &amp; ML · 1st Year Undergrad</p>
                </div>
              </div>

              {/* Personal Mission statement quote */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <Compass className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Based in Tamil Nadu, India · Open to global remote collaborative projects and research.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>Enrolled in professional skill training at SkillOrbit and NIAT / NxtWave ecosystem.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Lightbulb className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Focused on Python algorithms, data structures, and foundational neural networks.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Pillars / Narrative Cards */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover rounded-xl p-5 border border-slate-800/90 relative overflow-hidden"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} ${item.iconColor} shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Animated / Tabular Progress Metrics */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-4 md:pt-0">
              <span className="block text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono tabular-nums">
                1st Year
              </span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1 block">B.Tech Engineering Journey</span>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6">
              <span className="block text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-mono tabular-nums">
                5+
              </span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1 block">Core Architectural Concepts</span>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6">
              <span className="block text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-mono tabular-nums">
                7+
              </span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1 block">Languages &amp; Web Technologies</span>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6">
              <span className="block text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-mono tabular-nums">
                2030
              </span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1 block">Graduation &amp; AI Goal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
