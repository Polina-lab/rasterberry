import React from "react";

import HeaderPage from "./HeaderPage";

import { useLanguage } from "../LanguageContext";

const CookiesPolicy = () => {

    const { t } = useLanguage();

    return (
        <section className="page">
            <HeaderPage header={t('links.cookie')} desc={t('pages.cookie.description')}/>
            <p>This is the Privacy Policy page. Add your content here.</p>
        </section>
    );
};

export default CookiesPolicy;
