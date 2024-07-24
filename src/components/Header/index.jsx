import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCalendarDays,
  faPhoneVolume,
  faMagnifyingGlass,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assests/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import httpRequest from "../../axios/index.js";
import { Categories, getProductById, getSettings } from "../../constants/apiEndPoints";


const Header = () => {
  // console.log('first', audioData,videoData,pdfData)
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const Compnayinfo = useSelector((state) => state.user.companyInfo);
  const [audioData, setAudioData] = useState([])
  const [videoData, setVideoData] = useState([])
  const [pdfData, setPdfData] = useState([])
  const [settings, setSettings] = useState({})
  const navigate = useNavigate();
  const currentLanguage = useSelector((state) => state.languageSlice.currentlanguage);



  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClick = async(route,name,id)=>{
    try {
      const res = await httpRequest.post(`${getProductById}`, {
        category_id: id,
        lang: currentLanguage ? currentLanguage.code : "",
      });
      if (res.status === 200 || res.status === 201) {
        console.log("audi pro", res.data.data);
        
        navigate(`/${route}/${name}`, { state: { data: res.data.data } });
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(()=>{
    const FetchCategoriesInfo = async () => {
      try {
        const audioResp = await httpRequest.post(`${Categories}`,{slug:'Audio',lang:currentLanguage?currentLanguage.code:''});
        if (audioResp.status === 200 || audioResp.status === 201) {
          console.log('audi res',audioResp.data.data)
          setAudioData(audioResp.data.data)
          // dispatch(setCompanyInfo(resp?.data?.data));
        }
        const VideoResp = await httpRequest.post(`${Categories}`,{slug:'Video',lang:currentLanguage?currentLanguage.code:''});
        if (VideoResp.status === 200 || VideoResp.status === 201) {
          // console.log('Video',VideoResp.data.data)
          setVideoData(VideoResp.data.data)
          // dispatch(setCompanyInfo(resp?.data?.data));
        }

        const pdfResp = await httpRequest.post(`${Categories}`,{slug:'Pdf',lang:currentLanguage?currentLanguage.code:''});
        if (pdfResp.status === 200 || pdfResp.status === 201) {
          // console.log('Pdf res',pdfResp.data.data)
          setPdfData(pdfResp.data.data)
          // dispatch(setCompanyInfo(resp?.data?.data));
        }

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
      } catch (err) {
        console.log(err.message);
      }
    };

    FetchCategoriesInfo();

  },[currentLanguage])

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
                      <span className="theme-clr">{settings?.info}</span>
                    </div>
                  </li>
                  <li>
                    <i className="flaticon-phone-volume theme-clr brd-rd50">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                    </i>
                    <div className="ss">
                      {t("callus")}:
                      <span className="theme-clr">
                        {settings?.phone}
                      </span>
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-envelope theme-clr brd-rd50">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </i>
                    <div className="ss">
                      {t("email")}:{" "}
                      <Link className="theme-clr" to={"#"}>
                        {settings?.email}
                      </Link>
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
                  <Link>{t("audios")}</Link>
                  <ul className="sub-menu">
                    {
                      audioData?.map((item,index)=>(
                        <li key={index} className="menu-item">
                        <Link onClick={()=>handleClick('audios',item?.slug,item?.id)} >{t(item.name)}</Link>
                      </li>
                      ))
                    }
                   
                  
                  </ul>
                </li>
                <li className="menu-item">
                  <Link >{t("videos")}</Link>
                  <ul className="sub-menu">
                    {
                      videoData?.map((item,index)=>(
                        <li key={index} className="menu-item">
                        <Link onClick={()=>handleClick('videos',item?.slug,item?.id)} >{t(item.name)}</Link>
                        </li>
                      ))
                    }
                   
                    
                  </ul>
                </li>
                <li className="menu-item">
                  <Link to="/pdf/all">{t("pdf")}</Link>
                  <ul className="sub-menu">
                    {
                      pdfData?.map((item,index)=>(
                    <li key={index} className="menu-item">
                        <Link onClick={()=>handleClick('pdf',item?.slug,item?.id)} >{t(item.name)}</Link>
                        </li>
                      ))
                    }
                    
                   
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
