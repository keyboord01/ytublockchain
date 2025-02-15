"use client";

import { Languages } from "@/hooks/use-translation";
import { createContext, useContext, useState, useEffect } from "react";

type LanguageContextType = {
  language: Languages;
  setLanguage: (lang: Languages) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState("en" as Languages);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Languages;
    if (savedLang) setLanguage(savedLang);
  }, []);

  const updateLanguage = (lang: Languages) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
