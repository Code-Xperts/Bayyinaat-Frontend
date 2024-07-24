import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneVolume,
  faLocationDot,
  faFax,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { Footer, Header, TopHeader } from "../../components";
import { Contacts, getSettings } from "../../constants/apiEndPoints";
import httpRequest from "../../axios/index.js";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const ContactUs = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setloading] = useState(false);
  const [settings, setSettings] = useState(false);
  const Compnayinfo = useSelector((state) => state.user.companyInfo);

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
      phone: "",
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
    <>
      <div id="google_translate_element"></div>
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
          <span className="b">{t("haveanyquestion")}</span>
          <h2 className="c">{t("getintouch")}</h2>
          <img src="https://taqwa.nauthemes.net/wp-content/uploads/2020/06/prayer-head-shp.png" />
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
                        placeholder={t("name")}
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
                        placeholder={t("email")}
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
                      placeholder={t("enteryourphoneno")}
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="i">
                    <textarea
                      className="Contacttex"
                      placeholder={t("message")}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <div className="i">
                    <button className="ccnn" disabled={loading} type="submit">
                      {!loading ? t("submit") : "sending..."}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="j">
              <div className="k">
                <div className="l">
                  <div className="m">
                    <li>
                      <a className="bye lef">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                      <strong>{t("email")}</strong>
                      <div className="content co se ">
                        <span className="not">
                          {settings?.email || "info@code-xperts.com"}
                        </span>
                        <span className="not">
                          {settings?.email}
                        </span>
                      </div>
                    </li>
                    <li>
                      <a className="bye lef">
                        <FontAwesomeIcon icon={faPhoneVolume} />
                      </a>
                      <strong>{t("phone")}</strong>
                      <div className="content co se ">
                        <span className="not">
                          {settings?.phone || "+000000000"}
                        </span>
                        <span className="not">
                          {settings?.phone || "+000000000"}
                        </span>
                      </div>
                    </li>
                  </div>
                  <div className="n">
                    <li>
                      <a className="bye rig">
                        <FontAwesomeIcon icon={faLocationDot} />
                      </a>
                      <strong>{t("address")}</strong>
                      <div className="content co se ">
                        <span className="not">
                          {settings?.address || "Lahore , Islamabad"}
                        </span>
                        <span className="not">
                          {settings?.address  || "Lahore , Islamabad"}
                        </span>
                      </div>
                    </li>
                    <li>
                      <a className="bye rig">
                        <FontAwesomeIcon icon={faFax} />
                      </a>
                      <strong>{t("fax")}</strong>
                      <div className="content co se ">
                        <span className="not">
                          {settings?.phone  || "+000000000"}
                        </span>
                        <span className="not">
                          {settings?.phone  || "+000000000"}
                        </span>
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
          <span className="b">{t("ourlocation")}</span>
          <h2 className="c">{t("getinformation")}</h2>
          <img src="https://taqwa.nauthemes.net/wp-content/uploads/2020/06/prayer-head-shp.png" />
        </div>
        <div className="column maps">
          <div className="column map">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="column map">
            <iframe
              className="map"
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
};
export default ContactUs;
