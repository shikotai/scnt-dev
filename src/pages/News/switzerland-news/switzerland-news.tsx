import React from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import "./switzerland-news.css";
import { useLang } from "../../../lang/context/LanguageContext";

const SwitzerlandNews: React.FC = () => {
  const { t } = useLang();

  // ✅ Get arrays safely
  const finalsReportItemsRaw = t(
    "SwitzerlandNews.sections.results.list.finalsreport.items",
    false
  );
  const finalUniItemsRaw = t(
    "SwitzerlandNews.sections.results.list.finaluni.items",
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
        <h2>{t("SwitzerlandNews.title")}</h2>
      </section>

      {/* First Day */}
      <section className="news-section white-isle">
        <div className="news-inner">
          <div
            className="news-image1"
            style={{
              backgroundImage: `url('/images/news/switzerland-news/intro-pic.jpeg')`,
            }}
          />
          <div className="news-content">
            <h3>{t("SwitzerlandNews.sections.first.title")}</h3>
            <p>{t("SwitzerlandNews.sections.first.paragraph1")}</p>
            <p>{t("SwitzerlandNews.sections.second.paragraphs.p1")}</p>
          </div>
        </div>
      </section>

      {/* EPFL Visit */}
      <section className="news-section white-isle">
        <div className="news-inner">          
          <div className="news-content">
            <h3>{t("SwitzerlandNews.sections.epfl.title")}</h3>
            <p>{t("SwitzerlandNews.sections.epfl.paragraphs.p1")}</p>
            <p>{t("SwitzerlandNews.sections.epfl.paragraphs.p2")}</p>
            <p>{t("SwitzerlandNews.sections.epfl.paragraphs.p3")}</p>
          </div>
        <div className="news-images-column">
            <div
              className="news-image3"
              style={{
                backgroundImage: `url('/images/news/switzerland-news/epfl.jpg')`,
              }}
            />
            <div
              className="news-image4"
              style={{
                backgroundImage: `url('/images/news/switzerland-news/epfl-meeting.png')`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="news-section lightblue-isle">
        <h2>{t("SwitzerlandNews.sections.results.title")}</h2>
        <div className="news-inner">
          <div className="news-content">
            <ol>
              {/* Finals Report */}
              <li>
                <strong>
                  {t(
                    "SwitzerlandNews.sections.results.list.finalsreport.title"
                  )}
                </strong>
                <ul>
                  {finalsReportItems.map((item, i) => (
                    <li key={`finals-${i}`}>{item}</li>
                  ))}
                </ul>
              </li>

              {/* EPFL Collaboration */}
              <li>
                <strong>
                  {t(
                    "SwitzerlandNews.sections.results.list.finaluni.title"
                  )}
                </strong>
                <ul>
                  {finalUniItems.map((item, i) => (
                    <li key={`uni-${i}`}>{item}</li>
                  ))}
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SwitzerlandNews;
