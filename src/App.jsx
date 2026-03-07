import { useEffect } from "react";
import FutureNavbar from "./components/FutureNavbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Clubs from "./components/Clubs/Clubs";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import HoverFooter from "./components/HoverFooter";
import ProfileStream from "./components/ProfileStream";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    // Intersection observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".glass-card").forEach((el) => {
      el.classList.add(
        "transition-all",
        "duration-1000",
        "opacity-0",
        "translate-y-8",
      );
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center">
        <FutureNavbar />
      </div>
      <main className="pt-24 pb-12 max-w-7xl mx-auto px-6">
        <About />
        <Skills />
        <Experience />
        <Clubs />
        <Projects />
        <Contact />
      </main>
      <ProfileStream />
      <HoverFooter />
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
