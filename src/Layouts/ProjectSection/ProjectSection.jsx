import ProjectCard from './ProjectCard';

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
        <div className="section-title">
          <h2>{heading}</h2>
          <div className="section-subheading">{subheading}</div>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => {
            return (
              <ProjectCard
                project={project}
                isCaseStudy={isCaseStudy}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
