import React, { useState, useEffect } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const BurashevGaidar: React.FC = () => {
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
            style={{ backgroundImage: "url(/images/members/burashev-gaidar.jpg)" }}
          />

          <div className="profile-info">
            <h2 className="profile-name">{t("gaidarb.name")}</h2>

            <p className="profile-position">
              {t("gaidarb.position")}
            </p>

            <p className="profile-organization">{t("gaidarb.organization")}</p>
          </div>
        </div>

        <div className="profile-tabs">
          <button className={activeTab === "bio" ? "active" : ""} onClick={() => setActiveTab("bio")}>
            {t("gaidarb.tabs.bio")}
          </button>
        </div>

        <div className="profile-content">
          {activeTab === "bio" && (
            <>
              <h3>{t("gaidarb.bioTitle")}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{t("gaidarb.bioText")}</p>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BurashevGaidar;
