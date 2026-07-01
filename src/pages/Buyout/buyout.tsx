import React, { useState } from "react";
import NavigationHeader from "../../components/NavigationHeader/NavigationHeader";
import Footer from "../../components/Footer/Footer";
import "./buyout.css";
import { useLang } from "../../lang/context/LanguageContext";

type BuyoutFile = {
  label: string;
  href: string;
  type?: "pdf" | "docx" | "video";
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
          label: t("buyout.files.plan1"),
          href: "/files/buyout/plan2025.PDF",
          type: "pdf",
        },
      ],
    },
    {
      id: "protocol-2026-plan",
      protocolTitleKey: "buyout.protocols.plan2026",
      files: [
        {
          label: t("buyout.files.plan2"),
          href: "/files/buyout/plan2026.PDF",
          type: "pdf",
        },
      ],
    },
  ];

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const icon = (type?: BuyoutFile["type"]) => {
    switch (type) {
      case "pdf":
        return "📕";
      case "docx":
        return "📄";
      case "video":
        return "▶";
      default:
        return "📎";
    }
  };

  const getDownloadName = (href: string) => {
    return href.split("/").pop() || "download";
  };

  return (
    <div className="buyout-page">
      <NavigationHeader />

      <section className="buyout-hero">
        <h1 className="buyout-title">{t("buyout.title")}</h1>
        <p className="buyout-subtitle">{t("buyout.subtitle")}</p>
      </section>

      <section className="buyout-content">
        <div className="buyout-container">
          {protocols.map((protocol) => {
            const isOpen = openId === protocol.id;

            return (
              <div key={protocol.id} className="buyout-item">
                <button
                  type="button"
                  className={`buyout-card ${isOpen ? "open" : ""}`}
                  onClick={() => toggle(protocol.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${protocol.id}-dropdown`}
                >
                  <span className="buyout-card-title">
                    {t(protocol.protocolTitleKey)}
                  </span>

                  <span
                    className={`buyout-chevron ${isOpen ? "open" : ""}`}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>

                <div
                  id={`${protocol.id}-dropdown`}
                  className={`buyout-dropdown ${isOpen ? "open" : ""}`}
                >
                  <ul className="buyout-files">
                    {protocol.files.map((file, idx) => (
                      <li key={`${file.href}-${idx}`} className="buyout-file-item">
                        <span className="buyout-file-dot" />

                        <a
                          href={file.href}
                          download={getDownloadName(file.href)}
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