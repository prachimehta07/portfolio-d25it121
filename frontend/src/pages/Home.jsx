import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";

function Home() {
  const skills = [
    "Python", "React", "FastAPI", "MongoDB", "Docker", "Git", "REST APIs",
  ];

  return (
    <>
      <Header
        name="Prachi Mehta"
        role="Software Engineer in Progress"
        themeColor="#2563eb"
      />
      <main>
        <About />
        <Skills skillList={skills} />
      </main>
    </>
  );
}

export default Home;