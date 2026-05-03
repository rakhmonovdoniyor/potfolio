import { useEffect, useState } from "react";
import {
  aboutContent,
  contactContent,
  contactLinks,
  contactMeta,
  focusAreas,
  heroContent,
  navigation,
  projects,
  projectsContent,
  skillGroups,
  skillsContent,
  stats,
  strengths,
  strengthsContent,
} from "../../data/portfolioData";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import SkillsSection from "./SkillsSection";
import StatsSection from "./StatsSection";
import StrengthsSection from "./StrengthsSection";

const THEME_STORAGE_KEY = "portfolio-theme";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function PortfolioPage() {
  const [theme, setTheme] = useState(getInitialTheme);
  const year = new Date().getFullYear();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  function handleToggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  return (
    <div className="app-shell">
      <div className="backdrop-shape shape-one" aria-hidden="true" />
      <div className="backdrop-shape shape-two" aria-hidden="true" />
      <div className="backdrop-shape shape-three" aria-hidden="true" />

      <SiteHeader
        navigation={navigation}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      <main className="page">
        <HeroSection heroContent={heroContent} />
        <StatsSection stats={stats} />
        <AboutSection
          aboutContent={aboutContent}
          contactLinks={contactLinks}
          focusAreas={focusAreas}
        />
        <SkillsSection skillsContent={skillsContent} skillGroups={skillGroups} />
        <ProjectsSection projectsContent={projectsContent} projects={projects} />
        <StrengthsSection
          strengthsContent={strengthsContent}
          strengths={strengths}
        />
        <ContactSection
          contactContent={contactContent}
          contactLinks={contactLinks}
          contactMeta={contactMeta}
        />
      </main>

      <SiteFooter year={year} />
    </div>
  );
}

export default PortfolioPage;
