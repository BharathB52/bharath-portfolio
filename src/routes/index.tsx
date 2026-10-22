import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bharath B — Software Engineer Portfolio" },
      { name: "description", content: "Portfolio of Bharath B, CSE student building full stack web and AI/ML applications." },
      { property: "og:title", content: "Bharath B — Software Engineer Portfolio" },
      { property: "og:description", content: "Full stack development, Python and machine learning projects by Bharath B." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills: [string, string[]][] = [
  ["Programming", ["Python", "SQL", "Java"]],
  ["Web", ["HTML", "CSS", "JavaScript", "React", "Node.js", "REST APIs"]],
  ["Core CS", ["Data Structures", "OOP", "DBMS", "Operating Systems"]],
  ["AI / ML", ["ML Basics", "Model Training", "Data Preprocessing"]],
  ["Tools", ["Git", "GitHub"]],
  ["Soft Skills", ["Team Leadership", "Communication", "Problem Solving", "Adaptability"]],
];

const projects = [
  { t: "Cloud Translator", s: "Microsoft Azure · Python · REST API", p: ["Built a translation tool using Azure AI Translator to convert text across languages.", "Handles automatic language detection and returns translations through a simple web interface."] },
  { t: "Student Performance Predictor", s: "Machine Learning", p: ["Built ML models to predict student performance from academic data.", "Applied Random Forest, XGBoost and Neural Networks to improve accuracy."] },
  { t: "AI Website Builder", s: "Python · HTML · CSS · Gemini AI", p: ["AI-powered platform that generates complete websites from user inputs.", "Made web creation accessible to non-technical users through automation."] },
  { t: "E-Learning Web App", s: "HTML · CSS · JavaScript · MySQL", p: ["Led a team building a learning platform with videos, quizzes and progress tracking.", "Designed the frontend UI and coordinated backend integration."] },
];

const work = [
  { r: "Full Stack Development Intern", c: "Novitech", d: "1 Month", p: ["Worked on frontend and backend development using web technologies.", "Built and integrated real-world applications."] },
  { r: "JavaScript Intern", c: "Inspire Softech Solutions", d: "2 Weeks", p: ["Developed JavaScript solutions and coding assignments focused on app functionality.", "Strengthened debugging and problem-solving fundamentals."] },
];

const certs = [
  ["Advisory Launchpad Program", "PwC"],
  ["Snow Associate: Platform", "Snowflake"],
  ["Joy of Computing Using Python", "NPTEL"],
  ["IBM Cloud Essentials", "IBM"],
  ["Front-End Web Developer", "Infosys Springboard"],
];

const edu = [
  ["B.E. Computer Science & Engineering", "Rajalakshmi Engineering College, Chennai", "2023 – 2027", "CGPA 7.66"],
  ["HSC", "St. Joseph's Hr. Sec. School, Chengalpattu", "", "88.17%"],
  ["SSLC", "St. Joseph's Hr. Sec. School, Chengalpattu", "", "86.40%"],
];

function Section({ id, n, title, children }: { id: string; n: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <div className="mb-10 flex items-baseline gap-4">
        <span className="font-mono text-sm text-primary">{n}</span>
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        <div className="h-px flex-1 bg-border" />
      </div>
      {children}
    </section>
  );
}

function Index() {
  const nav = ["about", "skills", "projects", "experience", "education", "contact"];
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-bold">BB<span className="text-primary">.</span></a>
          <nav className="hidden gap-6 font-mono text-xs uppercase tracking-wider text-muted-foreground md:flex">
            {nav.map((n) => <a key={n} href={`#${n}`} className="transition-colors hover:text-primary">{n}</a>)}
          </nav>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-28 md:pt-36">
          <p className="font-mono text-sm text-primary">// hello, world — I'm</p>
          <h1 className="mt-4 text-6xl font-bold leading-none tracking-tight md:text-8xl">Bharath B</h1>
          <p className="mt-6 max-w-2xl text-xl text-muted-foreground md:text-2xl">
            Aspiring <span className="text-foreground">software engineer</span> building full stack web apps and
            <span className="text-accent"> AI-powered</span> tools.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">View projects</a>
            <a href="mailto:bharathbaluofficial@gmail.com" className="rounded-full border px-6 py-3 font-medium transition-colors hover:border-primary hover:text-primary">Get in touch</a>
          </div>
          <div className="mt-12 flex flex-wrap gap-6 font-mono text-sm text-muted-foreground">
            <a href="https://github.com/BharathB52" target="_blank" rel="noreferrer" className="hover:text-primary">GitHub ↗</a>
            <a href="https://linkedin.com/in/bharath-b-53817a2a2" target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn ↗</a>
            <span>Chennai, India</span>
          </div>
        </div>
      </section>

      <Section id="about" n="01" title="About">
        <div className="grid gap-8 md:grid-cols-3">
          <p className="text-lg leading-relaxed text-muted-foreground md:col-span-2">
            Skilled in Python, data structures, full stack development, software testing and modern AI applications. I enjoy developing, testing and debugging web and machine learning projects, and I'm committed to continuous learning and delivering reliable, scalable, impactful solutions.
          </p>
          <div className="rounded-xl border bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">Achievement</p>
            <p className="mt-3 font-display text-lg font-semibold">NPTEL Star</p>
            <p className="mt-1 text-sm text-muted-foreground">Recognized by IITs in three categories for consistent performance.</p>
          </div>
        </div>
      </Section>

      <Section id="skills" n="02" title="Skills">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(([g, items]) => (
            <div key={g} className="rounded-xl border bg-card p-6 transition-colors hover:border-primary/60">
              <h3 className="font-mono text-xs uppercase tracking-wider text-primary">{g}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((i) => <span key={i} className="rounded-md bg-secondary px-3 py-1 text-sm">{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" n="03" title="Projects">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article key={p.t} className="group flex flex-col rounded-xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary">
              <span className="font-mono text-4xl font-bold text-muted-foreground/40 transition-colors group-hover:text-primary">0{i + 1}</span>
              <h3 className="mt-4 text-xl font-semibold">{p.t}</h3>
              <p className="mt-1 font-mono text-xs text-accent">{p.s}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {p.p.map((x) => <li key={x}>— {x}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="experience" n="04" title="Experience">
        <div className="space-y-6 border-l pl-8">
          {work.map((w) => (
            <div key={w.c} className="relative">
              <span className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-primary" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">{w.r} <span className="text-primary">@ {w.c}</span></h3>
                <span className="font-mono text-xs text-muted-foreground">{w.d}</span>
              </div>
              <ul className="mt-3 space-y-1 text-muted-foreground">
                {w.p.map((x) => <li key={x}>— {x}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <h3 className="mb-4 mt-16 font-mono text-xs uppercase tracking-wider text-primary">Certifications</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map(([c, o]) => (
            <div key={c} className="rounded-lg border bg-card p-4">
              <p className="font-medium">{c}</p>
              <p className="text-sm text-accent">{o}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="education" n="05" title="Education">
        <div className="divide-y rounded-xl border bg-card">
          {edu.map(([d, s, y, g]) => (
            <div key={d} className="flex flex-wrap items-center justify-between gap-4 p-6">
              <div>
                <h3 className="text-lg font-semibold">{d}</h3>
                <p className="text-sm text-muted-foreground">{s}{y && ` · ${y}`}</p>
              </div>
              <span className="font-mono text-lg text-primary">{g}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-muted-foreground">Beyond academics: active Chess Club member, plus technical workshops and project-based learning.</p>
      </Section>

      <Section id="contact" n="06" title="Contact">
        <div className="rounded-2xl border bg-card p-10 text-center md:p-16">
          <h3 className="text-4xl font-bold md:text-5xl">Let's build something<span className="text-primary">.</span></h3>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">Open to internships, full-time roles and collaborations.</p>
          <a href="mailto:bharathbaluofficial@gmail.com" className="mt-8 inline-block rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">bharathbaluofficial@gmail.com</a>
          <p className="mt-6 font-mono text-sm text-muted-foreground"><a href="tel:+917402035503" className="hover:text-primary">+91 74020 35503</a></p>
        </div>
      </Section>

      <footer className="border-t py-8 text-center font-mono text-xs text-muted-foreground">© 2026 Bharath B</footer>
    </div>
  );
}
