function Projects() {
  const projects = [
    {
      name: "Curio",
      description: "An offline AI assistant designed to answer questions using local knowledge and language models.",
    },
    {
      name: "Codexa",
      description: "An AI-powered code analysis platform focused on understanding and improving code.",
    },
    {
      name: "AI Interview Platform",
      description: "A production-style AI interview system with secure authentication, real-time proctoring, automated evaluation, and backend services designed for scalable technical assessments.",
    },
  ];

  return (
    <section className="section">
      <p className="section-label">03 / PROJECTS</p>

      <h2>Selected Work</h2>

      <div className="projects">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;