import React from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import "./beijing-news.css";
import { useLang } from "../../../lang/context/LanguageContext";

const BeijingNews: React.FC = () => {
  const { t } = useLang();

  // Results arrays
  const finalsReportItemsRaw = t(
    "BeijingNews.sections.results.list.finalsreport.items",
    false
  );
  const finalUniItemsRaw = t(
    "BeijingNews.sections.results.list.finaluni.items",
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
        <h2>{t("BeijingNews.title")}</h2>
      </section>

      {/* FIRST SECTION */}
      <section className="news-section white-isle">
        <div className="news-inner">
          <div className="news-images-column">
            <div
              className="news-image3"
              style={{
                backgroundImage: `url('/images/news/beijing-news/tmax.jpg')`,
              }}
            />
            <div
              className="news-image4"
              style={{
                backgroundImage: `url('/images/news/beijing-news/mrbeast.jpg')`,
              }}
            />
          </div>
          <div className="news-content">
            <h3>{t("BeijingNews.sections.first.title")}</h3>
            <p>{t("BeijingNews.sections.first.paragraph1")}</p>
          </div>
        </div>
      </section>

      {/* SECOND SECTION (FIXED) */}
      <section className="news-section white-isle">
        <div className="news-inner">
          <div className="news-content">
            <h3>{t("BeijingNews.sections.second.title")}</h3>
            <p>{t("BeijingNews.sections.second.paragraphs.p1")}</p>
          </div>

        <div
          className="news-image1"
          style={{
          backgroundImage: `url('/images/news/beijing-news/doing.jpg')`,
          }}
        />
        </div>
      </section>

      {/* RESULTS */}
      <section className="news-section lightblue-isle">
        <h2>{t("BeijingNews.sections.results.title")}</h2>

        <div className="news-inner">
          <div className="news-content">
            <ol>
              {/* Batteries */}
              <li>
                <strong>
                  {t(
                    "BeijingNews.sections.results.list.finalsreport.title"
                  )}
                </strong>
                <ul>
                  {finalsReportItems.map((item, i) => (
                    <li key={`finals-${i}`}>{item}</li>
                  ))}
                </ul>
              </li>

              {/* Pyrolysis */}
              <li>
                <strong>
                  {t("BeijingNews.sections.results.list.finaluni.title")}
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

export default BeijingNews;