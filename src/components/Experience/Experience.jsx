import { Briefcase } from "lucide-react";

const experienceData = [
  {
    role: "PRISM Research Intern",
    company: "Samsung PRISM - SRIB",
    timeline: "Jun 2025 – Nov 2025",
    status: "Completed",
    color: "#1428a0",       // Samsung blue
    accent: "#4a90d9",
    description: [
      "Contributed to the SmartThings LLM-Powered AI Search project under the SRIB-PRISM program.",
      "Implemented semantic search using vector embeddings and Mini LLMs (TinyLlama, Phi-2) to understand user intent in natural language.",
      "Developed a Retrieval-Augmented Generation (RAG) pipeline with FAISS/ChromaDB for contextual SmartThings device control.",
      "Built a dynamic knowledge base from SmartThings capabilities and integrated prompt generation workflows.",
      "Collaborated with mentors to design ranking and scoring systems, improving accuracy of device action suggestions.",
      "Delivered final API integration enabling SmartThings to execute contextual commands.",
    ],
    skills: ["LLM", "RAG", "FAISS", "ChromaDB", "Python", "SmartThings API"],
  },
  {
    role: "Web Developer",
    company: "ASM International | India Chapter",
    timeline: "Sep 2024 – Nov 2024 · 3 mos",
    status: "Completed",
    type: "Internship · Remote",
    color: "#e67e22",       // warm orange
    accent: "#f0a04b",
    description: [
      "Developed and maintained web applications for ASM International's India Chapter as a remote intern.",
      "Worked with the MERN stack (MongoDB, Express, React, Node.js) to build responsive, data-driven platforms.",
      "Collaborated with the team on UI/UX improvements, API integrations, and front-end performance optimisation.",
    ],
    skills: ["MERN Stack", "Web Development", "REST APIs", "UI/UX", "Remote Collaboration"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mb-36">
      {/* Section header */}
      <div className="flex items-center space-x-4 mb-12">
        <Briefcase size={18} className="text-tokyo-purple shrink-0" />
        <h2 className="terminal-text text-xl font-bold uppercase tracking-widest">
          Experience
        </h2>
        <div className="grow h-px bg-tokyo-border" />
        <span className="terminal-text text-xs text-tokyo-text-dim uppercase tracking-wider">
          {experienceData.length} Roles
        </span>
      </div>

      {/* Cards */}
      <div className="space-y-6">
        {experienceData.map((item, idx) => (
          <div key={idx} className="glass-card p-6 rounded-xl border-l-2 transition-all duration-300 hover:border-l-4"
            style={{ borderLeftColor: item.color }}
          >
            {/* Header row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
              <div>
                <h4
                  className="text-lg font-bold terminal-text"
                  style={{ color: item.accent }}
                >
                  {item.role}
                </h4>
                <p className="terminal-text text-sm mt-0.5">
                  <span style={{ color: item.accent, opacity: 0.7 }}>{item.company}</span>
                </p>
                {item.type && (
                  <p className="terminal-text text-xs text-tokyo-text-dim mt-0.5 italic">
                    {item.type}
                  </p>
                )}
              </div>
              <span
                className="terminal-text text-xs text-tokyo-text-dim whitespace-nowrap shrink-0"
              >
                {item.timeline}
              </span>
            </div>

            {/* Description */}
            <ul className="space-y-2 mt-3">
              {item.description.map((point, i) => (
                <li
                  key={i}
                  className="text-sm text-tokyo-text-dim flex items-start gap-2.5 leading-relaxed"
                >
                  <span
                    className="mt-1.5 text-[8px] shrink-0"
                    style={{ color: item.accent }}
                  >
                    ▸
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Skills */}
            {item.skills?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-tokyo-border/20">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="terminal-text text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      color: item.accent,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
