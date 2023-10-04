import React, { useState, useRef, useEffect } from "react";

import i18n from './../../i18n';
import { useTranslation } from 'react-i18next';

function NamazTimings() {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="namaz-block">
      <div className="gap remove-gap">
        <div className="container-fluid">
          <div className="center-content">
            <div className="sec-tl text-center">
              <span className="theme-clr head">{t('associatedmosque')}</span>
              <h2 className="center-heading">{t('namaztiming')}</h2>
              <img
                decoding="async"
                src="https://taqwa.nauthemes.net/wp-content/uploads/2020/06/prayer-head-shp.png"
                alt="heading-image"
              />
            </div>
            <div className="pr-tm-wrp light_mode">
              <ul className="pr-tm-lst">
                <li className="pr-tm-bx color">
                  <h6>{t('fajr')}</h6>
                  <span>
                    <i className="thm-clr">{t('begins')}:</i>4:50 AM
                  </span>
                  <span>
                    <i className="thm-clr">{t('iqamah')}:</i>5:30 AM
                  </span>
                </li>
                <li className="pr-tm-bx">
                  <h6>{t('zuhr')}</h6>
                  <span>
                    <i className="thm-clr">{t('begins')} </i>01:01 PM
                  </span>
                  <span>
                    <i className="thm-clr">{t('iqamah')}</i>1:30 PM
                  </span>
                </li>
                <li className="pr-tm-bx color">
                  <h6>{t('asr')}</h6>
                  <span>
                    <i className="thm-clr">{t('begins')}</i>5:17 PM
                  </span>
                  <span>
                    <i className="thm-clr">{t('iqamah')}</i>6:00 PM
                  </span>
                </li>
                <li className="pr-tm-bx">
                  <h6>{t('magrib')}</h6>
                  <span>
                    <i className="thm-clr">{t('begins')}</i>7:21 PM
                  </span>
                  <span>
                    <i className="thm-clr">{t('iqamah')}</i>7:21 PM
                  </span>
                </li>
                <li className="pr-tm-bx color">
                  <h6>{t("isha")}</h6>
                  <span>
                    <i className="thm-clr">{t('begins')}</i>8:37 PM
                  </span>
                  <span>
                    <i className="thm-clr">{t('iqamah')}</i>9:00 PM
                  </span>
                </li>
                <li className="pr-tm-bx note spc-pr-tm">
                  <h6>{t("jummah")}</h6>
                  <span>
                    <i>{t('begins')}</i>01:01 PM
                  </span>
                  <span>
                    <i>{t('iqamah')}</i>1:30 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NamazTimings