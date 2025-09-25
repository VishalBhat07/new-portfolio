// src/components/Experience/Experience.jsx
import React from "react";
import styles from "./Experience.module.css";

const experienceData = [
  {
    role: "Web Developer",
    company: "ACM RVCE Student Chapter",
    timeline: "Jan 2024 - Present",
    description: [
      "Built and deployed the official ACM RVCE website to showcase chapter activities and resources.",
      "Developed a full-stack hackathon management platform (TechTank Hackathon) with live deployment.",
      "Created interactive event platforms like ACM Squid Games for the RVCE SIP 2025 program.",
      "Organized and conducted beginner-friendly workshops on Generative AI and web development basics.",
      "Collaborated with fellow developers to design responsive, engaging, and scalable applications.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Samsung PRISM - SRIB",
    timeline: "Jun 2025 - Aug 2025",
    description: [
      "Contributed to the SmartThings LLM-Powered AI Search project under the SRIB-PRISM program.",
      "Implemented semantic search using vector embeddings and Mini LLMs (TinyLlama, Phi-2) to understand user intent in natural language.",
      "Developed a Retrieval-Augmented Generation (RAG) pipeline with FAISS/ChromaDB for contextual SmartThings device control.",
      "Built a dynamic knowledge base from SmartThings capabilities and integrated prompt generation workflows.",
      "Collaborated with mentors to design ranking and scoring systems, improving accuracy of device action suggestions.",
      "Delivered final API integration enabling SmartThings to execute contextual commands.",
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
