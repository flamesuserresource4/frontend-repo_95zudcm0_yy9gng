import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
    hue: 'from-cyan-400/30 to-cyan-300/10',
  },
  {
    title: 'Frameworks',
    items: ['FastAPI', 'Spring Boot', 'React', 'Next.js', 'TensorFlow'],
    hue: 'from-fuchsia-400/30 to-fuchsia-300/10',
  },
  {
    title: 'Concepts',
    items: ['LLMs', 'Spiking NNs', 'Quantization', 'EEG/ECG'],
    hue: 'from-indigo-400/30 to-indigo-300/10',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-gradient-to-b from-[#07080c] via-[#0b0e16] to-[#0c111c] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.10),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Skill Galaxy</h2>
          <p className="max-w-xl text-sm text-white/60">Hover to expand constellations. Each node glows as you explore my stack across languages, frameworks, and research concepts.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className={`pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-b ${cat.hue} blur-xl`} />
              <div className="relative">
                <h3 className="mb-4 text-lg font-medium text-white/90">{cat.title}</h3>
                <ul className="flex flex-wrap gap-3">
                  {cat.items.map((s) => (
                    <motion.li
                      key={s}
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 shadow-inner"
                    >
                      <span className="relative z-10">{s}</span>
                      <span className="absolute inset-0 rounded-full bg-white/0 transition group-hover:bg-white/5" />
                      <span className="absolute -inset-1 -z-10 rounded-full bg-gradient-to-r from-cyan-400/20 via-fuchsia-400/10 to-indigo-400/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
