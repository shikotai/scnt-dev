import React, { useState } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const SanatAida: React.FC = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"bio" | "projects" | "publications">("bio");

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{ backgroundImage: "url(/images/members/sanap-aida.png)" }}
          ></div>

          <div className="profile-info">
            <h2 className="profile-name">{t("saida.name")}</h2>
            <p className="profile-position">{t("saida.position")}</p>
            <p className="profile-degree">{t("saida.degree")}</p>
            <p className="profile-email">
              Email:{" "}
              <a href={`mailto:${t("saida.email")}`}>
                {t("saida.email")}
              </a>
            </p>
            <a href={t("saida.orcid")} target="_blank" rel="noreferrer">
              <img
                src="/images/icons/orcid.png"
                alt="ORCID"
                className="orcid-icon"
              />
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div className="profile-tabs">
          <button
            className={activeTab === "bio" ? "active" : ""}
            onClick={() => setActiveTab("bio")}
          >
            {t("saida.tabs.bio")}
          </button>
          <button
            className={activeTab === "publications" ? "active" : ""}
            onClick={() => setActiveTab("publications")}
          >
            {t("saida.tabs.publications")}
          </button>
        </div>

        {/* Tab Content */}
        <div className="profile-content">
          {activeTab === "bio" && (
            <>
              <h3>{t("saida.bioTitle")}</h3>
               <p style={{ whiteSpace: "pre-line" }}>{t("saida.bioText")}</p>
            </>
          )}
          {activeTab === "publications" && (
            <div
              className="profile-publications"
              dangerouslySetInnerHTML={{
                __html: t("saida.publicationslist"),
              }}
            />
          )}
        </div>

      </section>

      <Footer />
    </div>
  );
};

export default SanatAida;
