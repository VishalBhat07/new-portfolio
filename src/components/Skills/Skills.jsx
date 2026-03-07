// src/components/Skills.jsx
import React from "react";
import { skillsData } from "../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="glass-card p-10 rounded-2xl mb-36 border-l-4 border-tokyo-purple"
    >
      <div className="flex items-center space-x-4 mb-10">
        <div className="h-8 w-1 bg-tokyo-purple"></div>
        <h2 className="terminal-text text-xl font-bold uppercase tracking-widest">
          Skills
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            <h3 className="terminal-text text-[10px] text-tokyo-cyan uppercase mb-4 opacity-50">
              {category
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(({ name }) => (
                <span
                  key={name}
                  className="px-3 py-1 bg-tokyo-bg border border-tokyo-border rounded text-xs terminal-text hover:border-tokyo-purple transition-colors cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
