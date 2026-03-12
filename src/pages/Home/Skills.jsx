function SingleSkill({ skill, styles }) {
  return (
    <div className={styles.skillsSingle}>
      <h3>
        {skill.category}
        {skill.subcategory && <br />}
        {skill.subcategory && `(${skill.subcategory})`}
      </h3>
      <ul>
        {skill.items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills({ skills, styles }) {
  return (
    <div className={styles.skillsGrid}>
      {skills.map((skill, idx) => (
        <SingleSkill skill={skill} styles={styles} key={idx} />
      ))}
    </div>
  );
}
