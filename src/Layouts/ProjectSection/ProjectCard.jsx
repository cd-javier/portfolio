import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, isCaseStudy }) {
  return (
    <div className={styles.projectCard}>
      {isCaseStudy ? (
        <a href={project.link} aria-label={`View ${project.title} case study`}>
          <img src={project.img} alt="" />
        </a>
      ) : (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title}`}
        >
          <img src={project.img} alt="" />
        </a>
      )}
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <div className={styles.projectTags}>{project.tags.join(' · ')}</div>
        <div className={styles.projectDesc}>{project.description}</div>
        <div className={styles.projectLinks}>
          {isCaseStudy ? (
            <a
              href={project.link}
              aria-label={`View ${project.title} case study`}
            >
              READ CASE STUDY
            </a>
          ) : (
            <>
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                GITHUB REPO
              </a>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                LIVE PREVIEW
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
