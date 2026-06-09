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
                <img alt="English" src={en} />
            </button>
        )}
        {language !== 'et' && (
            <button onClick={() => handleLanguageChange('et')}>
                <img alt="Estonian" src={et} />
            </button>
        )}
        {language !== 'ru' && (
            <button onClick={() => handleLanguageChange('ru')}>
                <img alt="Russian" src={ru} />
            </button>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
