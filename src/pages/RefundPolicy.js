import React from "react";

import HeaderPage from "./HeaderPage";

import { useLanguage } from "../LanguageContext";

const RefundPolicy = () => {

    const { t } = useLanguage();

    return (
        <section className="page">
            <HeaderPage header={t('links.refund')} desc={t('pages.refund.description')}/>
            <p>This is the Privacy Policy page. Add your content here.</p>
        </section>
    );
};

export default RefundPolicy;
