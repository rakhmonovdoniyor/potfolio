import EastRoundedIcon from "@mui/icons-material/EastRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";

const stackPreviewLines = [
  "const developer = {",
  "  frontend: 'React + Next.js',",
  "  backend: 'Node + Express',",
  "  database: 'MongoDB',",
  "  focus: 'Clean product UI'",
  "};",
];

function HeroSection({ heroContent }) {
  return (
    <section className="section hero-section" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{heroContent.eyebrow}</span>
          <h1>{heroContent.title}</h1>
          <p className="hero-description">{heroContent.description}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              See Projects
              <EastRoundedIcon fontSize="inherit" />
            </a>
            <a
              className="button button-secondary"
              href={heroContent.secondaryCtaHref}
              target="_blank"
              rel="noreferrer"
            >
              {heroContent.secondaryCtaLabel}
              <DescriptionRoundedIcon fontSize="inherit" />
            </a>
          </div>

          <ul className="hero-points">
            {heroContent.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <div className="photo-stage">
            <div className="photo-frame">
              <div
                className="stack-preview-card"
                aria-label="Full stack development preview"
              >
                <div className="stack-preview-topbar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="stack-preview-title">
                  <TerminalRoundedIcon fontSize="inherit" />
                  <span>portfolio.jsx</span>
                </div>
                <div className="stack-preview-code" aria-hidden="true">
                  {stackPreviewLines.map((line) => (
                    <code key={line}>{line}</code>
                  ))}
                </div>
                <div className="stack-preview-tags">
                  <span>
                    <DataObjectRoundedIcon fontSize="inherit" />
                    React UI
                  </span>
                  <span>
                    <RocketLaunchRoundedIcon fontSize="inherit" />
                    Production ready
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="floating-card floating-card-top">
            <span className="floating-label">{heroContent.focusLabel}</span>
            <strong>{heroContent.focusValue}</strong>
          </div>

          <div className="floating-card floating-card-bottom">
            <span className="status-dot" />
            {heroContent.availability}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
