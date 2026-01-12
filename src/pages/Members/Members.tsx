import React from "react";
import { Link } from "react-router-dom";
import NavigationHeader from "../../components/NavigationHeader/NavigationHeader";
import Footer from "../../components/Footer/Footer";
import "./Members.css";
import { useLang } from "../../lang/context/LanguageContext";

const Members: React.FC = () => {
  const { t } = useLang();

  const members = [
    {
      name: t("mutushev.name"),
      position: t("mutushev.position"),
      image: "/images/members/mutushev-alibek.jpg",
      link: "/members/mutushev-alibek",
    },
    {
      name: t("saknur.name"),
      position: t("saknur.position"),
      image: "/images/members/seisenova-aknur.jpeg",
      link: "/members/seisenova-aknur",
    },
    {
      name: t("kapizov.name"),
      position: `${t("kapizov.position")}, ${t("kapizov.degree")}`,
      image: "/images/members/kapizov-omirzak.jpg",
      link: "/members/kapizov-omirzak",
    },
    {
      name: t("dauren.name"),
      position: `${t("dauren.position")}, ${t("dauren.degree")}`,
      image: "/images/members/mukhanov-dauren.jpg",
      link: "/members/dauren-mukhanov",
    },
    {
      name: t("ualis.name"),
      position: t("ualis.position"),
      image: "/images/members/ualis.png",
      link: "/members/uali-shynybek",
    },
    {
      name: t("taigul.name"),
      position: t("taigul.position"),
      image: "/images/members/tursunova-aigul.jpg",
      link: "/members/tursunova-aigul",
    },
  ];

  return (
    <div className="members-page">
      <NavigationHeader />

      <section className="about-section members-section">
        <h2>{t("members.title")}</h2>

        <div className="members-grid">
          {members.map((person, index) => (
            <Link to={person.link} className="members-card" key={index}>
              <div
                className="members-photo"
                style={{ backgroundImage: `url(${person.image})` }}
              />
              <h3 className="members-name">{person.name}</h3>
              <p className="members-position">{person.position}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Members;
