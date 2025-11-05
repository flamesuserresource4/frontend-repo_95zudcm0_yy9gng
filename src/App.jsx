import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center">
      <div className="pointer-events-auto mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
        <a href="#home" className="rounded-full px-3 py-1 hover:text-white">Home</a>
        <span className="text-white/20">•</span>
        <a href="#about" className="rounded-full px-3 py-1 hover:text-white">About</a>
        <span className="text-white/20">•</span>
        <a href="#skills" className="rounded-full px-3 py-1 hover:text-white">Skills</a>
        <span className="text-white/20">•</span>
        <a href="#projects" className="rounded-full px-3 py-1 hover:text-white">Projects</a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative w-full bg-[#07080c] py-12 text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-white/70">
          © {new Date().getFullYear()} Jayesh RL — Built with React, Tailwind & Framer Motion.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#07080c] font-inter antialiased">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
