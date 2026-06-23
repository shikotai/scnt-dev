import React from "react";
import "./Footer.css";
import logo from "../../assets/logo-footer.png";
import { useLang } from "../../lang/context/LanguageContext"; // ⬅️ import the hook

const Footer: React.FC = () => {
  const { t } = useLang(); // ⬅️ access translator

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side: logo + navigation */}
        <div className="footer-left">
          <div className="footer-logo-box">
            <img src={logo} alt="Logo" className="footer-logo-img" />
          </div>

          <nav className="footer-nav">
            <a href="/">{t("footer.nav.home")}</a>
            <a href="/about">{t("footer.nav.about")}</a>
            <a href="/news">{t("footer.nav.news")}</a>
            <a href="/projects">{t("footer.nav.projects")}</a>
            <a href="/members">{t("footer.nav.members")}</a>
            <a href="/buyout">{t("footer.nav.buyout")}</a>
            <a href="/partners">{t("footer.nav.partners")}</a>
          </nav>
        </div>

        {/* Contact info */}
        <div className="footer-contact">
          <p>
            <strong>{t("footer.contact.addressLabel")}</strong>{" "}
            <a
              href="https://go.2gis.com/ZAwT4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.contact.addressValue")}
            </a>
          </p>

          <p>
            <strong>{t("footer.contact.phoneLabel")}</strong>{" "}
            {t("footer.contact.phoneValue")}
          </p>

          <p>
            <strong>{t("footer.contact.emailLabel")}</strong>{" "}
            {t("footer.contact.emailValue")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

