import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

function SiteHeader({ navigation, theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home">
        <span className="brand-mark">DR</span>
        <span className="brand-copy">
          <strong>Doniyor Rakhmonov</strong>
          <small>Frontend portfolio</small>
        </span>
      </a>

      <nav className="nav-links" aria-label="Primary">
        {navigation.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {theme === "dark" ? (
            <LightModeRoundedIcon fontSize="inherit" />
          ) : (
            <DarkModeRoundedIcon fontSize="inherit" />
          )}
          <span>{theme === "dark" ? "Light" : "Dark"}</span>
        </button>

        <a className="header-cta" href="#contact">
          Write Me
          <ArrowOutwardRoundedIcon fontSize="inherit" />
        </a>
      </div>
    </header>
  );
}

export default SiteHeader;
