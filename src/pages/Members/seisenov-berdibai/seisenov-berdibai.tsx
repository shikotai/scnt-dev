import React, { useState } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const SeisenovB: React.FC = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"bio" | "projects" | "publications">("bio");

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{ backgroundImage: "url(/images/members/seisenov-berdibai.jpg)" }}
          ></div>

          <div className="profile-info">
            <h2 className="profile-name">{t("berdibais.name")}</h2>
            <p className="profile-position">{t("berdibais.position")}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="profile-tabs">
          <button
            className={activeTab === "bio" ? "active" : ""}
            onClick={() => setActiveTab("bio")}
          >
            {t("berdibais.tabs.bio")}
          </button>
        </div>

        {/* Tab Content */}
        <div className="profile-content">
          {activeTab === "bio" && (
            <>
              <h3>{t("berdibais.bioTitle")}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{t("berdibais.bioText")}</p>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeisenovB;
