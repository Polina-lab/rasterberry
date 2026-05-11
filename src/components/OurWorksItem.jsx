import React from "react";

import { useLanguage } from "../LanguageContext";

const OurWorksItem = ({ work, onClick }) => {

  const { t } = useLanguage();

  return (
    <div className="work-item" onClick={() => onClick(work.id)}>
      <img src={work.thumbnail} alt={work.title} className="work-thumbnail" />
      <div className="container">
        <h3>{t(`works.${work.id}.title`)}</h3>
        <p>{t(`works.${work.id}.description`)}</p>
      </div>
    </div>
  );
};

export default OurWorksItem;
