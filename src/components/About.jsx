import React from 'react';
import '../styles/About.scss';
import lineAbout from '../assets/lineAbout.png';

import { useLanguage } from "../LanguageContext";

const About = ({ features }) => {

    const { t } = useLanguage();

    return (
        <section id="about" className="about">
            <div className="content">
                <div className="blockFirst">
                    <img className="line-about" src={lineAbout} />
                
                    <h2>{t('about.header')}</h2>
                    <p>{t('about.description')}</p>
                    <h3>{t('about.why')}</h3>
                    {features.map((item,index) => (
                        <div className="text-container" key={index}>
                            <div className={item.styles}></div>
                            <div className="dot"></div>
                            <p className='capsL'>{t(`about.aboutFeatures.${index}.text`)}</p>
                        </div>
                    ))}
                    
                    <button
                        className="btn outline-h"
                        onClick={() => window.location.href = "#contact"}>
                            {t('buttons.get')}
                    </button>
                </div>

                <div className="blockSecond">
                    <div className="image">
                        <img className="aboutIMG" />
                    </div>
                    <div className="logo"></div>
                </div>
                
            </div>
        </section>
    );
};

export default About;
