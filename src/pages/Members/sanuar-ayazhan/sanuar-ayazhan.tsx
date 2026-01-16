import React, { useState } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const SanuarAyazhan: React.FC = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"bio" | "projects" | "publications">("bio");

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{ backgroundImage: "url(/images/members/sanuar-ayazhan.jpg)" }}
          ></div>

          <div className="profile-info">
            <h2 className="profile-name">{t("ayazhans.name")}</h2>
            <p className="profile-position">{t("ayazhans.position")}</p>
            <p className="profile-email">
              Email:{" "}
              <a href={`mailto:${t("ayazhans.email")}`}>
                {t("ayazhans.email")}
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
            {t("ayazhans.tabs.bio")}
          </button>
        </div>

        {/* Tab Content */}
        <div className="profile-content">
          {activeTab === "bio" && (
            <>
              <h3>{t("ayazhans.bioTitle")}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{t("ayazhans.bioText")}</p>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SanuarAyazhan;
