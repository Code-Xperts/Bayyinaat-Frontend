import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faAngleDown, faPhoneVolume, faPhone, faMagnifyingGlass, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBackward, faPlay, faPause, faForward, faStop, faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMap, faClock, faCalendarDays, faEnvelope } from "@fortawesome/free-regular-svg-icons";

import i18n from './../../i18n';
import { useTranslation } from 'react-i18next';

function AboutSection() {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <section
      className="about-section"
      style={{
        backgroundImage:
          "url(https://taqwa.nauthemes.net/wp-content/uploads/2020/04/bg-vector-2-1.png)",
      }}
    >
      <div className="container about">
        <div className="about-content">
          <div className="image-column">
            <img
              src="https://taqwa.nauthemes.net/wp-content/uploads/2022/02/about-us-taqwa-theme.jpg"
              alt="About Us"
            />
          </div>
          <div className="content-column">
            <span className="history-label">{t('ourhistory')}</span>
            <h2 className="center-heading">{t('aboutourfoundation')}</h2>
            <img
              src="https://taqwa.nauthemes.net/wp-content/uploads/2020/06/prayer-head-shp.png"
              alt="Prayer"
            />
            <p>
              We established our center in 1954, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Visit our premises sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="read-more-button">{t('readmore')}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutSection;
