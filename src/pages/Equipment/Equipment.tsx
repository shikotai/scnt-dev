
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavigationHeader from "../../components/NavigationHeader/NavigationHeader";
import Footer from "../../components/Footer/Footer";
import { useLang } from "../../lang/context/LanguageContext";
import "./Equipment.css";


const equipmentGroups = [
  {
    id: "materials",
    items: [
      ["mill", "mill"],
      ["vibratorySieves", "vibratory-sieves"],
      ["pyrolysisUnit", "pyrolysis-unit"],
      ["muffleFurnace", "muffle-furnace"],
      ["dryingOven", "drying-oven"],
    ],
  },
  {
    id: "solutions",
    items: [
      ["magneticStirrer", "magnetic-stirrer"],
      ["centrifuge", "centrifuge"],
      ["distiller", "distiller"],
    ],
  },
  {
    id: "analysis",
    items: [
      ["potentiostat", "potentiostat-cs350"],
      ["sorptometer", "sorptometer"],
      ["glovebox", "glovebox"],
    ],
  },
  {
    id: "weighing",
    items: [
      ["analyticalBalance", "analytical-balance"],
      ["electronicBalance", "electronic-balance"],
      ["floorScale", "floor-scale"],
    ],
  },
] as const;


type EquipmentPhotoProps = {
  filename: string;
  title: string;
  fallback: string;
};

const EquipmentPhoto: React.FC<EquipmentPhotoProps> = ({
  filename,
  title,
  fallback,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="equipment-card-image">
      {hasError ? (
        <div className="equipment-image-placeholder" role="img" aria-label={title}>
          <svg
            viewBox="0 0 64 64"
            width="48"
            height="48"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <rect x="8" y="12" width="48" height="40" rx="5" />
            <circle cx="23" cy="25" r="5" />
            <path d="M10 45L25 33L35 41L43 34L55 46" />
          </svg>
          <span>{fallback}</span>
        </div>
      ) : (
        <img
          src={`/images/equipment/${filename}.jpeg`}
          alt={title}
          loading="lazy"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
};

const Equipment: React.FC = () => {
  const { t } = useLang();

  return (
    <div className="equipment-page">
      <NavigationHeader />

      <main>
        <section className="equipment-hero">
          <div className="equipment-hero-inner">
            <span className="equipment-eyebrow">
              {t("equipment.hero.eyebrow")}
            </span>

            <h1>{t("equipment.hero.title")}</h1>

            <p>{t("equipment.hero.description")}</p>
          </div>
        </section>

        <nav
          className="equipment-navigation"
          aria-label={t("equipment.navigation.title")}
        >
          {equipmentGroups.map((group, index) => (
            <a key={group.id} href={`#${group.id}`}>
              <span className="equipment-navigation-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              {t(`equipment.groups.${group.id}.title`)}
            </a>
          ))}
        </nav>

        {equipmentGroups.map((group, groupIndex) => (
          <section
            key={group.id}
            id={group.id}
            className={`equipment-section ${
              groupIndex % 2 === 0 ? "equipment-section-blue" : ""
            }`}
          >
            <div className="equipment-container">
              <div className="equipment-section-heading">
                <span className="equipment-section-number">
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>

                <h2>{t(`equipment.groups.${group.id}.title`)}</h2>

                <p>{t(`equipment.groups.${group.id}.description`)}</p>
              </div>

              <div className="equipment-grid">
                {group.items.map(([key, filename]) => {
                  const prefix = `equipment.items.${key}`;

                  return (
                    <article className="equipment-card" key={key}>
                      <EquipmentPhoto
                        filename={filename}
                        title={t(`${prefix}.title`)}
                        fallback={t("equipment.labels.noPhoto")}
                      />

                      <div className="equipment-card-content">
                        <h3>{t(`${prefix}.title`)}</h3>

                        <p className="equipment-card-description">
                          {t(`${prefix}.description`)}
                        </p>

                        <div className="equipment-card-application">
                          <h4>{t("equipment.labels.application")}</h4>
                          <p>{t(`${prefix}.application`)}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Equipment;
