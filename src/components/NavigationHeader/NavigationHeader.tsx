import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavigationHeader.css";
import logo from "../../assets/logo.png";
import { useLang } from "../../lang/context/LanguageContext";

const NavigationHeader: React.FC = () => {
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLang = (newLang: "ru" | "en" | "kk") => {
    if (newLang !== lang) setLang(newLang);
    setMenuOpen(false);
  };

  return (
    <header className="navigation-header">
      <div className="header-container">
        {/* ✅ Logo (now links to home) */}
        <NavLink to="/" className="logo-section" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Scientific Center Logo" className="logo" />
          <div className="logo-text">
            <span className="title">Scientific</span>
            <span className="title">Center for</span>
            <span className="title">New</span>
            <span className="title">Technologies</span>
          </div>
        </NavLink>

        {/* ✅ Hamburger Menu Button */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={t("aria.toggleNavigation") as string}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* ✅ Navigation Links */}
        <nav className={`nav-menu ${menuOpen ? "show" : ""}`}>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            {t("nav.about") as string}
          </NavLink>
          <NavLink to="/news" onClick={() => setMenuOpen(false)}>
            {t("nav.news") as string}
          </NavLink>
          <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
            {t("nav.projects") as string}
          </NavLink>
          {/* ✅ New "Members" button */}
          <NavLink to="/members" onClick={() => setMenuOpen(false)}>
            {t("nav.members") as string}
          </NavLink>
          <NavLink to="/buyout" onClick={() => setMenuOpen(false)}>
            {t("nav.buyout") as string}
          </NavLink>

          {/* ✅ Language Switcher */}
          <div className="lang-toggle">
            <button
              onClick={() => changeLang("kk")}
              className={`lang-btn ${lang === "kk" ? "active" : ""}`}
              title={t("lang.kk") as string}
            >
              <span className="fi fi-kz"></span>
            </button>
            <button
              onClick={() => changeLang("en")}
              className={`lang-btn ${lang === "en" ? "active" : ""}`}
              title={t("lang.en") as string}
            >
              <span className="fi fi-us"></span>
            </button>
            <button
              onClick={() => changeLang("ru")}
              className={`lang-btn ${lang === "ru" ? "active" : ""}`}
              title={t("lang.ru") as string}
            >
              <span className="fi fi-ru"></span>
            </button>

            
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavigationHeader;
