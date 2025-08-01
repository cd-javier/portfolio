function SingleSkill({ skill }) {
  return (
    <div className="skills-single">
      <h3>
        {skill.category}
        {skill.subcategory && <br />}
        {skill.subcategory && `(${skill.subcategory})`}
      </h3>
      <ul>
        {skill.items.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default function Skills({ skills }) {
  return (
    <div className="skills-grid">
      {skills.map((skill, idx) => {
        return <SingleSkill skill={skill} key={idx} />;
      })}
    </div>
  );
}
