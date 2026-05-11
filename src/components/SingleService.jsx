import React from 'react';

import '../styles/SingleService.scss';

import servicesData from '../data/servicesData2';

import { useLanguage } from "../LanguageContext";

const SingleService = ({ services, id, onBookClick }) => {

  const { t } = useLanguage();
  const activeCategory = servicesData[id].id;

  return (
    <div className="contentS">
      {services.map((service) => (
        <div key={service.id}
            className={service.background}
            style={{ backgroundImage: '../assets/services/logo_design.png' }}>
          <h3>{t(`servicesMenu.${activeCategory}.services.${service.id}.title`)}</h3>
          <p>{t(`servicesMenu.${activeCategory}.services.${service.id}.description`)}</p>
          <p>{t('services.price')} <span className="price">{service.price}</span></p>
          <button
            className="btn outline"
            onClick={() => onBookClick(activeCategory, service.id)}>
              {t('buttons.book')}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SingleService;
