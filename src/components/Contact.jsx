import { socials } from '../data/socials';

export default function Contact() {
  return (
    <section id="contact">
      <h2>Get in Touch</h2>
      <ul>
        {socials.map(site => (
          <li key={site.name}>
            <strong>{site.name}</strong>: <a href={site.url}>{site.display}</a>
          </li>
        ))}
        <li><strong>Email</strong>: <a href="mailto:vishalkbhat.cs23@rvce.edu.in">vishalkbhat.cs23@rvce.edu.in</a></li>
      </ul>
      <p>Feel free to explore my repositories, connect with me on social media, or drop an email. Let's collaborate and build something awesome together!</p>
    </section>
  );
}
