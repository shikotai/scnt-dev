import React, { useState, useEffect } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const AitzhanMentai: React.FC = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"bio" | "projects" | "publications">("bio");

  useEffect(() => {
    document.title = "Burashev Gaidar | SCNT";
  }, []);

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{ backgroundImage: "url(/images/members/aitzhan-mentai.png)" }}
          />

          <div className="profile-info">
            <h2 className="profile-name">{t("aitzhan.name")}</h2>

            <p className="profile-position">
              {t("aitzhan.position")}
            </p>
            <p className="profile-degree">{t("aitzhan.degree")}</p>

            <p className="profile-organization">{t("aitzhan.organization")}</p>
          </div>
        </div>

        <div className="profile-tabs">
          <button className={activeTab === "bio" ? "active" : ""} onClick={() => setActiveTab("bio")}>
            {t("aitzhan.tabs.bio")}
          </button>
        </div>

        <div className="profile-content">
          {activeTab === "bio" && (
            <>
              <h3>{t("aitzhan.bioTitle")}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{t("aitzhan.bioText")}</p>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AitzhanMentai;
