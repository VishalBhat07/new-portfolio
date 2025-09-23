// src/components/Skills.jsx
import React from "react";
import { skillsData } from "../../data/skills";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.sectionTitle}>Skills</h2>

      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className={styles.skillsCategory}>
          <h3 className={styles.skillsHeading}>
            {category
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())}
          </h3>

          <div className={styles.skillsGrid}>
            {skills.map(({ name, icon: Icon }) => (
              <div key={name} className={styles.skillCard}>
                <Icon size={28} className={styles.skillIcon} />
                <span className={styles.skillName}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
