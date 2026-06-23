import React from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import "./urumqi-news.css"; 
import { useLang } from "../../../lang/context/LanguageContext";

const UrumqiNews: React.FC = () => {
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
        <h2>{t("UrumqiNews.title")}</h2>
      </section>

      {/* FIRST SECTION */}
      <section className="news-section white-isle">
        <div className="news-inner">
          <div className="news-images-column">
            <div
              className="news-image3"
              style={{
                backgroundImage: `url('/images/news/urumqi-news/arrive.jpg')`,
              }}
            />
            <div
              className="news-image4"
              style={{
                backgroundImage: `url('/images/news/urumqi-news/lab1.jpg')`,
              }}
            />
          </div>

          <div className="news-content">
            <h3>{t("UrumqiNews.sections.first.title")}</h3>
            <p>{t("UrumqiNews.sections.first.paragraph1")}</p>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="news-section white-isle">
        <div className="news-inner">
          <div className="news-content">
            <h3>{t("UrumqiNews.sections.second.title")}</h3>
            <p>{t("UrumqiNews.sections.second.paragraphs.p1")}</p>
          </div>
          <div className="news-images-column">
            <div
              className="news-image3"
              style={{
                backgroundImage: `url('/images/news/urumqi-news/lab2.jpg')`,
              }}
            />
            <div
              className="news-image4"
              style={{
                backgroundImage: `url('/images/news/urumqi-news/lab3.jpg')`,
              }}
            />
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="news-section lightblue-isle">
        <h2>{t("UrumqiNews.sections.results.title")}</h2>

        <div className="news-inner">
          <div className="news-content">
            <ol>
              {/* Experimental */}
              <li>
                <strong>
                  {t(
                    "UrumqiNews.sections.results.list.finalsreport.title"
                  )}
                </strong>
                <ul>
                  {finalsReportItems.map((item, i) => (
                    <li key={`finals-${i}`}>{item}</li>
                  ))}
                </ul>
              </li>

              {/* Collaboration */}
              <li>
                <strong>
                  {t("UrumqiNews.sections.results.list.finaluni.title")}
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

export default UrumqiNews;