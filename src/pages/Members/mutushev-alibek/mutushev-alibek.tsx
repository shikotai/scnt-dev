import React, { useState } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const MutushevAlibek: React.FC = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"bio" | "projects" | "publications">("bio");

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{ backgroundImage: "url(/images/members/mutushev-alibek.jpg)" }}
          ></div>

          <div className="profile-info">
            <h2 className="profile-name">{t("mutushev.name")}</h2>
            <p className="profile-position">{t("mutushev.position")}</p>

            <p className="profile-index">
              H-index: <span className="highlight">{t("mutushev.hindex")}</span>
            </p>

            <div className="profile-links">
              <a
                href={t("mutushev.scopus")}
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/icons/scopus.png" alt="Scopus" />
              </a>

              <a
                href={t("mutushev.orcid")}
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/icons/orcid.png" alt="ORCID" />
              </a>

              {/* ResearcherID */}
              <a
                href="https://www.webofscience.com/wos/author/record/" 
                target="_blank"
                rel="noreferrer"
                title={t("mutushev.researcherid")}
              >
                <img src="/images/icons/researcherid.png" alt="ResearcherID" />
              </a>

              {/* SciProfiles */}
              <a
                href={`https://sciprofiles.com/profile/${t("mutushev.sciprofiles")}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/icons/sciprofiles.png" alt="SciProfiles" />
              </a>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="profile-tabs">
          <button
            className={activeTab === "bio" ? "active" : ""}
            onClick={() => setActiveTab("bio")}
          >
            {t("mutushev.tabs.bio")}
          </button>

          <button
            className={activeTab === "projects" ? "active" : ""}
            onClick={() => setActiveTab("projects")}
          >
            {t("mutushev.tabs.projects")}
          </button>

          <button
            className={activeTab === "publications" ? "active" : ""}
            onClick={() => setActiveTab("publications")}
          >
            {t("mutushev.tabs.publications")}
          </button>
        </div>

        {/* Content */}
        <div className="profile-content">

          {activeTab === "bio" && (
            <>
              <h3>{t("mutushev.bioTitle")}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{t("mutushev.bioText")}</p>
            </>
          )}

          {activeTab === "projects" && (
            <p style={{ whiteSpace: "pre-line" }}>{t("mutushev.projectslist")}</p>
          )}

          {activeTab === "publications" && (
            <div
              className="profile-publications"
              dangerouslySetInnerHTML={{ __html: t("mutushev.publicationslist") }}
            ></div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MutushevAlibek;
