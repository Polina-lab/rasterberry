import React, { useState } from 'react';
import {Routes, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Header from './components/Header';
import Services from './components/Services';
import Packages from "./components/Packages";
import StarterPackage from './components/StarterPackage';
//import SingleService from './components/SingleService';
import OurWorks from './components/OurWorks';
import About from './components/About';
import Process from "./components/Process";
import Contact from './components/Contact';
import Footer from './components/Footer';
import OurWorksDetail from './components/OurWorksDetail';

import WorksPage from './pages/WorksPage';

import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiesPolicy from './pages/CookiesPolicy';
import DataProcessingAgreement from './pages/DataProcessingAgreement';
import RefundPolicy from './pages/RefundPolicy';
import FAQ from './pages/FAQ';

import ourWorksData from './data/ourWorksData';
import aboutFeaturesData from './data/aboutFeaturesData';
import servicesData from './data/servicesData2';

import './styles/global.scss';
import SEO from './components/SEO';
import { useLanguage } from "./LanguageContext";
import useScrollToHash from './hooks/useScrollToHash';


const App = () => {
  const { language } = useLanguage();
  const { t } = useLanguage();

  const [activeSection, setActiveSection] = useState(0);

  const [selectedWork, setSelectedWork] = useState(null);

  const [contactData, setContactData] = useState({
    selectedService: null,
    selectedSubservice: null,
    checkboxChecked: false,
  });

  const handleWorkClick = (workId) => {
    const work = ourWorksData.find((item) => item.id === workId);
    setSelectedWork(work);
  };

  const handleClose = () => {
    setSelectedWork(null);
  };

  const handleBookClick = (selectedService, selectedSubservice) => {
    setContactData({
      selectedService,
      selectedSubservice,
      checkboxChecked: true,
    });

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckboxChange = (checked) => {
    setContactData((prevState) => ({
      ...prevState,
      checkboxChecked: checked,
    }));
  };

  useScrollToHash();

    return (
      <>
      <SEO
        title="Branding, Web Design & Digital Content Studio"
        description={t('description')}
        path="/"
      />
        <section className={`App lang-${language}`} id="main">
          <Menu />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Packages onBookClick={handleBookClick}/>
                  <StarterPackage onBookClick={handleBookClick} />
                  <Services
                    sections={servicesData}
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    onBookClick={handleBookClick}
                  />
                  <About features={aboutFeaturesData} />
                  <OurWorks works={ourWorksData} onWorkClick={handleWorkClick} />
                  {selectedWork && (
                    <OurWorksDetail work={selectedWork} onClose={handleClose} />
                  )}
                  <Process />
                  <Contact contactData={contactData} onCheckboxChange={handleCheckboxChange} />
                  
                </>
              }
            />
            {/* Отдельные страницы */}
            <Route path="/works" element={<WorksPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />
            <Route path="/data-processing-agreement" element={<DataProcessingAgreement />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/faq" element={<FAQ />} />

          </Routes>
          <Footer />
        </section>
        </>
    );
}

export default App;