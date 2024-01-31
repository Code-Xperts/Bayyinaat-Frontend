import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCalendarDays,
  faPhoneVolume,
  faMagnifyingGlass,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assests/images/logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className={`logo-inf-sec ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="container">
          <div className="parent">
            <div className="logo">
              <Link to={"/"}>
                <img src={logo} alt="" itemprop="image" />
              </Link>
            </div>
            <div className="mobile-menu-button" onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="main">
              <div className="float-right cnt-inf-btn">
                <ul className="inf-lst">
                  <li>
                    <i className="far fa-calendar-alt theme-clr brd-rd50">
                      <FontAwesomeIcon className="ico" icon={faCalendarDays} />
                    </i>
                    <div className="ss">
                      {t("info")}:{" "}
                      <span className="theme-clr">Starts 10th May</span>
                    </div>
                  </li>
                  <li>
                    <i className="flaticon-phone-volume theme-clr brd-rd50">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                    </i>
                    <div className="ss">
                      {t("callus")}:
                      <span className="theme-clr"> +00 123-345-11</span>
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-envelope theme-clr brd-rd50">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </i>
                    <div className="ss">
                      {t("email")}:{" "}
                      <a className="theme-clr" href="#" itemprop="url">
                        help@example.com
                      </a>
                    </div>
                  </li>
                </ul>
                <Link
                  className="theme-btn theme-bg brd-rd5"
                  to="/donate"
                  itemprop="url"
                >
                  {t("makedonation")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`menu-sec theme-bg ${isMobileMenuOpen ? "open" : ""}`}>
        <div class="banner-vertical"></div>
        <div className="container">
          <nav>
            <div className="fl">
              <ul id="menu-main-menu" className="menu-item">
                <li className="menu-item">
                  <Link to="/">{t("home")}</Link>
                </li>
                <li className="menu-item">
                  <Link to="/about-us">{t("aboutus")}</Link>
                </li>
                <li className="menu-item">
                  <Link to="/audios">{t("audios")}</Link>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="">{t("alquran")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("al-hadith-al-nabawi")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("seerah")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("aqeedah")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("fiqh")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("akhlaqiaat")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("khusoosi-mawaqay")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("tarbiyat-o-tazkia")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("learnarabic")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("subjects")}</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link to="/videos">{t("videos")}</Link>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="">{t("alquran")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("al-hadith-al-nabawi")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("seerah")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("aqeedah")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("fiqh")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("akhlaqiaat")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("khusoosi-mawaqay")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("tarbiyat-o-tazkia")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("learnarabic")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("subjects")}</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link to="/pdf">{t("pdf")}</Link>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="">{t("alquran")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("al-hadith-al-nabawi")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("seerah")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("aqeedah")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("fiqh")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("akhlaqiaat")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("khusoosi-mawaqay")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("tarbiyat-o-tazkia")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("learnarabic")}</a>
                    </li>
                    <li className="menu-item">
                      <a href="">{t("subjects")}</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link to="/contact-us">{t("contactus")}</Link>
                </li>
                <li className="menu-item ">
                  <Link to="/queries">{t("queries")}</Link>
                </li>
                <Link
                  className="theme-btn hiiiii theme-bg brd-rd5"
                  to="/donate"
                  itemprop="url"
                >
                  {t("makedonation")}
                </Link>
              </ul>
              <div className="hdr-srch">
                <form method="get" className="srch-frm brd-rd5" action="">
                  <input
                    name="s"
                    type="text"
                    required=""
                    placeholder={t("enterakeyword")}
                  />
                  <button type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
