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
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { changelanguage } from '../../lib/Redux/slices/languageSlice';
import { getNamazTimings } from "../../utils/get-namaz-timings";
import { getCurrentTime } from "../../utils/get-time";
import { getSettings } from "../../constants/apiEndPoints";
import httpRequest from "../../axios/index.js";


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
  const [settings,setSettings] = useState({})
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.languageSlice.currentlanguage);
  // console.log('s,s', currentLanguage)
  
  // const [currentlanguage, setCurrentLanguage] = useState({
  //   lang: "English",
  //   img: "https://dedevelopers.org/devolta/resources/frontend/images/english.png",
  //   code: "en",
  // });
  const {
    socialLinks = {},
    primaryAddress = "",
    businessHours = {},
  } = useSelector((state) => state.user.companyInfo);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng, curr) => {
    // setCurrentLanguage(curr);
    dispatch(changelanguage(curr));
    i18n.changeLanguage(lng);
    document.body.classList.remove("en");
    document.body.classList.remove("ur");
    document.body.classList.remove("ar");
    document.body.classList.add(lng);
    if (lng === "en") {
      document.documentElement.dir = "";
    } else {
      document.documentElement.dir = "rtl";
    }
  };

  const [isNamazTimeDropdownOpen, setIsNamazTimeDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const namazTimeDropdownRef = useRef(null);
  const languageDropdownRef = useRef(null);
  const [namazTimings, setNamazTimings]=  useState({})
  useEffect(() => {
    const fetchData = async () => {
      const namazTime = await getNamazTimings();
      setNamazTimings(namazTime);
    };
  
    fetchData();

    const FetchSettings = async () => {
      try {
        const settingsResp = await httpRequest.get(`${getSettings}`);
        if (settingsResp.status === 200 || settingsResp.status === 201) {
          // console.log('settingsr res',settingsResp.data.data)
          setSettings(settingsResp.data.data)
        }
       
      } catch (err) {
        console.log(err.message);
      }
    };

    FetchSettings();
  
    // Event listener for outside clicks
    const handleOutsideClick = (event) => {
      if (namazTimeDropdownRef.current && !namazTimeDropdownRef.current.contains(event.target)) {
        setIsNamazTimeDropdownOpen(false);
      }
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };
  
    // Add event listener only once
    document.addEventListener("mousedown", handleOutsideClick);
  
    // Cleanup function to remove event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [currentLanguage]);

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
            <FontAwesomeIcon icon={faClock} />{getCurrentTime()}
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
                    <th scope="col">{t("Timings")}</th>
                    {/* <th scope="col">{t("jammat")}</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <FontAwesomeIcon icon={faSun} /> {t("fajr")}
                    </td>
                    <td>{ namazTimings?.timings?.Fajr}</td>
                    {/* <td>5:30 AM</td> */}
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon icon={faSun} /> {t("zuhr")}
                    </td>
                    <td>{namazTimings?.timings?.Dhuhr}</td>
                    {/* <td>1:30 PM</td> */}
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon icon={faSun} /> {t("asr")}
                    </td>
                    <td>{namazTimings?.timings?.Asr}</td>
                    {/* <td>6:00 PM</td> */}
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon icon={faMoon} /> {t("maghrib")}
                    </td>
                    <td>{namazTimings?.timings?.Maghrib}</td>
                    {/* <td>7:30 PM</td> */}
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon icon={faMoon} /> {t("isha")}
                    </td>
                    <td>{namazTimings?.timings?.Isha}</td>
                    {/* <td>9:00 PM</td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <p className="follow">{t("followus")}:</p>
        <div className="social-links">
          <a
            href={settings?.twitter_link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href={settings?.facebook_link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href={settings?.youtube_link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <div
            className="language_switcher"
            onClick={toggleLanguageDropdown}
            ref={languageDropdownRef}
          >
            <img src={currentLanguage?.img} alt="Currentlanguage.png" />
            <span>{currentLanguage?.lang}</span>
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
