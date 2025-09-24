import React from "react";
import styles from "./About.module.css";
import { Download, Github } from "lucide-react";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.aboutCard}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>About Me</h2>
            <p className={styles.text}>
              Hi! I'm <strong className={styles.accent}>Vishal Bhat</strong>, a
              Computer Science student at RVCE. I love building web, ML, and
              hardware projects that transform ideas into real-world
              applications.
            </p>

            <p className={styles.text}>
              I specialize in full-stack development (MERN) and have worked on
              over 50 projects ranging from cryptocurrency trackers, AI-powered
              apps, to real-time chat systems. I am also an active participant
              in hackathons, open-source contributions, and competitive
              programming contests.
            </p>

            <p className={styles.text}>
              Outside coding, I enjoy exploring new technologies, learning AI/ML
              techniques, and sharing knowledge through workshops and mentoring
              sessions. My goal is to create impactful solutions that can
              benefit communities and industries alike.
            </p>

            <div className={styles.buttonGroup}>
              <a
                href="/VishalBhat.pdf"
                download
                className={styles.button}
              >
                <Download size={18} /> <span>Download Resume</span>
              </a>
              <a
                href="https://github.com/VishalBhat07"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buttonOutline}
              >
                <Github size={18} /> <span>Visit GitHub</span>
              </a>
            </div>
          </div>

          <div className={styles.imageContent}>
            <img
              className={styles.profileImage}
              src="/pfp.png"
              alt="Vishal Bhat"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
