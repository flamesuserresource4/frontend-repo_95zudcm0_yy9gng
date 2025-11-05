import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'ThreatPeek',
    tagline: 'AI Security | Full Stack | FastAPI + React',
    desc: 'AI-powered threat scanner and security platform with real-time analytics.',
    demo: '#',
    repo: '#',
  },
  {
    title: 'HealthPredict',
    tagline: 'AI Health | FastAPI + React',
    desc: 'Multi-disease prediction system leveraging ML ensembles and deep learning.',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Humans Care Foundation',
    tagline: 'NGO | Firebase | Full Stack',
    desc: 'Responsive NGO website with Firebase backend and admin tools.',
    demo: '#',
    repo: '#',
  },
];

function ProjectCard({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_-20%,rgba(139,92,246,0.15),transparent_40%),radial-gradient(circle_at_0%_120%,rgba(34,211,238,0.15),transparent_40%)]" />
      <div className="relative">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white/90">{p.title}</h3>
          <div className="flex items-center gap-2">
            <a href={p.repo} target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/70 hover:bg-white/10">
              <Github className="h-4 w-4" />
            </a>
            <a href={p.demo} target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/70 hover:bg-white/10">
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
        <p className="text-sm text-white/60">{p.desc}</p>
        <div className="mt-4 text-xs text-cyan-300/90">{p.tagline}</div>
        <div className="mt-6 h-28 w-full overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-transparent">
          <div className="h-full w-full bg-[linear-gradient(120deg,rgba(34,211,238,0.25)_0%,rgba(139,92,246,0.25)_50%,rgba(99,102,241,0.25)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-gradient-to-b from-[#0c111c] to-[#07080c] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Projects</h2>
          <p className="max-w-xl text-sm text-white/60">Flip through featured builds. Each project blends robust engineering with applied AI.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
