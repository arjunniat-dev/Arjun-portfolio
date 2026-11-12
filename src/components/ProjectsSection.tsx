import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Eye, Code, Layers } from 'lucide-react';
import { ProjectData, ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      id: 'ai-chatbot',
      title: 'AI-Based Chatbot',
      badge: 'Sample Concept',
      shortDesc:
        'A conversational artificial intelligence assistant concept designed to process user queries, maintain context, and generate structured solutions using prompt engineering and NLP logic.',
      fullDesc:
        'The AI-Based Chatbot is a concept model designed to demonstrate conversational AI workflows. It explores intent classification, dialogue state tracking, and integration with modern LLM interfaces to assist students with code queries, university coursework, and technical troubleshooting.',
      image: '/src/assets/images/project_ai_chatbot_1794466992547.jpg',
      tags: ['Python', 'Natural Language Processing', 'AI Prompts', 'API Integration'],
      githubUrl: 'https://github.com/arjunniat-dev',
      keyFeatures: [
        'Contextual intent detection for technical inquiries',
        'Multi-turn conversation flow with state retention',
        'Modular response templates for coding and theory explanations',
        'RESTful API communication with backend models',
      ],
      techStack: ['Python 3', 'NLP Tokenizers', 'FastAPI / Flask', 'JSON Payloads'],
      architectureNotes:
        'Designed with a decoupled client-server architecture where user inputs are sanitized, embedded for intent matching, routed to a response engine, and streamed back to the interactive UI.',
      codeSnippet: `# Conceptual Intent Dispatcher
def handle_user_query(prompt: str, session_context: dict) -> dict:
    intent = classify_intent(prompt)
    if intent == "explain_algorithm":
        return generate_explanation(prompt, session_context)
    elif intent == "debug_code":
        return analyze_code_syntax(prompt)
    return fallback_general_response(prompt)`,
    },
    {
      id: 'ml-prediction',
      title: 'Machine Learning Prediction System',
      badge: 'Sample Concept',
      shortDesc:
        'A predictive data modeling blueprint exploring linear regression, classification trees, and feature engineering to analyze statistical trends on structured datasets.',
      fullDesc:
        'This sample system explores the end-to-end machine learning lifecycle: data normalization, feature selection, model training, evaluation with Mean Squared Error (MSE) and R² metrics, and output visualization on tabular data.',
      image: '/src/assets/images/project_ml_prediction_1794466992317.jpg',
      tags: ['Machine Learning', 'Python', 'Data Analytics', 'Model Evaluation'],
      githubUrl: 'https://github.com/arjunniat-dev',
      keyFeatures: [
        'Data cleaning and missing value imputation pipelines',
        'Supervised regression and classification benchmark comparisons',
        'Performance telemetry: R² score, RMSE, and confusion matrix',
        'Visual charting of predicted vs. actual ground truth metrics',
      ],
      techStack: ['Python', 'Pandas & NumPy Concepts', 'Scikit-Learn Models', 'Matplotlib'],
      architectureNotes:
        'Structured around a standard ML training pipeline: Raw Data Ingestion -> Preprocessing & Normalization -> Train/Validation Split -> Estimator Fitting -> Metric Evaluation.',
      codeSnippet: `# Conceptual Model Evaluation
from sklearn.linear_model import Ridge
from sklearn.metrics import mean_squared_error, r2_score

model = Ridge(alpha=1.0)
model.fit(X_train, y_train)
y_pred = model.predict(X_test)
print(f"R2 Score: {r2_score(y_test, y_pred):.4f}")
print(f"MSE: {mean_squared_error(y_test, y_pred):.4f}")`,
    },
    {
      id: 'portfolio-website',
      title: 'Personal Portfolio Website',
      badge: 'Live Project',
      shortDesc:
        'A futuristic, dark-themed developer portfolio crafted with React, Tailwind CSS, animated canvas neural network graphs, and full responsive compatibility across all devices.',
      fullDesc:
        'This active, production-grade personal portfolio serves as the primary digital showcase for M. Tirumalai Arjun. It incorporates the Universal Frontend Design constitution, anti-slop guidelines, real-time interactive canvas background, typewriter roles, and accessible contact pathways.',
      image: '/src/assets/images/neural_ai_hero_visual_1794466990964.jpg',
      tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Canvas Graphics'],
      githubUrl: 'https://github.com/arjunniat-dev',
      keyFeatures: [
        'Interactive real-time canvas simulating neural synapsing nodes',
        'Custom typewriter role animation for professional identity',
        'Modern vertical academic timeline and career development roadmap',
        'Functional contact system with copyable details and direct mailto',
      ],
      techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'HTML5 Canvas'],
      architectureNotes:
        'Zero-dependency single-page application built with modular React functional components, clean TypeScript interfaces, and WCAG AA accessible contrast.',
      codeSnippet: `// High-Performance Neural Canvas Node Connection
const distance = Math.hypot(p.x - p2.x, p.y - p2.y);
if (distance < maxDistance) {
  const lineAlpha = (1 - distance / maxDistance) * 0.22;
  ctx.strokeStyle = \`rgba(99, 102, 241, \${lineAlpha})\`;
  ctx.stroke();
}`,
    },
    {
      id: 'python-calculator',
      title: 'Python Calculator',
      badge: 'Sample Concept',
      shortDesc:
        'A modular mathematical evaluation engine and calculation tool implementing arithmetic parsing, error recovery, and scientific math functions in Python.',
      fullDesc:
        'A comprehensive exploration of algorithmic parsing and operator precedence. The Python Calculator demonstrates how mathematical expressions are tokenized, parsed with the Shunting-Yard or recursive-descent algorithms, and safely evaluated without dangerous eval() calls.',
      image: '/src/assets/images/project_ai_chatbot_1794466992547.jpg',
      tags: ['Python', 'Algorithms', 'Parser Logic', 'CLI / GUI'],
      githubUrl: 'https://github.com/arjunniat-dev',
      keyFeatures: [
        'Safe arithmetic expression parsing with operator precedence (PEMDAS)',
        'Support for trigonometric, exponential, and logarithmic functions',
        'Strict input sanitization and division-by-zero exception guards',
        'Interactive command-line interface with history tracking',
      ],
      techStack: ['Python 3', 'Math Standard Library', 'AST / Tokenizer', 'Unit Tests'],
      architectureNotes:
        'Designed with strict separation between Lexer (token identification), Parser (abstract syntax tree generation), and Evaluator (safe calculation).',
      codeSnippet: `class MathEvaluator:
    def evaluate(self, expression: str) -> float:
        tokens = self.tokenize(expression)
        ast = self.build_ast(tokens)
        return self.compute(ast)
        
    def compute(self, node):
        # Disallow unsafe execution; compute through verified AST nodes
        ...`,
    },
    {
      id: 'student-mgmt-system',
      title: 'Student Management System',
      badge: 'Sample Concept',
      shortDesc:
        'An educational software architecture concept for organizing student profiles, academic course records, attendance tracking, and performance reports.',
      fullDesc:
        'The Student Management System is an architectural design designed to model university administration data. It focuses on relational schemas, CRUD operations, student profile indexing, and GPA calculation modules.',
      image: '/src/assets/images/project_ml_prediction_1794466992317.jpg',
      tags: ['Software Engineering', 'Database Design', 'CRUD Operations', 'OOP'],
      githubUrl: 'https://github.com/arjunniat-dev',
      keyFeatures: [
        'Student profile registration and academic enrollment tracking',
        'Course grade point average (GPA) computation engine',
        'Attendance logging and automated notification threshold alerts',
        'Clean tabular reports exportable for departmental review',
      ],
      techStack: ['Python / Java', 'SQL Schema Blueprint', 'Relational Models', 'Data Validation'],
      architectureNotes:
        'Structured around Domain-Driven Design (DDD) with clear entities: Student, Course, Enrollment, GradeRecord, and AttendanceLedger.',
      codeSnippet: `class StudentRecord:
    def __init__(self, student_id: str, name: str, program: str):
        self.student_id = student_id
        self.name = name
        self.program = program
        self.courses = {}

    def calculate_gpa(self) -> float:
        total_credits = sum(c.credits for c in self.courses.values())
        weighted_points = sum(c.credits * c.grade_point for c in self.courses.values())
        return round(weighted_points / total_credits, 2) if total_credits > 0 else 0.0`,
    },
  ];

  return (
    <section id="projects" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider mb-2">
            <span>PROJECT PORTFOLIO</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">BLUEPRINTS &amp; BUILDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured Projects &amp; Concept Blueprints
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            A curated gallery of beginner-friendly project ideas, algorithmic blueprints, and working software. Marked transparently as sample concepts and live prototypes to reflect my honest learning milestones.
          </p>
        </div>

        {/* Notice of Transparency */}
        <div className="mb-10 p-4 rounded-xl bg-[#0b1026] border border-cyan-900/40 flex items-start gap-3 text-xs text-slate-300">
          <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
          <div>
            <span className="font-semibold text-cyan-300">Project Transparency Note:</span> All items below represent foundational student concepts, prototype blueprints, or live portfolio code designed to practice software engineering and machine learning principles.
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel glass-panel-hover rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-950 border-b border-slate-800">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f24] via-transparent to-black/20" />

                  {/* Project status label - unboxed text */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded border border-slate-700/80 text-[11px] font-mono text-cyan-300">
                    {proj.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {proj.shortDesc}
                  </p>

                  {/* Clean unboxed tags with typographic separators */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                    {proj.tags.map((tag, tIdx) => (
                      <React.Fragment key={tIdx}>
                        <span>{tag}</span>
                        {tIdx < proj.tags.length - 1 && <span className="text-slate-600" aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(proj)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer py-2"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Explore Concept</span>
                </button>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors py-2"
                  title="View on GitHub"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
