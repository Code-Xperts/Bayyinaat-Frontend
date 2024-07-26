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
  getProductsBySearch,
} from "../../constants/apiEndPoints";
import httpRequest from "../../axios/index.js";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const Audios = () => {
  const { t } = useTranslation();
  const [audioData, setAudioData] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [query, setQuery] = useState("");


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
              sub_category_id: data[0]?.sub_category_id ? data[0]?.sub_category_id : -1
            });
          } else {
            audioResp = await httpRequest.post(`${getProductById}`, {
              category_id:  data.length > 0 ? data[0].category_id : -1,
              lang: currentLanguage ? currentLanguage.code : "",
            });
          }

          if (audioResp.status === 200 || audioResp.status === 201) {
            setAllProducts(audioResp.data.data);
            setCurrentProducts(audioResp.data?.data?.data)
           
          }
        } catch (err) {
          console.log(err.message);
        }
      };
      fetchProducts();
    }
  }, [currentLanguage, id, slug2, data,query ]);


  


  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async() => {
    if (data) {
        try {
          let audioResp;
          if (slug2) {
            audioResp = await httpRequest.post(`${getProductsBySearch}`, {
              category_id: data[0]?.category_id ? data[0]?.category_id : -1,
              lang: currentLanguage ? currentLanguage.code : "",
              sub_category_id: data[0]?.sub_category_id ? data[0]?.sub_category_id : -1,
              keyword: query
            });
          } else {
            audioResp = await httpRequest.post(`${getProductsBySearch}`, {
              category_id:  data.length > 0 ? data[0].category_id : -1,
              lang: currentLanguage ? currentLanguage.code : "",
              keyword: query,
              slug: "Audio"

            });
          }

          if (audioResp.status === 200 || audioResp.status === 201) {
            setAllProducts(audioResp.data.data);
            setCurrentProducts(audioResp.data?.data?.data)
           
          }
        } catch (err) {
          console.log(err.message);
        }
      
    }
    
    // onSearch(query);
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
          state: { data: res.data.data?.data },
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  


  const handleOptionSelect = (value) =>{
    let sortedProducts
    switch (value) {
      case 'title-asc':
        sortedProducts= [...currentProducts].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        sortedProducts =[...currentProducts].sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'date-asc':
        sortedProducts =[...currentProducts].sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'date-desc':
        sortedProducts =[...currentProducts].sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      default:
        sortedProducts= [...currentProducts];
    }
    // console.log('sortedProducts', sortedProducts)

    setCurrentProducts(sortedProducts);
    
  }

  async function handleDownload(audioUrl, filename) {
    try {
      // Fetch the audio file
      const response = await fetch(audioUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Create a Blob from the response
      const blob = await response.blob();
  
      // Create an Object URL from the Blob
      const url = window.URL.createObjectURL(blob);
  
      // Create an anchor element
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = filename;
  
      // Append the anchor to the body (required for Firefox)
      document.body.appendChild(anchor);
  
      // Programmatically click the anchor to trigger the download
      anchor.click();
  
      // Remove the anchor from the document
      document.body.removeChild(anchor);
  
      // Release the Object URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to download file:', error);
    }
  }


  const loadMore = async()=>{
    try {
      const response  = await httpRequest.post(`${allProducts?.next_page_url}`, {
        category_id:  data.length > 0 ? data[0].category_id : -1,
        lang: currentLanguage ? currentLanguage.code : "",
        slug: "Audio",
        keyword: query
      });
      
      if (response.status === 200 || response.status === 201) {
        setCurrentProducts([...currentProducts, ...response.data.data?.data]);
        setAllProducts(response?.data?.data)
        // setCurrentPage(currentPage + 1);
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
                    {`Showing ${allProducts?.to} of ${allProducts?.total} results`}
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
              {
              currentProducts?.length > 0 ? currentProducts?.map((item, index) => {
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
                          	
                        	</div>
                         <AudioPlayer
                         autoPlay={false}
                         src={item?.file_url}
                         onPlay={e => console.log("onPlay")}
                         customAdditionalControls={[]}
                        //  customVolumeControls={[]}
                         showJumpControls={true}

                         />
                      	</div>
                      	<div className="p-last-new">
                        	<p className="publish-new">
                          	{" "}
                          	<a className="qw colo">
                            	<FontAwesomeIcon icon={faCalendarDays} />
                          	</a>
                          	{t("date")}:&nbsp;{item?.date}
                        	</p>
                        	<button onClick={() => handleDownload(item?.file_url, item?.title)} className="download-button download-button-new">
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
              ): "No data found"}
              {
                currentProducts?.length > 0 && allProducts?.next_page_url 
                && <div  style={{ display:'flex', justifyContent:'center', alignItems:'center', marginTop:'20px' }} className="pagination">
                <button
                  onClick={loadMore}
                >
                  {t("loadmore")}
                </button>
              </div>
              }
              
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Audios;
