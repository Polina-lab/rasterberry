import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import OurWorksItem from '../components/OurWorksItem';
import OurWorksDetail from '../components/OurWorksDetail';
import ourWorksData from '../data/ourWorksData';
import '../styles/OurWorks.scss';
import '../styles/WorksPage.scss';

const CATEGORIES = [
    'all',
    'branding',
    'web-design',
    'graphic-design',
    'print',
    'social-media',
    'photography',
];

const WorksPage = () => {
    const { t } = useLanguage();
    const location = useLocation();

    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedWork, setSelectedWork] = useState(null);

    // Прокрутка наверх при открытии страницы
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // Поддержка ?category=branding в URL (опционально)
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const cat = params.get('category');
        if (cat && CATEGORIES.includes(cat)) {
            setActiveCategory(cat);
        }
    }, [location.search]);

    const filteredWorks =
        activeCategory === 'all'
            ? ourWorksData
            : ourWorksData.filter((w) => w.category === activeCategory);

    const handleWorkClick = (workId) => {
        const work = ourWorksData.find((item) => item.id === workId);
        setSelectedWork(work);
    };

    return (
        <div className="works-page">
            <h2>{t('worksPage.title')}</h2>

            {/* Фильтр по категориям — такой же стиль как Services nav */}
            <nav className="works-page__nav">
                <ul>
                    {CATEGORIES.map((cat) => (
                        <li
                            key={cat}
                            className={activeCategory === cat ? 'active' : ''}
                            onClick={() => setActiveCategory(cat)}
                        >
                            <h3>{t(`worksPage.categories.${cat}`)}</h3>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="works-page__line">
                <div className="works-page__line-bar" />
            </div>

            {/* Сетка работ */}
            <div className="works-page__grid works-list">
                {filteredWorks.length > 0 ? (
                    filteredWorks.map((work) => (
                        <OurWorksItem
                            key={work.id}
                            work={work}
                            onClick={handleWorkClick}
                        />
                    ))
                ) : (
                    <p className="works-page__empty">
                        {t('worksPage.empty')}
                    </p>
                )}
            </div>

            {/* Детальный просмотр работы */}
            {selectedWork && (
                <OurWorksDetail
                    work={selectedWork}
                    onClose={() => setSelectedWork(null)}
                />
            )}
        </div>
    );
};

export default WorksPage;
