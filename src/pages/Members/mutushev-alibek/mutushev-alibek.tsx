import React, { useState, useEffect } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const MutushevAlibek: React.FC = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"bio" | "publications">("bio");

  useEffect(() => {
    document.title = "Alibek Mutushev | SCNT";
  }, []);

  // If your translation stores ResearcherID like: "N-6736-2017"
  const researcherId = t("mutushev.researcherid");
  const researcherUrl =
    researcherId && researcherId !== "mutushev.researcherid"
      ? `https://www.webofscience.com/wos/author/record/${researcherId}`
      : "https://www.webofscience.com/wos/author/search";

  // If your translation stores SciProfiles as FULL url:
  const sciprofilesRaw = t("mutushev.sciprofiles");
  const sciprofilesUrl =
    sciprofilesRaw?.startsWith("http") ? sciprofilesRaw : `https://sciprofiles.com/profile/${sciprofilesRaw}`;

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{ backgroundImage: "url(/images/members/mutushev-alibek.jpg)" }}
          />

          <div className="profile-info">
            <h2 className="profile-name">{t("mutushev.name")}</h2>
            <p className="profile-position">{t("mutushev.position")}</p>

            <p className="profile-index">
              H-index: <span className="highlight">{t("mutushev.hindex")}</span>
            </p>

            <div className="profile-links">
              <a href={t("mutushev.scopus")} target="_blank" rel="noreferrer">
                <img src="/images/icons/scopus.png" alt="Scopus" />
              </a>

              <a href={t("mutushev.orcid")} target="_blank" rel="noreferrer">
                <img src="/images/icons/orcid.png" alt="ORCID" />
              </a>

              <a href={researcherUrl} target="_blank" rel="noreferrer" title={researcherId}>
                <img src="/images/icons/researcherid.png" alt="ResearcherID" />
              </a>

              <a href={sciprofilesUrl} target="_blank" rel="noreferrer">
                <img src="/images/icons/sciprofiles.png" alt="SciProfiles" />
              </a>
            </div>
          </div>
        </div>

        <div className="profile-tabs">
          <button className={activeTab === "bio" ? "active" : ""} onClick={() => setActiveTab("bio")}>
            {t("mutushev.tabs.bio")}
          </button>

          <button
            className={activeTab === "publications" ? "active" : ""}
            onClick={() => setActiveTab("publications")}
          >
            {t("mutushev.tabs.publications")}
          </button>
        </div>

        <div className="profile-content">
          {activeTab === "bio" && (
            <>
              <h3>{t("mutushev.bioTitle")}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{t("mutushev.bioText")}</p>
            </>
          )}

          {activeTab === "publications" && (
            <div
              className="profile-publications"
              dangerouslySetInnerHTML={{ __html: t("mutushev.publicationslist") }}
            />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MutushevAlibek;
