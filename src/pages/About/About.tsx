import React from "react";
import NavigationHeader from "../../components/NavigationHeader/NavigationHeader";
import Footer from "../../components/Footer/Footer";
import "./About.css";
import { useLang } from "../../lang/context/LanguageContext"; // ⬅️ import translation hook
import { Link } from "react-router-dom";

const About: React.FC = () => {
  const { t } = useLang(); // ⬅️ get translator

  return (
    <div className="about-page">
      <NavigationHeader />

      {/* О компании */}
      <section className="about-section company-section">
        <h2>{t("about.sections.company.title")}</h2>
        <div className="about-inner">
          <div className="about-content">
            <p>{t("about.sections.company.paragraph1")}</p>
          </div>
          <div
            className="about-image"
            style={{
              backgroundImage: `url('/images/about/lab.jpg')`,
            }}
          ></div>
        </div>
      </section>

      {/* Миссия и цели */}
      <section className="about-section mission-section">
        <h2>{t("about.sections.mission.title")}</h2>
        <div className="about-inner">
          <div
            className="about-image"
            style={{
              backgroundImage: `url('/images/about/molstruct.jpg')`,
            }}
          ></div>
          <div className="about-content">
            <p>{t("about.sections.mission.paragraph1")}</p>
          </div>
        </div>
      </section>

      {/* Наша команда */}
      <section className="about-section team-section">
        <h2>{t("about.sections.team.title")}</h2>
        <div className="about-inner">
          <div className="about-content">
            <h1>{t("about.sections.team.heading")}</h1>
            <p>{t("about.sections.team.intro")}</p>
            <ul>
              <li>{t("about.sections.team.list.phd")}</li>
              <li>{t("about.sections.team.list.candidates")}</li>
              <li>{t("about.sections.team.list.masters")}</li>
              <li>{t("about.sections.team.list.specialists")}</li>
            </ul>
          </div>

    <div
      className="about-image"
      style={{
        backgroundImage: `url('/images/about/team.jpg')`,
      }}
    ></div>
  </div>
</section>

      {/* Партнёры */}
      <section className="about-section partners-section">
        <h2>{t("about.sections.partners.title")}</h2>
        <div className="about-inner">
          <div
            className="about-image"
            style={{
              backgroundImage: `url('/images/about/flags.jpg')`,
            }}
          ></div>
          <div className="about-content">
            <p>{t("about.sections.partners.intro")}</p>
            <ul>
              <li>{t("about.sections.partners.list.sophia")}</li>
              <li>{t("about.sections.partners.list.camerino")}</li>
              <li>{t("about.sections.partners.list.cadiz")}</li>
              <li>{t("about.sections.partners.list.kazeco")}</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
