import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMagnifyingGlass, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import logo from "./../assests/images/logo.png";

import i18n from './../i18n'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send the data to a server
    console.log("Form submitted:", formData);
  };

  return (
    <footer className="footer bck">
      <div className="upper">
        <div className="column">
          <h3>{t('aboutus')}</h3>
          <p>
            Lorem ipsum dolor sit amet, conec tetur adipisicing elit, sed do
            eiusd tempor incididunt ut labore.
          </p>
          <img className="lo" src={logo} alt="Company Logo" />
          <p>
            {" "}
            <a className="qw"><FontAwesomeIcon icon={faLocationDot} /></a>
            Jamia Mosque, New Orleans USA
          </p>
        </div>

        <div className="column">
          <h3>{t('contactinfo')}</h3>
          <div className="contact-info">
            <p className="spp">
              {" "}
              <a className="qw"><FontAwesomeIcon icon={faEnvelope} /></a>
              contact@example.com
            </p>
            <p className="spp">
              {" "}
              <a className="qw"><FontAwesomeIcon icon={faPhone} /></a>
              +1 123-456-7890
            </p>
            <p className="spp">
              {" "}
              <a className="qw"><FontAwesomeIcon icon={faLocationDot} /></a>
              123 Main St, City
            </p>
            <div className="social-links bb">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link bb"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link bb"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="#"
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
          <h3>{t('quickform')}</h3>
          <div className="form-container"> {/* Container for the form */}
            <form className="quick-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="ttt"
                  type="text"
                  placeholder={t('name')}
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
                  placeholder={t('email')}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder={t('message')}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <button className="bbnn" type="submit">{t('submit')}</button>
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
