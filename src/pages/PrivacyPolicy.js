import React from "react";

import HeaderPage from "./HeaderPage";

import { useLanguage } from "../LanguageContext";
import Content from "./Content";



const PrivacyPolicy = () => {

    const { t } = useLanguage();
    const links = t(`pages.privacy.links`);

    return (
        <section className="page">
            <HeaderPage header={t('links.privacy')} desc={t('pages.privacy.description')}/>
            <Content header='privacy' links={Object.keys(links)}/>
        </section>
    );
};

export default PrivacyPolicy;
