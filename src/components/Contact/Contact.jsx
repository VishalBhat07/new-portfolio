import styles from "./Contact.module.css";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  ExternalLink,
} from "lucide-react";
import { socials } from "../../data/socials";

const socialIcons = {
  LinkedIn: <Linkedin size={20} />,
  Github: <Github size={20} />,
  Email: <Mail size={20} />,
  LeetCode: <ExternalLink size={20} />,
  CodeForces: <ExternalLink size={20} />,
  CodingNinjas: <ExternalLink size={20} />,
};

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.heading}>Get in Touch</h2>
      <p className={styles.subtext}>
        Have a project idea, collaboration, or just want to say hi? Reach out
        through the form below or connect via my socials.
      </p>

      <div className={styles.row}>
        {/* Contact Info */}
        <div className={styles.infoCard}>
          <div className={styles.infoItem}>
            <Mail size={22} className={styles.icon} />
            <span>vishalkbhat.cs23@rvce.edu.in</span>
          </div>
          <div className={styles.infoItem}>
            <Phone size={22} className={styles.icon} />
            <span>+91 7975806665</span>
          </div>
          <div className={styles.infoItem}>
            <MapPin size={22} className={styles.icon} />
            <span>Bengaluru, India</span>
          </div>

          <div className={styles.socials}>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
              >
                {socialIcons[social.name] || <ExternalLink size={20} />}
                <span>{social.display}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form className={styles.form}>
          <input type="text" placeholder="Your Name" className={styles.input} />
          <input
            type="email"
            placeholder="Your Email"
            className={styles.input}
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className={styles.textarea}
          ></textarea>
          <button type="submit" className={styles.button}>
            <Send size={16} /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
