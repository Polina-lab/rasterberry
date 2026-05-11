import React, { useState, useEffect } from 'react';
import '../styles/Menu.scss';
import logo from '../assets/logoColor.svg';
import LanguageSwitcher from './LanguageSwitcher';

import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const Menu = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollThreshold = 500;
          setIsScrolled(window.scrollY > scrollThreshold);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    const { t } = useLanguage();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    return (
        <header id="main" className={`menu ${isScrolled ? "scrolled" : ""}`}>
            <button className={`burger-menu ${isOpen ? 'open' : ''}`} 
                    onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="logo">
                <Link to="/#main"><img src={logo} alt="Logo" className="logo-img" /></Link>
            </div>
            <nav className={`nav ${isOpen ? "active" : ""}`}>
                <ul className="nav-left">
                    <li><Link to="/#services">{t('links.services')}</Link></li>
                    <li><Link to="/#our-works">{t('links.works')}</Link></li>
                </ul>
                <ul className="nav-right">
                    <li><Link to="/#about">{t('links.about')}</Link></li>
                    <li><Link to="/#contact">{t('links.contact')}</Link></li>
                </ul>
            </nav>
            <LanguageSwitcher />
        </header>
    );
};

export default Menu;
