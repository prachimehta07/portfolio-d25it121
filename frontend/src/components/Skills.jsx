function Skills({ skillList }) {
  return (
    <section className="section">
      <p className="section-label">02 / SKILLS</p>

      <h2>Tools I Reach For</h2>

      <div className="skills-list">
        {skillList.map((skill) => (
          <span className="skill" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;