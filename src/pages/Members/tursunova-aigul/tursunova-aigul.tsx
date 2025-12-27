import React, { useState } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const TursunovaAigul: React.FC = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"bio" >("bio");

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{ backgroundImage: "url(/images/members/tursunova-aigul.jpg)" }}
          ></div>

          <div className="profile-info">
            <h2 className="profile-name">{t("taigul.name")}</h2>
            <p className="profile-position">{t("taigul.position")}</p>
            <p className="profile-degree">{t("taigul.degree")}</p>
            <p className="profile-email">
              Email:{" "}
              <a href={`mailto:${t("taigul.email")}`}>
                {t("taigul.email")}
              </a>
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="profile-tabs">
          <button
            className={activeTab === "bio" ? "active" : ""}
            onClick={() => setActiveTab("bio")}
          >
            {t("taigul.tabs.bio")}
          </button>
        </div>

        {/* Tab Content */}
        <div className="profile-content">
          {activeTab === "bio" && (
            <>
              <h3>{t("taigul.bioTitle")}</h3>
              <p>{t("taigul.bioText")}</p>
            </>
          )}

          
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TursunovaAigul;
