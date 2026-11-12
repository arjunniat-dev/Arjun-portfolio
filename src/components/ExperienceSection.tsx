import React from 'react';
import { Briefcase, Clock, Calendar, CheckCircle, ArrowUpRight, Target, Sparkles, Building2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      role: 'SkillOrbit Internship Training',
      company: 'SkillOrbit Tech',
      period: 'Current / Ongoing (2026)',
      status: 'Currently Attending Internship Classes',
      statusType: 'current',
      type: 'Technical & Professional Training',
      description:
        'Active participant in rigorous developer training sessions focused on strengthening software engineering principles, technical discipline, modern programming methodologies, and professional workplace readiness.',
      keyLearnings: [
        'Hands-on technical exercises in coding best practices and modular software design',
        'Industry workplace communication, agile fundamentals, and collaborative teamwork',
        'Systematic debugging, code reading, and version-controlled project development',
      ],
    },
    {
      role: 'Upcoming Internship Opportunity',
      company: 'Company To Be Announced',
      period: 'Expected in ~1 Month (Q1 2026)',
      status: 'Scheduled to Begin Soon',
      statusType: 'upcoming',
      type: 'Industry Engineering Internship',
      description:
        'Upcoming industry placement opportunity scheduled to commence in approximately one month. Geared toward applying theoretical AI, machine learning, and programming knowledge to tangible technology products.',
      keyLearnings: [
        'Real-world software development lifecycle participation',
        'Mentorship under experienced senior engineers and technology leaders',
        'Collaborative code contributions and practical problem-solving in production environments',
      ],
    },
  ];

  const careerRoadmap = [
    {
      year: 'Year 1 (Current)',
      milestone: 'Foundational Mastery',
      detail: 'Core programming in Python & C/C++, discrete mathematics, linear algebra, and data structures.',
    },
    {
      year: 'Year 2 (2027)',
      milestone: 'ML Systems & Applied AI',
      detail: 'Supervised/unsupervised algorithms, deep learning models, neural architectures, and open-source contributions.',
    },
    {
      year: 'Year 3 (2028)',
      milestone: 'Advanced Research & Full-Stack AI',
      detail: 'End-to-end MLOps deployment, computer vision / NLP projects, and intensive industrial internships.',
    },
    {
      year: 'Year 4 (2029–2030)',
      milestone: 'Capstone & Professional AI Engineer',
      detail: 'B.Tech capstone thesis, specialized AI publication or production product, and transition into senior engineering roles.',
    },
  ];

  return (
    <section id="experience" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider mb-2">
            <span>CAREER DEVELOPMENT</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">PROFESSIONAL JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Internship Experience &amp; Career Timeline
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            A chronological roadmap of professional training, forthcoming industry opportunities, and long-term milestones toward becoming an AI &amp; Machine Learning engineer.
          </p>
        </div>

        {/* Career Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {experiences.map((exp, idx) => {
            const isCurrent = exp.statusType === 'current';
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Top Status & Date */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>

                    {/* Status text label without pill enclosure */}
                    <span
                      className={`text-[11px] font-mono tracking-wider ${
                        isCurrent ? 'text-emerald-400' : 'text-indigo-400'
                      }`}
                    >
                      {exp.status}
                    </span>
                  </div>

                  {/* Title & Company */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-4 font-mono">
                    <Building2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.company}</span>
                    <span className="text-slate-600">·</span>
                    <span>{exp.type}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Key Learnings */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-mono text-slate-400 block">
                      Core Development Objectives:
                    </span>
                    {exp.keyLearnings.map((item, lIdx) => (
                      <div key={lIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Professional Growth Milestone</span>
                  <span className="text-cyan-400">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Year B.Tech Vision & Growth Roadmap */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <Target className="w-4 h-4" />
              <span>ACADEMIC &amp; CAREER ROADMAP (2026 – 2030)</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Strategic Milestones Toward AI &amp; ML Engineering
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerRoadmap.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2">
                <span className="text-xs font-mono text-cyan-400 block">
                  {item.year}
                </span>
                <h4 className="text-sm font-bold text-white">
                  {item.milestone}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
