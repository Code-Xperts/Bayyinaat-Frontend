import React from "react";
import "./slider.css";
import { useTranslation } from "react-i18next";
import { VideoSlider } from "../../Common/sliders";
import i18n from "../../i18n";

const AlHadith = () => {
  const { t } = useTranslation();

  return (
    <div className="al-hadith-container">
      <div className="head">
        <h2 className="heading">{t("videos")}</h2>
        <img
          decoding="async"
          src="https://taqwa.nauthemes.net/wp-content/uploads/2020/06/prayer-head-shp.png"
          alt="heading-image"
        />
      </div>
      <VideoSlider />
    </div>
  );
};

export default AlHadith;
