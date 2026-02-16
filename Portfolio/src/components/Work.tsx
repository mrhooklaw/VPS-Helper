import { useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  color: string;
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Lumina',
    subtitle: 'Design System',
    description:
      'A comprehensive design system built for scale. Includes 200+ components, dark mode, and accessibility-first approach.',
    tags: ['React', 'TypeScript', 'Storybook', 'Figma'],
    year: '2024',
    color: 'from-violet-500/10 to-indigo-500/10',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Meridian',
    subtitle: 'Analytics Platform',
    description:
      'Real-time analytics dashboard for e-commerce businesses. Features predictive insights and custom report generation.',
    tags: ['Next.js', 'D3.js', 'PostgreSQL', 'Redis'],
    year: '2024',
    color: 'from-emerald-500/10 to-teal-500/10',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Vanta',
    subtitle: 'Creative Studio',
    description:
      'A portfolio and CMS platform for creative professionals. Minimal interface with powerful customization.',
    tags: ['Svelte', 'Tailwind', 'Supabase', 'Vercel'],
    year: '2023',
    color: 'from-amber-500/10 to-orange-500/10',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Cipher',
    subtitle: 'Security Dashboard',
    description:
      'Enterprise security monitoring tool with real-time threat detection and automated incident response workflows.',
    tags: ['React', 'Go', 'WebSocket', 'Docker'],
    year: '2023',
    color: 'from-rose-500/10 to-pink-500/10',
    liveUrl: '#',
    githubUrl: '#',
  },
];

export function Work() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-accent tracking-wider">02</span>
          <div className="h-px flex-1 bg-dark-700/50" />
          <h2 className="text-sm tracking-[0.2em] uppercase text-dark-400">Selected Work</h2>
          <div className="h-px flex-1 bg-dark-700/50" />
        </div>

        {/* Projects Grid */}
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl border border-dark-700/30 bg-dark-900/50 hover:bg-dark-800/50 hover:border-dark-600/50 transition-all duration-500 overflow-hidden"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div className="relative p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Number */}
                <span className="text-xs font-mono text-dark-600 group-hover:text-dark-500 transition-colors w-8">
                  {String(project.id).padStart(2, '0')}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-xl text-dark-100 font-light tracking-tight group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-dark-500 font-mono">— {project.subtitle}</span>
                  </div>
                  <p
                    className={`text-sm text-dark-500 leading-relaxed max-w-lg transition-all duration-500 ${
                      hoveredId === project.id
                        ? 'opacity-100 max-h-20'
                        : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-wider uppercase text-dark-500 bg-dark-800/60 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Year */}
                <span className="text-xs font-mono text-dark-500 hidden sm:block">{project.year}</span>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    className="text-dark-500 hover:text-dark-200 transition-colors p-2"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1 text-xs text-dark-400 hover:text-accent border border-dark-700/50 hover:border-accent/30 px-3 py-1.5 rounded transition-all duration-300"
                  >
                    View
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
