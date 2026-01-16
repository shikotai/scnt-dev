import React, { useState, useEffect } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const NuralyAsiya: React.FC = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"bio" | "projects" | "publications">("bio");

  useEffect(() => {
    document.title = "Nuraly Asiya | SCNT";
  }, []);

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{ backgroundImage: "url(/images/members/nuraly-asiya.jpg)" }}
          />

          <div className="profile-info">
            <h2 className="profile-name">{t("nasiya.name")}</h2>

            <p className="profile-position">
              {t("kapizov.position")}, {t("nasiya.degree")}
            </p>

            <p className="profile-organization">{t("nasiya.organization")}</p>
          </div>
        </div>

        <div className="profile-tabs">
          <button className={activeTab === "bio" ? "active" : ""} onClick={() => setActiveTab("bio")}>
            {t("nasiya.tabs.bio")}
          </button>

          <button
            className={activeTab === "publications" ? "active" : ""}
            onClick={() => setActiveTab("publications")}
          >
            {t("nasiya.tabs.publications")}
          </button>
        </div>

        <div className="profile-content">
          {activeTab === "bio" && (
            <>
              <h3>{t("aimang.bioTitle")}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{t("nasiya.bioText")}</p>
            </>
          )}

          {activeTab === "publications" && (
            <p style={{ whiteSpace: "pre-line" }}>{t("nasiya.publicationsText")}</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NuralyAsiya;
