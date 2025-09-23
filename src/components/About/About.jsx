import React from "react";
import styles from "./About.module.css";

export default function Home() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.aboutCard}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>About Me</h2>
            <p className={styles.text}>
              Hey there! I'm <strong>Vishal Bhat</strong>, a passionate Computer
              Science student at RV College of Engineering with an appetite for
              creating innovative digital solutions. With over 50 projects
              spanning web development, machine learning, and hardware
              engineering, I've mastered the art of transforming complex ideas
              into elegant, scalable applications.
            </p>

            <p className={styles.text}>
              My expertise lies in full-stack development using the MERN stack,
              where I've built everything from cryptocurrency trackers and food
              delivery platforms to AI-powered applications and real-time chat
              systems. As an active contributor to the tech community, I've
              developed projects for hackathons, led workshops, and contributed
              to open-source initiatives while sharpening my skills in
              competitive programming.
            </p>
          </div>

          <div className={styles.imageContent}>
            <img
              className={styles.profileImage}
              src="/pfp.heic"
              alt="Vishal Bhat"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
