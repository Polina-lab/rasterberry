import React, { createContext, useContext, useState } from "react";
import en from "./translations/en";
import et from "./translations/et";
import ru from "./translations/ru";

const LanguageContext = createContext();

const translations = { en, et, ru };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];
    keys.forEach((k) => {
      value = value[k];
    });
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);