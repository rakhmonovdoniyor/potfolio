import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import TelegramIcon from "@mui/icons-material/Telegram";

function ContactSection({ contactContent, contactLinks, contactMeta }) {
  const telegramItem = contactMeta.find((item) => item.label === "Telegram");

  return (
    <section className="section" id="contact">
      <article className="panel contact-panel">
        <div className="contact-copy">
          <span className="section-kicker">Contact</span>
          <h2>{contactContent.title}</h2>
          <p>{contactContent.description}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="mailto:raxmonov2019yil@gmail.com">
              Send Email
              <AlternateEmailRoundedIcon fontSize="inherit" />
            </a>
            <a
              className="button button-secondary"
              href={telegramItem?.href}
              target="_blank"
              rel="noreferrer"
            >
              Telegram
              <TelegramIcon fontSize="inherit" />
            </a>
          </div>
        </div>

        <div className="contact-grid">
          {contactLinks.map((item) => {
            const Icon = item.icon;
            const isExternal = item.href.startsWith("http");

            return (
              <a
                key={item.label}
                className="contact-link"
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
              >
                <span className="contact-link-icon">
                  <Icon fontSize="inherit" />
                </span>
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.value}</small>
                </span>
                <ArrowOutwardRoundedIcon fontSize="inherit" />
              </a>
            );
          })}
        </div>
      </article>
    </section>
  );
}

export default ContactSection;
