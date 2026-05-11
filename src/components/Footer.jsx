import React from 'react';
import '../styles/Footer.scss';

import lineBefore from '../assets/lineAbout.png';
import lineFooter from '../assets/lineFooter.png';
import logoFooter from '../assets/logo-footer.svg';

import inst from '../assets/icons-footer/inst.png';
import mail from '../assets/icons-footer/mail.png';
import phone from '../assets/icons-footer/phone.png';
import behance from '../assets/icons-footer/behance.png';

import backTop from '../assets/icons-footer/back-top.png';

import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const Footer = () => {

    const { t } = useLanguage();

    return (
        <footer className="footer">
            <h2>Rasterberry</h2>
            <img className="line-before" src={lineBefore} />
            <div className='content'>
                <h3>{t('footer')}</h3>
                <button
                    className="btn regular-h"
                    onClick={() => window.location.href = "/#contact"}>
                        {t('buttons.get')}
                </button>
                <div className="container">
                    <div className='logo-footer'>
                        <img src={logoFooter} alt="logo footer"/>
                        <h3>{t('berry')}</h3>
                    </div>
                    <div className='menu-footer'>
                        <div className="resources">
                                <ul>
                                    <li className='link-header'>{t('links.resources')}</li>
                                    <li><Link to="/#services">{t('links.services')}</Link></li>
                                    <li><Link to="/#about">{t('links.about')}</Link></li>
                                    <li><Link to="/#our-works">{t('links.works')}</Link></li>
                                    <li><Link to="/#contact">{t('links.contact')}</Link></li>
                                </ul>
                        </div>
                        <div className="legal">
                                <ul>
                                    <li className='link-header'>{t('links.legal')}</li>
                                    <li><Link to="/terms-of-service">{t('links.terms')}</Link></li>
                                    <li><Link to="/privacy-policy">{t('links.privacy')}</Link></li>
                                    <li><Link to="/cookies-policy">{t('links.cookie')}</Link></li>
                                    <li><Link to="/data-processing-agreement">{t('links.data')}</Link></li>
                                    <li><Link to="/refund-policy">{t('links.refund')}</Link></li>
                                    <li><Link to="/faq">{t('links.faq')}</Link></li>
                                </ul>
                        </div>
                        <div className="soc-med">
                                <ul>
                                    <li className='link-header'>{t('links.social')}</li>
                                    <li><a href="#" ><img src={inst} />@rasterberry</a></li>
                                    <li><a href="#" ><img src={mail} />info@rasterberry.com</a></li>
                                    <li><a href="#" ><img src={phone} />+372 5837 85 73</a></li>
                                    <li><a href="#" ><img src={behance} />@rasterberry</a></li>
                                </ul>
                        </div>
                    </div>
                </div>
                <img className="line-footer" src={lineFooter} />
                <div className='after-line'>
                    
                    <p>{t('copyrights')}</p>
                    <div className='back-top'><a href="#main"><span>{t('links.backTop')}</span><img src={backTop} /></a></div>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;
