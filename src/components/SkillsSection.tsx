import React, { useState } from 'react';
import {
  Code,
  Brain,
  Cpu,
  Layers,
  Terminal,
  FileCode2,
  Globe,
  Layout,
  FileCode,
  Users,
  MessageSquare,
  Lightbulb,
  CheckCircle,
} from 'lucide-react';

interface SkillItem {
  name: string;
  category: 'languages' | 'aiml' | 'dev' | 'soft';
  status: 'Core Focus' | 'Active Learning' | 'Familiar' | 'Foundational';
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
}

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'languages' | 'aiml' | 'dev' | 'soft'>('all');

  const skills: SkillItem[] = [
    // Programming Languages
    {
      name: 'Python Programming',
      category: 'languages',
      status: 'Core Focus',
      description: 'Primary language for AI/ML experimentation, scripting, data handling, and algorithmic problem solving.',
      icon: Terminal,
      tags: ['Syntax & OOP', 'Data Structures', 'Scripting', 'ML Foundations'],
    },
    {
      name: 'C Programming',
      category: 'languages',
      status: 'Foundational',
      description: 'Understanding low-level memory allocation, pointers, data structures, and computer architecture fundamentals.',
      icon: Code,
      tags: ['Memory Management', 'Pointers', 'System Logic', 'Algorithms'],
    },
    {
      name: 'C++ Programming',
      category: 'languages',
      status: 'Familiar',
      description: 'Object-oriented programming, standard template library (STL), and competitive programming practice.',
      icon: FileCode,
      tags: ['OOP Paradigms', 'STL Containers', 'Algorithmic Speed'],
    },
    {
      name: 'Java',
      category: 'languages',
      status: 'Active Learning',
      description: 'Strong type systems, object-oriented software engineering principles, and multi-paradigm design.',
      icon: FileCode2,
      tags: ['Classes & Inheritance', 'JVM Concepts', 'Application Architecture'],
    },
    {
      name: 'HTML',
      category: 'languages',
      status: 'Familiar',
      description: 'Semantic document structuring, modern HTML5 accessibility, canvas, and web page foundations.',
      icon: Layout,
      tags: ['Semantic Tags', 'Document Object Model', 'Accessibility'],
    },
    {
      name: 'CSS',
      category: 'languages',
      status: 'Familiar',
      description: 'Responsive layouts, modern Flexbox & Grid, CSS transitions, animations, and Tailwind styling.',
      icon: Layout,
      tags: ['Flexbox & Grid', 'Tailwind CSS', 'Responsive UI'],
    },
    {
      name: 'JavaScript',
      category: 'languages',
      status: 'Active Learning',
      description: 'Client-side event handling, asynchronous programming (Promises, fetch), and dynamic DOM interaction.',
      icon: Code,
      tags: ['ES6+ Syntax', 'Async / Await', 'DOM Manipulation'],
    },

    // AI & ML
    {
      name: 'Artificial Intelligence',
      category: 'aiml',
      status: 'Core Focus',
      description: 'Studying core heuristics, intelligent agents, search algorithms, state spaces, and knowledge representation.',
      icon: Brain,
      tags: ['Intelligent Agents', 'Search & Optimization', 'AI Ethics'],
    },
    {
      name: 'Machine Learning',
      category: 'aiml',
      status: 'Active Learning',
      description: 'Exploring supervised & unsupervised learning principles, regression, classification, and model metrics.',
      icon: Cpu,
      tags: ['Data Preprocessing', 'Model Training', 'Evaluation Metrics'],
    },

    // Development
    {
      name: 'Web Development',
      category: 'dev',
      status: 'Familiar',
      description: 'Building modern responsive web interfaces, component modularity, and client-server connectivity.',
      icon: Globe,
      tags: ['Modern React', 'SPA Architecture', 'Clean UI Engineering'],
    },
    {
      name: 'Software Development',
      category: 'dev',
      status: 'Active Learning',
      description: 'Writing maintainable, modular, and readable code with version control using Git and collaborative workflows.',
      icon: Layers,
      tags: ['Git Version Control', 'Modular Design', 'Debugging & Testing'],
    },

    // Soft & Professional Skills
    {
      name: 'Problem Solving',
      category: 'soft',
      status: 'Core Focus',
      description: 'Breaking down complex algorithmic hurdles into clean, testable sub-problems with structured logic.',
      icon: Lightbulb,
      tags: ['Algorithmic Thinking', 'Debugging', 'Analytical Breakdown'],
    },
    {
      name: 'Communication',
      category: 'soft',
      status: 'Familiar',
      description: 'Articulating technical concepts clearly in presentations, documentation, and technical team discussions.',
      icon: MessageSquare,
      tags: ['Technical Writing', 'Presentation', 'Active Listening'],
    },
    {
      name: 'Teamwork',
      category: 'soft',
      status: 'Familiar',
      description: 'Collaborating actively in study cohorts, group assignments, code reviews, and peer programming sessions.',
      icon: Users,
      tags: ['Pair Programming', 'Peer Feedback', 'Collaborative Mindset'],
    },
  ];

  const filteredSkills =
    activeFilter === 'all' ? skills : skills.filter((s) => s.category === activeFilter);

  const getStatusColor = (status: SkillItem['status']) => {
    switch (status) {
      case 'Core Focus':
        return 'text-cyan-400 border-cyan-500/30 bg-cyan-950/30';
      case 'Active Learning':
        return 'text-indigo-400 border-indigo-500/30 bg-indigo-950/30';
      case 'Familiar':
        return 'text-blue-400 border-blue-500/30 bg-blue-950/30';
      case 'Foundational':
        return 'text-purple-400 border-purple-500/30 bg-purple-950/30';
      default:
        return 'text-slate-400 border-slate-700 bg-slate-900';
    }
  };

  return (
    <section id="skills" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider mb-2">
            <span>TECHNICAL CAPABILITIES</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">SKILLS INVENTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills &amp; Technical Competencies
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            A transparent overview of programming languages, machine learning concepts, and professional disciplines I am actively mastering during my B.Tech studies.
          </p>
        </div>

        {/* Interactive Filter Tabs (functional button controls) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-[#0a0f24] border border-slate-800 rounded-xl max-w-fit">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            All Skills ({skills.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('languages')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === 'languages'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Languages (7)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('aiml')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === 'aiml'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            AI &amp; Machine Learning (2)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('dev')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === 'dev'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Development (2)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('soft')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === 'soft'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Core &amp; Soft Skills (3)
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Icon and Status Stage */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/50 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Status Badge without pill enclosures - clean unboxed label */}
                    <div className="text-right">
                      <span className="text-[11px] font-mono tracking-wider text-cyan-300">
                        {skill.status}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Sub-areas / tags rendered as clean unboxed text with separators */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                    {skill.tags.map((tag, tIdx) => (
                      <React.Fragment key={tIdx}>
                        <span>{tag}</span>
                        {tIdx < skill.tags.length - 1 && <span className="text-slate-600" aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
