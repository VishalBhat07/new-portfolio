import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <About />

      <div className={styles.rowSection}>
        <Skills />
        <Experience />
      </div>

      {/* Other sections */}
      {/* <Projects /> */}
      {/* <Stats /> */}
      {/* <Contact /> */}
    </>
  );
}

export default App;
