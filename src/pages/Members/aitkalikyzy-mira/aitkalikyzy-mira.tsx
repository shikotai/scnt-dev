import React, { useState } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const AitkalikyzyMira: React.FC = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"bio" | "projects" | "publications">("bio");

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{ backgroundImage: "url(/images/members/aitkalikyzy-mira.jpg)" }}
          ></div>

          <div className="profile-info">
            <h2 className="profile-name">{t("amira.name")}</h2>
            <p className="profile-position">{t("amira.position")}</p>
            <p className="profile-email">
              Email:{" "}
              <a href={`mailto:${t("amira.email")}`}>
                {t("amira.email")}
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
            {t("amira.tabs.bio")}
          </button>
        </div>

        {/* Tab Content */}
        <div className="profile-content">
          {activeTab === "bio" && (
            <>
              <h3>{t("amira.bioTitle")}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{t("amira.bioText")}</p>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AitkalikyzyMira;
