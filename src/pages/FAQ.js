import React from "react";

import HeaderPage from "./HeaderPage";

import { useLanguage } from "../LanguageContext";

const TermsOfService = () => {

    const { t } = useLanguage();

    return (
        <section className="page">
            <HeaderPage header={t('links.faq')} desc={t('pages.faq.description')}/>
            <p>This is the Privacy Policy page. Add your content here.</p>
        </section>
    );
};

export default TermsOfService;
