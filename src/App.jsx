import { useEffect, useState } from "react";
import { ArrowDownToLine, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import TechText from "./components/TechText/TechText";
import { projects } from "./data/projects";
import { socials } from "./data/socials";

const featuredNames = [
  "EdgeInference RL",
  "IR-Repair",
  "NeuralShield",
  "CPU Scheduling Visualizer",
  "AutoDoc",
  "Sign-ify",
];
const allProjects = projects.flatMap((group) => group.items);
const featuredProjects = featuredNames
  .map((name) => allProjects.find((project) => project.name === name))
  .filter(Boolean);
const archiveGroups = projects
  .map((group) => ({
    category: group.category,
    items: group.items.filter(
      (project) => !featuredNames.includes(project.name),
    ),
  }))
  .filter((group) => group.items.length > 0);
const archiveCount = allProjects.length - featuredNames.length;

const skillGroups = {
  Development: [
    "Java",
    "C/C++",
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "Spring Boot",
  ],
  "AI / ML": [
    "Machine Learning",
    "NLP",
    "LLMs",
    "RAG",
    "Computer Vision",
    "Milvus",
  ],
  "Systems / Tools": [
    "gRPC",
    "Hadoop",
    "HDFS",
    "Apache Pinot",
    "SQL",
    "Git",
    "Docker",
    "Firebase",
    "MongoDB",
  ],
};

const experience = [
  {
    year: "2026",
    role: "Software Engineering Intern",
    company: "LinkedIn",
    timeline: "May 2026 - July 2026 · Bengaluru",
    detail: "Experimentation Platform - Online Infrastructure",
    points: [
      "Developed production-grade gRPC services with Java and Spring Boot for a high-scale experimentation and analytics platform.",
      "Connected Apache Pinot, HDFS, and SQL storage layers to retrieve and serve experimentation data.",
      "Built real-time LLM services, a Copilot MCP plugin, and a frontend unifying experiments, model outputs, and insights.",
    ],
  },
  {
    year: "2025",
    role: "Samsung PRISM Intern",
    company: "Samsung R&D Institute India",
    timeline: "June 2025 - November 2025 · Bengaluru",
    detail: "SmartThings LLM-powered semantic search",
    points: [
      "Built an embedding and vector retrieval pipeline with all-MiniLM-L6-v2 and Milvus across 50+ device actions.",
      "Engineered semantic re-ranking, dynamic prompt orchestration, and a RAG pipeline for natural-language home automation.",
      "Integrated local LLM inference with SmartThings execution APIs for near-real-time command verification.",
    ],
  },
  {
    year: "2024",
    role: "Web Development Intern",
    company: "ASM International | India Chapter",
    timeline: "September 2024 - November 2024 · Bengaluru",
    detail: "Journal Management System",
    points: [
      "Built a React.js and Firebase platform for authors to submit academic articles and readers to browse published research.",
      "Worked in a two-person team to turn the ASM Journal India National Council Trust's requirements into a working platform in 45 days.",
    ],
  },
];

const social = (name) => socials.find((item) => item.name === name);

function Reveal({ children, className = "" }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [openExperience, setOpenExperience] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="site-shell">
      <header
        className={`site-nav ${menuOpen ? "menu-is-open" : ""} ${scrolled ? "is-scrolled" : ""}`}
      >
        <a className="wordmark" href="#top" onClick={() => setMenuOpen(false)}>
          VB<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className="nav-links" aria-label="Main navigation">
          {["work", "about", "experience", "contact"].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-topline">
            <span className="status">
              <i /> Open to meaningful work
            </span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Software engineer &amp; product builder</p>
              <h1>
                <span className="sr-only">Vishal Bhat</span>
                <TechText
                  text="Vishal Bhat"
                  fontFamily='"Space Grotesk", sans-serif'
                  fontWeight={600}
                  fontSize={180}
                  letterSpacing={-0.06}
                  align="left"
                  accentColor="#777773"
                  reveal="letter"
                  reach={180}
                  dashLength={4}
                  dashGap={2}
                  specks={12}
                  clickKick
                  intro="metrics"
                  introDuration={1.8}
                  guides={false}
                  style={{ height: "clamp(110px, 16vw, 240px)" }}
                />
              </h1>
              <p className="hero-intro">
                Ex Software Engineering Intern @ LinkedIn. Ex Samsung PRISM.
                Building at the intersection of distributed systems, AI, and the
                web.
              </p>
            </div>
            <div className="hero-aside">
              <div className="portrait-wrap">
                <img src="/pfp3.png" alt="Vishal Bhat" fetchPriority="high" />
              </div>
              <div className="hero-details">
                <span>Based in</span>
                <strong>Bengaluru, India</strong>
                <span>Currently</span>
                <strong>RV College of Engineering</strong>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#work">
            Scroll to explore <ChevronDown size={16} />
          </a>
        </section>

        <section id="work" className="work section-wrap">
          <Reveal className="section-heading">
            <span className="section-number">01</span>
            <h2>Selected work</h2>
            <span className="heading-rule" />
          </Reveal>
          <div className="project-list">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.name}>
                <a
                  className="project-row"
                  href={project.live || project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-body">
                    <h3>{project.name}</h3>
                    <p>{project.desc}</p>
                    <span className="project-meta">
                      {[project.status, ...(project.stack ?? [])].join(" · ")}
                    </span>
                  </span>
                  <span className="project-arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="archive">
            <button
              className="archive-toggle"
              type="button"
              onClick={() => setArchiveOpen(!archiveOpen)}
              aria-expanded={archiveOpen}
            >
              {archiveOpen
                ? "Hide archive"
                : `View all ${archiveCount} more projects`}
              <span className={`plus ${archiveOpen ? "rotated" : ""}`}>+</span>
            </button>
            {archiveOpen && (
              <div className="archive-panel">
                {archiveGroups.map((group) => (
                  <div className="archive-group" key={group.category}>
                    <span className="archive-label">{group.category}</span>
                    <ul>
                      {group.items.map((project) => {
                        const href =
                          project.live && project.live !== "#"
                            ? project.live
                            : project.url;
                        const linkable = href && href !== "#";
                        const row = (
                          <>
                            <strong>{project.name}</strong>
                            <span>{project.desc}</span>
                            {project.status === "In Progress" && (
                              <em>In progress</em>
                            )}
                          </>
                        );
                        return (
                          <li key={project.name}>
                            {linkable ? (
                              <a
                                className="archive-row"
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {row}
                              </a>
                            ) : (
                              <span className="archive-row">{row}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="about" className="about section-wrap">
          <Reveal className="section-heading">
            <span className="section-number">02</span>
            <h2>A little about me</h2>
            <span className="heading-rule" />
          </Reveal>
          <Reveal className="about-grid">
            <p className="statement">
              I like making complex things feel clear.
            </p>
            <div>
              <p className="about-copy">
                I am a builder who moves between the details of a system and the
                feeling of a finished product. I enjoy thoughtful interfaces,
                useful AI, and the quiet satisfaction of shipping something that
                earns its place.
              </p>
              <p className="about-note">
                Outside the editor, I lead web initiatives at RVCE ACM and keep
                a close eye on competitive programming.
              </p>
            </div>
          </Reveal>
        </section>

        <section id="experience" className="experience section-wrap">
          <Reveal className="section-heading">
            <span className="section-number">03</span>
            <h2>Experience</h2>
            <span className="heading-rule" />
          </Reveal>
          <div className="experience-list">
            {experience.map((item, index) => (
              <Reveal key={item.company} className="experience-item">
                <button
                  type="button"
                  onClick={() =>
                    setOpenExperience(openExperience === index ? null : index)
                  }
                  aria-expanded={openExperience === index}
                >
                  <span className="experience-year">{item.year}</span>
                  <span className="experience-role">
                    <strong>{item.role}</strong>
                    <small>{item.company}</small>
                    <small className="experience-timeline">
                      {item.timeline}
                    </small>
                  </span>
                  <span
                    className={`plus ${openExperience === index ? "rotated" : ""}`}
                  >
                    +
                  </span>
                </button>
                {openExperience === index && (
                  <div className="experience-detail">
                    <strong>{item.detail}</strong>
                    <ul>
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </section>

        <section className="skills section-wrap">
          <Reveal className="section-heading">
            <span className="section-number">04</span>
            <h2>Built with</h2>
            <span className="heading-rule" />
          </Reveal>
          <div className="skill-list">
            {Object.entries(skillGroups).map(([category, items]) => (
              <Reveal className="skill-group" key={category}>
                <span>{category}</span>
                <p>{items.join("  ·  ")}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="background section-wrap">
          <Reveal className="section-heading">
            <span className="section-number">05</span>
            <h2>Background</h2>
            <span className="heading-rule" />
          </Reveal>
          <div className="background-grid">
            <Reveal className="background-column">
              <span className="background-label">Education</span>
              <div>
                <strong>B.Tech, Computer Science</strong>
                <p>RV College of Engineering · 2023 - 2027</p>
              </div>
              <div>
                <strong>Class 12, PCMB</strong>
                <p>KLE&apos;s Independent PU College · 2021 - 2023</p>
              </div>
            </Reveal>
            <Reveal className="background-column">
              <span className="background-label">
                Certifications &amp; honors
              </span>
              <div>
                <strong>NPTEL Data Science for Engineers</strong>
                <p>Top 1%</p>
              </div>
              <div>
                <strong>Best of the Batch</strong>
                <p>2021 · Top scorer in JEE Mains, Belgavi</p>
              </div>
            </Reveal>
            <Reveal className="background-column">
              <span className="background-label">Languages</span>
              <p className="language-list">
                English · Hindi · Marathi · Konkani · Kannada · German
              </p>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="contact section-wrap">
          <Reveal>
            <p className="eyebrow">Have a good idea?</p>
            <h2>
              Let&apos;s build
              <br />
              <em>something.</em>
            </h2>
            <div className="contact-actions">
              <a className="contact-link" href={social("Email")?.url}>
                Get in touch <ArrowUpRight size={20} />
              </a>
              <a
                className="contact-link"
                href="/VishalBhat.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download resume <ArrowDownToLine size={18} />
              </a>
            </div>
            <p className="contact-details">
              <a href={social("Email")?.url}>vishalbhat21092005@gmail.com</a>
              <span>·</span>
              <a href="tel:+917975806665">+91 79758 06665</a>
            </p>
          </Reveal>
        </section>
      </main>
      <footer className="site-footer section-wrap">
        <span>© 2026 Vishal Bhat</span>
        <div>
          {["GitHub", "LinkedIn", "Email"].map((name) => (
            <a
              key={name}
              href={social(name)?.url}
              target={name === "Email" ? undefined : "_blank"}
              rel={name === "Email" ? undefined : "noreferrer"}
            >
              {name}
            </a>
          ))}
        </div>
        <span>Bengaluru, IN</span>
      </footer>
    </div>
  );
}

export default App;
