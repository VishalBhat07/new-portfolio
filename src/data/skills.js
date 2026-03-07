// src/data/skills.js
import {
  Code2,
  FileCode2,
  Palette,
  Database,
  Server,
  GitBranch,
  Github,
  Boxes,
  Cpu,
  Terminal,
} from "lucide-react";

export const skillsData = {
  programmingLanguages: [
    { name: "C", icon: Code2 },
    { name: "C++", icon: FileCode2 },
    { name: "JavaScript", icon: Terminal },
    { name: "Python", icon: Cpu },
    { name: "MATLAB", icon: Palette },
  ],
  webTech: [
    { name: "HTML5", icon: FileCode2 },
    { name: "CSS3", icon: Palette },
    { name: "Bootstrap", icon: Boxes },
    { name: "Tailwind CSS", icon: Palette },
    { name: "React", icon: Database },
    { name: "Vite", icon: Server },
  ],
  backendTech: [
    { name: "Node.js", icon: Server },
    { name: "Express.js", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "Firebase", icon: Boxes },
  ],
  tools: [
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Github },
    { name: "Postman", icon: Boxes },
    { name: "Arduino", icon: Cpu },
    { name: "Raspberry Pi", icon: Cpu },
  ],
  competitiveProgramming: [
    { name: "LeetCode", icon: Code2 },
    { name: "Codeforces", icon: Code2 },
  ],
};
