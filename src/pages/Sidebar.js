import React from 'react';

import { useLanguage } from "../LanguageContext";


const Sidebar = ({header, links}) => {

    const { t } = useLanguage();


    const handleScroll = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        window.scrollTo({
            top: section.offsetTop - 70,
            behavior: 'smooth'
        });
    };

    return (
        <nav className="sidebar">
        <ul>
            {links.map((link) => (
                <li key={link}>
                    <a href={`#${link}`} onClick={(e) => handleScroll(e, link)}>
                    {t(`pages.${header}.links.${link}.title`)}
                    </a>
                </li>
            ))}
        </ul>
        </nav>
    );
}

export default Sidebar;
