import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-transparent to-[#07080c] py-24 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-square w-72 max-w-full rounded-3xl bg-white/5 p-1 backdrop-blur-md ring-1 ring-white/10 md:mx-0">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-400/20 via-fuchsia-400/20 to-indigo-400/20 blur-lg" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_60%)]" />
              <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/5 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-24 w-24 animate-spin-slow rounded-full border-2 border-dashed border-cyan-300/50" />
                <style>{`@keyframes spin-slow{from{transform:rotate(0)}to{transform:rotate(360deg)}} .animate-spin-slow{animation:spin-slow 20s linear infinite}`}</style>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About Me</h2>
          <p className="text-white/70">
            I’m Jayesh RL, a passionate AI/ML developer and full‑stack engineer pursuing B.Tech (CSE – AI/ML) at Dayananda Sagar University. I love building intelligent systems that blend deep learning, LLMs, and immersive user experiences.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-white/80 ring-1 ring-white/10">GPA 9.45/10</span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-white/80 ring-1 ring-white/10">Deep Learning</span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-white/80 ring-1 ring-white/10">LLMs</span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-white/80 ring-1 ring-white/10">Edge AI</span>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { k: 'Focus', v: 'DL, LLMs, Edge AI' },
              { k: 'Curiosity', v: 'Systems + Research' },
              { k: 'University', v: 'DSU, Bengaluru' },
            ].map((s) => (
              <div key={s.k} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs uppercase tracking-wider text-white/50">{s.k}</div>
                <div className="mt-1 text-sm text-white/90">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
