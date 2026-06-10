import React from 'react';
import '../styles/About.scss';
import lineAbout from '../assets/lineAbout.png';
import { useLanguage } from '../LanguageContext';

const stats = [
  { value: '50+',  labelKey: 'about.stats.projects' },
  { value: '30+',  labelKey: 'about.stats.clients'  },
  { value: '3+',   labelKey: 'about.stats.years'    },
  { value: '100%', labelKey: 'about.stats.quality'  },
];

const About = ({ features }) => {
  const { t } = useLanguage();

  return (
    <div className="about-wrapper">
      <section id="about" className="about">

        {/* Линия — внутри .about, clip-path и overflow:hidden сами её обрежут */}
        <img
          alt=""
          className="about__line"
          src={lineAbout}
          aria-hidden="true"
        />

        <div className="about__content">

          {/* ── Left ── */}
          <div className="about__left">
            <h2>{t('about.header')}</h2>
            <p className="about__description">{t('about.description')}</p>

            <h3>{t('about.why')}</h3>
            <ul className="about__features">
              {features.map((item, index) => (
                <li key={index} className="about__feature">
                  <div className={`about__icon ${item.styles}`} aria-hidden="true" />
                  <div className="about__dot" aria-hidden="true" />
                  <span>{t(`about.aboutFeatures.${index}.text`)}</span>
                </li>
              ))}
            </ul>

            <button
              className="btn outline-h"
              onClick={() => window.location.href = '#contact'}
            >
              {t('buttons.get')}
            </button>
          </div>

          {/* ── Right ── */}
          <div className="about__right">
            <div className="about__image" aria-hidden="true">
              <div className="about__logo-badge" />
            </div>

            <div className="about__stats">
              {stats.map(({ value, labelKey }) => (
                <div key={labelKey} className="about__stat">
                  <span className="about__stat-value">{value}</span>
                  <span className="about__stat-label">{t(labelKey)}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;