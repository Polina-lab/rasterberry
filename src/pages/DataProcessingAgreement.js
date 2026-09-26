import React from "react";

import HeaderPage from "./HeaderPage";
import SEO from '../components/SEO';
import { useLanguage } from "../LanguageContext";
import Content from "./Content";

const DataProcessingAgreement = () => {

    const { t } = useLanguage();
    const links = t(`pages.dataProcess.links`);

    return (
        <>
        <SEO
            title={t('links.data')}
            description={t('pages.dataProcess.description')}
            path="/data-processing-agreement"
            />
        <section className="page">
            <HeaderPage header={t('links.data')} desc={t('pages.dataProcess.description')}/>
            <Content header='dataProcess' links={Object.keys(links)}/>
        </section>
        </>
    );
};

export default DataProcessingAgreement;
