import { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';

const socialLinks = [
  { label: 'GitHub', url: '#', handle: '@KitTheKat' },
  { label: 'LinkedIn', url: '#', handle: '/in/kitthekat' },
  { label: 'Twitter', url: '#', handle: '@KitTheKatDev' },
  { label: 'Discord', url: '#', handle: 'kitthekat__' },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'KitTheKat@kitthekat.xyz';

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/[0.02] blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-accent tracking-wider">04</span>
          <div className="h-px flex-1 bg-dark-700/50" />
          <h2 className="text-sm tracking-[0.2em] uppercase text-dark-400">Contact</h2>
          <div className="h-px flex-1 bg-dark-700/50" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-light text-dark-100 mb-6 leading-tight">
              Let's create something
              <span className="text-accent"> remarkable</span>
              <span className="text-dark-500">.</span>
            </h3>
            <p className="text-sm text-dark-400 leading-relaxed mb-8 max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of something meaningful. Drop me a line and let's start a conversation.
            </p>

            {/* Email */}
            <div className="flex items-center gap-3 p-4 rounded-lg border border-dark-700/30 bg-dark-800/30 group hover:border-accent/20 transition-colors duration-300 mb-8">
              <Mail className="w-4 h-4 text-accent" />
              <span className="text-sm text-dark-200 flex-1 font-mono">{email}</span>
              <button
                onClick={handleCopy}
                className="text-dark-500 hover:text-accent transition-colors p-1"
                aria-label="Copy email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="flex items-center justify-between py-3 border-b border-dark-700/20 group hover:border-dark-600/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-dark-300 group-hover:text-dark-100 transition-colors">
                      {link.label}
                    </span>
                    <span className="text-xs text-dark-600 font-mono">{link.handle}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-dark-600 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs text-dark-500 mb-2 tracking-wide uppercase">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-dark-700/50 focus:border-accent/50 text-sm text-dark-200 py-3 outline-none transition-colors placeholder:text-dark-600"
                />
              </div>
              <div>
                <label className="block text-xs text-dark-500 mb-2 tracking-wide uppercase">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-dark-700/50 focus:border-accent/50 text-sm text-dark-200 py-3 outline-none transition-colors placeholder:text-dark-600"
                />
              </div>
              <div>
                <label className="block text-xs text-dark-500 mb-2 tracking-wide uppercase">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-dark-700/50 focus:border-accent/50 text-sm text-dark-200 py-3 outline-none transition-colors resize-none placeholder:text-dark-600"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 text-sm text-dark-950 bg-accent hover:bg-accent-dim px-6 py-3 rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,163,90,0.2)] mt-2"
              >
                Send Message
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
