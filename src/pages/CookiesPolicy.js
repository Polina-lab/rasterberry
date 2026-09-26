import React from "react";

import HeaderPage from "./HeaderPage";
import SEO from '../components/SEO';
import { useLanguage } from "../LanguageContext";
import Content from "./Content";

const CookiesPolicy = () => {

    const { t } = useLanguage();
    const links = t(`pages.cookie.links`);

    return (
        <>
        <SEO
            title={t('links.cookie')}
            description={t('pages.cookie.description')}
            path="/cookies-policy"
            />
        <section className="page">
            <HeaderPage header={t('links.cookie')} desc={t('pages.cookie.description')}/>
            <Content header='cookie' links={Object.keys(links)}/>
        </section>
        </>
    );
};

export default CookiesPolicy;
