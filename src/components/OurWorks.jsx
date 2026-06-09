import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/OurWorks.scss';
import lineAboutEnd from '../assets/lineAboutEnd.png';
import OurWorksItem from './OurWorksItem';
import { useLanguage } from '../LanguageContext';

const OurWorks = ({ works, onWorkClick }) => {
    const { t } = useLanguage();

    // Показываем только featured работы на главной (максимум 6)
    const featuredWorks = works.filter((w) => w.featured).slice(0, 6);

    return (
        <section id="our-works" className="our-works">
            <img className="line-about-end" src={lineAboutEnd} alt="" aria-hidden="true" />

            <h2>{t('ourWorks.title')}</h2>
            <p className="our-works__subtitle">{t('ourWorks.subtitle')}</p>

            <div className="works-list">
                {featuredWorks.map((work) => (
                    <OurWorksItem
                        key={work.id}
                        work={work}
                        onClick={onWorkClick}
                    />
                ))}
            </div>

            <Link to="/works" className="our-works__link">
                <button className="btn outline">
                    {t('ourWorks.seeAll')}
                </button>
            </Link>
        </section>
    );
};

export default OurWorks;
