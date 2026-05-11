import React from 'react';
import '../styles/Content.scss';
import Sidebar from "./Sidebar";


import { useLanguage } from "../LanguageContext";
import lineAboutEnd from '../assets/lineAboutEnd.png';



const Content = ({header, links}) => {

    const { t } = useLanguage();



    return (
        <div className='allContent'>
            <img className="line-about-end" src={lineAboutEnd} />
            <main className='mainContent'>

                <Sidebar header={header} links={links}/>
                <div className="content">
                {links.map((link) => (
                        <section id={link} key={link}>
                            <h3>{t(`pages.${header}.links.${link}.title`)}</h3>
                            {Object.keys(t(`pages.${header}.links.${link}.body`)).map((key) => {
                                const text = t(`pages.${header}.links.${link}.body.${key}`);
                                return (
                                <div key={key}>
                                    <p>{text}</p>
                                </div>
                                );
                            })}
                            <div className="purple-line-container">
                                <div className="purple-line"></div>
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Content;
