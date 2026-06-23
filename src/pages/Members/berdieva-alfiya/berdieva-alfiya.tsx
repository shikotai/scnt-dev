import React, { useState } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const BerdievaAlfiya: React.FC = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"bio" >("bio");

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{ backgroundImage: "url(/images/members/alfiya.png)" }}
          ></div>

          <div className="profile-info">
            <h2 className="profile-name">{t("alfiya.name")}</h2>
            <p className="profile-position">{t("alfiya.position")}</p>
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
              <p>{t("anazerke.bioText")}</p>
            </>
          )}

          
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BerdievaAlfiya;
