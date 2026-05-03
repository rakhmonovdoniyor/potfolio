import EastRoundedIcon from "@mui/icons-material/EastRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";

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
              <img src={heroContent.profileImage} alt={heroContent.profileAlt} />
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
