import React, { useEffect, useState } from 'react';
import '../styles/Contact.scss';

import lineContact from '../assets/lineContact.png';

import contactServicesData from '../data/contactServicesData';

import { useLanguage } from "../LanguageContext";

const Contact = ({ contactData={}, onCheckboxChange }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const { selectedService, selectedSubservice, checkboxChecked } = contactData || {};
    //const [selectedService, setSelectedService] = useState("");
    //const [selectedSubservice, setSelectedSubservice] = useState("");
    const [selectedServiceState, setSelectedService] = useState(selectedService || '');
    const [selectedSubserviceState, setSelectedSubservice] = useState(selectedSubservice || '');
    const [budget, setBudget] = useState([0, 5000]);
    const [currentBudget, setCurrentBudget] = useState(0);

    useEffect(() => {
        if (selectedServiceState && selectedSubserviceState) {
          const progressValues = contactServicesData[selectedServiceState]?.progress || {};
          const range = progressValues[selectedSubserviceState] || [0, 5000];
          setBudget(range);
          setCurrentBudget(range[0]);
        }
    }, [selectedServiceState, selectedSubserviceState]);

    useEffect(() => {
        setSelectedService(contactData.selectedService || '');
        setSelectedSubservice(contactData.selectedSubservice || '');
    }, [contactData]);

    const handleServiceChange = (e) => {
        const service = e.target.value;
        setSelectedService(service);
        setSelectedSubservice("");

        if (service) {
            const progressValues = Object.values(contactServicesData[service]?.progress || {});
            const minBudget = Math.min(...progressValues.map(([min]) => min));
            const maxBudget = Math.max(...progressValues.map(([, max]) => max));
            console.log(minBudget, maxBudget);
            setBudget([minBudget, maxBudget]);
            setCurrentBudget(minBudget);
        } else {
            setBudget([0, 0]);
            setCurrentBudget(0);
        }
    };
    
    const handleSubserviceChange = (e) => {
        const subservice = e.target.value;
        console.log(subservice);
        setSelectedSubservice(subservice);

        if (
            selectedServiceState &&
            contactServicesData[selectedServiceState]?.progress[subservice]
          ) {
            const range = contactServicesData[selectedServiceState].progress[subservice];
            console.log('if');

            setBudget(range);
            setCurrentBudget(range[0]); 
        } else if (selectedServiceState) {
            const progressValues = Object.values(contactServicesData[selectedServiceState]?.progress || {});
            const minBudget = Math.min(...progressValues.map(([min]) => min));
            const maxBudget = Math.max(...progressValues.map(([, max]) => max));
            console.log('else if');
            setBudget([minBudget, maxBudget]);
            setCurrentBudget(minBudget);
        } else {
            console.log('else');

            setBudget([0, 0]);
            setCurrentBudget(0);
        }
    };

    const handleBudgetChange = (e) => {
        setCurrentBudget(Number(e.target.value));
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log({ name, email, message, selectedServiceState, selectedSubserviceState, currentBudget });
    
        const formData = {
            name,
            email,
            message,
            selectedService: t(`servicesMenu.${selectedServiceState}.title`),
            selectedSubservice: t(`servicesMenu.${selectedServiceState}.services.${selectedSubserviceState}.title`),
            budget: currentBudget,
            checkbox: checkboxChecked,
        };
    
        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                alert('Email sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
                setSelectedService('');
                setSelectedSubservice('');
                setBudget([0, 5000]);
                setCurrentBudget(0);
                if (checkboxChecked) onCheckboxChange(!checkboxChecked);
            } else {
                alert('Failed to send email. Please try again.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('An error occurred while sending the email.');
        }
    };

    /*const [setCheckboxChecked] = useState(false);

    const handleCheckboxChange = () => {
        setCheckboxChecked(!checkboxChecked);
    };*/

    const { t } = useLanguage();

    return (
        <section id="contact" className="contact">
            <img alt="Line" className="line-contact" src={lineContact} />
            <h2>{t('contact.header')}</h2>
            <form className="contact-form form-fields">
            <div className="form-row">
                <div className="form-group">
                <label htmlFor="name">{t('contact.name')}</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('contact.namePlaceholder')}
                />
                </div>

                <div className="form-group">
                <label htmlFor="email">{t('contact.email')}</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@mail.com"
                />
                </div>
                </div>

                <div className="form-group checkbox">
                <input
                    type="checkbox"
                    id="have-ideas"
                    checked={checkboxChecked}
                    onChange={(e) => onCheckboxChange(e.target.checked)}
                />
                <label htmlFor="have-ideas">{t('contact.checkbox')}</label>
                </div>

                {checkboxChecked && (
                <>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="service">{t('contact.service')}</label>
                        <select
                            id="service"
                            name="service"
                            value={selectedServiceState}
                            onChange={handleServiceChange}>

                            <option value="" disabled>{t('contact.selectService')}</option>
                            {Object.keys(contactServicesData).map((service) => (
                                <option key={service} value={service}>
                                {t(`servicesMenu.${service}.title`)}
                                </option>
                            ))}
                        </select>
                    </div>
                    {selectedServiceState && (
                        <div className="form-group">
                            <label htmlFor="subservice">{t('contact.subservice')}</label>
                            <select
                                id="subservice"
                                name="subservice"
                                value={selectedSubserviceState}
                                onChange={handleSubserviceChange}>
                                <option value="">{t('contact.selectSubservice')}</option>
                                {contactServicesData[selectedServiceState].subservices.map((sub) => (
                                <option key={sub} value={sub}>
                                    {t(`servicesMenu.${selectedServiceState}.services.${sub}.title`)}
                                </option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>
                <div className="form-group">
                    {selectedServiceState && (
                        <div className="form-group">
                            <label htmlFor="budget">{t('contact.budget')} {currentBudget} €
                            <input
                                id="budget"
                                name="budget"
                                type="range"
                                min={budget[0]}
                                max={budget[1]}
                                step="10"
                                value={currentBudget}
                                onChange={handleBudgetChange}
                            /></label>
                        </div>
                    )}
                </div>
                </>
                )}

                <div className="form-group">
                <label htmlFor="message">{checkboxChecked ? t('contact.addinfo_1') : t('contact.addinfo_2')}</label>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={checkboxChecked ? t('contact.addinfo_1_Text') : t('contact.addinfo_2_Text')}
                ></textarea>
                </div>

                <button
                    className="btn outline"
                    type="submit"
                    onClick={handleSubmit}>
                        {t('buttons.send')}
                </button>
            </form>
        </section>
    );
};

export default Contact;
