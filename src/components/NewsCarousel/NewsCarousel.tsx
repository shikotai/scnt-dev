import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./NewsCarousel.css";
import { useLang } from "../../lang/context/LanguageContext";

const NewsCarousel: React.FC = () => {
  const { t } = useLang();

  const newsData = [
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
    <section className="news-section">
      <h2 className="news-title">{t("newsCarousel.title")}</h2>

      <Carousel
        className="news-carousel"
        indicators={false}
        interval={5000}
        pause="hover"
        touch
      >
        {newsData.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="news-card">
              <img
                src={item.image}
                alt={item.title}
                className="news-image"
              />
              <div className="news-content">
                <Link to={item.link} className="news-link">
                  <h3 className="news-heading">{item.title}</h3>
                </Link>

                <p className="news-date">{item.date}</p>
                <p className="news-description">{item.description}</p>

                <Link to={item.link} className="news-readmore">
                  {item.button || "Read more →"}
                </Link>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default NewsCarousel;