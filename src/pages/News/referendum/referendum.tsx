import React from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import "./referendum.css"; 
import { useLang } from "../../../lang/context/LanguageContext";

const Referendum: React.FC = () => {
  const { t } = useLang();

  // Results arrays
  const finalsReportItemsRaw = t(
    "UrumqiNews.sections.results.list.finalsreport.items",
    false
  );
  const finalUniItemsRaw = t(
    "UrumqiNews.sections.results.list.finaluni.items",
    false
  );

  const finalsReportItems = Array.isArray(finalsReportItemsRaw)
    ? finalsReportItemsRaw
    : [];
  const finalUniItems = Array.isArray(finalUniItemsRaw)
    ? finalUniItemsRaw
    : [];

  return (
    <div className="news-page">
      <NavigationHeader />

      {/* Title */}
      <section className="news-section title-drop">
        <h2>{t("Referendum.title")}</h2>
      </section>

      {/* FIRST SECTION */}
      <section className="news-section white-isle">
        <div className="news-inner">
          <div className="news-images-column">
            <div
              className="news-image3"
              style={{
                backgroundImage: `url('/images/news/referendum/referndum1.jpeg')`,
              }}
            />
            <div
              className="news-image4"
              style={{
                backgroundImage: `url('/images/news/referendum/referndum2.jpeg')`,
              }}
            />
          </div>

          <div className="news-content">
            <h3>{t("Referendum.sections.first.title")}</h3>
            <p>{t("Referendum.sections.first.paragraph1")}</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Referendum;