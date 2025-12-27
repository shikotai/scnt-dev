import React, { useState } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const SeisenovaAknur: React.FC = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"bio" | "projects" | "publications">("bio");

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{ backgroundImage: "url(/images/members/seisenova-aknur.jpe  g)" }}
          ></div>

          <div className="profile-info">
            <h2 className="profile-name">{t("saknur.name")}</h2>
            <p className="profile-position">{t("saknur.position")}</p>

            <p className="profile-index">
              H-index: <span className="highlight">{t("saknur.hindex")}</span>
            </p>

            <div className="profile-links">
              <a
                href={t("saknur.scopus")}
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/icons/scopus.png" alt="Scopus" />
              </a>

              <a
                href={t("saknur.orcid")}
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/icons/orcid.png" alt="ORCID" />
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
            {t("saknur.tabs.bio")}
          </button>

          <button
            className={activeTab === "publications" ? "active" : ""}
            onClick={() => setActiveTab("publications")}
          >
            {t("saknur.tabs.publications")}
          </button>
        </div>

        {/* Content */}
        <div className="profile-content">
          {activeTab === "bio" && (
            <>
              <h3>{t("saknur.bioTitle")}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{t("saknur.bioText")}</p>
            </>
          )}

          {activeTab === "publications" && (
            <div
                className="profile-publications"
                dangerouslySetInnerHTML={{ __html: t("saknur.publicationslist") }}
            ></div>
            )}

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeisenovaAknur;
