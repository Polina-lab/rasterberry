import React from "react";

import HeaderPage from "./HeaderPage";
import SEO from '../components/SEO';
import { useLanguage } from "../LanguageContext";
import Content from "./Content";

const TermsOfService = () => {

    const { t } = useLanguage();
    const links = t(`pages.terms.links`);

    return (
        <>
        <SEO
        title={t('links.terms')}
        description={t('pages.terms.description')}
        path="/terms-of-service"
        />
        <section className="page">
            <HeaderPage header={t('links.terms')} desc={t('pages.terms.description')}/>
            <Content header='terms' links={Object.keys(links)}/>
        </section>
        </>
    );
};

export default TermsOfService;
