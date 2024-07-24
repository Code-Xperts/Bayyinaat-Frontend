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
import { Footer, Header, TopHeader } from "../../components";
import { useSelector } from "react-redux";
import {
  Categories,
  getAllCategories,
  getAllProducts,
  getProductByBothCategory,
  getProductById,
} from "../../constants/apiEndPoints";
import httpRequest from "../../axios/index.js";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';


const Audios = ({ onSearch }) => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioData, setAudioData] = useState([]);
  const [allProducts, setAllProducts] = useState([1]);
  const navigate = useNavigate();
  const {id,slug2, slug2_id} = useParams()
  const location = useLocation();
  const data = location.state?.data; 
  console.log('dtaa', data)

  const audioUrl =
    "https://taqwa.nauthemes.net/wp-content/uploads/2021/02/surah-fateh.mp3";

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleSeekBackward = () => {
    audioRef.current.currentTime -= 10; // Adjust the seek duration as needed
  };

  const handleSeekForward = () => {
    audioRef.current.currentTime += 10; // Adjust the seek duration as needed
  };

  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
  };

  const currentLanguage = useSelector(
    (state) => state.languageSlice.currentlanguage
  );
  useEffect(() => {
    const FetchCategoriesInfo = async () => {
      try {
        const audioResp = await httpRequest.post(`${getAllCategories}`, {
          slug: "Audio",
          lang: currentLanguage?.code,
        });
        if (audioResp.status === 200 || audioResp.status === 201) {
          console.log("audi res", audioResp.data.data);
          setAudioData(audioResp.data.data);
          // dispatch(setCompanyInfo(resp?.data?.data));
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    FetchCategoriesInfo();

    if(data){
      console.log('first')
      const FetchProducts = async () => {
        if(slug2){
            try {
                const audioResp = await httpRequest.post(`${getProductByBothCategory}`, {
                  category_id: data?.category_id,
                  lang: currentLanguage ? currentLanguage.code : "",
                  sub_category_id: data?.sub_category_id
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
                  category_id: data?.category_id,
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
    FetchProducts();
    }

    

  }, [currentLanguage,id,slug2,data]);

  useEffect(() => {
    const audioElement = audioRef.current;

    audioElement.addEventListener("timeupdate", handleTimeUpdate);
    audioElement.addEventListener("loadeddata", handleLoadedData);

    return () => {
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      audioElement.removeEventListener("loadeddata", handleLoadedData);
    };
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  };

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const [isOpen, setIsOpen] = useState(0);

  const toggleDropdown = (section) => {
    setIsOpen((prevIsOpen) => (prevIsOpen === section ? null : section));
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
        
        navigate(`/audios/${name}/${name2}`, { state: { data: res.data.data } });
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
                {audioData?.map((item, index) => (
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
                <div key={index} className="audio-player audio-new">
                  <div className="major-picture major-picture-new">
                    <div className="image-div image-div-new">
                      <img
                        className="image-border-new"
                        src={item?.image}
                        alt={item?.title}
                      />
                      <p className="border-new-p">{item?.title} </p>
                    </div>
                    <div className="major-content-new">
                      <div className="audio-players-new">
                        <div className="audio-controls-new">
                          <div className="audio-progress-new">
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={(currentTime / duration) * 100 || 0}
                              onChange={handleSeek}
                            />
                            <div className="audio-time-new">
                              <div className="">{formatTime(currentTime)}</div>
                              <div className="">{formatTime(duration)}</div>
                            </div>
                          </div>
                          <div className="audio-buttons audio-buttons-new">
                            <button
                              className="clss cls-new"
                              onClick={handleSeekBackward}
                            >
                              <FontAwesomeIcon icon={faArrowRotateLeft} />
                            </button>
                            <button
                              className="cls cls-new"
                              onClick={handlePlayPause}
                            >
                              {isPlaying ? (
                                <FontAwesomeIcon icon={faPause} />
                              ) : (
                                <FontAwesomeIcon icon={faPlay} />
                              )}
                            </button>
                            <button
                              className="clss cls-new"
                              onClick={handleSeekForward}
                            >
                              <FontAwesomeIcon icon={faArrowRotateRight} />
                            </button>
                            <button
                              className="cls cls-new"
                              onClick={handleStop}
                            >
                              <FontAwesomeIcon icon={faStop} />
                            </button>
                          </div>
                        </div>
                        <audio ref={audioRef} src={item?.audio}></audio>
                      </div>
                      <div className="p-last-new">
                        <p className="publish-new">
                          {" "}
                          <a className="qw colo">
                            <FontAwesomeIcon icon={faCalendarDays} />
                          </a>
                          {t("date")}:&nbsp;{item?.date}
                        </p>
                        <button className="download-button download-button-new">
                          {t("download")}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="customs-tags">
                    {
                        item?.tags?.map((item,index)=>(
                    <div key={index} className="custom-tag">
                      <p className="tags">{item}</p>
                    </div>
                        ))
                    }
                    
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Audios;
