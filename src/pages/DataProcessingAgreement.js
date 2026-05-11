import React from "react";

import HeaderPage from "./HeaderPage";

import { useLanguage } from "../LanguageContext";

const DataProcessingAgreement = () => {

    const { t } = useLanguage();

    return (
        <section className="page">
            <HeaderPage header={t('links.data')} desc={t('pages.dataProcess.description')}/>
            <p>This is the Privacy Policy page. Add your content here.</p>
        </section>
    );
};

export default DataProcessingAgreement;
