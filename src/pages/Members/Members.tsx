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
      name: t("sandugasho.name"),
      position: t("sandugasho.position"),
      image: "/images/members/oryngalieva-sandugash.png",
      link: "/members/oryngalieva-sandugash"
    },
    {
      name: t("dauren.name"),
      position: `${t("dauren.position")}, ${t("dauren.degree")}`,
      image: "/images/members/mukhanov-dauren.jpg",
      link: "/members/dauren-mukhanov",
    },
    {
      name: t("nasiya.name"),
      position: `${t("nasiya.position")}, ${t("nasiya.degree")}`,
      image: "/images/members/nuraly-asiya.jpg",
      link: "/members/nuraly-asiya",
    },
    { 
      name: t("aigerimm.name"),
      position: t("aigerimm.position"),
      image: "/images/members/muratova-aigerim.png",
      link: "/members/muratova-aigerim"
    },
    { 
      name: t("aimang.name"),
      position: t("aimang.position"),
      image: "/images/members/gabdullina-aiman.png",
      link:"/members/gabdillina-aiman"
    },
    { 
      name: t("asadyk.name"),
      position: t("asadyk.position"),
      image: "/images/members/asadyk.png",
      link: "/members/sadyk-aliman"
    },
    {
      name: t("dianak.name"),
      position: t("dianak.position"),
      image: "/images/members/kokenaeva-diana.png",
      link: "/members/kokenaeva-diana"
    },
    {
      name: t("tzhanar.name"),
      position: t("tzhanar.position"),
      image: "/images/members/turatpekova-zhanar.png",
      link: "/members/turatpekova-zhanar"
    },
    {
      name: t("serzhan.name"),
      position: t("serzhan.position"),
      image: "/images/members/seisenov-erzhan.jpg",
      link: "/members/seisenov-erzhan"
    },
    {
      name: t("amira.name"),
      position: t("amira.position"),
      image: "/images/members/aitkalikyzy-mira.jpg",
      link: "/members/aitkalikyzy-mira"
    },
    {
      name: t("khalima.name"),
      position: t("khalima.position"),
      image: "/images/members/manap-khalima.jpg",
      link: "/members/manap-khalima"
    },
    {
      name: t("gaidarb.name"),
      position: t("gaidarb.position"),
      image: "/images/members/burashev-gaidar.jpg",
      link: "/members/burashev-gaidar"
    },
    {
      name: t("aitzhan.name"),
      position: t("aitzhan.position"),
      image: "/images/members/aitzhan-mentai.png",
      link: "/members/aitzhan-mentai"
    },
    {
      name: t("aidam.name"),
      position: t("aidam.position"),
      image: "/images/members/manap-aida.jpg",
      link: "/members/manap-aida"
    },
    {
      name: t("gulnara.name"),
      position: t("gulnara.position"),
      image: "/images/members/gulnara.jpg",
      link: "/members/abdikadirova-gulnara",
    },
    {
      name: t("zhanat.name"),
      position: t("zhanat.position"),
      image: "/images/members/zhanat.png",
      link: "/members/myshyrova-zhanat"
    },
    {
      name: t("alfiya.name"),
      position: t("alfiya.position"),
      image: "/images/members/alfiya.png",
      link: "/members/berdieva-alfiya"
    },
    {
      name: t("ayazhans.name"),
      position: t("ayazhans.position"),
      image: "/images/members/sanuar-ayazhan.jpg",
      link: "/members/sanuar-ayazhan"
    },
    {
      name: t("ualis.name"),
      position: t("ualis.position"),
      image: "/images/members/ualis.png",
      link: "/members/uali-shynybek",
    },
    { 
      name: t("aksuluk.name"),
      position: t("aksuluk.position"),
      image: "/images/members/kaldybekova-aksulu.jpg",
      link: "/members/kaldybekova-aksulu"
    },
    {
      name: t("anazerke.name"),
      position: t("anazerke.position"),
      image: "/images/members/anuarbekova-nazerke.jpg",
      link: "/members/anuarbekova-nazerke"
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
