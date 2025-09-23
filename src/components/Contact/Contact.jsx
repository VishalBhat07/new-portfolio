import styles from "./Contact.module.css";
import { socials } from "../../data/socials";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.heading}>Get in Touch</h2>
      <ul className={styles.list}>
        {socials.map((site) => (
          <li key={site.name}>
            <strong>{site.name}</strong>: <a href={site.url}>{site.display}</a>
          </li>
        ))}
        <li>
          <strong>Email</strong>:{" "}
          <a href="mailto:vishalkbhat.cs23@rvce.edu.in">
            vishalkbhat.cs23@rvce.edu.in
          </a>
        </li>
      </ul>
      <p className={styles.paragraph}>
        Feel free to explore my repositories, connect with me on social media,
        or drop an email. Let's collaborate and build something awesome
        together!
      </p>
    </section>
  );
}
