import { Globe } from "lucide-react";

// ── Clubs grouped, roles newest-first within each ────────────────────────────
const CLUBS = [
  {
    id: "acm",
    name: "RVCE ACM Student Chapter",
    color: "#00acd7",
    current: true,
    roles: [
      { title: "Webmaster",        period: "Jun 2025 – Present",   current: true },
      { title: "Web Developer",    period: "Mar 2025 – Jun 2025",  current: false },
      { title: "Senior Executive", period: "Dec 2024 – Mar 2025",  current: false },
    ],
  },
  {
    id: "accelerate",
    name: "ACCELERATE RVCE",
    color: "#f59e0b",
    current: true,
    roles: [
      { title: "Web Development Wing", period: "Feb 2025 – Present",   current: true },
      { title: "Member",               period: "Jan 2025 – Feb 2025",  current: false },
    ],
  },
  {
    id: "ieee-rvce",
    name: "IEEE-RVCE",
    color: "#00629b",
    current: true,
    roles: [
      { title: "Backend Developer", period: "Mar 2025 – Present", current: true },
    ],
  },
  {
    id: "ieee-cs",
    name: "IEEE Computer Society RVCE",
    color: "#7c3aed",
    current: false,
    roles: [
      { title: "Competitive Programming Lead", period: "Jan 2025 – Jan 2026", current: false },
    ],
  },
  {
    id: "rotaract",
    name: "Rotaract Club of RVCE",
    color: "#e53e3e",
    current: true,
    roles: [
      { title: "Member", period: "Dec 2023 – Present", current: true },
    ],
  },
];

export default function Clubs() {
  return (
    <section id="clubs" className="mb-36">
      {/* Section header */}
      <div className="flex items-center space-x-4 mb-12">
        <Globe size={18} className="text-tokyo-cyan shrink-0" />
        <h2 className="terminal-text text-xl font-bold uppercase tracking-widest">
          Clubs &amp; Activities
        </h2>
        <div className="grow h-px bg-tokyo-border" />
      </div>

      {/* Club sub-sections */}
      <div className="space-y-10">
        {CLUBS.map((club) => (
          <div key={club.id}>
            {/* Club name header */}
            <div className="flex items-center gap-3 mb-4">
              {/* Accent bar */}
              <div
                className="w-1 h-5 rounded-full shrink-0"
                style={{ background: club.color }}
              />
              <h3
                className="terminal-text text-sm font-bold uppercase tracking-widest"
                style={{ color: club.color }}
              >
                {club.name}
              </h3>
              {club.current && (
                <span className="relative flex items-center justify-center ml-1">
                  <span
                    className="absolute inline-flex size-2.5 animate-ping rounded-full opacity-40"
                    style={{ background: club.color }}
                  />
                  <span
                    className="relative inline-flex size-1.5 rounded-full"
                    style={{ background: club.color }}
                  />
                </span>
              )}
            </div>

            {/* Roles timeline */}
            <div className="relative ml-5">
              {/* Vertical line */}
              <div
                className="absolute left-0 top-1 bottom-1 w-px opacity-25"
                style={{ background: club.color }}
              />

              <ol className="space-y-0">
                {club.roles.map((role, i) => (
                  <li key={i} className="relative flex items-center gap-4 py-2">
                    {/* Dot on the line */}
                    <span className="relative z-10 shrink-0 flex items-center justify-center w-0">
                      <span
                        className="inline-flex rounded-full"
                        style={{
                          width: role.current ? 7 : 5,
                          height: role.current ? 7 : 5,
                          background: club.color,
                          opacity: role.current ? 1 : 0.45,
                        }}
                      />
                    </span>

                    {/* Role text */}
                    <span className="terminal-text text-sm text-white/85 font-medium pl-3">
                      {role.title}
                    </span>

                    {/* Period — pushed right */}
                    <span className="ml-auto terminal-text text-[10px] text-tokyo-text-dim whitespace-nowrap">
                      {role.period}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
