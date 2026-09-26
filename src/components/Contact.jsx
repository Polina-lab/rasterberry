import React, { useEffect, useState } from 'react';
import '../styles/Contact.scss';

import lineContact from '../assets/lineContact.png';

import contactServicesData from '../data/contactServicesData';

import { useLanguage } from "../LanguageContext";

const Contact = ({ contactData={}, onCheckboxChange }) => {
    const { t, language } = useLanguage();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [contactMethod, setContactMethod] = useState('email'); // 'email' | 'phone'
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');

    const [honeypot, setHoneypot] = useState('');

    const NAME_REGEX = /^[\p{L}\s'.-]*$/u;

    const handleNameChange = (e) => {
        const value = e.target.value;
        if (NAME_REGEX.test(value)) {
            setName(value);
            setNameError('');
        } else {
            setNameError(t('contact.nameError')); // "Only letters, spaces, - and . allowed"
        }
    };

    const { selectedService, selectedSubservice, checkboxChecked } = contactData || {};
    //const [selectedService, setSelectedService] = useState("");
    //const [selectedSubservice, setSelectedSubservice] = useState("");
    const [selectedServiceState, setSelectedService] = useState(selectedService || '');
    const [selectedSubserviceState, setSelectedSubservice] = useState(selectedSubservice || '');
    const [budget, setBudget] = useState([0, 5000]);
    const [currentBudget, setCurrentBudget] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    

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
        
         // Финальная проверка перед отправкой
        if (!NAME_REGEX.test(name) || !name.trim()) {
            setNameError(t('contact.nameError'));
            return;
        }
        if (contactMethod === 'phone' && !phone.trim()) {
            setSubmitStatus('error');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        const recaptchaToken = await window.grecaptcha.execute('6LcZlootAAAAAALvdAi4uIXJLDfgGd0A8iwqwDaT', { action: 'submit' });

        const formData = {
            name,
            email,
            phone: phone || null,
            contactMethod,
            message,
            language: language || 'en',
            selectedService: checkboxChecked && selectedServiceState
                ? t(`servicesMenu.${selectedServiceState}.title`)
                : '',
            selectedSubservice: checkboxChecked && selectedSubserviceState
                ? t(`servicesMenu.${selectedServiceState}.services.${selectedSubserviceState}.title`)
                : '',
            budget: checkboxChecked ? currentBudget : null,
            checkbox: checkboxChecked,
            recaptchaToken,
            website: honeypot,
        };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                if (window.gtag) {
                    window.gtag('event', 'conversion', {
                        'send_to': 'AW-18391728304/hVjfCKuxoOIcELCB7sFE',
                        'value': 1.0,
                        'currency': 'EUR'
                    });
                }

                setSubmitStatus('success');
                setName('');
                setEmail('');
                setMessage('');
                setSelectedService('');
                setSelectedSubservice('');
                setBudget([0, 5000]);
                setCurrentBudget(0);
                if (checkboxChecked) onCheckboxChange(!checkboxChecked);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact">
            <img alt="Line" className="line-contact" src={lineContact} />
            <h2>{t('contact.header')}</h2>
            <form className="contact-form form-fields" onSubmit={handleSubmit}>
            
            {/* Honeypot — ловушка для ботов, невидима для людей */}
            <input
                type="text"
                name="website"
                style={{
                    position: 'absolute',
                    left: '-9999px',
                    width: '1px',
                    height: '1px',
                    opacity: 0
                }}
                tabIndex="-1"
                autoComplete="off"
                onChange={(e) => setHoneypot(e.target.value)}
            />
            
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="name">{t('contact.name')}</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        placeholder={t('contact.namePlaceholder')}
                        required
                    />
                    {nameError && <span className="field-error">{nameError}</span>}
                </div>
                {/* Способ связи */}
                <div className="form-group contact-method">
                    <label>{t('contact.preferredContact')}</label>
                    <div className="radio-row">
                        <label>
                            <input
                                type="radio"
                                name="contactMethod"
                                value="email"
                                checked={contactMethod === 'email'}
                                onChange={() => setContactMethod('email')}
                            />
                            {t('contact.byEmail')}
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="contactMethod"
                                value="phone"
                                checked={contactMethod === 'phone'}
                                onChange={() => setContactMethod('phone')}
                            />
                            {t('contact.byPhone')}
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="email">{t('contact.email')}</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@mail.com"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">
                        {t('contact.phone')} {contactMethod === 'phone' && '*'}
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+372 5xxxxxxx"
                        required={contactMethod === 'phone'}
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

                {submitStatus === 'error' && (
                    <p className="form-message error">{t('contact.errorMessage')}</p>
                )}

                <button
                    className="btn outline"
                    type="submit"
                    disabled={isSubmitting}>
                        {isSubmitting ? t('buttons.sending') : t('buttons.send')}
                </button>

                {submitStatus === 'success' && (
                    <p className="form-message success">{t('contact.successMessage')}</p>
                )}
            </form>
        </section>
    );
};

export default Contact;
