import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import SectionHeading from "./SectionHeading";

function ProjectsSection({ projectsContent, projects }) {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section className="section" id="projects">
      <SectionHeading
        kicker="Projects"
        title={projectsContent.title}
        description={projectsContent.description}
      />

      <article className="panel project-feature">
        <div className="project-visual project-visual-large">
          <img src={featuredProject.image} alt={featuredProject.title} />
        </div>
        <div className="project-copy">
          <span className="panel-kicker">{featuredProject.eyebrow}</span>
          <h3>{featuredProject.title}</h3>
          <p>{featuredProject.description}</p>
          <div className="project-tags">
            {featuredProject.tags.map((tag) => (
              <span key={tag} className="chip chip-dark">
                {tag}
              </span>
            ))}
          </div>
          <div className="social-strip">
            <a
              className="inline-link"
              href={featuredProject.href}
              target="_blank"
              rel="noreferrer"
            >
              {featuredProject.cta}
              <OpenInNewRoundedIcon fontSize="inherit" />
            </a>
            {featuredProject.sourceHref ? (
              <a
                className="inline-link"
                href={featuredProject.sourceHref}
                target="_blank"
                rel="noreferrer"
              >
                {featuredProject.sourceCta}
                <OpenInNewRoundedIcon fontSize="inherit" />
              </a>
            ) : null}
          </div>
        </div>
      </article>

      <div className="project-grid">
        {otherProjects.map((project) => (
          <article key={project.title} className="panel project-card">
            <div className="project-visual">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-copy">
              <span className="panel-kicker">{project.eyebrow}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="social-strip">
                <a
                  className="inline-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.cta}
                  <OpenInNewRoundedIcon fontSize="inherit" />
                </a>
                {project.sourceHref ? (
                  <a
                    className="inline-link"
                    href={project.sourceHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.sourceCta}
                    <OpenInNewRoundedIcon fontSize="inherit" />
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
