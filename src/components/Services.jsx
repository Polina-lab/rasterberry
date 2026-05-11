import React, { useState } from 'react';
import '../styles/Services.scss';
import line from '../assets/lineServices.png';
import SingleService from './SingleService';

import servicesData from '../data/servicesData2';
import lineAboutEnd from '../assets/lineAboutEnd.png';

import { useLanguage } from "../LanguageContext";



const Services = ({ sections, activeSection, setActiveSection, onBookClick}) => {

    const { t } = useLanguage();

    return (
        <section id="services" className="services">
            <img className="line-about-end" src={lineAboutEnd} />
            <h2>{t('services.header')}</h2>
            <nav>
                <ul>
                {sections.map((section, index) => (
                    <li
                        key={section.id}
                        className={activeSection === index ? 'active' : ''}
                        onClick={() => setActiveSection(index)}>
                        <h3>{t(`servicesMenu.${section.id}.title`)}</h3>

                    </li>
        ))}
                </ul>
            </nav>
            <div className="line"><img src={line} alt="Line" /></div>
            <SingleService
                services={servicesData[activeSection].services}
                id={activeSection}
                onBookClick={onBookClick}/>
        </section>
    );
};

export default Services;
