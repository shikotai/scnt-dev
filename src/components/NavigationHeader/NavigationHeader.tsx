
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavigationHeader.css";
import logo from "../../assets/logo.png";
import { useLang } from "../../lang/context/LanguageContext";

const NavigationHeader: React.FC = () => {
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const changeLang = (newLang: "ru" | "en" | "kk") => {
    if (newLang !== lang) {
      setLang(newLang);
    }

    closeMenu();
  };

  return (
    <header className="navigation-header">
      <div className="header-container">

        {/* LOGO */}
        <NavLink
          to="/"
          className="logo-section"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Scientific Center Logo"
            className="logo"
          />

          <div className="logo-text">
            <span className="title">Scientific</span>
            <span className="title">Center for</span>
            <span className="title">New</span>
            <span className="title">Technologies</span>
          </div>
        </NavLink>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={t("aria.toggleNavigation") as string}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAVIGATION */}
        <nav
          id="main-navigation"
          className={`nav-menu ${menuOpen ? "show" : ""}`}
        >

          {/* ABOUT */}
          <NavLink
            to="/about"
            onClick={closeMenu}
          >
            {t("nav.about") as string}
          </NavLink>

          {/* EQUIPMENT */}
          <NavLink
            to="/equipment"
            onClick={closeMenu}
          >
            {t("equipment.navTitle") as string}
          </NavLink>

          {/* NEWS */}
          <NavLink
            to="/news"
            onClick={closeMenu}
          >
            {t("nav.news") as string}
          </NavLink>

          {/* PROJECTS */}
          <NavLink
            to="/projects"
            onClick={closeMenu}
          >
            {t("nav.projects") as string}
          </NavLink>

          {/* PARTNERS */}
          <NavLink
            to="/partners"
            onClick={closeMenu}
          >
            {t("nav.partners") as string}
          </NavLink>

          {/* BUYOUT */}
          <NavLink
            to="/buyout"
            onClick={closeMenu}
          >
            {t("nav.buyout") as string}
          </NavLink>

          {/* LANGUAGE SWITCHER */}
          <div className="lang-toggle">

            <button
              type="button"
              onClick={() => changeLang("kk")}
              className={`lang-btn ${lang === "kk" ? "active" : ""}`}
              title={t("lang.kk") as string}
              aria-label="Қазақша"
              aria-pressed={lang === "kk"}
            >
              <span className="fi fi-kz"></span>
            </button>

            <button
              type="button"
              onClick={() => changeLang("en")}
              className={`lang-btn ${lang === "en" ? "active" : ""}`}
              title={t("lang.en") as string}
              aria-label="English"
              aria-pressed={lang === "en"}
            >
              <span className="fi fi-us"></span>
            </button>

            <button
              type="button"
              onClick={() => changeLang("ru")}
              className={`lang-btn ${lang === "ru" ? "active" : ""}`}
              title={t("lang.ru") as string}
              aria-label="Русский"
              aria-pressed={lang === "ru"}
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
