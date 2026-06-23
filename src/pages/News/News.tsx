import React from "react";
import NavigationHeader from "../../components/NavigationHeader/NavigationHeader";
import Footer from "../../components/Footer/Footer";
import "./News.css";
import { Link } from "react-router-dom";
import { useLang } from "../../lang/context/LanguageContext";

const News: React.FC = () => {
  const { t } = useLang();

  const newsData = [
    {
      title: t("newsPage.items.AstanaSymposium.title"),
      description: t("newsPage.items.AstanaSymposium.description"),
      image: "/images/news/astana-news/astananews1.jpeg",
      date: t("newsPage.items.AstanaSymposium.date"),
      link: "/news/astana-news",
      button: t("newsPage.items.AstanaSymposium.button"),
    },
    {
      title: t("newsPage.items.Beijing.title"),
      description: t("newsPage.items.Beijing.description"),
      image: "/images/news/beijing-news/mingje.jpg",
      date: t("newsPage.items.Beijing.date"),
      link: "/news/beijing-news",
      button: t("newsPage.items.Beijing.button"),
    },
    {
      title: t("newsPage.items.Urumqi.title"),
      description: t("newsPage.items.Urumqi.description"),
      image: "/images/news/urumqi-news/lab3.jpg",
      date: t("newsPage.items.Urumqi.date"),
      link: "/news/urumqi-news",
      button: t("newsPage.items.Urumqi.button"),
    },
    {
      title: t("newsPage.items.Referendum.title"),
      description: t("newsPage.items.Referendum.description"),
      image: "/images/news/referendum/referndum2.jpeg",
      date: t("newsPage.items.Referendum.date"),
      link: "/news/referendum",
      button: t("newsPage.items.Referendum.button"),
    },
    {
      title: t("newsPage.items.Switzerland.title"),
      description: t("newsPage.items.Switzerland.description"),
      image: "/images/news/switzerland-news/epfl.jpg",
      date: t("newsPage.items.Switzerland.date"),
      link: "/news/switzerland-news",
      button: t("newsPage.items.Switzerland.button"),
    },
    {
      title: t("newsPage.items.japanCollab.title"),
      description: t("newsPage.items.japanCollab.description"),
      image: "/images/news/japan-collab.png",
      date: t("newsPage.items.japanCollab.date"),
      link: "/news/japan-news",
      button: t("newsPage.items.japanCollab.button"),
    },
  ];

  return (
    <>
      <NavigationHeader />

      <section className="news-section">
        <h2 className="news-title">{t("newsPage.title")}</h2>

        <div className="news-container">
          {newsData.map((news, index) => (
            <div key={index} className="news-card">
              <div className="news-image">
                <img src={news.image} alt={news.title} />
              </div>

              <div className="news-text">
                <h3>{news.title}</h3>
                <p className="news-date">{news.date}</p>
                <p>{news.description}</p>

                <Link to={news.link} className="news-button">
                  {news.button}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default News;