import React, { useState } from "react";
import TopHeader from "./../../../Common/TopHeader";
import Header from "./../../../Common/Header";
import Footer from "./../../../Common/Footer";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneVolume, faLocationDot, faFax } from "@fortawesome/free-solid-svg-icons";

import i18n from '../../../i18n';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
    const { t, i18n } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        phone: "",
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
        console.log("Form submitted:", formData);
    };

    return (
        <>
            <TopHeader />
            <Header />
            <div className="about-us-container">
                <h1 className="about-us-heading">{t("contactus")}</h1>
                <img
                    src="https://taqwa.nauthemes.net/wp-content/themes/taqwa/assets/images/prayer-head-shp.png"
                    alt="About Us Image"
                    className="about-us-image"
                />
            </div>
            <section className="junk">
                <div className="a">
                    <span className="b">{t('haveanyquestion')}</span>
                    <h2 className="c">{t('getintouch')}</h2>
                    <img
                        src="https://taqwa.nauthemes.net/wp-content/uploads/2020/06/prayer-head-shp.png"
                    />
                </div>
                <div className="d">
                    <div className="e">
                        <div className="f">
                            <div className="g">
                                <form className="hi" onSubmit={handleSubmit}>
                                    <div className="mmmm">
                                        <div className="i">
                                            <input
                                                className="llll"
                                                type="text"
                                                placeholder={t('name')}
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="i">
                                            <input
                                                className="llll"
                                                type="email"
                                                placeholder={t('email')}
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="i">
                                        <input
                                            className="llll"
                                            placeholder={t('enteryourphoneno')}
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="i">
                                        <textarea className="llll"
                                            placeholder={t('message')}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="i">
                                        <button className="ccnn" type="submit">{t('submit')}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="j">
                            <div className="k">
                                <div className="l">
                                    <div className="m">
                                        <li>
                                            <a className="bye lef"><FontAwesomeIcon icon={faEnvelope} /></a>
                                            <strong>{t("email")}</strong>
                                            <div className="content co se ">
                                                <span className="not">help@taqwa.com</span>
                                                <span className="not">support@taqwa.com</span>
                                            </div>
                                        </li>
                                        <li>
                                        <a className="bye lef"><FontAwesomeIcon icon={faPhoneVolume} /></a>
                                            <strong>{t('phone')}</strong>
                                            <div className="content co se ">
                                                <span className="not">001 2565 2565 25</span>
                                                <span className="not">001 2565 2565 26</span>
                                            </div>
                                        </li>
                                    </div>
                                    <div className="n">
                                        <li>
                                        <a className="bye rig"><FontAwesomeIcon icon={faLocationDot} /></a>
                                            <strong>{t('address')}</strong>
                                            <div className="content co se ">
                                                <span className="not">19-J David Road H Block,</span>
                                                <span className="not">Orlando, USA</span>
                                            </div>
                                        </li>
                                        <li>
                                        <a className="bye rig"><FontAwesomeIcon icon={faFax} /></a>
                                            <strong>{t("fax")}</strong>
                                            <div className="content co se ">
                                                <span className="not">0044 55 25 26 23</span>
                                                <span className="not">0044 55 25 26 25</span>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="a">
                    <span className="b">{t('ourlocation')}</span>
                    <h2 className="c">{t('getinformation')}</h2>
                    <img
                        src="https://taqwa.nauthemes.net/wp-content/uploads/2020/06/prayer-head-shp.png"
                    />
                </div>
                <div className="column maps">
                    <div className="column map">
                        <iframe className="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            allowfullscreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className="column map">
                        <iframe className="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            allowfullscreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    );
}
export default ContactUs