import { useEffect, useState, useRef } from "react";
import { Download, Github, ArrowRight, ChevronDown } from "lucide-react";

// ── Typing effect ────────────────────────────────────────────────────────────
function TypeWriter({ words, speed = 100, pause = 2000 }) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(word.slice(0, charIdx + 1));
          if (charIdx + 1 === word.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setDisplay(word.slice(0, charIdx));
          if (charIdx === 0) {
            setDeleting(false);
            setWordIdx((w) => (w + 1) % words.length);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return (
    <span className="terminal-text">
      {display}
      <span className="animate-pulse text-tokyo-cyan">▎</span>
    </span>
  );
}

// ── Subtle floating particle bg ──────────────────────────────────────────────
function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 35;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width / dpr,
      y: Math.random() * canvas.height / dpr,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.2 + 0.4,
      a: Math.random() * 0.2 + 0.05,
    }));

    const draw = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(189,147,249,${p.a})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}

// ── Scroll indicator ─────────────────────────────────────────────────────────
function ScrollHint() {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce z-20">
      <ChevronDown size={16} className="text-tokyo-text-dim/50" />
    </div>
  );
}

// ── Main hero section ────────────────────────────────────────────────────────
export default function About() {
  return (
    <section id="about" className="relative mb-36 min-h-[85vh] flex items-center">
      {/* Subtle particle bg */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <ParticleField />
        {/* Faint grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        {/* Left — text */}
        <div className="lg:col-span-7 flex flex-col justify-center py-12">

          {/* Eyebrow label */}
          <p className="terminal-text text-[11px] text-tokyo-text-dim uppercase tracking-[0.25em] mb-6">
            Computer Science · RVCE Bengaluru
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-black mb-4 leading-[1.05] tracking-tight">
            <span className="text-white/90">Hi, I'm</span>
            <br />
            <span className="text-tokyo-purple">Vishal Bhat</span>
          </h1>

          {/* Typing subtitle */}
          <div className="text-xl md:text-2xl mb-8 h-9">
            <span className="text-tokyo-text-dim">I build </span>
            <span className="text-tokyo-cyan font-semibold">
              <TypeWriter
                words={[
                  "full-stack applications",
                  "intuitive interfaces",
                  "AI-powered systems",
                  "real-time platforms",
                  "open-source tools",
                ]}
                speed={80}
                pause={1800}
              />
            </span>
          </div>

          {/* Description */}
          <p className="text-base text-tokyo-text-dim max-w-lg leading-relaxed mb-10">
            CS undergrad at{" "}
            <span className="text-white font-medium">RVCE, Bengaluru</span>.
            I like turning ideas into things that actually work — clean code,
            good UX, and software that people enjoy using.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/VishalBhat.pdf"
              download
              className="group flex items-center gap-2 px-6 py-3 bg-tokyo-purple text-tokyo-bg font-bold terminal-text text-sm uppercase rounded-lg hover:bg-tokyo-purple/90 transition-colors duration-200"
            >
              <Download size={15} className="group-hover:translate-y-0.5 transition-transform duration-200" />
              Resume
            </a>
            <a
              href="https://github.com/VishalBhat07"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 border border-tokyo-border text-white/70 terminal-text text-sm uppercase rounded-lg hover:border-tokyo-purple/60 hover:text-white transition-colors duration-200"
            >
              <Github size={15} />
              GitHub
              <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all duration-200" />
            </a>
          </div>
        </div>

        {/* Right — portrait */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden">
            <img
              alt="Vishal Bhat"
              className="w-full h-full object-cover rounded-2xl grayscale contrast-110 brightness-80 hover:grayscale-0 hover:brightness-90 transition-all duration-500"
              src="/pfp2.jpg"
            />
            {/* Natural bottom fade into page bg */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-tokyo-bg/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      <ScrollHint />
    </section>
  );
}
