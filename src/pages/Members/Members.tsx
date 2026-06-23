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
      position: t("kapizov.position"),
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
      position: t("dauren.position"),
      image: "/images/members/mukhanov-dauren.jpg",
      link: "/members/dauren-mukhanov",
    },
    {
      name: t("nasiya.name"),
      position: t("nasiya.position"),
      image: "/images/members/nuraly-asiya.jpg",
      link: "/members/nuraly-asiya",
    },
    { 
      name: t("ainurm.name"),
      position: t("ainurm.position"),
      image: "/images/members/muratova-aigerim.png",
      link: "/members/muratova-ainur"
    },
    { 
      name: t("aimang.name"),
      position: t("aimang.position"),
      image: "/images/members/gabdullina-aiman.png",
      link:"/members/gabdullina-aiman"
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
      name: t("saida.name"),
      position: t("saida.position"),
      image: "/images/members/sanap-aida.png",
      link: "/members/sanat-aida"
    },
    {
      name: t("berdibais.name"),
      position: t("berdibais.position"),
      image: "/images/members/seisenov-berdibai.jpg",
      link: "/members/seisenov-berdibai"
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
      name: t("msaida.name"),
      position: t("msaida.position"),
      image: "/images/members/placeholder.jpg",
      link: "/members/mukhanova-saida"
    },
    {
      name: t("zhanat.name"),
      position: t("zhanat.position"),
      image: "/images/members/zhanat.png",
      link: "/members/myshyrova-zhanat"
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
