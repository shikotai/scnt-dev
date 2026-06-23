import React, { useState } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import "./br28713383.css";
import { Link } from "react-router-dom";
import { useLang } from "../../../lang/context/LanguageContext";

const Br28713383: React.FC = () => {
  const { t } = useLang();

  // Dropdown states for publications
  const [openArticles, setOpenArticles] = useState(false);
  const [openCertificates, setOpenCertificates] = useState(false);
  const [openPatents, setOpenPatents] = useState(false);
  const [openApplications, setOpenApplications] = useState(false);

  const employees = [
    {
      name: t("mutushev.name"),
      position: t("mutushev.position"),
      image: "/images/members/mutushev-alibek.jpg",
      link: "/members/mutushev-alibek",
    },
    {
      name: t("saknur.name"),
      position: t("saknur.position"),
      image: "/images/members/seisenova-aknur.jpeg",
      link: "/members/seisenova-aknur",
    },
    {
      name: t("kapizov.name"),
      position: t("kapizov.position"),
      image: "/images/members/kapizov-omirzak.jpg",
      link: "/members/kapizov-omirzak",
    },
    {
      name: t("sandugasho.name"),
      position: t("sandugasho.position"),
      image: "/images/members/oryngalieva-sandugash.png",
      link: "/members/oryngalieva-sandugash"
    },
    {
      name: t("dauren.name"),
      position: t("dauren.position"),
      image: "/images/members/mukhanov-dauren.jpg",
      link: "/members/dauren-mukhanov",
    },
    {
      name: t("nasiya.name"),
      position: t("nasiya.position"),
      image: "/images/members/nuraly-asiya.jpg",
      link: "/members/nuraly-asiya",
    },
    { 
      name: t("ainurm.name"),
      position: t("ainurm.position"),
      image: "/images/members/muratova-aigerim.png",
      link: "/members/muratova-ainur"
    },
    { 
      name: t("aimang.name"),
      position: t("aimang.position"),
      image: "/images/members/gabdullina-aiman.png",
      link:"/members/gabdullina-aiman"
    },
    { 
      name: t("asadyk.name"),
      position: t("asadyk.position"),
      image: "/images/members/asadyk.png",
      link: "/members/sadyk-aliman"
    },
    {
      name: t("dianak.name"),
      position: t("dianak.position"),
      image: "/images/members/kokenaeva-diana.png",
      link: "/members/kokenaeva-diana"
    },
    {
      name: t("tzhanar.name"),
      position: t("tzhanar.position"),
      image: "/images/members/turatpekova-zhanar.png",
      link: "/members/turatpekova-zhanar"
    },
    {
      name: t("saida.name"),
      position: t("saida.position"),
      image: "/images/members/sanap-aida.png",
      link: "/members/sanat-aida"
    },
    {
      name: t("berdibais.name"),
      position: t("berdibais.position"),
      image: "/images/members/seisenov-berdibai.jpg",
      link: "/members/seisenov-berdibai"
    },
    {
      name: t("serzhan.name"),
      position: t("serzhan.position"),
      image: "/images/members/seisenov-erzhan.jpg",
      link: "/members/seisenov-erzhan"
    },
    {
      name: t("amira.name"),
      position: t("amira.position"),
      image: "/images/members/aitkalikyzy-mira.jpg",
      link: "/members/aitkalikyzy-mira"
    },
    {
      name: t("khalima.name"),
      position: t("khalima.position"),
      image: "/images/members/manap-khalima.jpg",
      link: "/members/manap-khalima"
    },
    {
      name: t("gaidarb.name"),
      position: t("gaidarb.position"),
      image: "/images/members/burashev-gaidar.jpg",
      link: "/members/burashev-gaidar"
    },
    {
      name: t("aitzhan.name"),
      position: t("aitzhan.position"),
      image: "/images/members/aitzhan-mentai.png",
      link: "/members/aitzhan-mentai"
    },
    {
      name: t("aidam.name"),
      position: t("aidam.position"),
      image: "/images/members/manap-aida.jpg",
      link: "/members/manap-aida"
    },
    {
      name: t("msaida.name"),
      position: t("msaida.position"),
      image: "/images/members/placeholder.jpg",
      link: "/members/mukhanova-saida"
    },
    {
      name: t("zhanat.name"),
      position: t("zhanat.position"),
      image: "/images/members/zhanat.png",
      link: "/members/myshyrova-zhanat"
    },
    {
      name: t("ayazhans.name"),
      position: t("ayazhans.position"),
      image: "/images/members/sanuar-ayazhan.jpg",
      link: "/members/sanuar-ayazhan"
    },
    {
      name: t("ualis.name"),
      position: t("ualis.position"),
      image: "/images/members/ualis.png",
      link: "/members/uali-shynybek",
    },
    {
      name: t("anazerke.name"),
      position: t("anazerke.position"),
      image: "/images/members/anuarbekova-nazerke.jpg",
      link: "/members/anuarbekova-nazerke"
    },
    {
      name: t("taigul.name"),
      position: t("taigul.position"),
      image: "/images/members/tursunova-aigul.jpg",
      link: "/members/tursunova-aigul",
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

        <Link to="/members/mutushev-alibek" className="leader-card">
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
        </Link>
      </section>

      {/* Руководитель проекта */}
      <section className="about-section leader-section">
        <h2>{t("project_br28713383.sections.leader.title")}</h2>

        <Link to="/members/seisenova-aknur" className="leader-card">
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
        </Link>
      </section>

      {/* Команда проекта */}
      <section className="about-section employees-section">
        <h2>{t("project_br28713383.sections.employees.title")}</h2>
        <div className="employees-grid">
          {employees.map((emp, index) =>
            emp.link ? (
              <Link key={index} to={emp.link} className="employee-card">
                <div
                  className="employee-photo"
                  style={{ backgroundImage: `url(${emp.image})` }}
                ></div>
                <h3 className="employee-name">{emp.name}</h3>
                <p className="employee-position">{emp.position}</p>
              </Link>
            ) : (
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

        {/* ===== Научные статьи ===== */}
        <div className="dropdown-card">
          <button
            className="dropdown-header"
            onClick={() => setOpenArticles((p) => !p)}
          >
            📄 {t("project_br28713383.sections.publications.groups.articles")}
            <span className={`arrow ${openArticles ? "open" : ""}`}>▾</span>
          </button>

          {openArticles && (
            <ul className="publication-list dropdown-content">
              <li>
                <a
                  href="/files/project1/processes-13-02722-v2.pdf"
                  download
                >
                  {t("project_br28713383.sections.publications.list.paper1")}
                </a>
              </li>

              <li>
                <a
                  href="/files/project1/academic-journal-physical-chemical-sciences-2025.pdf"
                  download
                >
                  {t("project_br28713383.sections.publications.list.paper3")}
                </a>
              </li>

              <li>
                <a
                  href="/files/project1/Vectnik Shakarim (4) 2025 SCNT.pdf"
                  download
                >
                  {t("project_br28713383.sections.publications.list.paper4")}
                </a>
              </li>

              <li>
                <a
                  href="/files/project1/Тезис-1.pdf"
                  download
                >
                  {t("project_br28713383.sections.publications.list.paper2")}
                </a>
              </li>
              <li>
                <a
                  href="/files/project1/CJES_Volume 24_Issue 2_Pages 371-384.pdf"
                  download
                  >
                    {t("project_br28713383.sections.publications.list.paper18")}
                  </a>
              </li>
              <li>
                <a
                  href="/files/project1/CJES_Volume 24_Issue 2_Pages 615-622.pdf"
                  download>
                    {t("project_br28713383.sections.publications.list.paper19")}
                  </a>
              </li> 
            </ul>
          )}
        </div>

        {/* ===== Сертификаты и акты ===== */}
        <div className="dropdown-card">
          <button
            className="dropdown-header"
            onClick={() => setOpenCertificates((p) => !p)}
          >
            📑 {t("project_br28713383.sections.publications.groups.certificates")}
            <span className={`arrow ${openCertificates ? "open" : ""}`}>▾</span>
          </button>

          {openCertificates && (
            <ul className="publication-list dropdown-content">
              <li>
                <a href="/files/project1/Свидетельство (1).pdf" download>
                  {t("project_br28713383.sections.publications.list.paper9")}
                </a>
              </li>

              <li>
                <a href="/files/project1/Свидетельство (2).pdf" download>
                  {t("project_br28713383.sections.publications.list.paper10")}
                </a>
              </li>

              <li>
                <a href="/files/project1/Свидетельство (3).pdf" download>
                  {t("project_br28713383.sections.publications.list.paper11")}
                </a>
              </li>

              <li>
                <a href="/files/project1/Свидетельство (4).pdf" download>
                  {t("project_br28713383.sections.publications.list.paper12")}
                </a>
              </li>

              <li>
                <a href="/files/project1/Свидетельство-1.pdf" download>
                  {t("project_br28713383.sections.publications.list.paper13")}
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* ===== Патенты ===== */}
        <div className="dropdown-card">
          <button
            className="dropdown-header"
            onClick={() => setOpenPatents((p) => !p)}
          >
            🧾 {t("project_br28713383.sections.publications.groups.patents")}
            <span className={`arrow ${openPatents ? "open" : ""}`}>▾</span>
          </button>

          {openPatents && (
            <ul className="publication-list dropdown-content">
              <li>
                <a
                  href="/files/project1/Патент на ПМ №11565 от 24.09.2025.pdf"
                  download
                >
                  {t("project_br28713383.sections.publications.list.paper7")}
                </a>
              </li>

              <li>
                <a
                  href="/files/project1/Патент на ПМ №11612 от 24.09.2025.pdf"
                  download
                >
                  {t("project_br28713383.sections.publications.list.paper8")}
                </a>
              </li>
              <li>
                <a href="/files/project1/VPB5V.pdf" download>
                  {t("project_br28713383.sections.publications.list.paper5")}
                </a>
              </li>
              <li>
                <a href="/files/project1/Патент на ПМ №11684 от 24.09.2025 (покрытие).pdf" download>
                  {t("project_br28713383.sections.publications.list.paper6")}
                </a>
              </li>

              <li>
                <a href="/files/project1/Патент на ПМ №11857 от 06.03.2026.pdf" download>
                  {t("project_br28713383.sections.publications.list.paper14")}
                </a>
              </li>

              <li>
                <a href="/files/project1/Заявление на ПМ 26.03.2026.pdf" download>
                  {t("project_br28713383.sections.publications.list.paper20")}
                </a>
              </li>

              <li>
                <a href="/files/project1/Заявление на изобретение 23.04.2026.pdf" download>
                  {t("project_br28713383.sections.publications.list.paper21")}
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* ===== ICMRP ===== */}
        <div className="dropdown-card">
          <button
            className="dropdown-header"
            onClick={() => setOpenApplications((p) => !p)}
          >
            🧾  {t("project_br28713383.sections.publications.groups.icmrp")}
            <span className={`arrow ${openApplications ? "open" : ""}`}>▾</span>
          </button>

          {openApplications && (
            <ul className="publication-list dropdown-content">
              <li>
                <a href="\files\project1\Сертификат-Kapizov Omirzak Sembiuly.pdf" download>
                  {t("project_br28713383.sections.publications.list.paper15")}
                </a>
              </li>
              <li>
                <a href="\files\project1\Seisenova Aknur Berdibayevna-2.pdf" download>
                  {t("project_br28713383.sections.publications.list.paper16")}
                </a>
              </li>
              <li>
                <a href="\files\project1\Сертификат-Oryngaliyeva Sandugash.pdf" download>
                  {t("project_br28713383.sections.publications.list.paper17")}
                </a>
              </li>
              
            </ul>
          )}
        </div>

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
