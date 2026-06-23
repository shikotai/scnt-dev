import React, { useState } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const AnuarbekovaNazerke: React.FC = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"bio" >("bio");

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{ backgroundImage: "url(/images/members/anuarbekova-nazerke.jpg)" }}
          ></div>

          <div className="profile-info">
            <h2 className="profile-name">{t("anazerke.name")}</h2>
            <p className="profile-position">{t("anazerke.position")}</p>
            <p className="profile-number">{t("anazerke.number")}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="profile-tabs">
          <button
            className={activeTab === "bio" ? "active" : ""}
            onClick={() => setActiveTab("bio")}
          >
            {t("anazerke.tabs.bio")}
          </button>
        </div>

        {/* Tab Content */}
        <div className="profile-content">
          {activeTab === "bio" && (
            <>
              <h3>{t("anazerke.bioTitle")}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{t("anazerke.bioText")}</p>
            </>
          )}

          
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnuarbekovaNazerke;
