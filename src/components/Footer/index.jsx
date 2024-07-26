import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import logo from "../../assests/images/logo.png";
import { useTranslation } from "react-i18next";
import httpRequest from "../../axios/index.js";
import toast from "react-hot-toast";
import { Contacts, getSettings } from "../../constants/apiEndPoints";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [loading, setloading] = useState(false);
  const CompanyData = useSelector((state) => state.user.companyInfo);
  const { socialLinks = {} } = CompanyData;
  const [settings, setSettings] = useState({})


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setloading(true);
      const response = await httpRequest.post(Contacts, formData);
      if (response.status === 200 || response.status === 201) {
        toast.success(response.data.message);
        setloading(false);
        handleFormEmpty();
      }
    } catch (error) {
      setloading(false);

      toast.error(error.response ? error.response.data : error.message);
    } finally {
      setloading(false);
    }
  };

  const handleFormEmpty = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const currentLanguage = useSelector((state) => state.languageSlice.currentlanguage);
  useEffect(()=>{
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

  },[currentLanguage])

  return (
    <footer className="footer bck">
      <div className="upper">
        <div className="column">
          <h3>{t("aboutus")}</h3>
          <p>{CompanyData.aboutCompany}</p>
          <img className="lo" src={logo} alt="Company Logo" />
          <p>
            {" "}
            <a className="qw">
              <FontAwesomeIcon icon={faLocationDot} />
            </a>
            {CompanyData.secondaryAddress || "Jamia Mosque, New Orleans USA"}
          </p>
        </div>

        <div className="column">
          <h3>{t("contactinfo")}</h3>
          <div className="contact-info">
            <p className="spp">
              {" "}
              <a className="qw">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              {settings?.email || "info@code-xperts.com"}
            </p>
            <p className="spp">
              {" "}
              <a className="qw">
                <FontAwesomeIcon icon={faPhone} />
              </a>
              {settings?.phone || "+00000000000"}
            </p>
            <p className="spp">
              {" "}
              <a className="qw">
                <FontAwesomeIcon icon={faLocationDot} />
              </a>
              {settings?.address || "123 Main St, City"}
            </p>
            <div className="social-links bb">
              <a
                href={settings?.twitter_link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link bb"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href={settings?.facebook_link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link bb"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a
                href={settings?.youtube_link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link bb"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>

        <div className="column">
          <h3>{t("quickform")}</h3>
          <div className="form-container">
            {" "}
            {/* Container for the form */}
            <form className="quick-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="ttt"
                  type="text"
                  placeholder={t("name")}
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  className="ttt"
                  type="email"
                  placeholder={t("email")}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder={t("message")}
                  name="message"
                  style={{
                    resize: "none",
                  }}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <button className="bbnn" disabled={loading} type="submit">
                  {!loading ? t("submit") : "sending..."}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="cc">
        <p>Taqwa Copyright 2023 - All Rights Reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
