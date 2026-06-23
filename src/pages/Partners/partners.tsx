import React from "react";
import NavigationHeader from "../../components/NavigationHeader/NavigationHeader";
import Footer from "../../components/Footer/Footer";
import "./partners.css";
import { useLang } from "../../lang/context/LanguageContext";

type Partner = {
  id: number;
  name: string;
  description: string;
  logo: string;
  websiteLabel: string;
  website: string;
};

const Partners: React.FC = () => {
  const { t } = useLang();

  const partners: Partner[] = [
    {
      id: 1,
      name: t("partners.cards.partner1.name"),
      description: t("partners.cards.partner1.description"),
      logo: "/images/partners/soil.jpg",
      websiteLabel: t("partners.cards.partner1.website"),
      website: "https://soil.kz/",
    },
    {
      id: 2,
      name: t("partners.cards.partner2.name"),
      description: t("partners.cards.partner2.description"),
      logo: "/images/partners/medera.png",
      websiteLabel: t("partners.cards.partner2.website"),
      website: "https://mederaclinic.com/",
    },
    {
      id: 3,
      name: t("partners.cards.partner3.name"),
      description: t("partners.cards.partner3.description"),
      logo: "/images/partners/farabi.png",
      websiteLabel: t("partners.cards.partner3.website"),
      website: "https://farabi.university/",
    },
    {
      id: 4,
      name: t("partners.cards.partner4.name"),
      description: t("partners.cards.partner4.description"),
      logo: "/images/partners/agu.svg",
      websiteLabel: t("partners.cards.partner4.website"),
      website: "https://abai.university/",
    },
    {
      id:5,
      name: t("partners.cards.partner5.name"),
      description: t("partners.cards.partner5.description"),
      logo: "/images/partners/atu.png",
      websiteLabel: t("partners.cards.partner5.website"),
      website: "https://atu.edu.kz/",
    },
    {
      id:6,
      name: t("partners.cards.partner6.name"),
      description: t("partners.cards.partner6.description"),
      logo: "/images/partners/shakarim.jpg",
      websiteLabel: t("partners.cards.partner6.website"),
      website: "https://shakarim.university/ru",
    },
    {
      id:7,
      name: t("partners.cards.partner7.name"),
      description: t("partners.cards.partner7.description"),
      logo: "/images/partners/kazecoanalysis.png",
      websiteLabel: t("partners.cards.partner7.website"),
      website: "https://kazecoanalysis.kz/ru/"
    },
  ];

  return (
    <div className="partners-page">
      <NavigationHeader />

      <section className="partners-hero">
        <div className="partners-hero-content">
          <h1>{t("partners.hero.title")}</h1>
          <p>{t("partners.hero.subtitle")}</p>
        </div>
      </section>

      <section className="partners-intro-section">
        <div className="partners-intro">
          <h2>{t("partners.intro.title")}</h2>
          <p>{t("partners.intro.text")}</p>
        </div>
      </section>

      <section className="partners-list-section">
        <h2>{t("partners.list.title")}</h2>

        <div className="partners-grid">
          {partners.map((partner) => (
            <a
              href={partner.website}
              className="partner-card"
              key={partner.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="partner-logo-box">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="partner-logo"
                />
              </div>

              <div className="partner-card-content">
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>

                <span className="partner-link">
                  {partner.websiteLabel}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="partners-cta-section">
        <div className="partners-cta">
          <h2>{t("partners.cta.title")}</h2>
          <p>{t("partners.cta.text")}</p>

          <a href="/contacts" className="partners-cta-button">
            {t("partners.cta.button")}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;