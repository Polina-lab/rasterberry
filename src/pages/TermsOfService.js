import React from "react";

import HeaderPage from "./HeaderPage";

import { useLanguage } from "../LanguageContext";

const TermsOfService = () => {

    const { t } = useLanguage();

    return (
        <section className="page">
            <HeaderPage header={t('links.terms')} desc={t('pages.terms.description')}/>
            <p>This is the Privacy Policy page. Add your content here.</p>
        </section>
    );
};

export default TermsOfService;
