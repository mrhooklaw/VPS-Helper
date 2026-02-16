import { MapPin, Calendar, Code2 } from 'lucide-react';
import cardPicture from '../Card Picture.gif';

const stats = [
  { value: '1.5+', label: 'Years Experience' },
  { value: '40+', label: 'Projects Delivered' },
  { value: '20+', label: 'Happy Clients' },
  { value: '50k+', label: 'Lines of Code' },
];

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-accent tracking-wider">01</span>
          <div className="h-px flex-1 bg-dark-700/50" />
          <h2 className="text-sm tracking-[0.2em] uppercase text-dark-400">About</h2>
          <div className="h-px flex-1 bg-dark-700/50" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Image area */}
          <div className="md:col-span-2 relative">
            <div className="aspect-[4/5] rounded-lg bg-dark-800 border border-dark-700/50 overflow-hidden relative group">
              <img src={cardPicture} alt="Portrait" className="w-full h-full object-cover" />

              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/10 rounded-lg transition-colors duration-700" />
            </div>

            {/* Info tags */}
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="inline-flex items-center gap-1.5 text-xs text-dark-400 bg-dark-800/80 border border-dark-700/40 px-3 py-1.5 rounded-full">
                <MapPin className="w-3 h-3" /> Asia
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-dark-400 bg-dark-800/80 border border-dark-700/40 px-3 py-1.5 rounded-full">
                <Calendar className="w-3 h-3" /> Since 2024
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-dark-400 bg-dark-800/80 border border-dark-700/40 px-3 py-1.5 rounded-full">
                <Code2 className="w-3 h-3" /> Full-Stack
              </span>
            </div>
          </div>

          {/* Right - Text */}
          <div className="md:col-span-3 flex flex-col justify-center">
            <h3 className="text-3xl sm:text-4xl font-light text-dark-100 mb-6 leading-tight">
              Building digital products with
              <span className="text-accent"> intention</span> and
              <span className="text-accent"> precision</span>.
            </h3>

            <div className="space-y-4 text-dark-400 text-sm leading-relaxed">
              <p>
                I'm a developer who believes in the power of restraint. Every line of code, every
                pixel, every interaction should serve a purpose. I don't design to impress — I
                design to communicate.
              </p>
              <p>
                With a background in both design and engineering, I bridge the gap between
                aesthetics and functionality. My work spans from crafting fluid web experiences
                to building robust full-stack applications.
              </p>
              <p>
                When I'm not coding, you'll find me exploring typography, reading about
                cognitive psychology, or perfecting my espresso technique.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-10 border-t border-dark-700/30">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-light text-dark-100">{stat.value}</p>
                  <p className="text-xs text-dark-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
