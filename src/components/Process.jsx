import React from 'react';
import '../styles/Process.scss';
import { useLanguage } from '../LanguageContext';

const steps = [
  { num: '01', key: 'brief'    },
  { num: '02', key: 'tz'       },
  { num: '03', key: 'concepts' },
  { num: '04', key: 'feedback' },
  { num: '05', key: 'proto'    },
  { num: '06', key: 'launch'   },
  { num: '07', key: 'support'  },
];

const Process = () => {
  const { t } = useLanguage();

  return (
    <section className="process">
      <div className="process__bg" aria-hidden="true" />

      <div className="process__inner">
        <p className="process__label">{t('process.label')}</p>
        <h2 className="process__title">{t('process.title')}</h2>
        <p className="process__subtitle">{t('process.subtitle')}</p>

        <div className="process__steps">
          {steps.map(({ num, key }, i) => (
            <React.Fragment key={key}>
              <div className="process__step">
                <div className="process__num">{num}</div>
                <h3 className="process__step-title">
                  {t(`process.steps.${key}.title`)}
                </h3>
                <p className="process__step-text">
                  {t(`process.steps.${key}.text`)}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="process__arrow" aria-hidden="true">›</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;