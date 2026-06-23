import React, { useState, useEffect } from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./members.css";

const MukhanovaSaida: React.FC = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"bio" | "publications">("bio");

  useEffect(() => {
    document.title = "Mukhanova Saida | SCNT";
  }, []);

  return (
    <div className="member-profile-page">
      <NavigationHeader />

      <section className="profile-section">
        <div className="profile-header">
          <div
            className="profile-photo"
            style={{ backgroundImage: "url(/images/members/mukhanova-saida.jpg)" }}
          />

          <div className="profile-info">
            <h2 className="profile-name">{t("msaida.name")}</h2>
            <p className="profile-position">{t("msaida.position")}</p>
            <p className="profile-organization">{t("msaida.organization")}</p>
          </div>
        </div>

        <div className="profile-tabs">
          <button
            className={activeTab === "bio" ? "active" : ""}
            onClick={() => setActiveTab("bio")}
          >
            {t("msaida.tabs.bio")}
          </button>
        </div>

        <div className="profile-content">
          {activeTab === "bio" && (
            <>
              <h3>{t("msaida.bioTitle")}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{t("msaida.bioText")}</p>
            </>
          )}

          {activeTab === "publications" && (
            <>
              <h3>{t("msaida.publicationsTitle")}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: t("msaida.publicationslist"),
                }}
              />
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MukhanovaSaida;