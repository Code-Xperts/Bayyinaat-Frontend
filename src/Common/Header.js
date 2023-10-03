import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCalendarDays, faPhoneVolume, faMagnifyingGlass, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "./../assests/images/logo.png";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <><div className={`logo-inf-sec ${isMobileMenuOpen ? "open" : ""}`}>
      <div className="container">
        <div className="parent">
          <div className="logo">
            <a href="#" itemprop="url">
              <img src={logo} alt="" itemprop="image" />
            </a>
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
                    Info: <span className="theme-clr">Starts 10th May</span>
                  </div>
                </li>
                <li>
                  <i className="flaticon-phone-volume theme-clr brd-rd50">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </i>
                  <div className="ss">
                    Call Us: <span className="theme-clr">+(00) 123-345-11</span>
                  </div>
                </li>
                <li>
                  <i className="fas fa-envelope theme-clr brd-rd50">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                  <div className="ss">
                    Email:{" "}
                    <a className="theme-clr" href="#" itemprop="url">
                      help@example.com
                    </a>
                  </div>
                </li>
              </ul>
              <Link className="theme-btn theme-bg brd-rd5" to="/donate" itemprop="url">
                Make Donation
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
                  <Link to="/Home">HOME</Link>
                </li>
                <li className="menu-item">
                  <Link to="/about-us">ABOUT US</Link>
                </li>
                <li className="menu-item">
                  <Link to="/audios">AUDIOS </Link>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="">Al-Qur'an</a>
                    </li>
                    <li className="menu-item">
                      <a href="">Al-Hadith al-Nabawi (s.a.w)</a>
                    </li>
                    <li className="menu-item">
                      <a href="">Seerah</a>
                    </li>
                    <li className="menu-item">
                      <a href="">Aqeedah</a>
                    </li>
                    <li className="menu-item">
                      <a href="">Fiqh</a>
                    </li>
                    <li className="menu-item">
                      <a href="">Akhlaqiaat</a>
                    </li>
                    <li className="menu-item">
                      <a href="">Khusoosi Mawaqay</a>
                    </li>
                    <li className="menu-item">
                      <a href="">Tarbiyat o Tazkia</a>
                    </li>
                    <li className="menu-item">
                      <a href="">Learn Arabic</a>
                    </li>
                    <li className="menu-item">
                      <a href="">Subjects</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link to="/videos">VIDEOS</Link>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="">Videos on Vimeo</a>
                    </li>
                    <li className="menu-item">
                      <a href="">videos on YouTube</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link to="/pdf">PDF</Link>
                </li>
                <li className="menu-item">
                  <Link to="/contact-us">CONTACT US</Link>
                </li>
                <li className="menu-item ">
                  <a href="">UP COMMING EVENTS</a>
                </li>
              </ul>
              <div className="hdr-srch">
                <form method="get" className="srch-frm brd-rd5" action="">
                  <input
                    name="s"
                    type="text"
                    required=""
                    placeholder="Enter Your Keywords..."
                    value=""
                    onFocus={(e) => e.target.value === "" && (e.target.value = "")}
                    onBlur={(e) => e.target.value === "" &&
                      (e.target.value = "Enter Your Keywords...")} />
                  <button type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div></>
  );
};

export default Header;
