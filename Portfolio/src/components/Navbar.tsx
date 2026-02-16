import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-950/80 backdrop-blur-xl border-b border-dark-700/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-dark-100 font-medium tracking-tight text-lg group flex items-center gap-2"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-accent group-hover:shadow-[0_0_12px_rgba(196,163,90,0.6)] transition-shadow duration-300" />
          <span className="font-mono text-sm text-dark-300 group-hover:text-accent transition-colors duration-300">
            AM
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors duration-300 relative ${
                active === link.href.slice(1)
                  ? 'text-accent'
                  : 'text-dark-400 hover:text-dark-200'
              }`}
            >
              {link.label}
              {active === link.href.slice(1) && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent/50" />
              )}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm text-dark-950 bg-accent hover:bg-accent-dim px-4 py-2 rounded transition-colors duration-300"
        >
          Let's talk
        </a>
      </div>
    </nav>
  );
}
