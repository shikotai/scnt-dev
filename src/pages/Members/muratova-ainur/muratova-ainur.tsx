import React, { useState } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const MuratovaAigerim: React.FC = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"bio" | "projects" | "publications">("bio");

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{ backgroundImage: "url(/images/members/muratova-aigerim.png)" }}
          ></div>

          <div className="profile-info">
            <h2 className="profile-name">{t("aigerimm.name")}</h2>
            <p className="profile-position">{t("aigerimm.position")}</p>
            <p className="profile-email">
              Email:{" "}
              <a href={`mailto:${t("aigerimm.email")}`}>
                {t("aigerimm.email")}
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
            {t("aigerimm.tabs.bio")}
          </button>
        </div>

        {/* Tab Content */}
        <div className="profile-content">
          {activeTab === "bio" && (
            <>
              <h3>{t("aigerimm.bioTitle")}</h3>
              <p>{t("aigerimm.bioText")}</p>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MuratovaAigerim;
