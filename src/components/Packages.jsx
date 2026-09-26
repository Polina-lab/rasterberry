import React from "react";
import { useLanguage } from "../LanguageContext";
import packagesData from "../data/packagesData";
import lineAboutEnd from '../assets/lineAboutEnd.png';
import "../styles/Packages.scss";

/*<div className="packages__line">
        <img alt="Line" src="/assets/line.svg" aria-hidden="true" />
      </div>*/

const Packages = ({ onBookClick }) => {
  const { t } = useLanguage();

  return (
    <section className="packages">
      <img alt="Line" className="line-about-end" src={lineAboutEnd} />
      <h2>{t("packages.title")}</h2>
      <p className="packages__subtitle">{t("packages.subtitle")}</p>

      <div className="packages__grid">
        {packagesData.map((pkg) => (
          <div
            key={pkg.id}
            className={`package-card${pkg.featured ? " package-card--featured" : ""}`}
          >
            <div className="package-card__accent" />

            {pkg.featured && (
              <span className="package-card__badge">
                {t("packages.badge")}
              </span>
            )}

            <h3 className="package-card__title">
              {t(`packages.items.${pkg.id}.title`)}
            </h3>

            <p className="package-card__price">
              {pkg.price}
              {pkg.priceNote && (
                <span className="package-card__price-note"> {pkg.priceNote}</span>
              )}
            </p>

            <hr className="package-card__divider" />

            <ul className="package-card__includes">
              {pkg.includes.map((key) => (
                <li key={key}>{t(`packages.includes.${key}`)}</li>
              ))}
            </ul>

            <button
              className={`btn ${pkg.featured ? "regular" : "outline"}`}
              onClick={() => onBookClick && onBookClick('packages', pkg.id)}
            >
              {t("packages.cta")}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
