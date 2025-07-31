export default function ProjectCard({ project, isCaseStudy }) {
  return (
    <div className="project-card">
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
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-tags">{project.tags.join(' · ')}</div>
        <div className="project-desc">{project.description}</div>
        <div className="project-links">
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
