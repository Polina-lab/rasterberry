import React from "react";
import '../styles/OurWorksDetail.scss';

import { useLanguage } from "../LanguageContext";

const OurWorksDetail = ({ work, onClose }) => {

  const { t } = useLanguage();

  return (
    <div className="project-overlay">
      <div className="project-details">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>{t(`works.${work.id}.title`)}</h2>
        <p>{t(`works.${work.id}.fullDescription`)}</p>
        {console.log(work.images.length)}
        <div className={`carousel-container ${work.images.length === 1 ? "single" : "multiple"}`}>
            {work.images.map((image, index) => (
                <div key={index} className="carousel-item">
                    <img alt={`Project ${t(`works.${work.id}.title`)} ${index + 1}`} src={image} />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorksDetail;
