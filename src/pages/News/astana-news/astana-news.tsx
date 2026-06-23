import React from "react";
import NavigationHeader from "../../../components/NavigationHeader/NavigationHeader";
import Footer from "../../../components/Footer/Footer";
import "./astana-news.css";
import { useLang } from "../../../lang/context/LanguageContext";

const AstanaSymposiumNews: React.FC = () => {
  const { t, lang } = useLang();

  const getArray = (path: string): string[] => {
    const value = t(path, false);
    return Array.isArray(value) ? value : [];
  };

  const openingParagraphs = getArray("astananews.sections.opening.paragraphs");

  const bristolParagraphs = getArray(
    "astananews.sections.bristolMeeting.paragraphs"
  );

  const malaysiaParticipants = getArray(
    "astananews.sections.malaysiaMeetings.participants"
  );

  const malaysiaParagraphs = getArray(
    "astananews.sections.malaysiaMeetings.paragraphs"
  );

  const results = getArray("astananews.sections.results.list");

  return (
    <div className="news-page" key={lang}>
      <NavigationHeader />

      {/* TITLE */}
      <section className="news-section white-isle">
        <h2>{t("astananews.title")}</h2>
      </section>

      {/* OPENING */}
      <section className="news-section lightblue-isle">
        <div className="news-inner">
          <div
            className="news-image1"
            style={{
              backgroundImage:
                "url('/images/news/astana-news/astananews1.jpeg')",
            }}
          />

          <div className="news-content">
            <h3>{t("astananews.sections.opening.title")}</h3>

            {openingParagraphs.map((paragraph, index) => (
              <p key={`opening-${index}`}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* BRISTOL MEETING */}
      <section className="news-section white-isle">
        <div className="news-inner">
          <div className="news-content">
            <h3>{t("astananews.sections.bristolMeeting.title")}</h3>

            {bristolParagraphs.map((paragraph, index) => (
              <p key={`bristol-${index}`}>{paragraph}</p>
            ))}
          </div>

          <div
            className="news-image1"
            style={{
              backgroundImage:
                "url('/images/news/astana-news/astananews2.jpg')",
            }}
          />
        </div>
      </section>

      {/* MALAYSIA MEETINGS */}
      <section className="news-section lightblue-isle">
        <div className="news-inner">
          <div
            className="news-image1"
            style={{
              backgroundImage:
                "url('/images/news/astana-news/astananews3.jpg')",
            }}
          />

          <div className="news-content">
            <h3>{t("astananews.sections.malaysiaMeetings.title")}</h3>
            <p>{t("astananews.sections.malaysiaMeetings.intro")}</p>

            <ul>
              {malaysiaParticipants.map((participant, index) => (
                <li key={`participant-${index}`}>{participant}</li>
              ))}
            </ul>

            {malaysiaParagraphs.map((paragraph, index) => (
              <p key={`malaysia-${index}`}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="news-section white-isle">
        <h2>{t("astananews.sections.results.title")}</h2>

        <div className="news-inner">
          <div className="news-content">
            <ol>
              {results.map((item, index) => (
                <li key={`result-${index}`}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AstanaSymposiumNews;