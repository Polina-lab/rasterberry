import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import WorkCard from "../components/WorkCard";
import ourWorksData from "../data/ourWorksData";
import "../styles/WorksPage.scss";

const CATEGORIES = [
  "all",
  "branding",
  "web-design",
  "graphic-design",
  "print",
  "social-media",
  "photography",
];

const WorksPage = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("category");
    if (cat && CATEGORIES.includes(cat)) setActiveCategory(cat);
  }, [location.search]);

  const filteredWorks =
    activeCategory === "all"
      ? ourWorksData
      : ourWorksData.filter((w) => w.category === activeCategory);

  return (
    <div className="works-page">
      <h2>{t("worksPage.title")}</h2>

      {/* Фильтр по категориям */}
      <nav className="works-page__nav">
        <ul>
          {CATEGORIES.map((cat) => (
            <li
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              <h3>{t(`worksPage.categories.${cat}`)}</h3>
            </li>
          ))}
        </ul>
      </nav>

      <div className="works-page__line">
        <div className="works-page__line-bar" />
      </div>

      {/* CSS Grid — expanded карточка растягивается на всю ширину */}
      <div className="works-page__grid">
        {filteredWorks.length > 0 ? (
          filteredWorks.map((work) => (
            <WorkCard key={`${work.id}-${activeCategory}`} work={work} />
          ))
        ) : (
          <p className="works-page__empty">{t("worksPage.empty")}</p>
        )}
      </div>
    </div>
  );
};

export default WorksPage;
