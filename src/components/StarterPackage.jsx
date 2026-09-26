import React from 'react';
import '../styles/StarterPackage.scss';
import { useLanguage } from '../LanguageContext';

const includes = [
  { icon: 'iconWeb',    key: 'website'  },
  { icon: 'iconDesign', key: 'design'   },
  { icon: 'iconPages',  key: 'pages'    },
  { icon: 'iconLang',   key: 'languages'},
  { icon: 'iconText',   key: 'content'  },
  { icon: 'iconPhoto',  key: 'images'   },
  { icon: 'iconLogo',   key: 'logo'     },
  { icon: 'iconSeo',    key: 'seo'      },
];

const StarterPackage = ({ onBookClick }) => {
  const { t } = useLanguage();

  return (
    <section className="starter">
      <div className="starter__inner">

        {/* Badge */}
        <div className="starter__badge">
          {t('starter.badge')}
        </div>

        <div className="starter__body">

          {/* Left — info */}
          <div className="starter__left">
            <p className="starter__label">{t('starter.label')}</p>
            <h2 className="starter__title">{t('starter.title')}</h2>
            <p className="starter__subtitle">{t('starter.subtitle')}</p>

            <ul className="starter__list">
              {includes.map(({ icon, key }) => (
                <li key={key} className="starter__item">
                  <div className={`starter__icon ${icon}`} aria-hidden="true" />
                  <span>{t(`starter.includes.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — price card */}
          <div className="starter__card">
            <p className="starter__card-label">{t('starter.cardLabel')}</p>

            <div className="starter__prices">
              <span className="starter__old-price">600 €</span>
              <span className="starter__new-price">300 €</span>
            </div>

            <div className="starter__discount">−50%</div>

            <p className="starter__card-note">{t('starter.note')}</p>

            <button
              className="btn regular-h starter__btn"
              onClick={() => onBookClick && onBookClick('packages', 'starter-package')}
            >
              {t('buttons.get')}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StarterPackage;
