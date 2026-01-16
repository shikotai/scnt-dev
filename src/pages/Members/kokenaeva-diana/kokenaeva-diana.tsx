import React, { useState } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const KokenaevaDiana: React.FC = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"bio" | "projects" | "publications">("bio");

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{ backgroundImage: "url(/images/members/kokenaeva-diana.png)" }}
          ></div>

          <div className="profile-info">
            <h2 className="profile-name">{t("dianak.name")}</h2>
            <p className="profile-position">{t("dianak.position")}</p>
            <p className="profile-email">
              Email:{" "}
              <a href={`mailto:${t("dianak.email")}`}>
                {t("dianak.email")}
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
            {t("dianak.tabs.bio")}
          </button>
        </div>

        {/* Tab Content */}
        <div className="profile-content">
          {activeTab === "bio" && (
            <>
              <h3>{t("dianak.bioTitle")}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{t("dianak.bioText")}</p>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KokenaevaDiana;
