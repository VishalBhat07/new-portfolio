import { programmingLanguages, webTech, backendTech, tools, cpSites } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills">
      <h2>🛠️ Languages and Tools</h2>
      <h3>💻 Programming Languages</h3>
      <div>{programmingLanguages.map(skill => <img key={skill.name} src={skill.badge} alt={skill.name} />)}</div>
      {/* Repeat for other skill categories */}
    </section>
  );
}
