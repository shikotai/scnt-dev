import React, { useState, useEffect } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const GabdullinaAiman: React.FC = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"bio" | "projects" | "publications">("bio");

  useEffect(() => {
    document.title = "Gabdullina Aiman | SCNT";
  }, []);

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{ backgroundImage: "url(/images/members/gabdullina-aiman.png)" }}
          />

          <div className="profile-info">
            <h2 className="profile-name">{t("aimang.name")}</h2>

            <p className="profile-position">
              {t("kapizov.position")}, {t("aimang.degree")}
            </p>

            <p className="profile-organization">{t("aimang.organization")}</p>
          </div>
        </div>

        <div className="profile-tabs">
          <button className={activeTab === "bio" ? "active" : ""} onClick={() => setActiveTab("bio")}>
            {t("aimang.tabs.bio")}
          </button>

          <button
            className={activeTab === "publications" ? "active" : ""}
            onClick={() => setActiveTab("publications")}
          >
            {t("aimang.tabs.publications")}
          </button>
        </div>

        <div className="profile-content">
          {activeTab === "bio" && (
            <>
              <h3>{t("aimang.bioTitle")}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{t("aimang.bioText")}</p>
            </>
          )}

          {activeTab === "publications" && (
            <p style={{ whiteSpace: "pre-line" }}>{t("aimang.publicationsText ")}</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GabdullinaAiman;
