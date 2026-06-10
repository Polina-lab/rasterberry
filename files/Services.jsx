import React, { useRef } from 'react';
import '../styles/Services.scss';
import line from '../assets/lineServices.png';
import lineAboutEnd from '../assets/lineAboutEnd.png';
import SingleService from './SingleService';
import servicesData from '../data/servicesData2';
import { useLanguage } from '../LanguageContext';

const Services = ({ sections, activeSection, setActiveSection, onBookClick }) => {
  const { t } = useLanguage();
  const navRef = useRef(null);

  const handleSectionClick = (index) => {
    setActiveSection(index);
    // на мобильном подскролливаем активный таб в видимую область
    if (navRef.current) {
      const items = navRef.current.querySelectorAll('li');
      items[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  return (
    <section id="services" className="services">
      <img alt="" className="line-about-end" src={lineAboutEnd} aria-hidden="true" />
      <h2>{t('services.header')}</h2>

      <nav>
        <ul ref={navRef}>
          {sections.map((section, index) => (
            <li
              key={section.id}
              className={activeSection === index ? 'active' : ''}
              onClick={() => handleSectionClick(index)}
            >
              <h3>{t(`servicesMenu.${section.id}.title`)}</h3>
            </li>
          ))}
        </ul>
      </nav>

      <div className="line">
        <img alt="" src={line} aria-hidden="true" />
      </div>

      <SingleService
        services={servicesData[activeSection].services}
        id={activeSection}
        onBookClick={onBookClick}
      />
    </section>
  );
};

export default Services;
