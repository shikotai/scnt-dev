import React, { useState } from "react";
import NavigationHeader from "../../components/NavigationHeader/NavigationHeader";
import Footer from "../../components/Footer/Footer";
import "./buyout.css";
import { useLang } from "../../lang/context/LanguageContext";

type BuyoutFile = {
  label: string;
  href: string;
  type?: "pdf" | "docx";
};

type BuyoutProtocol = {
  id: string;
  protocolTitleKey: string;
  files: BuyoutFile[];
};

const Buyout: React.FC = () => {
  const { t } = useLang();
  const [openId, setOpenId] = useState<string | null>(null);

  const protocols: BuyoutProtocol[] = [
    {
      id: "protocol-2025-plan",
      protocolTitleKey: "buyout.protocols.plan2025",
      files: [
        {
          label: t("buyout.files.protocol1"),
          href: "/files/buyout/Протокол №1 от 04.08.2025_0001.pdf",
          type: "pdf",
        },
      ],
    },
  ];

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const icon = (type?: BuyoutFile["type"]) => {
    switch (type) {
      case "pdf":
        return "📕";
      case "docx":
        return "📄";
      default:
        return "📎";
    }
  };

  return (
    <div className="buyout-page">
      <NavigationHeader />

      {/* HEADER */}
      <section className="buyout-hero">
        <h1 className="buyout-title">{t("buyout.title")}</h1>
        <p className="buyout-subtitle">{t("buyout.subtitle")}</p>
      </section>

      {/* PROTOCOL LIST */}
      <section className="buyout-content">
        <div className="buyout-container">
          {protocols.map(protocol => {
            const isOpen = openId === protocol.id;

            return (
              <div key={protocol.id} className="buyout-item">
                <button
                  className={`buyout-card ${isOpen ? "open" : ""}`}
                  onClick={() => toggle(protocol.id)}
                  aria-expanded={isOpen}
                >
                  <span className="buyout-card-title">
                    {t(protocol.protocolTitleKey)}
                  </span>

                  <span className={`buyout-chevron ${isOpen ? "open" : ""}`}>
                    ▾
                  </span>
                </button>

                <div className={`buyout-dropdown ${isOpen ? "open" : ""}`}>
                  <ul className="buyout-files">
                    {protocol.files.map((file, idx) => (
                      <li key={idx} className="buyout-file-item">
                        <span className="buyout-file-dot" />
                        <a
                          href={file.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          className="buyout-file-link"
                        >
                          <span className="buyout-file-icon">
                            {icon(file.type)}
                          </span>
                          {file.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Buyout;
