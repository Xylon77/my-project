import { Link } from 'react-router-dom';

function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      description: "Building responsive, dynamic, and accessible web experiences.",
      items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS']
    },
    {
      category: "Programming & Tooling",
      description: "Systems programming logic and contemporary build setups.",
      items: ['C', 'Vite', 'Figma', 'Git / GitHub']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        
        <section className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-10">
          <div>
            <div className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-1 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 mb-4">
              Core Competencies
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">My Technical Skills</h1>
            <p className="mt-3 text-lg text-slate-400">Knowledge comes at a cost, but mastery is built over time.</p>
          </div>
          
          <div>
            <Link to="/" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 shadow-lg shadow-emerald-500/10">
              Back to Home
            </Link>
          </div>
        </section>

        <section className="mt-16 grid gap-8 md:grid-cols-2">
          {skillCategories.map((group) => (
            <div 
              key={group.category} 
              className="rounded-4xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl flex flex-col justify-between"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-400">{group.category}</p>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{group.description}</p>
                
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {group.items.map((skill) => (
                    <div 
                      key={skill} 
                      className="rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-sm font-medium text-slate-200 shadow-sm shadow-black/20 hover:border-emerald-500/30 transition duration-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-4xl border border-emerald-500/15 bg-slate-900/80 p-8 text-center shadow-2xl shadow-black/20 backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-white">Always Learning</h3>
          <p className="mt-3 mx-auto max-w-2xl text-sm leading-7 text-slate-300">
            Currently deep-diving into frontend architectures and advanced optimization. I enjoy exploring how clean, modular layout algorithms and logic structures translate to optimal UI rendering speeds.
          </p>
        </section>

      </main>
    </div>
  );
}

export default Skills;