import React from "react";
import { Link } from "react-router-dom";
import NavigationHeader from "../../components/NavigationHeader/NavigationHeader";
import Footer from "../../components/Footer/Footer";
import { useLang } from "../../lang/context/LanguageContext";
import "./Members.css";

type Member = {
  name: string;
  position: string;
  image: string;
  slug: string;
};

const STAFF_DIRECTORY_PATH = "/staff-directory-scnt-2026";

const Members: React.FC = () => {
  const { t } = useLang();

  const members: Member[] = [
    {
      name: t("mutushev.name"),
      position: t("mutushev.position"),
      image: "/images/members/mutushev-alibek.jpg",
      slug: "mutushev-alibek",
    },
    {
      name: t("saknur.name"),
      position: t("saknur.position"),
      image: "/images/members/seisenova-aknur.jpeg",
      slug: "seisenova-aknur",
    },
    {
      name: t("kapizov.name"),
      position: t("kapizov.position"),
      image: "/images/members/kapizov-omirzak.jpg",
      slug: "kapizov-omirzak",
    },
    {
      name: t("sandugasho.name"),
      position: t("sandugasho.position"),
      image: "/images/members/oryngalieva-sandugash.png",
      slug: "oryngalieva-sandugash",
    },
    {
      name: t("dauren.name"),
      position: t("dauren.position"),
      image: "/images/members/mukhanov-dauren.jpg",
      slug: "dauren-mukhanov",
    },
    {
      name: t("nasiya.name"),
      position: t("nasiya.position"),
      image: "/images/members/nuraly-asiya.jpg",
      slug: "nuraly-asiya",
    },
    {
      name: t("ainurm.name"),
      position: t("ainurm.position"),
      image: "/images/members/muratova-aigerim.png",
      slug: "muratova-ainur",
    },
    {
      name: t("aimang.name"),
      position: t("aimang.position"),
      image: "/images/members/gabdullina-aiman.png",
      slug: "gabdullina-aiman",
    },
    {
      name: t("asadyk.name"),
      position: t("asadyk.position"),
      image: "/images/members/asadyk.png",
      slug: "sadyk-aliman",
    },
    {
      name: t("dianak.name"),
      position: t("dianak.position"),
      image: "/images/members/kokenaeva-diana.png",
      slug: "kokenaeva-diana",
    },
    {
      name: t("tzhanar.name"),
      position: t("tzhanar.position"),
      image: "/images/members/turatpekova-zhanar.png",
      slug: "turatpekova-zhanar",
    },
    {
      name: t("saida.name"),
      position: t("saida.position"),
      image: "/images/members/sanap-aida.png",
      slug: "sanat-aida",
    },
    {
      name: t("berdibais.name"),
      position: t("berdibais.position"),
      image: "/images/members/seisenov-berdibai.jpg",
      slug: "seisenov-berdibai",
    },
    {
      name: t("serzhan.name"),
      position: t("serzhan.position"),
      image: "/images/members/seisenov-erzhan.jpg",
      slug: "seisenov-erzhan",
    },
    {
      name: t("amira.name"),
      position: t("amira.position"),
      image: "/images/members/aitkalikyzy-mira.jpg",
      slug: "aitkalikyzy-mira",
    },
    {
      name: t("khalima.name"),
      position: t("khalima.position"),
      image: "/images/members/manap-khalima.jpg",
      slug: "manap-khalima",
    },
    {
      name: t("gaidarb.name"),
      position: t("gaidarb.position"),
      image: "/images/members/burashev-gaidar.jpg",
      slug: "burashev-gaidar",
    },
    {
      name: t("aitzhan.name"),
      position: t("aitzhan.position"),
      image: "/images/members/aitzhan-mentai.png",
      slug: "aitzhan-mentai",
    },
    {
      name: t("aidam.name"),
      position: t("aidam.position"),
      image: "/images/members/manap-aida.jpg",
      slug: "manap-aida",
    },
    {
      name: t("msaida.name"),
      position: t("msaida.position"),
      image: "/images/members/placeholder.jpg",
      slug: "mukhanova-saida",
    },
    {
      name: t("zhanat.name"),
      position: t("zhanat.position"),
      image: "/images/members/zhanat.png",
      slug: "myshyrova-zhanat",
    },
    {
      name: t("ayazhans.name"),
      position: t("ayazhans.position"),
      image: "/images/members/sanuar-ayazhan.jpg",
      slug: "sanuar-ayazhan",
    },
    {
      name: t("ualis.name"),
      position: t("ualis.position"),
      image: "/images/members/ualis.png",
      slug: "uali-shynybek",
    },
    {
      name: t("anazerke.name"),
      position: t("anazerke.position"),
      image: "/images/members/anuarbekova-nazerke.jpg",
      slug: "anuarbekova-nazerke",
    },
    {
      name: t("taigul.name"),
      position: t("taigul.position"),
      image: "/images/members/tursunova-aigul.jpg",
      slug: "tursunova-aigul",
    },
  ];

  return (
    <div className="members-page">
      <NavigationHeader />

      <main>
        <section className="about-section members-section">
          <h2>{t("members.title")}</h2>

          <div className="members-grid">
            {members.map((person) => (
              <Link
                key={person.slug}
                to={`${STAFF_DIRECTORY_PATH}/${person.slug}`}
                className="members-card"
                aria-label={person.name}
              >
                <div
                  className="members-photo"
                  style={{
                    backgroundImage: `url("${person.image}")`,
                  }}
                  role="img"
                  aria-label={person.name}
                />

                <h3 className="members-name">{person.name}</h3>

                <p className="members-position">
                  {person.position}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Members;