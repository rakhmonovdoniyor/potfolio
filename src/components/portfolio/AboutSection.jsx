import SectionHeading from "./SectionHeading";

function AboutSection({ aboutContent, contactLinks, focusAreas }) {
  return (
    <section className="section" id="about">
      <SectionHeading
        kicker="About"
        title={aboutContent.title}
        description={aboutContent.description}
      />

      <div className="about-grid">
        <article className="panel story-panel">
          <span className="panel-kicker">Short profile</span>
          <h3>{aboutContent.storyTitle}</h3>
          {aboutContent.storyParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="chip-cloud">
            {aboutContent.highlights.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>

          <div className="social-strip">
            {contactLinks.slice(0, 3).map((item) => {
              const Icon = item.icon;
              const isExternal = item.href.startsWith("http");

              return (
                <a
                  key={item.label}
                  className="social-pill"
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
                  <Icon fontSize="inherit" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </article>

        <div className="focus-stack">
          {focusAreas.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="panel focus-card">
                <div className="focus-icon">
                  <Icon fontSize="inherit" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
