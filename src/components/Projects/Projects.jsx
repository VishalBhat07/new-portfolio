import { useState } from "react";
import { projects } from "../../data/projects";
import styles from "./Projects.module.css";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(projects[0].category);

  const activeProjects =
    projects.find((stack) => stack.category === activeCategory)?.items || [];

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.headingMain}>My Projects</h2>

      {/* Category Tabs */}
      <div className={styles.tabs}>
        {projects.map((stack) => (
          <button
            key={stack.category}
            onClick={() => setActiveCategory(stack.category)}
            className={`${styles.tab} ${
              activeCategory === stack.category ? styles.activeTab : ""
            }`}
          >
            {stack.category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className={styles.cardsGrid}>
        {activeProjects.map((proj) => (
          <div key={proj.name} className={styles.card}>
            <div className={styles.cardPreview}>
              {proj.image ? (
                <img
                  src={proj.image}
                  alt={`${proj.name} preview`}
                  className={styles.previewImage}
                />
              ) : (
                <span className={styles.previewPlaceholder}>
                  {proj.name[0].toUpperCase()}
                </span>
              )}
              <a
                href={proj.live || proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.hoverArrow}
              >
                <ArrowUpRight size={20} />
              </a>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{proj.name}</h3>
              <p className={styles.projectDesc}>{proj.desc}</p>

              <div className={styles.cardActions}>
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contributeBtn}
                >
                  <Github size={16} />
                  Contribute
                </a>
                <span className={styles.status}>{proj.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
