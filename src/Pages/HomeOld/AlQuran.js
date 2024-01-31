import React from "react";
import "./slider.css";
import { useTranslation } from "react-i18next";
import { Audioslider } from "../../Common/sliders";
import i18n from "../../i18n";

const AlQuran = () => {
  const { t } = useTranslation();

  return (
    <div className="al-hadith-container">
      <div className="head">
        <span className="h">{t("whatweoffer")}</span>
        <h2 className="heading">{t("audios")}</h2>
        <img
          decoding="async"
          src="https://taqwa.nauthemes.net/wp-content/uploads/2020/06/prayer-head-shp.png"
          alt="heading-image"
        />
      </div>
      <Audioslider />
    </div>
  );
};

export default AlQuran;
