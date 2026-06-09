import React, { useState, useRef } from "react";
import { useLanguage } from "../LanguageContext";
import "../styles/WorkCard.scss";

// Фиксированный порядок этапов
const ALL_STAGES = ["planning", "implementation", "draft", "testing", "result"];

const WorkCard = ({ work }) => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const cardRef = useRef(null);

  const title = t(`works.${work.id}.title`);

  const toggle = () => {
    if (isExpanded) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
      // Плавная прокрутка к карточке после раскрытия
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  };

  // Показываем только те этапы, которые есть в work.stages[]
  const visibleStages = ALL_STAGES.filter((s) =>
    work.stages?.includes(s)
  );

  return (
    <>
      <div
        ref={cardRef}
        className={`work-card${isExpanded ? " work-card--expanded" : ""}`}
      >
        {/* ── Preview — всегда видна ─────────────────────────────────── */}
        <div className="work-card__preview" onClick={toggle}>
          <img
            src={work.thumbnail}
            alt={title}
            className="work-card__thumbnail"
          />
          <div className="work-card__preview-bar">
            <div className="work-card__preview-info">
              <span className="work-card__category">
                {t(`worksPage.categories.${work.category}`)}
              </span>
              <h3 className="work-card__title">{title}</h3>
            </div>
            <span className={`work-card__arrow${isExpanded ? " work-card__arrow--open" : ""}`}>
              ↓
            </span>
          </div>
        </div>

        {/* ── Expanded ───────────────────────────────────────────────── */}
        {isExpanded && (
          <div className="work-card__body">

            {/* Описание */}
            <p className="work-card__description">
              {t(`works.${work.id}.description`)}
            </p>

            {/* Галерея */}
            {work.images?.length > 0 && (
              <div
                className={`work-card__gallery${
                  work.images.length === 1 ? " work-card__gallery--single" : ""
                }`}
              >
                {work.images.map((img, i) => (
                  <div
                    key={i}
                    className="work-card__gallery-item"
                    onClick={() => setLightboxImg(img)}
                    title={t("worksPage.clickToEnlarge")}
                  >
                    <img src={img} alt={`${title} — ${i + 1}`} />
                  </div>
                ))}
              </div>
            )}

            {/* Этапы работы */}
            {visibleStages.length > 0 && (
              <div className="work-card__stages">
                <h4 className="work-card__stages-label">
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
                        {/* Номер + линия */}
                        <div className="stage-item__track">
                          <div className="stage-item__number">{stageIndex}</div>
                          {!isLast && <div className="stage-item__line" />}
                        </div>

                        {/* Контент */}
                        <div className="stage-item__content">
                          <h5 className="stage-item__name">
                            {t(`worksPage.stages.${stage}`)}
                          </h5>
                          <p className="stage-item__text">
                            {t(`works.${work.id}.stages.${stage}`)}
                          </p>

                          {/* Ссылка на работу — только в последнем этапе */}
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

            {/* Кнопка закрыть */}
            <div className="work-card__footer">
              <button className="btn outline" onClick={toggle}>
                {t("worksPage.collapse")}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── Lightbox ──────────────────────────────────────────────────── */}
      {lightboxImg && (
        <div
          className="work-lightbox"
          onClick={() => setLightboxImg(null)}
        >
          <div className="work-lightbox__inner">
            <img src={lightboxImg} alt={title} />
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

export default WorkCard;
