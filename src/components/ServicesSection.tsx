import React from 'react';
import {
  Globe,
  Brain,
  Terminal,
  Code2,
  LayoutTemplate,
  Lightbulb,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface CapabilityItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  learningGoals: string[];
  focusPillars: string;
}

export const ServicesSection: React.FC = () => {
  const capabilities: CapabilityItem[] = [
    {
      id: 'web-dev',
      title: 'Web Development',
      shortDesc:
        'Crafting modern, responsive single-page web applications using React, modern CSS, and component architectures.',
      icon: Globe,
      learningGoals: [
        'Component state management & modularity',
        'Responsive layout engineering across screen sizes',
        'Clean client-side routing & API integration',
      ],
      focusPillars: 'React · Tailwind CSS · TypeScript · Modern Web',
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      shortDesc:
        'Exploring statistical learning theory, neural network architectures, model training logic, and data preprocessing pipelines.',
      icon: Brain,
      learningGoals: [
        'Supervised & unsupervised learning models',
        'Tensor operations & computational graphs',
        'Model accuracy evaluation & hyperparameter tuning',
      ],
      focusPillars: 'Neural Networks · Data Pipelines · Predictive Algorithms',
    },
    {
      id: 'python-prog',
      title: 'Python Programming',
      shortDesc:
        'Writing clean, Pythonic code for algorithm implementations, mathematical scripts, data manipulation, and automation.',
      icon: Terminal,
      learningGoals: [
        'Object-oriented programming in Python',
        'Efficient algorithmic structures & complexity',
        'Libraries for scientific computing & ML logic',
      ],
      focusPillars: 'Python 3 · OOP · Automation · Scientific Scripting',
    },
    {
      id: 'software-dev',
      title: 'Software Development',
      shortDesc:
        'Applying foundational computer science principles to build maintainable, well-structured software with version control.',
      icon: Code2,
      learningGoals: [
        'Git branch workflows and GitHub collaboration',
        'Clean code principles and modular separation',
        'Automated testing & debugging methodologies',
      ],
      focusPillars: 'Git & GitHub · Modular Architecture · Debugging',
    },
    {
      id: 'website-design',
      title: 'Website Design',
      shortDesc:
        'Designing intuitive user interfaces emphasizing strong typography, balanced visual hierarchy, and accessible dark themes.',
      icon: LayoutTemplate,
      learningGoals: [
        'Visual hierarchy and spacing discipline',
        'Dark mode contrast & WCAG AA standards',
        'Fluid animations and responsive typography',
      ],
      focusPillars: 'UI/UX Aesthetics · Typography · Interaction Design',
    },
    {
      id: 'innovative-projects',
      title: 'Innovative Technology Projects',
      shortDesc:
        'Brainstorming and prototyping emerging technology concepts at the intersection of AI, automated tools, and developer utilities.',
      icon: Lightbulb,
      learningGoals: [
        'Rapid prototyping of technological proof-of-concepts',
        'Collaborative research in student developer hackathons',
        'Experimenting with multimodal intelligence paradigms',
      ],
      focusPillars: 'Proof of Concepts · Hackathons · Exploratory AI',
    },
  ];

  return (
    <section id="services" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider mb-2">
            <span>AREAS OF INTEREST</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">DEVELOPING CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Areas of Interest &amp; Core Focus
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            As a motivated first-year engineering student, I am actively building competencies across these technological disciplines through dedicated coursework, project building, and internship training.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-slate-800 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top ambient glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-700/80 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/50 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {item.shortDesc}
                  </p>

                  {/* Learning Goals list */}
                  <div className="space-y-2 mb-6 text-xs text-slate-300">
                    {item.learningGoals.map((goal, gIdx) => (
                      <div key={gIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Focus pillars footer */}
                <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
                  <span>{item.focusPillars}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
