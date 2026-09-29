import React from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import { useLang } from "../../../lang/context/LanguageContext";
import "./japan-trip-2026.css";

const JapanTrip2026: React.FC = () => {
  const { t } = useLang();

  const resultsRaw = t("JapanTrip2026.results.items", false);

  const results = Array.isArray(resultsRaw)
    ? resultsRaw
    : [];

  return (
    <div className="news-page">
      <NavigationHeader />

      {/* TITLE */}
      <section className="news-section title-drop japan-trip-title">
        <h2>{t("JapanTrip2026.title")}</h2>

        <h1>{t("JapanTrip2026.date")}</h1>
      </section>

      {/* SECTION 1 */}
      <section className="news-section lightblue-isle">
        <div className="news-inner">
          <div
            className="news-image japan-trip-image"
            style={{
              backgroundImage:
                "url('/images/news/japan-trip-2026/japan1.jpeg')",
            }}
          />

          <div className="news-content">
            <h3>{t("JapanTrip2026.intro.title")}</h3>

            <p>{t("JapanTrip2026.intro.paragraph1")}</p>

            <p>{t("JapanTrip2026.intro.paragraph2")}</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="news-section white-isle">
        <div className="news-inner">
          <div className="news-content">
            <h3>{t("JapanTrip2026.project.title")}</h3>

            <p>{t("JapanTrip2026.project.paragraph1")}</p>

            <p>{t("JapanTrip2026.project.paragraph2")}</p>
          </div>

          <div
            className="news-image japan-trip-image japan-trip-presentation"
            style={{
              backgroundImage:
                "url('/images/news/japan-trip-2026/japan2.jpg')",
            }}
          />
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="news-section lightblue-isle">
        <div className="news-inner">
          <div
            className="news-image japan-trip-image"
            style={{
              backgroundImage:
                "url('/images/news/japan-trip-2026/japan3.jpg')",
            }}
          />

          <div className="news-content">
            <h3>{t("JapanTrip2026.laboratory.title")}</h3>

            <p>{t("JapanTrip2026.laboratory.paragraph1")}</p>

            <p>{t("JapanTrip2026.laboratory.paragraph2")}</p>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="news-section white-isle">
        <div className="news-inner">
          <div className="news-content">
            <h3>{t("JapanTrip2026.validation.title")}</h3>

            <p>{t("JapanTrip2026.validation.paragraph1")}</p>

            <p>{t("JapanTrip2026.validation.paragraph2")}</p>
          </div>

          <div
            className="news-image japan-trip-image"
            style={{
              backgroundImage:
                "url('/images/news/japan-trip-2026/japan4.jpeg')",
            }}
          />
        </div>
      </section>

      {/* SECTION 5 — RESULTS */}
      <section className="news-section lightblue-isle">
        <div className="news-inner">
          <div
            className="news-image japan-trip-image"
            style={{
              backgroundImage:
                "url('/images/news/japan-trip-2026/japan5.jpg')",
            }}
          />

          <div className="news-content">
            <h3>{t("JapanTrip2026.results.title")}</h3>

            <p>{t("JapanTrip2026.results.intro")}</p>

            <ul className="japan-trip-list">
              {results.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 6 — COOPERATION */}
      <section className="news-section white-isle">
        <div className="news-inner">
          <div className="news-content japan-trip-final-content">
            <h3>{t("JapanTrip2026.cooperation.title")}</h3>

            <p>{t("JapanTrip2026.cooperation.paragraph1")}</p>

            <p>{t("JapanTrip2026.cooperation.paragraph2")}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JapanTrip2026;