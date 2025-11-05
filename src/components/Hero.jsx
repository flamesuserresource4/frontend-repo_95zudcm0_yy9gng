import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, FileText, FolderOpen, ChevronDown } from 'lucide-react';

const buttons = [
  { label: 'GitHub', href: 'https://github.com/Aspect022', Icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/jayesh-rl-748059291', Icon: Linkedin },
  { label: 'Resume', href: 'https://drive.google.com', Icon: FileText },
  { label: 'Projects', href: '#projects', Icon: FolderOpen },
];

function useTyping(text, speed = 40, pause = 1400) {
  const [output, setOutput] = useState('');
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => {
        const next = i + direction;
        if (next >= text.length) {
          setDirection(-1);
          return text.length;
        }
        if (next <= 0) {
          setDirection(1);
          return 0;
        }
        return next;
      });
    }, speed);
    return () => clearInterval(id);
  }, [text.length, speed, direction]);

  useEffect(() => {
    if (index === text.length || index === 0) {
      const t = setTimeout(() => {}, pause);
      return () => clearTimeout(t);
    }
  }, [index, text.length, pause]);

  useEffect(() => {
    setOutput(text.slice(0, index));
  }, [index, text]);

  return output;
}

export default function Hero() {
  const phrase = useMemo(
    () => "Hey, I’m Jayesh RL — AI Developer | Full-Stack Engineer | Researcher.",
    []
  );
  const typed = useTyping(phrase, 28, 1200);
  const containerRef = useRef(null);
  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);

  const onMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setMx(((x - cx) / cx) * 8);
    setMy(((y - cy) / cy) * 8);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={onMouseMove}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#07080c] via-[#0a0c12] to-[#0b0e16] text-white"
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.10),rgba(139,92,246,0.05)_40%,transparent_70%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
          style={{ transform: `perspective(800px) rotateX(${my * -0.3}deg) rotateY(${mx * 0.3}deg)` }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur-md ring-1 ring-white/10">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            <span className="text-sm text-cyan-300/90">Building the future with AI</span>
          </div>

          <h1 className="text-balance bg-gradient-to-br from-white via-white to-cyan-200 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl">
            Crafting Intelligent Experiences
          </h1>

          <p className="mx-auto max-w-3xl text-balance text-lg text-white/70">
            <span className="align-middle font-mono text-white/90">{typed}</span>
            <span className="ml-1 inline-block h-6 w-[2px] translate-y-1 bg-cyan-300/80 align-middle animate-pulse" />
          </p>

          <div className="pointer-events-auto mx-auto flex flex-wrap items-center justify-center gap-3">
            {buttons.map(({ label, href, Icon }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('#') ? undefined : '_blank'}
                rel="noreferrer"
                className="group relative inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-colors hover:bg-white/10"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ transform: `translate(${mx * 0.6}px, ${my * 0.6}px)` }}
              >
                <Icon className="h-5 w-5 text-cyan-300 group-hover:text-cyan-200" />
                {label}
                <span className="absolute inset-0 -z-[0] rounded-xl bg-gradient-to-r from-cyan-400/20 via-fuchsia-400/10 to-indigo-400/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <a href="#about" className="absolute bottom-6 inline-flex flex-col items-center text-white/60">
          <ChevronDown className="h-6 w-6 animate-bounce" />
          <span className="text-xs">Scroll Down</span>
        </a>
      </div>
    </section>
  );
}
