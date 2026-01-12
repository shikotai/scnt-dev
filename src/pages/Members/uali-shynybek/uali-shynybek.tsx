import React, { useState } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const UaliShynybek: React.FC = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"bio" | "projects" | "publications">("bio");

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{ backgroundImage: "url(/images/members/ualis.png)" }}
          ></div>

          <div className="profile-info">
            <h2 className="profile-name">{t("ualis.name")}</h2>
            <p className="profile-position">{t("ualis.position")}</p>
            <p className="profile-degree">{t("ualis.degree")}</p>
            <p className="profile-email">
              Email:{" "}
              <a href={`mailto:${t("ualis.email")}`}>
                {t("ualis.email")}
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
            {t("ualis.tabs.bio")}
          </button>
        </div>

        {/* Tab Content */}
        <div className="profile-content">
          {activeTab === "bio" && (
            <>
              <h3>{t("ualis.bioTitle")}</h3>
              <p>{t("ualis.bioText")}</p>
            </>
          )}

          {activeTab === "projects" && (
            <>
              <h3>{t("ualis.tabs.projects")}</h3>
              <p>
                {t("ualis.projectslist")}
              </p>
            </>
          )}

          {activeTab === "publications" && (
            <>
              <h3>{t("ualis.tabs.publications")}</h3>
              <p>{t("ualis.publicationslist")}</p>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UaliShynybek;
