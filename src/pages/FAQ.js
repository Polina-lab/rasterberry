import React from "react";

import HeaderPage from "./HeaderPage";
import SEO from '../components/SEO';
import { useLanguage } from "../LanguageContext";
import Content from "./Content";

const FAQ = () => {

    const { t } = useLanguage();
    const links = t(`pages.faq.links`);

    return (
        <>
        <SEO
        title={t('links.faq')}
        description={t('pages.faq.description')}
        path="/faq"
        />
        <section className="page">
            <HeaderPage header={t('links.faq')} desc={t('pages.faq.description')}/>
            <Content header='faq' links={Object.keys(links)}/>
        </section>
        </>
    );
};

export default FAQ;
