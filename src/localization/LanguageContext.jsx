import { createContext, useContext, useState } from "react";

import enCommon from "./En/common.json";
import esCommon from "./Es/common.json";

import enCrimsonSoul from "./En/crimsonSoul.json";
import esCrimsonSoul from "./Es/crimsonSoul.json";

import enForesightSports from "./En/foresightSports.json";
import esForesightSports from "./Es/foresightSports.json";

import enPanDeBonus from "./En/panDeBonus.json";
import esPanDeBonus from "./Es/panDeBonus.json";

const LanguageContext = createContext();

const translations = {
  en: {
    common: enCommon,

    projects: {
      "crimson-soul": enCrimsonSoul,
      "foresight-sports": enForesightSports,
      "pan-de-bonus": enPanDeBonus,
    },
  },

  es: {
    common: esCommon,

    projects: {
      "crimson-soul": esCrimsonSoul,
      "foresight-sports": esForesightSports,
      "pan-de-bonus": esPanDeBonus,
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const texts = translations[language];

  function ToggleLanguage() {
    setLanguage((current) => (current === "en" ? "es" : "en"));
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        texts,
        ToggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
