import React from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import "./br28713383.css";
import { Link } from "react-router-dom";
import { useLang } from "../../../lang/context/LanguageContext";

const Br28713383: React.FC = () => {
  const { t } = useLang();

  const employees = [
    {
      name: t("ualis.name"),
      position: t("ualis.position"),
      image: "/images/members/ualis.png",
      link: "/members/uali-shynybek",
    },
    {
      name: t("placeholder"),
      position: t("placeholder"),
      image: "/images/members/placeholder.jpg",
      link: null,
    },
  ];

  return (
    <div className="about-page">
      <NavigationHeader />

      {/* Название */}
      <section className="about-section company-section">
        <h2>{t("project_br28713383.code")}</h2>
        <h2>{t("project_br28713383.title")}</h2>
      </section>

      {/* Цели программы */}
      <section className="about-section mission-section">
        <h2>{t("project_br28713383.sections.goals.title")}</h2>
        <div className="about-inner">
          <div
            className="about-image"
            style={{ backgroundImage: `url('/images/project1/molstruct.jpg')` }}
          ></div>
          <div className="about-content">
            <p>{t("project_br28713383.sections.goals.paragraph")}</p>
          </div>
        </div>
      </section>

      {/* Описание программы */}
      <section className="about-section team-section">
        <h2>{t("project_br28713383.sections.description.title")}</h2>
        <div className="about-inner">
          <div className="about-content">
            <p>{t("project_br28713383.sections.description.paragraphs.p1")}</p>
            <p>{t("project_br28713383.sections.description.paragraphs.p2")}</p>
          </div>
          <div
            className="about-image"
            style={{ backgroundImage: `url('/images/project1/pollution.jpg')` }}
          ></div>
        </div>
      </section>

      {/* Руководитель организации */}
      <section className="about-section orgleader-section">
        <h2>{t("project_br28713383.sections.orgleader.title")}</h2>

        <div className="leader-card">
          <div
            className="leader-photo"
            style={{
              backgroundImage: `url(${t(
                "project_br28713383.sections.orgleader.image"
              )})`,
            }}
          ></div>

          <div className="leader-info">
            <h3 className="leader-name">
              {t("project_br28713383.sections.orgleader.name")}
            </h3>

            <p className="leader-position">
              {t("project_br28713383.sections.orgleader.position")}
            </p>

            <p className="leader-email">
              {t("project_br28713383.sections.orgleader.email")}
            </p>
          </div>
        </div>
      </section>

      {/* Руководитель проекта */}
      <section className="about-section leader-section">
        <h2>{t("project_br28713383.sections.leader.title")}</h2>
        <div className="leader-card">
          <div
            className="leader-photo"
            style={{
              backgroundImage: `url(${t(
                "project_br28713383.sections.leader.image"
              )})`,
            }}
          ></div>
          <div className="leader-info">
            <h3 className="leader-name">
              {t("project_br28713383.sections.leader.name")}
            </h3>
            <p className="leader-position">
              {t("project_br28713383.sections.leader.position")}
            </p>
          </div>
        </div>
      </section>

      

      {/* Команда проекта */}
      <section className="about-section employees-section">
        <h2>{t("project_br28713383.sections.employees.title")}</h2>
        <div className="employees-grid">
          {employees.map((emp, index) =>
            emp.link ? (
              // CLICKABLE card
              <Link key={index} to={emp.link} className="employee-card">
                <div
                  className="employee-photo"
                  style={{ backgroundImage: `url(${emp.image})` }}
                ></div>
                <h3 className="employee-name">{emp.name}</h3>
                <p className="employee-position">{emp.position}</p>
              </Link>
            ) : (
              // NON-CLICKABLE card
              <div key={index} className="employee-card employee-card-disabled">
                <div
                  className="employee-photo"
                  style={{ backgroundImage: `url(${emp.image})` }}
                ></div>
                <h3 className="employee-name">{emp.name}</h3>
                <p className="employee-position">{emp.position}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Публикации */}
      <section className="about-section partners-section">
        <h2>{t("project_br28713383.sections.publications.title")}</h2>
        <div className="about-inner">
          <div className="project-content">
            <p>{t("project_br28713383.sections.publications.paragraph")}</p>
            <ul className="publication-list">
              <li>
                <a
                  href="/files/project1/processes-13-02722-v2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("project_br28713383.sections.publications.list.paper1")}
                </a>
              </li>
              <li>
                <a
                  href="/files/project1/Acceptance-Certificate-processes-3788544.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("project_br28713383.sections.publications.list.paper2")}
                </a>
              </li>
              <li>
                <a
                  href="/files/project1/academic-journal-physical-chemical-sciences-2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("project_br28713383.sections.publications.list.paper3")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Назад */}
      <div className="back-button-wrapper">
        <Link to="/projects" className="back-button">
          {t("project_br28713383.backButton")}
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Br28713383;
