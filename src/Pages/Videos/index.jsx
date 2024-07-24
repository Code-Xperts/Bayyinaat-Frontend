import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faStop,
  faArrowRotateLeft,
  faArrowRotateRight,
  faCalendarDays,
  faVolumeLow,
} from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Modal from "react-modal";
import { Footer, Header, TopHeader } from "../../components";
import { useSelector } from "react-redux";
import httpRequest from "../../axios/index.js";
import {
  getAllCategories,
  getAllProducts,
  getProductByBothCategory,
  getProductById,
} from "../../constants/apiEndPoints/index.js";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const Videos = ({ onSearch }) => {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [videoData, setVideoData] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const location = useLocation();
  const data = location.state?.data; 
  const {id, slug2_id} = useParams()
  const navigate = useNavigate();



  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
console.log('video link is', videoLink)
  const handleSearch = () => {
    onSearch(query);
  };

  const currentLanguage = useSelector(
    (state) => state.languageSlice.currentlanguage
  );
  useEffect(() => {
    const FetchCategoriesInfo = async () => {
      try {
        const videoResp = await httpRequest.post(`${getAllCategories}`, {
          slug: "Video",
          lang: currentLanguage?.code,
        });
        if (videoResp.status === 200 || videoResp.status === 201) {
          console.log("audi res", videoResp.data.data);
          setVideoData(videoResp.data.data);
          // dispatch(setCompanyInfo(resp?.data?.data));
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    FetchCategoriesInfo();

    const FetchProducts = async () => {
        if(slug2_id){
            try {
                const audioResp = await httpRequest.post(`${getProductByBothCategory}`, {
                  category_id: id,
                  lang: currentLanguage ? currentLanguage.code : "",
                  sub_category_id: slug2_id
                });
                if (audioResp.status === 200 || audioResp.status === 201) {
                  console.log("audi pro", audioResp.data.data);
                  setAllProducts(audioResp.data.data);
                }
              } catch (err) {
                console.log(err.message);
              }

        }else{
            try {
                const audioResp = await httpRequest.post(`${getProductById}`, {
                  category_id: id,
                  lang: currentLanguage ? currentLanguage.code : "",
                });
                if (audioResp.status === 200 || audioResp.status === 201) {
                  console.log("audi pro", audioResp.data.data);
                  setAllProducts(audioResp.data.data);
                }
              } catch (err) {
                console.log(err.message);
              }
        }
     
    };

    // FetchProducts();
  }, [currentLanguage,id,slug2_id]);

  const toggleDropdown = (section) => {
    setIsOpen((prevIsOpen) => (prevIsOpen === section ? null : section));
  };

  const toggleModal = (link) => {
    setVideoLink(link);
    setIsModalOpen(!isModalOpen);
  };

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)", // Transparent background
      zIndex: 10, // Higher z-index
    },
    content: {
      width: "90%",
      height: "90%",
      margin: "auto",
      background: "transparent", // Transparent content
      border: "none",
      zIndex: 10, // Higher z-index
      position: "fixed",
    },
  };

  const handleClick = async(name,id,name2,id2)=>{
    try {
        const res = await httpRequest.post(`${getProductByBothCategory}`, {
            category_id: id,
            lang: currentLanguage ? currentLanguage.code : "",
            sub_category_id: id2
          });
      if (res.status === 200 || res.status === 201) {
        console.log("audi pro", res.data.data);
        
        navigate(`/videos/${name}/${name2}`, { state: { data: res.data.data } });
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <TopHeader />
      <Header />
      <div className="container">
        <section>
          <div className="conatiner searc">
            <div className="search-bar">
              <input
                type="se"
                placeholder={t("search")}
                value={query}
                onChange={handleInputChange}
              />
              <button onClick={handleSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="two-column-container main-col">
            <div className="col-cont-main">
              <div className="column-left main-left game">
                <h3 className="main-left-heading">{t("allcategories")}</h3>
              </div>
              <ul className="major">
                {videoData?.map((item, index) => (
                  <li key={index}>
                    <span
                      className={`drop-down-button ${
                        isOpen == index ? "active" : "inactive"
                      }`}
                      onClick={() => toggleDropdown(index)}
                    ></span>
                    <a className="yes-bold" href="#">
                      <a>
                        <FontAwesomeIcon
                          className="qw colo"
                          icon={faVolumeLow}
                        />
                      </a>
                      {t(item.name)}
                    </a>
                    {isOpen == index && (
                      <ul
                        className={`col-cont-main-dropdown ${
                          isOpen == index ? "active" : ""
                        }`}
                      >
                        {item?.sub_categories?.map((i, ind) => (
                          <li key={ind}>
                            <Link onClick={()=>handleClick(item?.slug,item?.id,i?.slug,i?.id)} > {t(i.name)}</Link>
                            </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

              </ul>
            </div>

            <div className="column-right main-right">
              <div className="mar">
                <div className="bar">
                  <div className="texttt">{t("showingresults")}</div>
                  <form className="rtcl-ordering" method="get">
                    <select
                      className="isko"
                      name="orderby"
                      aria-label="Listing order"
                      tabIndex="-1"
                      aria-hidden="true"
                    >
                      <option value="title-asc">{t("atoztitle")}</option>
                      <option value="title-desc">{t("ztoatitle")}</option>
                      <option value="date-desc" selected="selected">
                        {t("recentlyaddedlatest")}
                      </option>
                      <option value="date-asc">{t("dateaddedoldest")}</option>
                      <option value="views-desc">{t("mostviewed")}</option>
                      <option value="views-asc">{t("lessviewed")}</option>
                    </select>
                  </form>
                </div>
              </div>
              {data?.map((item, index) => (
                <div key={index} className="audio-player">
                  <div className="major-picture">
                    <div className="image-div">
                      <img
                        className="image-border"
                        src={item?.image}
                        alt={item?.title}
                      />
                    </div>
                    <div className="major-content">
                      <h2 className="surah-heading">{t(item?.title)}</h2>
                      <p>{item?.description}</p>
                      <div className="p-last">
                        <p className="publish">
                          {" "}
                          <a className="qw colo">
                            <FontAwesomeIcon icon={faCalendarDays} />
                          </a>
                          {t("date")}:&nbsp;{item?.date}
                        </p>
                        <button
                          className="download-button"
                          onClick={() =>
                            toggleModal(
                              item?.video_url
                            )
                          }
                        >
                          {t("watchnow")}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="customs-tags">
                    {item?.tags?.map((item, index) => (
                      <div key={index} className="custom-tag">
                        <p className="tags">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        contentLabel="Video Modal"
        style={modalStyle}
        shouldCloseOnOverlayClick={false}
      >
        <iframe
          width="100%"
          height="100%"
          src= {videoLink}
          title="Video Title"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <button className="flooot-rrr" onClick={toggleModal}>
          {t("close")}
        </button>
      </Modal>
      <Footer />
    </>
  );
};

export default Videos;
