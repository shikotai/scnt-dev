import React, { useState, useEffect } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const DaurenMukhanov: React.FC = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"bio" | "publications">("bio");

  useEffect(() => {
    document.title = "Dauren Mukhanov | SCNT";
  }, []);

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{
              backgroundImage: "url(/images/members/mukhanov-dauren.jpg)",
            }}
          />

          <div className="profile-info">
            <h2 className="profile-name">{t("dauren.name")}</h2>

            <p className="profile-position">
              {t("dauren.position")}, {t("dauren.degree")}
            </p>

            <p className="profile-organization">
              {t("dauren.organization")}
            </p>

            <p className="profile-index">
              H-index: <span className="highlight">{t("dauren.hindex")}</span>
            </p>

            <div className="profile-links">
              <a
                href={`https://www.scopus.com/authid/detail.uri?authorId=${t(
                  "dauren.scopusId"
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/icons/scopus.png" alt="Scopus" />
              </a>

              <a
                href={t("dauren.orcid")}
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
            {t("dauren.tabs.bio")}
          </button>

          <button
            className={activeTab === "publications" ? "active" : ""}
            onClick={() => setActiveTab("publications")}
          >
            {t("dauren.tabs.publications")}
          </button>
        </div>

        {/* Content */}
        <div className="profile-content">
          {activeTab === "bio" && (
            <>
              <h3>{t("dauren.bioTitle")}</h3>
              <p style={{ whiteSpace: "pre-line" }}>
                {t("dauren.bioText")}
              </p>
            </>
          )}

          {activeTab === "publications" && (
            <div
              className="profile-publications"
              dangerouslySetInnerHTML={{
                __html: t("dauren.publicationslist"),
              }}
            />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DaurenMukhanov;
