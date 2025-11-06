export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-transparent dark:from-brand-900/10" />
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div className="relative container-p pt-24 pb-20 sm:pt-28 sm:pb-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 dark:border-brand-800/70 bg-white/60 dark:bg-white/5 px-3 py-1 text-xs text-brand-700 dark:text-brand-300 shadow-soft backdrop-blur-sm">
                <span>New</span>
                <span className="h-1 w-1 rounded-full bg-brand-500" />
                <span>Adaptive learning + real coaches</span>
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Learn faster with a path designed just for you
              </h1>
              <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                BrightPath personalizes every step?from concept discovery to mastery?blending smart
                practice with 1:1 human support so you make measurable progress every week.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center rounded-lg bg-brand-600 hover:bg-brand-700 text-white px-5 py-3 font-semibold shadow-glow"
                >
                  Get started
                </a>
                <a
                  href="#curriculum"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300/70 dark:border-slate-700 bg-white/60 dark:bg-white/5 hover:bg-white text-slate-900 dark:text-slate-100 px-5 py-3 font-semibold"
                >
                  Explore curriculum
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500"/> Mastery-based</div>
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-sky-500"/> Live support</div>
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-violet-500"/> Weekly reports</div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 shadow-soft backdrop-blur p-4">
                <img src="/hero-illustration.svg" alt="BrightPath product" className="w-full" />
              </div>
              <div className="absolute -z-10 -top-10 -right-10 h-64 w-64 rounded-full bg-brand-200/60 blur-3xl dark:bg-brand-500/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="container-p py-10 sm:py-14">
        <p className="text-center text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">Trusted by learners from</p>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center opacity-80">
          {Array.from({ length: 6 }).map((_, i) => (
            <img key={i} src="/logo.svg" alt="Logo" className="h-8 mx-auto opacity-60" />
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container-p py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Everything you need to master concepts</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            We combine adaptive practice, timely feedback, and human coaching into one simple flow.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Adaptive Practice',
              desc: 'Smart quizzes adjust to you so every minute counts.',
              color: 'bg-emerald-500',
            },
            {
              title: 'Concept Maps',
              desc: 'Visualize progress and know exactly what to learn next.',
              color: 'bg-sky-500',
            },
            {
              title: '1:1 Coaching',
              desc: 'Real experts on-demand to unblock and accelerate you.',
              color: 'bg-violet-500',
            },
            {
              title: 'Weekly Reports',
              desc: 'Clear summaries for learners, parents, and teachers.',
              color: 'bg-amber-500',
            },
            {
              title: 'Projects & Portfolios',
              desc: 'Ship real work and showcase mastery beyond tests.',
              color: 'bg-rose-500',
            },
            {
              title: 'Safe & Secure',
              desc: 'Privacy-first design with transparent data controls.',
              color: 'bg-slate-500',
            },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-white/5 p-6 shadow-soft">
              <div className={`h-9 w-9 rounded-lg ${f.color} mb-4`} />
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="container-p py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">From foundations to advanced challenges</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-prose">
              Start with the basics and progress to projects. Our curriculum spans math, science,
              languages, and coding?with AI-assisted practice and teacher-crafted explanations.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-slate-700 dark:text-slate-200 text-sm">
              {['Math', 'Science', 'Languages', 'Coding', 'Test Prep', 'Creative'].map((i) => (
                <li key={i} className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-brand-500"/> {i}</li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-white/5 shadow-soft p-4">
              <img src="/hero-illustration.svg" alt="Curriculum" className="w-full" />
            </div>
            <div className="absolute -z-10 -bottom-8 -left-8 h-56 w-56 rounded-full bg-brand-200/60 blur-3xl dark:bg-brand-500/20" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-p py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Learners love BrightPath</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">Real stories from our community</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              quote: 'I finally understand algebra. The practice adapts so I never feel stuck.',
              name: 'Alyssa, Grade 9',
            },
            { quote: 'Weekly reports keep me in the loop with real progress.', name: 'Marcus, Parent' },
            { quote: 'As a teacher, I love the concept maps. Game changer.', name: 'Priya, Teacher' },
          ].map((t) => (
            <figure key={t.name} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-white/5 p-6 shadow-soft">
              <blockquote className="text-slate-800 dark:text-slate-100">?{t.quote}?</blockquote>
              <figcaption className="mt-4 text-sm text-slate-600 dark:text-slate-300">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container-p py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Simple, flexible pricing</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">Choose a plan that fits your goals</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { name: 'Starter', price: '$0', desc: 'Try core features', cta: 'Start free' },
            { name: 'Plus', price: '$19/mo', desc: 'Adaptive practice + reports', cta: 'Go Plus' },
            { name: 'Pro', price: '$49/mo', desc: 'Includes 1:1 coaching', cta: 'Go Pro' },
          ].map((p, idx) => (
            <div key={p.name} className={`rounded-2xl border ${idx===1 ? 'border-brand-300 shadow-glow' : 'border-slate-200 dark:border-slate-800'} bg-white/70 dark:bg-white/5 p-6 shadow-soft`}>
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="mt-1 text-3xl font-extrabold">{p.price}</p>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{p.desc}</p>
              <a href="#get-started" className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 font-semibold ${idx===1 ? 'bg-brand-600 hover:bg-brand-700 text-white' : 'border border-slate-300/70 dark:border-slate-700 hover:bg-white'}`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-p py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-slate-200 dark:divide-slate-800">
            {[
              {
                q: 'Who is BrightPath for?',
                a: 'Learners ages 10+ and adults. We also support classrooms with teacher tools.',
              },
              {
                q: 'Do I get a real coach?',
                a: 'Yes. Pro includes chat + scheduled 1:1 sessions with verified educators.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Absolutely. No contracts. Your data is exportable any time.',
              },
            ].map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="container-p pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-brand-200/70 dark:border-brand-800/70 bg-gradient-to-br from-brand-50 to-white dark:from-brand-900/30 dark:to-transparent p-8 sm:p-10 shadow-glow">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold">Ready to find your path?</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Join the waitlist to get early access.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3" action="https://formspree.io/f/mgegbnng" method="POST">
              <input name="email" type="email" required placeholder="Enter your email" className="flex-1 rounded-lg border border-slate-300/70 dark:border-slate-700 bg-white/90 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-400" />
              <button type="submit" className="rounded-lg bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 font-semibold shadow-glow">Join waitlist</button>
            </form>
          </div>
          <img src="/logo.svg" alt="BrightPath" className="absolute -right-6 -bottom-8 w-40 opacity-10 rotate-12" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="container-p py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="BrightPath" className="h-6" />
            <span className="text-sm text-slate-600 dark:text-slate-300">? {new Date().getFullYear()} BrightPath Education</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
            <a href="#features">Features</a>
            <a href="#curriculum">Curriculum</a>
            <a href="#pricing">Pricing</a>
            <a href="#get-started">Get started</a>
          </nav>
        </div>
      </footer>
    </main>
  )
}
