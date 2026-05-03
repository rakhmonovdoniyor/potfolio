import SectionHeading from "./SectionHeading";

function SkillsSection({ skillsContent, skillGroups }) {
  return (
    <section className="section" id="skills">
      <SectionHeading
        kicker="Skills"
        title={skillsContent.title}
        description={skillsContent.description}
      />

      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="panel skill-panel">
            <div className="skill-panel-header">
              <span className="panel-kicker">{group.title}</span>
              <span className="skill-panel-badge">{group.items.length} skills</span>
            </div>
            <p className="skill-description">{group.description}</p>
            <div className="skill-list">
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.label}
                    className="skill-row"
                    style={{
                      "--skill-color": item.color,
                      "--skill-surface": item.surface,
                    }}
                  >
                    <div className="skill-row-main">
                      <span className="skill-icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <span className="skill-copy">
                        <strong>{item.label}</strong>
                      </span>
                    </div>
                    <span className="skill-meta">{item.meta}</span>
                  </article>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
