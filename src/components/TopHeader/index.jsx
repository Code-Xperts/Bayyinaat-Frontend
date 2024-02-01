import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faMap, faClock } from "@fortawesome/free-regular-svg-icons";
import { useTranslation } from "react-i18next";
import "../../assests/style.css";
import i18n from "../../i18n";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LanguageArr = [
  {
    lang: "English",
    img: "https://dedevelopers.org/devolta/resources/frontend/images/english.png",
    code: "en",
  },
  {
    lang: "اردو",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/1280px-Flag_of_Pakistan.svg.png",
    code: "ur",
  },
  {
    lang: "عربي",
    img: "https://cdn.britannica.com/79/5779-004-DC479508/Flag-Saudi-Arabia.jpg",
    code: "ar",
  },
];

const TopHeader = () => {
  const [currentlanguage, setCurrentLanguage] = useState({
    lang: "English",
    img: "https://dedevelopers.org/devolta/resources/frontend/images/english.png",
    code: "en",
  });
  const {
    socialLinks = {},
    primaryAddress = "",
    businessHours = {},
  } = useSelector((state) => state.user.companyInfo);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng, curr) => {
    setCurrentLanguage(curr);
    i18n.changeLanguage(lng);
    document.body.classList.remove("en");
    document.body.classList.remove("ur");
    document.body.classList.remove("ar");
    document.body.classList.add(lng);
    if (lng == "en") {
      document.documentElement.dir = "";
    } else {
      document.documentElement.dir = "rtl";
    }
  };

  const [isNamazTimeDropdownOpen, setIsNamazTimeDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const namazTimeDropdownRef = useRef(null);
  const languageDropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        namazTimeDropdownRef.current &&
        !namazTimeDropdownRef.current.contains(event.target)
      ) {
        setIsNamazTimeDropdownOpen(false);
      }
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleNamazTimeDropdown = () => {
    setIsNamazTimeDropdownOpen(!isNamazTimeDropdownOpen);
    if (isLanguageDropdownOpen) {
      setIsLanguageDropdownOpen(false);
    }
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    if (isNamazTimeDropdownOpen) {
      setIsNamazTimeDropdownOpen(false);
    }
  };

  return (
    <nav className="top-navbar">
      <div className="top-navbar-left">
        <div className="left">
          <p className="space">
            <FontAwesomeIcon icon={faMap} />
            {primaryAddress || "New Orleans, Jamia Mosque"}
          </p>
          <p className="space">
            <FontAwesomeIcon icon={faClock} />{" "}
            {Object.keys(businessHours).map((day) => (
              <>
                <strong>{day || "Day"} : </strong>{" "}
                {businessHours[day] || "Closed"}
              </>
            ))}
          </p>
        </div>
      </div>
      <div className="top-navbar-right">
        <div
          className={`dropdown ${isNamazTimeDropdownOpen ? "show" : ""}`}
          ref={namazTimeDropdownRef}
        >
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            onClick={toggleNamazTimeDropdown}
          >
            {t("namaztiming")} <FontAwesomeIcon icon={faAngleDown} />
          </button>
          {isNamazTimeDropdownOpen && (
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
                      <FontAwesomeIcon icon={faMoon} /> {t("maghrib")}
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
        <p className="follow">{t("followus")}:</p>
        <div className="social-links">
          <Link
            to={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link
            to={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link
            to={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
          <div
            className="language_switcher"
            onClick={toggleLanguageDropdown}
            ref={languageDropdownRef}
          >
            <img src={currentlanguage.img} alt="Currentlanguage.png" />
            <span>{currentlanguage.lang}</span>
            <div
              className={`switcher_dropdown ${
                isLanguageDropdownOpen ? "open" : ""
              }`}
            >
              {LanguageArr &&
                LanguageArr.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => changeLanguage(item.code, item)}
                    >
                      <img src={item.img} />
                      <span>{item.lang}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default TopHeader;
