import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";
import "../styles/OurWorksDetail.scss";

const ALL_STAGES = ["planning", "implementation", "draft", "testing", "result"];

const OurWorksDetail = ({ work, onClose }) => {
  const { t } = useLanguage();
  const [lightboxImg, setLightboxImg] = useState(null);

  const title = t(`works.${work.id}.title`);
  const visibleStages = ALL_STAGES.filter((s) => work.stages?.includes(s));

  // Закрытие по клику на оверлей
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <>
      <div className="project-overlay" onClick={handleOverlayClick}>
        <div className="project-details">

          {/* Закрыть */}
          <button className="close-button" onClick={onClose}>×</button>

          {/* Заголовок + категория */}
          <div className="project-details__header">
            <span className="project-details__category">
              {t(`worksPage.categories.${work.category}`)}
            </span>
            <h2>{title}</h2>
          </div>

          {/* Описание */}
          <p className="project-details__description">
            {t(`works.${work.id}.description`)}
          </p>

          {/* Галерея */}
          {work.images?.length > 0 && (
            <div
              className={`project-gallery${
                work.images.length === 1 ? " project-gallery--single" : ""
              }`}
            >
              {work.images.map((img, i) => (
                <div
                  key={i}
                  className="project-gallery__item"
                  onClick={() => setLightboxImg(img)}
                  title={t("worksPage.clickToEnlarge")}
                >
                  <img alt={`${title} ${i + 1}`} src={img} />
                </div>
              ))}
            </div>
          )}

          {/* Этапы работы */}
          {visibleStages.length > 0 && (
            <div className="project-stages">
              <h4 className="project-stages__label">
                {t("worksPage.stagesTitle")}
              </h4>

              <div className="stages-timeline">
                {visibleStages.map((stage, idx) => {
                  const stageIndex = ALL_STAGES.indexOf(stage) + 1;
                  const isLast = idx === visibleStages.length - 1;
                  return (
                    <div
                      key={stage}
                      className={`stage-item${isLast ? " stage-item--last" : ""}`}
                    >
                      <div className="stage-item__track">
                        <div className="stage-item__number">{stageIndex}</div>
                        {!isLast && <div className="stage-item__line" />}
                      </div>
                      <div className="stage-item__content">
                        <h5 className="stage-item__name">
                          {t(`worksPage.stages.${stage}`)}
                        </h5>
                        <p className="stage-item__text">
                          {t(`works.${work.id}.stages.${stage}`)}
                        </p>
                        {stage === "result" && work.link && (
                          <a
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn outline stage-item__link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {t("worksPage.viewWork")} →
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Лайтбокс */}
      {lightboxImg && (
        <div
          className="work-lightbox"
          onClick={() => setLightboxImg(null)}
        >
          <div className="work-lightbox__inner">
            <img alt={title} src={lightboxImg} />
            <button
              className="work-lightbox__close"
              onClick={() => setLightboxImg(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OurWorksDetail;
