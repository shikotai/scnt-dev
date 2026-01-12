import React, { useState, useEffect } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const KapizovOmirzak: React.FC = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"bio" | "projects" | "publications">("bio");

  useEffect(() => {
    document.title = "Omirzak Kapizov | SCNT";
  }, []);

  const scopusUrl = `https://www.scopus.com/authid/detail.uri?authorId=${t("kapizov.scopusId")}`;

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{ backgroundImage: "url(/images/members/kapizov-omirzak.jpg)" }}
          />

          <div className="profile-info">
            <h2 className="profile-name">{t("kapizov.name")}</h2>

            <p className="profile-position">
              {t("kapizov.position")}, {t("kapizov.degree")}
            </p>

            <p className="profile-organization">{t("kapizov.organization")}</p>

            <p className="profile-index">
              H-index: <span className="highlight">{t("kapizov.hindex")}</span>
            </p>

            <div className="profile-links">
              <a href={scopusUrl} target="_blank" rel="noreferrer">
                <img src="/images/icons/scopus.png" alt="Scopus" />
              </a>

              <a href={t("kapizov.orcid")} target="_blank" rel="noreferrer">
                <img src="/images/icons/orcid.png" alt="ORCID" />
              </a>
            </div>
          </div>
        </div>

        <div className="profile-tabs">
          <button className={activeTab === "bio" ? "active" : ""} onClick={() => setActiveTab("bio")}>
            {t("kapizov.tabs.bio")}
          </button>

          <button
            className={activeTab === "projects" ? "active" : ""}
            onClick={() => setActiveTab("projects")}
          >
            {t("kapizov.tabs.projects")}
          </button>

          <button
            className={activeTab === "publications" ? "active" : ""}
            onClick={() => setActiveTab("publications")}
          >
            {t("kapizov.tabs.publications")}
          </button>
        </div>

        <div className="profile-content">
          {activeTab === "bio" && (
            <>
              <h3>{t("kapizov.bioTitle")}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{t("kapizov.bioText")}</p>
            </>
          )}

          {activeTab === "projects" && (
            <div dangerouslySetInnerHTML={{ __html: t("kapizov.projectslist") }} />
          )}

          {activeTab === "publications" && (
            <div dangerouslySetInnerHTML={{ __html: t("kapizov.publicationslist") }} />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KapizovOmirzak;
