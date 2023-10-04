import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faAngleDown, faPhoneVolume, faPhone, faMagnifyingGlass, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBackward, faPlay, faPause, faForward, faStop, faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMap, faClock, faCalendarDays, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import logo from "./../assests/images/logo.png";
import i18n from '../i18n';

import { useTranslation } from 'react-i18next';

const TopHeader = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if(lng=="en"){
      document.documentElement.dir = '';
    } else {
      document.documentElement.dir = 'rtl';
    }
  }
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  }

  return (
    <nav className="top-navbar">
      <div className="top-navbar-left">
        <div className="left">
          <p className="space">
            <FontAwesomeIcon icon={faMap} />
            New Orleans, Jamia Mosque
          </p>
          <p className="space">
            <FontAwesomeIcon icon={faClock} /> Mon - Sat 8:00 am - 18:00 pm
          </p>
        </div>
      </div>
      <div className="top-navbar-right">
        <div className={`dropdown ${isDropdownOpen ? "show" : ""}`}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            onClick={toggleDropdown}
          >
            {t("namaztiming")} <FontAwesomeIcon icon={faAngleDown} />
          </button>
          {isDropdownOpen && (
            <div
              className="dropdown-menu show"
              aria-labelledby="dropdownMenuButton"
              style={{ width: "300px" }}
            >
              <table className="table table-borderless jamat-time">
                <thead>
                  <tr>
                    <th scope="col">{t("namaz")}</th>
                    <th scope="col">{t("time")}</th>
                    <th scope="col">{t("jammat")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <FontAwesomeIcon icon={faSun} /> {t("fajr")}
                    </td>
                    <td>4:45 AM</td>
                    <td>5:30 AM</td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon icon={faSun} /> {t("zuhr")}
                    </td>
                    <td>01:02 PM</td>
                    <td>1:30 PM</td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon icon={faSun} /> {t("asr")}
                    </td>
                    <td>5:25 PM</td>
                    <td>6:00 PM</td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon icon={faMoon} /> {t("magrib")}
                    </td>
                    <td>7:30 PM</td>
                    <td>7:30 PM</td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon icon={faMoon} /> {t("isha")}
                    </td>
                    <td>8:44 PM</td>
                    <td>9:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <p className="follow">{t("followus")}</p>
        <div className="social-links">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <div className="language_switcher" onClick={toggleLanguageDropdown}>
            <img src="https://dedevelopers.org/devolta/resources/frontend/images/english.png" alt="" />
            <span>English</span>
            <div className={`switcher_dropdown ${isLanguageDropdownOpen ? "open" : ""}`}>
              <div onClick={() => changeLanguage('en')}>
                <img src="https://dedevelopers.org/devolta/resources/frontend/images/english.png" />
                <span>English</span>
              </div>
              <div onClick={() => changeLanguage('ur')}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/1280px-Flag_of_Pakistan.svg.png" />
                <span>اردو</span>
              </div>
              <div onClick={() => changeLanguage('ar')}>
                <img src="https://cdn.britannica.com/79/5779-004-DC479508/Flag-Saudi-Arabia.jpg" />
                <span>عربي</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default TopHeader;
