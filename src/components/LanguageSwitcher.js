import React from "react";
import { useLanguage } from "../LanguageContext";
import "../styles/LanguageSwitcher.scss";

import en from '../assets/icons/en.svg';
import et from '../assets/icons/et.svg';
import ru from '../assets/icons/ru.svg';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="language-switcher">
      
      <div className="language-icons">
        {language !== 'en' && (
            <button onClick={() => handleLanguageChange('en')}>
                <img src={en} alt="English" />
            </button>
        )}
        {language !== 'et' && (
            <button onClick={() => handleLanguageChange('et')}>
                <img src={et} alt="Estonian" />
            </button>
        )}
        {language !== 'ru' && (
            <button onClick={() => handleLanguageChange('ru')}>
                <img src={ru} alt="Russian" />
            </button>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
