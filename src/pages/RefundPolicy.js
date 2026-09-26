import React from "react";

import HeaderPage from "./HeaderPage";
import SEO from '../components/SEO';
import { useLanguage } from "../LanguageContext";
import Content from "./Content";

const RefundPolicy = () => {

    const { t } = useLanguage();
    const links = t(`pages.refund.links`);

    return (
        <>
        <SEO
            title={t('links.refund')}
            description={t('pages.refund.description')}
            path="/refund-policy"
            />
        <section className="page">
            <HeaderPage header={t('links.refund')} desc={t('pages.refund.description')}/>
            <Content header='refund' links={Object.keys(links)}/>
        </section>
        </>
    );
};

export default RefundPolicy;
