import { useEffect, useState, useRef } from "react";
import { Download, Github, ChevronDown } from "lucide-react";

// ── Animated title with glitch effect ────────────────────────────────────────
function GlitchText({ text, className = "" }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span
        className="absolute top-0 left-0 z-0 opacity-70"
        style={{
          color: "#bb9af7",
          clipPath: "inset(20% 0 30% 0)",
          animation: "glitch-1 2.5s infinite linear alternate",
        }}
      >
        {text}
      </span>
      <span
        className="absolute top-0 left-0 z-0 opacity-50"
        style={{
          color: "#7dcfff",
          clipPath: "inset(60% 0 0 0)",
          animation: "glitch-2 3s infinite linear alternate-reverse",
        }}
      >
        {text}
      </span>
    </span>
  );
}

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

// ── Floating particle dots ───────────────────────────────────────────────────
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

    const COUNT = 60;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width / dpr,
      y: Math.random() * canvas.height / dpr,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      a: Math.random() * 0.4 + 0.1,
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
        ctx.fillStyle = `rgba(125,207,255,${p.a})`;
        ctx.fill();
      });

      // Draw lines between close particles
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(187,154,247,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

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
      <span className="terminal-text text-[9px] text-tokyo-text-dim uppercase tracking-widest">
        Scroll
      </span>
      <ChevronDown size={14} className="text-tokyo-text-dim" />
    </div>
  );
}

// ── Main hero section ────────────────────────────────────────────────────────
export default function About() {
  return (
    <section id="about" className="relative mb-36 min-h-[85vh] flex items-center">
      {/* Full-width particle bg */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <ParticleField />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        {/* Left — text */}
        <div className="lg:col-span-7 flex flex-col justify-center py-12">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-2 animate-ping rounded-full bg-tokyo-cyan opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-tokyo-cyan" />
            </span>
            <span className="terminal-text text-[10px] text-tokyo-cyan uppercase tracking-[0.3em]">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-black mb-3 leading-[1.1] tracking-tight">
            <span className="text-white/90">Hi, I'm</span>
            <br />
            <GlitchText
              text="Vishal Bhat"
              className="text-tokyo-cyan text-glow-cyan"
            />
          </h1>

          {/* Typing subtitle */}
          <div className="text-xl md:text-2xl mb-8 h-9">
            <span className="text-tokyo-text-dim">I build </span>
            <span className="text-tokyo-purple font-bold">
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
            Computer Science student at{" "}
            <span className="text-tokyo-purple font-semibold">RVCE</span>.
            Specialising in full-stack development{" "}
            <span className="text-tokyo-cyan">(MERN)</span> with 50+ projects
            — from crypto trackers and AI apps to real-time chat systems and
            hardware hacks.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/VishalBhat.pdf"
              download
              className="group flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-tokyo-purple to-tokyo-cyan text-tokyo-bg font-bold terminal-text text-sm uppercase rounded-lg hover:shadow-[0_0_25px_rgba(187,154,247,0.4)] transition-all duration-300"
            >
              <Download size={16} className="group-hover:animate-bounce" />
              Download Resume
            </a>
            <a
              href="https://github.com/VishalBhat07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 border border-tokyo-border text-white/80 terminal-text text-sm uppercase rounded-lg hover:border-tokyo-cyan hover:text-tokyo-cyan hover:shadow-[0_0_15px_rgba(125,207,255,0.15)] transition-all duration-300"
            >
              <Github size={16} /> Visit GitHub
            </a>
          </div>
        </div>

        {/* Right — portrait */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden group">
            {/* Purple glow behind */}
            <div className="absolute -inset-1 bg-gradient-to-br from-tokyo-purple/30 via-transparent to-tokyo-cyan/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              alt="Vishal Bhat Portrait"
              className="relative z-10 w-full h-full object-cover rounded-2xl grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-700"
              src="/pfp.png"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-t from-tokyo-bg via-transparent to-transparent" />
            {/* Bottom badge */}
            <div className="absolute bottom-5 left-5 z-30 terminal-text text-[10px] text-tokyo-cyan bg-tokyo-bg/80 backdrop-blur-sm px-3 py-1.5 border border-tokyo-cyan/30 rounded-lg flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-tokyo-cyan animate-pulse" />
              IDENTITY VERIFIED
            </div>
          </div>
        </div>
      </div>

      <ScrollHint />
    </section>
  );
}
