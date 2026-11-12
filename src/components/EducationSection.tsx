import React from 'react';
import { GraduationCap, School, Calendar, MapPin, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const educationTimeline = [
    {
      degree: 'B.Tech – Artificial Intelligence and Machine Learning',
      institution: 'NIAT / NxtWave',
      university: 'Joy University',
      period: '2026 – 2030',
      status: 'Pursuing (1st Year Undergraduate)',
      badgeType: 'active',
      location: 'India',
      description:
        'Rigorous specialized 4-year undergraduate curriculum concentrating on core artificial intelligence principles, machine learning algorithms, deep learning foundations, data structures, and computer science engineering mathematics.',
      coursework: [
        'AI & Machine Learning Foundations',
        'Python Programming & OOP',
        'Data Structures & Algorithms',
        'C & C++ Programming Foundations',
        'Mathematics for Machine Learning (Calculus & Linear Algebra)',
        'Modern Web Development Foundations',
      ],
      icon: GraduationCap,
    },
    {
      degree: 'Higher Secondary Education – 12th Standard',
      institution: 'Pannai Public School',
      university: 'Higher Secondary Board',
      period: 'Graduated 2026',
      status: 'Completed with Strong Foundations',
      badgeType: 'completed',
      location: 'Tamil Nadu, India',
      description:
        'Completed higher secondary academic program with a focus on Mathematics, Physics, Chemistry, and Computer Science fundamentals, cultivating analytical reasoning, scientific inquiry, and logical thinking.',
      coursework: [
        'Advanced Mathematics & Calculus',
        'Physics & Analytical Problem Solving',
        'Chemistry & Scientific Method',
        'Fundamental Computer Science & Logic',
      ],
      icon: School,
    },
  ];

  return (
    <section id="education" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider mb-2">
            <span>ACADEMIC FOUNDATION</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">EDUCATION TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education &amp; Academic Journey
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            The formal academic milestones shaping my knowledge in computer science, algorithmic logic, and artificial intelligence engineering.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central spine line */}
          <div className="absolute top-8 bottom-8 left-4 sm:left-8 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-800" />

          <div className="space-y-12">
            {educationTimeline.map((item, idx) => {
              const Icon = item.icon;
              const isCurrent = item.badgeType === 'active';

              return (
                <div key={idx} className="relative pl-12 sm:pl-20 group">
                  {/* Timeline Node Indicator */}
                  <div className="absolute left-1.5 sm:left-5.5 top-1.5 -translate-x-1/2">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-transform duration-300 group-hover:scale-125 ${
                        isCurrent
                          ? 'bg-cyan-950 border-cyan-400 shadow-lg shadow-cyan-400/40'
                          : 'bg-slate-900 border-indigo-400'
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          isCurrent ? 'bg-cyan-400 animate-ping' : 'bg-indigo-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Main Education Card */}
                  <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-slate-800/90 relative">
                    {/* Header info */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                          <span className="text-slate-600">·</span>
                          <span className="text-slate-300">{item.status}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {item.degree}
                        </h3>
                        <p className="text-sm font-medium text-slate-300 mt-1">
                          {item.institution} <span className="text-slate-500">·</span> {item.university}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-400 self-start shrink-0 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Coursework & Focus Points */}
                    <div className="border-t border-slate-800/80 pt-4">
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
                        <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Key Focus Areas &amp; Coursework:</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {item.coursework.map((course, cIdx) => (
                          <div key={cIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                            <span>{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
