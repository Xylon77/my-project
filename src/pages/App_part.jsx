function App_part() {
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
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">


      <main className="mx-auto max-w-6xl px-6 pb-16 sm:px-8">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-1 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20">
              Portfolio Showcase
            </div>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Welcome to my Portfolio. </h1>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-3xl">I build digital experiences that feel modern, polished, and easy to use.</h2>

              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                A frontend developer learning React and Tailwind CSS. I enjoy turning design ideas into visual reality.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white">
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur-lg">
            <div className="space-y-4">
              <div className="h-56 rounded-3xl bg-linear-to-br from-emerald-500 via-slate-800 to-slate-900 p-6 text-white shadow-inner">
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-100/90">Featured Work</p>
                <h2 className="mt-6 text-3xl font-semibold">Pixel-perfect interfaces</h2>
                <p className="mt-4 text-slate-200">Design systems, responsive layouts, and delightful user experience with every project.</p>
              </div>
              <div className="grid gap-4 rounded-3xl bg-slate-950/80 p-4">
                <div className="flex items-center justify-between gap-4 rounded-3xl bg-slate-900/80 p-4">
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="text-base font-semibold">Remote / Worldwide</p>
                  </div>
                  <span className="inline-flex rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-950">Available</span>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-4 text-slate-300">
                  <p className="text-sm text-slate-400">Tools</p>
                  <p className="mt-2 text-base font-medium">React , Tailwind CSS , Vite , Figma</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-20 rounded-4xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-400">About Me</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Crafting clean interfaces with thoughtful detail.</h2>
            </div>
            <div className="space-y-4 text-slate-300">
              <p>
                I'm a frontend developer who loves building websites and web apps with modern tooling. My focus is on fast performance, beautiful responsive layouts, and clear user interactions.
              </p>
              <p>
                Whether it's a portfolio, a product page, or an internal dashboard, I enjoy simplifying complex information into elegant, approachable designs.
              </p>
            </div>
          </div>
        </section>

        


        <section id="contact" className="mt-20 rounded-4xl border border-emerald-500/15 bg-slate-900/80 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-400">Get in touch</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Let's build something together.</h2>
            </div>
            <a href="mailto:hello@example.com" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
              Email Me
            </a>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300">
            Always open about learning something new along the journey. I love working on projects that prioritize thoughtful design and strong user experience.
          </p>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/70 px-6 py-6 text-center text-sm text-slate-500 sm:px-8">
        Built with React, Vite, and Tailwind CSS.
      </footer>
    </div>
  )
}

export default App_part