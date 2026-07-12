import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const skills = [
    "Python",
    "React",
    "FastAPI",
    "MongoDB",
    "Docker",
    "Git",
    "REST APIs",
  ];

  return (
    <div className="portfolio">
      <Header
        name="Prachi Mehta"
        role="Software Engineer in Progress"
        themeColor="#2563eb"
      />

      <main>
        <About />
        <Skills skillList={skills} />
        <Projects />
      </main>

      <Footer name="Prachi Mehta" />
    </div>
  );
}

export default App;