import { createContext, useContext, useState } from "react";

import en from "./en.json";
import es from "./es.json";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const texts = language === "en" ? en : es;

  function ToggleLanguage() {
    setLanguage((current) => (current === "en" ? "es" : "en"));
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
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
