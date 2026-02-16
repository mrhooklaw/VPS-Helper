export function Footer() {
  return (
    <footer className="border-t border-dark-700/30 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs text-dark-500 font-mono">
            © {new Date().getFullYear()} KitTheKat
          </span>
        </div>
        <p className="text-[10px] text-dark-600 font-mono tracking-wider">
          DESIGNED & BUILT WITH INTENTION
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs text-dark-500 hover:text-accent transition-colors font-mono"
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}
