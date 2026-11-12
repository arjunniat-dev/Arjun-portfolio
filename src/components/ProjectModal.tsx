import React from 'react';
import { X, ExternalLink, Github, Code, CheckCircle2, Layers, Cpu, BookOpen } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  badge: 'Live Project' | 'Sample Concept' | 'Prototype Blueprint';
  shortDesc: string;
  fullDesc: string;
  image: string;
  tags: string[];
  githubUrl: string;
  keyFeatures: string[];
  techStack: string[];
  architectureNotes: string;
  codeSnippet?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl glass-panel rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0c1228]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-cyan-400">
              {project.badge}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400">Concept Deep-Dive</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-200">
          {/* Top Hero Image Banner */}
          <div className="relative h-48 sm:h-64 w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f24] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-2xl font-bold text-white drop-shadow-md">{project.title}</h3>
              <p className="text-xs text-cyan-300 font-mono mt-0.5">{project.tags.join(' · ')}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2">
              Concept Overview &amp; Learning Scope
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Key Architectural Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono">
              Key Features &amp; System Modules
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture / Design Note */}
          <div className="p-4 rounded-xl bg-[#090d1f] border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono font-medium">
              <Layers className="w-4 h-4" />
              <span>Technical Architecture &amp; Methodology</span>
            </div>
            <p className="leading-relaxed text-slate-300">
              {project.architectureNotes}
            </p>
          </div>

          {/* Code snippet or pseudocode logic if available */}
          {project.codeSnippet && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Code className="w-3.5 h-3.5 text-indigo-400" />
                <span>Core Logic Preview / Pseudocode:</span>
              </div>
              <pre className="p-4 rounded-xl bg-[#050713] border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          )}

          {/* Disclaimer Note */}
          <div className="text-[11px] text-slate-400 border-t border-slate-800/80 pt-4">
            <span className="font-semibold text-slate-300">Transparency Note:</span> This project is documented as a student concept, learning prototype, or verified portfolio build to transparently showcase technical problem-solving and software design without false completion claims.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-[#090e22]">
          <span className="text-xs text-slate-400 font-mono">M. Tirumalai Arjun · GitHub</span>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Repository / Profile</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
