import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";

import styles from "./App.module.css";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <About />

      <div className={styles.rowSection}>
        <Skills />
        <Experience />
      </div>

      {/* Other sections */}
      <Projects />
      {/* <Stats /> */}
      <Contact />
    </>
  );
}

export default App;
