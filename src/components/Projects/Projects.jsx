import styles from "./Projects.module.css";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.headingMain}>🚀 My Projects & Repositories</h2>
      {projects.map((stack) => (
        <div key={stack.category}>
          <h3 className={styles.category}>{stack.category}</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>🏷️</th>
                <th>📂 Project</th>
                <th>📝 Description</th>
                <th>🔗 Status</th>
              </tr>
            </thead>
            <tbody>
              {stack.items.map((proj, idx) => (
                <tr key={proj.name}>
                  <td>{idx + 1}</td>
                  <td>
                    <a href={proj.url}>{proj.name}</a>
                  </td>
                  <td>{proj.desc}</td>
                  <td>
                    <a href={proj.live}>{proj.status}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </section>
  );
}
