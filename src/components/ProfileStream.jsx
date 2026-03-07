import { ScannerCardStream } from "./ui/scanner-card-stream";

// ─── Platform profile links ───────────────────────────────────────────────────
const profileLinks = {
  github:    "https://github.com/VishalBhat07",
  linkedin:  "https://linkedin.com/in/vishalbhat07",
  leetcode:  "https://leetcode.com/VishalBhat07",
  instagram: "https://instagram.com/vishal_bhat_07",
  gmail:     "mailto:vishalbhat07@gmail.com",
};

// ─── SVG icons (inline, no extra deps) ───────────────────────────────────────
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const GmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
);

// ─── Minimalistic profile cards (400×250) ──────────────────────────────────
const cardBase = {
  width: "100%", height: "100%",
  background: "#111114",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: 14,
  display: "flex", flexDirection: "column",
  padding: "24px 26px", boxSizing: "border-box",
  fontFamily: "'JetBrains Mono', monospace",
};

function MinimalCard({ icon: Icon, platform, handle, tagline, link, linkText }) {
  return (
    <div style={cardBase}>
      {/* Icon + platform */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
        <div style={{ color: "rgba(255,255,255,0.5)" }}><Icon /></div>
        <span style={{
          color: "rgba(255,255,255,0.35)", fontSize: 10,
          letterSpacing: 4, textTransform: "uppercase", fontWeight: 600,
        }}>
          {platform}
        </span>
      </div>

      {/* Handle */}
      <div style={{
        color: "rgba(255,255,255,0.85)", fontSize: 20,
        fontWeight: 700, letterSpacing: -0.5, marginBottom: 6,
      }}>
        {handle}
      </div>

      {/* Tagline */}
      <div style={{
        color: "rgba(255,255,255,0.3)", fontSize: 11,
        lineHeight: 1.5, marginBottom: "auto",
      }}>
        {tagline}
      </div>

      {/* Link */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}>
        <span style={{
          fontSize: 10, color: "rgba(255,255,255,0.3)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          paddingBottom: 1, textTransform: "uppercase", letterSpacing: 1.5,
        }}>
          {linkText} ↗
        </span>
      </div>
    </div>
  );
}

function GitHubCard() {
  return (
    <MinimalCard
      icon={GitHubIcon}
      platform="GitHub"
      handle="VishalBhat07"
      tagline="50+ repos · 800+ commits · Open source"
      linkText="github.com/VishalBhat07"
    />
  );
}

function LinkedInCard() {
  return (
    <MinimalCard
      icon={LinkedInIcon}
      platform="LinkedIn"
      handle="Vishal K Bhat"
      tagline="CS @ RVCE · MERN Stack · 500+ connections"
      linkText="Connect on LinkedIn"
    />
  );
}

function LeetCodeCard() {
  return (
    <MinimalCard
      icon={LeetCodeIcon}
      platform="LeetCode"
      handle="VishalBhat07"
      tagline="350+ problems"
      linkText="leetcode.com/VishalBhat07"
    />
  );
}

function InstagramCard() {
  return (
    <MinimalCard
      icon={InstagramIcon}
      platform="Instagram"
      handle="@vishalbhat07"
      tagline="Developer · Tech · Life"
      linkText="instagram.com/vishalbhat07"
    />
  );
}

function GmailCard() {
  return (
    <MinimalCard
      icon={GmailIcon}
      platform="Gmail"
      handle="vishalbhat21092005@gmail.com"
      tagline="Open to opportunities · < 24h response"
      linkText="Send a message"
    />
  );
}

const platformCards = [
  <GitHubCard key="gh" />,
  <LinkedInCard key="li" />,
  <LeetCodeCard key="lc" />,
  <InstagramCard key="ig" />,
  <GmailCard key="gm" />,
];

export default function ProfileStream() {
  return (
    <section className="py-16 overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center space-x-4 mb-10">
          <h2 className="terminal-text text-xl font-bold uppercase tracking-widest">
            Find Me Online
          </h2>
          <div className="grow h-px bg-tokyo-border" />
          <span className="terminal-text text-xs text-tokyo-text-dim uppercase tracking-wider">
            Drag · Scroll · Explore
          </span>
        </div>
      </div>

      {/* Scanner stream with CSS cards */}
      <ScannerCardStream
        cardContents={platformCards}
        initialSpeed={200}
        direction={-1}
        repeat={6}
        cardGap={60}
        friction={0.97}
        scanEffect="scramble"
        showControls={false}
        showSpeed={false}
      />

      {/* Quick-link buttons */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            { label: "GitHub",    href: profileLinks.github,    color: "hover:border-white/60 hover:text-white" },
            { label: "LinkedIn",  href: profileLinks.linkedin,   color: "hover:border-[#0077B5] hover:text-[#0077B5]" },
            { label: "LeetCode",  href: profileLinks.leetcode,   color: "hover:border-[#FFA116] hover:text-[#FFA116]" },
            { label: "Instagram", href: profileLinks.instagram,  color: "hover:border-[#E1306C] hover:text-[#E1306C]" },
            { label: "Gmail",     href: profileLinks.gmail,      color: "hover:border-[#EA4335] hover:text-[#EA4335]" },
          ].map(({ label, href, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`terminal-text text-xs font-bold uppercase tracking-widest px-6 py-3 rounded border border-tokyo-border text-tokyo-text-dim transition-all duration-300 ${color}`}
            >
              {label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
