const skillCategories = [
  {
    title: 'Languages',
    icon: '◇',
    skills: [
      { name: 'Luau', level: 95 },
      { name: 'C', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'JavaScript', level: 75 },
      { name: 'Python', level: 70 },
    ],
  },
  {
    title: 'Frontend & Web',
    icon: '◆',
    skills: [
      { name: 'React', level: 75 },
      { name: 'TypeScript', level: 70 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'HTML / CSS', level: 85 },
      { name: 'Vite', level: 75 },
    ],
  },
  {
    title: 'Tools & Infrastructure',
    icon: '○',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'Self-Hosting', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'Linux / Sysadmin', level: 75 },
      { name: 'CI/CD', level: 65 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-accent/[0.02] blur-[100px] -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-accent tracking-wider">03</span>
          <div className="h-px flex-1 bg-dark-700/50" />
          <h2 className="text-sm tracking-[0.2em] uppercase text-dark-400">Skills</h2>
          <div className="h-px flex-1 bg-dark-700/50" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group p-6 rounded-xl border border-dark-700/30 bg-dark-900/30 hover:bg-dark-800/30 hover:border-dark-600/40 transition-all duration-500"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-accent text-lg">{category.icon}</span>
                <h3 className="text-dark-200 text-sm tracking-wide">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-dark-400">{skill.name}</span>
                      <span className="text-[10px] font-mono text-dark-600">{skill.level}%</span>
                    </div>
                    <div className="h-px bg-dark-700/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent/60 to-accent/20 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-dark-600 mt-12 font-mono">
          // always learning, always evolving
        </p>
      </div>
    </section>
  );
}
