import ProjectCard from './ProjectCard';
import styles from './ProjectSection.module.css';

export default function ProjectSection({
  heading,
  subheading,
  anchor,
  projects,
  isCaseStudy,
}) {
  return (
    <div className="section-wrapper project-wrapper">
      <div className="section">
        <div className="anchor" id={anchor}></div>
        <div className={styles.sectionTitle}>
          <h2>{heading}</h2>
          <div className="section-subheading">{subheading}</div>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              isCaseStudy={isCaseStudy}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
