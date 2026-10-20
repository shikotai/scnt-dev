
import React from "react";
import NavigationHeader from "../../components/NavigationHeader/NavigationHeader";
import Footer from "../../components/Footer/Footer";
import { useLang } from "../../lang/context/LanguageContext";
import "./Equipment.css";

const equipmentItems = [
  "mill",
  "vibratorySieves",
  "pyrolysisUnit",
  "muffleFurnace",
  "dryingOven",
  "magneticStirrer",
  "centrifuge",
  "distiller",
  "potentiostat",
  "sorptometer",
  "glovebox",
  "analyticalBalance",
  "electronicBalance",
  "floorScale",
  "vacuumPump",
  "contactThermometer",
] as const;

const Equipment: React.FC = () => {
  const { t } = useLang();

  return (
    <div className="equipment-page">
      <NavigationHeader />

      <main className="equipment-main">
        <div className="equipment-container">

          <h1 className="equipment-title">
            {t("equipment.hero.title")}
          </h1>

          <div className="equipment-title-line" />

          <div className="equipment-list">
            {equipmentItems.map((key) => {
              const prefix = `equipment.items.${key}`;

              return (
                <article className="equipment-card" key={key}>

                  <h2 className="equipment-card-title">
                    {t(`${prefix}.title`)}
                  </h2>

                  <p className="equipment-card-text">
                    {t(`${prefix}.description`)}
                  </p>

                  <p className="equipment-card-text">
                    <strong>
                      {t("equipment.labels.application")}:
                    </strong>{" "}
                    {t(`${prefix}.application`)}
                  </p>

                </article>
              );
            })}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Equipment;
