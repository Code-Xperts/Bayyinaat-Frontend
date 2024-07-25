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
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { Footer, Header, TopHeader } from "../../components";
import { useSelector } from "react-redux";
import {
  getAllCategories,
  getProductByBothCategory,
  getProductById,
} from "../../constants/apiEndPoints";
import httpRequest from "../../axios/index.js";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const Audios = ({ onSearch }) => {
  const { t } = useTranslation();
  const [audioData, setAudioData] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);
  const [audioRefs, setAudioRefs] = useState([]);
  const [currentTime, setCurrentTime] = useState({});
  const [duration, setDuration] = useState({});
  const [isPlaying, setIsPlaying] = useState({});
  // const [sortedProducts, setSortedProducts] = useState([])?

  const navigate = useNavigate();
  const { id, slug2, slug2_id } = useParams();
  const location = useLocation();
  const data = location.state?.data;

  const currentLanguage = useSelector(
    (state) => state.languageSlice.currentlanguage
  );

  useEffect(() => {
    const fetchCategoriesInfo = async () => {
      try {
        const audioResp = await httpRequest.post(`${getAllCategories}`, {
          slug: "Audio",
          lang: currentLanguage?.code,
        });
        if (audioResp.status === 200 || audioResp.status === 201) {
          setAudioData(audioResp.data.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCategoriesInfo();

    if (data) {
      const fetchProducts = async () => {
        try {
          let audioResp;
          if (slug2) {
            audioResp = await httpRequest.post(`${getProductByBothCategory}`, {
              category_id: data[0]?.category_id ? data[0]?.category_id : -1,
              lang: currentLanguage ? currentLanguage.code : "",
              sub_category_id: data[0]?.sub_category_id,
            });
          } else {
            audioResp = await httpRequest.post(`${getProductById}`, {
              category_id:  data.length > 0 ? data[0].category_id : -1,
              lang: currentLanguage ? currentLanguage.code : "",
            });
          }

          if (audioResp.status === 200 || audioResp.status === 201) {
            setAllProducts(audioResp.data.data);
            // setAudioRefs(audioResp.data.data.map(() => React.createRef()));
            // setCurrentTime(
            //   audioResp.data.data.reduce(
            //     (acc, _, idx) => ({ ...acc, [idx]: 0 }),
            //     {}
            //   )
            // );
            // setDuration(
            //   audioResp.data.data.reduce(
            //     (acc, _, idx) => ({ ...acc, [idx]: 0 }),
            //     {}
            //   )
            // );
            // setIsPlaying(
            //   audioResp.data.data.reduce(
            //     (acc, _, idx) => ({ ...acc, [idx]: false }),
            //     {}
            //   )
            // );
          }
        } catch (err) {
          console.log(err.message);
        }
      };
      fetchProducts();
    }
  }, [currentLanguage, id, slug2, data, ]);


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

  const handleClick = async (name, id, name2, id2) => {
    try {
      const res = await httpRequest.post(`${getProductByBothCategory}`, {
        category_id: id,
        lang: currentLanguage ? currentLanguage.code : "",
        sub_category_id: id2,
      });
      if (res.status === 200 || res.status === 201) {
        navigate(`/audios/${name}/${name2}`, {
          state: { data: res.data.data },
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // const handlePlayPause = (index) => {
  //   const audioElement = audioRefs[index].current;
  //   if (audioElement) {
  //     if (audioElement.paused) {
  //       audioElement.play();
  //       setIsPlaying((prev) => ({ ...prev, [index]: true }));
  //       setCurrentPlayingIndex(index);
  //     } else {
  //       audioElement.pause();
  //       setIsPlaying((prev) => ({ ...prev, [index]: false }));
  //       setCurrentPlayingIndex(null);
  //     }
  //   }
  // };

  // const handleSeekBackward = (index) => {
  //   const audioElement = audioRefs[index].current;
  //   if (audioElement) audioElement.currentTime -= 10; // Adjust the seek duration as needed
  // };

  // const handleSeekForward = (index) => {
  //   const audioElement = audioRefs[index].current;
  //   if (audioElement) audioElement.currentTime += 10; // Adjust the seek duration as needed
  // };

  // const handleStop = (index) => {
  //   const audioElement = audioRefs[index].current;
  //   if (audioElement) {
  //     audioElement.pause();
  //     audioElement.currentTime = 0;
  //     setIsPlaying((prev) => ({ ...prev, [index]: false }));
  //     if (currentPlayingIndex === index) {
  //       setCurrentPlayingIndex(null);
  //     }
  //   }
  // };

  // const handleSeek = (e, index) => {
  //   const newTime = (e.target.value / 100) * duration[index];
  //   const audioElement = audioRefs[index].current;
  //   if (audioElement) {
  //     audioElement.currentTime = newTime;
  //     setCurrentTime((prev) => ({ ...prev, [index]: newTime }));
  //   }
  // };

  // const handleTimeUpdate = (index) => {
  //   const audioElement = audioRefs[index].current;
  //   if (audioElement) {
  //     setCurrentTime((prev) => ({
  //       ...prev,
  //       [index]: audioElement.currentTime,
  //     }));
  //   }
  // };

  // const handleLoadedData = (index) => {
  //   const audioElement = audioRefs[index].current;
  //   if (audioElement) {
  //     setDuration((prev) => ({ ...prev, [index]: audioElement.duration }));
  //   }
  // };

  // useEffect(() => {
  //   audioRefs.forEach((ref, index) => {
  //     const audioElement = ref.current;
  //     if (audioElement) {
  //       audioElement.addEventListener("timeupdate", () =>
  //         handleTimeUpdate(index)
  //       );
  //       audioElement.addEventListener("loadeddata", () =>
  //         handleLoadedData(index)
  //       );
  //     }

  //     return () => {
  //       if (audioElement) {
  //         audioElement.removeEventListener("timeupdate", () =>
  //           handleTimeUpdate(index)
  //         );
  //         audioElement.removeEventListener("loadeddata", () =>
  //           handleLoadedData(index)
  //         );
  //       }
  //     };
  //   });
  // }, [audioRefs]);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const handleOptionSelect = (value) =>{
    console.log("clicked", value)
    let sortedProducts
    switch (value) {
      case 'title-asc':
        sortedProducts= [...allProducts].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        sortedProducts =[...allProducts].sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'date-asc':
        sortedProducts =[...allProducts].sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'date-desc':
        sortedProducts =[...allProducts].sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      default:
        sortedProducts= [...allProducts];
    }
    console.log('sortedProducts', sortedProducts)

    setAllProducts(sortedProducts);
    
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
                        isOpen === index ? "active" : "inactive"
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
                    {isOpen === index && (
                      <ul
                        className={`col-cont-main-dropdown ${
                          isOpen === index ? "active" : ""
                        }`}
                      >
                        {item?.sub_categories?.map((i, ind) => (
                          <li key={ind}>
                            <Link
                              onClick={() =>
                                handleClick(
                                  item?.slug,
                                  item?.id,
                                  i?.slug,
                                  i?.id
                                )
                              }
                            >
                              {t(i.name)}
                            </Link>
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
                  <div className="texttt">
                    {`Showing ${indexOfFirstProduct + 1}-${
                      indexOfLastProduct > allProducts.length
                        ? allProducts.length
                        : indexOfLastProduct
                    } of ${allProducts.length}`}
                  </div>
                  <form className="rtcl-ordering" >
                    <select
                      className="isko"
                      name="orderby"
                      aria-label="Listing order"
                      tabIndex="-1"
                      aria-hidden="true"
                      onChange={(e)=>handleOptionSelect(e.target.value)}                    >
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
              {currentProducts.map((item, index) => {
                return (
                	<div
                  	style={{ marginTop: "15px" }}
                  	key={item?.id+index}
                  	className="audio-player audio-new"
                	>
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
                          	{/* <div className="audio-progress-new">
                            	<input
                              	type="range"
                              	min="0"
                              	max="100"
                              	value={
                                	(currentTime[index] / duration[index]) * 100 ||
                                	0
                              	}
                              	onChange={(e) => handleSeek(e, index)}
                            	/>
                            	<div className="audio-time-new">
                              	<div className="">
                                	{formatTime(currentTime[index])}
                              	</div>
                              	<div className="">
                                	{formatTime(duration[index])}
                              	</div>
                            	</div>
                          	</div> */}
                          	{/* <div className="audio-buttons audio-buttons-new">
                            	<button
                              	className="clss cls-new"
                              	onClick={() => handleSeekBackward(index)}
                            	>
                              	<FontAwesomeIcon icon={faArrowRotateLeft} />
                            	</button>
                            	<button
                              	className="cls cls-new"
                              	onClick={() => handlePlayPause(index)}
                            	>
                              	{isPlaying[index] ? (
                                	<FontAwesomeIcon icon={faPause} />
                              	) : (
                                	<FontAwesomeIcon icon={faPlay} />
                              	)}
                            	</button>
                            	<button
                              	className="clss cls-new"
                              	onClick={() => handleSeekForward(index)}
                            	>
                              	<FontAwesomeIcon icon={faArrowRotateRight} />
                            	</button>
                            	<button
                              	className="cls cls-new"
                              	onClick={() => handleStop(index)}
                            	>
                              	<FontAwesomeIcon icon={faStop} />
                            	</button>
                          	</div> */}
                        	</div>
                        	<audio className="audio-progress-new" controls key={item?.id+index}>
                          	<source src={item?.file_url} type="audio/ogg"/>
                          	<source src={item?.file_url} type="audio/mpeg"/>

                        	</audio>
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
                    	{item?.tags?.map((tag, index) => (
                      	<div key={index} className="custom-tag">
                        	<p className="tags">{tag}</p>
                      	</div>
                    	))}
                  	</div>
                	</div>
              )}
              )}
              <div style={{ margin: "40px" }} className="pagination">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  {t("previous")}
                </button>
                <button
                  style={{ marginLeft: "600px" }}
                  onClick={() => paginate(currentPage + 1)}
                  disabled={indexOfLastProduct >= allProducts.length}
                >
                  {t("next")}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Audios;
