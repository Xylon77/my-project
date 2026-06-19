import { Link } from 'react-router-dom';

function Projects() {
  const projects = [
    {
      title: 'Creative Agency Website',
      description: 'Modern landing page with responsive layout, custom animations, and CTA flow.',
      tags: ['React', 'Tailwind', 'Responsive'],
      link: '#contact',
    },
    {
      title: 'Todo List Interface ',
      description: 'Interactive todo list with charts, cards, and real-time status updates.',
      tags: ['UI/UX', 'Design', 'Analytics'],
      link: '#contact',
    },
    {
      title: 'Personal Blog Experience',
      description: 'Clean blog layout built for readability, mobile-first performance, and easy navigation.',
      tags: ['Content', 'Performance', 'Accessibility'],
      link: '#contact',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        
        <section className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-10">
          <div>
            <div className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-1 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 mb-4">
              Work Showcase
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Selected Projects</h1>
            <p className="mt-3 text-lg text-slate-400">A detailed look at layouts, responsive interfaces, and digital products I have built.</p>
          </div>
          
          <div>
            <Link to="/" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 shadow-lg shadow-emerald-500/10">
              Back to Home
            </Link>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article 
              key={project.title} 
              className="group rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-slate-900/95 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-emerald-400">Featured</p>
                  <span className="text-xs uppercase tracking-[0.24em] text-slate-500">Web</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
              </div>

              <div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-700/80 px-3 py-1 text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-400 transition hover:text-emerald-200">
                  Learn more
                </a>
              </div>
            </article>
          ))}
        </section>

      </main>

    </div>
  );
}

export default Projects;