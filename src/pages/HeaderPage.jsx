import React from 'react';
import '../styles/HeaderPage.scss';

import { useLanguage } from "../LanguageContext";

const HeaderPage = ({header, desc}) => {

    const { t } = useLanguage();

    return (
        <div className='headerPage'>
            <header className="header">
                <div className="container">
                    <h1>{header}</h1>
                    <p>{t('pages.date')} 04.05.2026</p>
                    <p>{desc}</p>
                </div>
            </header>
        </div>
    );
};

export default HeaderPage;
