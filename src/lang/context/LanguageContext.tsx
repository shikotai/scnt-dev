import React, { createContext, useContext, useState } from "react";

import ru from "../ru";
import en from "../en";
import kk from "../kk";

export type Lang = "ru" | "en" | "kk";
const translations: Record<Lang, any> = { ru, en, kk };

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;

  // t() overloads:
  t(path: string): any;                // returns string | object | array
  t(path: string, asString: true): string;  // force string or path
  t(path: string, asString: false): any;    // return raw value
};

const LanguageContext = createContext<LangContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = useState<Lang>("ru");

  const t = (path: string, asString: boolean = true): any => {
    const parts = path.split(".");
    let cur: any = translations[lang];

    // Traverse translation tree
    for (const p of parts) {
      cur = cur?.[p];
      if (cur === undefined) break;
    }

    // Fallback to Russian
    if (cur === undefined) {
      let fallback: any = translations["ru"];
      for (const p of parts) {
        fallback = fallback?.[p];
        if (fallback === undefined) break;
      }
      cur = fallback;
    }

    // If strict string requested:
    if (asString) {
      return typeof cur === "string" ? cur : "";
    }

    // Otherwise return raw value (arrays, objects, strings)
    return cur;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
};

export {};
