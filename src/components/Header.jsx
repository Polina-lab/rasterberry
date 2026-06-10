import React from 'react';
import '../styles/Header.scss';
import { useLanguage } from '../LanguageContext';

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="header">
      <div className="container">
        <h1>{t('header')}</h1>
        <h2>{t('berry')}</h2>
        <p>{t('description')}</p>
        <div className="buttons">
          <button
            className="btn outline-h"
            onClick={() => window.location.href = '#our-works'}
          >
            {t('buttons.works')}
          </button>
          <button
            className="btn regular-h"
            onClick={() => window.location.href = '#contact'}
          >
            {t('buttons.get')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;