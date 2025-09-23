// src/components/Experience/Experience.jsx
import React from "react";
import styles from "./Experience.module.css";

const experienceData = [
  {
    role: "Web Developer",
    company: "ACM RVCE",
    timeline: "Jan 2024 - Present",
    description: [
      "Developed and maintained club websites and event platforms using React and MERN stack.",
      "Integrated interactive dashboards and real-time features for hackathons and coding events.",
      "Collaborated with a team of 5 developers to design responsive layouts and optimize user experience.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Samsung PRISM",
    timeline: "Jun 2025 - Aug 2025",
    description: [
      "Built internal tools using Node.js and React for data visualization and reporting.",
      "Assisted in developing REST APIs and database management using MongoDB.",
      "Conducted code reviews and optimized application performance.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      className={styles.experienceCard}
      aria-label="Professional Experience"
    >
      <h2 className={styles.experienceTitle}>Experience</h2>
      {experienceData.map((item, index) => (
        <article key={index} className={styles.experienceItem}>
          <h3 className={styles.role}>{item.role}</h3>
          <div className={styles.companyTimeline}>
            <span className={styles.company}>{item.company}</span> |{" "}
            <time className={styles.period}>{item.timeline}</time>
          </div>
          <ul className={styles.description}>
            {item.description.map((point, idx) => (
              <li key={idx} className={styles.descriptionPoint}>
                {point}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
};

export default Experience;
