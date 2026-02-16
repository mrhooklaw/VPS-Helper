import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(196,163,90,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(196,163,90,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-dark-700/60 bg-dark-800/40 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-xs text-dark-300 tracking-wide">Available for work</span>
        </div>

        {/* Name */}
        <h1
          className="animate-fade-in-up text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-dark-100 mb-6"
          style={{ animationDelay: '0.15s' }}
        >
          Kit<span className="text-accent font-normal">TheKat</span>
        </h1>

        {/* Title */}
        <p
          className="animate-fade-in-up text-lg sm:text-xl text-dark-400 font-light max-w-xl mx-auto mb-4"
          style={{ animationDelay: '0.3s' }}
        >
          Creative Developer & Digital Craftsman
        </p>

        {/* Subtle description */}
        <p
          className="animate-fade-in-up text-sm text-dark-500 max-w-md mx-auto mb-12 leading-relaxed"
          style={{ animationDelay: '0.45s' }}
        >
          Crafting minimal, purposeful digital experiences where design meets engineering precision.
        </p>

        {/* CTA */}
        <div
          className="animate-fade-in-up flex items-center justify-center gap-6"
          style={{ animationDelay: '0.6s' }}
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 text-sm text-dark-950 bg-accent hover:bg-accent-dim px-6 py-3 rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,163,90,0.2)]"
          >
            View Work
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#about"
            className="text-sm text-dark-400 hover:text-dark-200 transition-colors border-b border-dark-600 hover:border-dark-400 pb-0.5"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <span className="text-[10px] tracking-[0.2em] uppercase text-dark-500">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-dark-500 to-transparent animate-subtle-pulse" />
      </div>
    </section>
  );
}
