import React from "react";

import HeaderPage from "./HeaderPage";
import SEO from '../components/SEO';
import { useLanguage } from "../LanguageContext";
import Content from "./Content";



const PrivacyPolicy = () => {

    const { t } = useLanguage();
    const links = t(`pages.privacy.links`);

    return (
        <>
        <SEO
            title={t('links.privacy')}
            description={t('pages.privacy.description')}
            path="/privacy-policy"
            />
        <section className="page">
            <HeaderPage header={t('links.privacy')} desc={t('pages.privacy.description')}/>
            <Content header='privacy' links={Object.keys(links)}/>
        </section>
        </>
    );
};

export default PrivacyPolicy;
