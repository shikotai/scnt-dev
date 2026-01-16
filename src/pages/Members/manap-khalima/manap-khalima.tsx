import React, { useState } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const ManapKhalima: React.FC = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"bio" | "projects" | "publications">("bio");

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{ backgroundImage: "url(/images/members/manap-khalima.jpg)" }}
          ></div>

          <div className="profile-info">
            <h2 className="profile-name">{t("khalima.name")}</h2>
            <p className="profile-position">{t("khalima.position")}</p>
            <p className="profile-email">
              Email:{" "}
              <a href={`mailto:${t("khalima.email")}`}>
                {t("khalima.email")}
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
            {t("khalima.tabs.bio")}
          </button>
        </div>

        {/* Tab Content */}
        <div className="profile-content">
          {activeTab === "bio" && (
            <>
              <h3>{t("khalima.bioTitle")}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{t("khalima.bioText")}</p>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ManapKhalima;
