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
  getProductsBySearch,
} from "../../constants/apiEndPoints/index.js";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const Videos = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [videoData, setVideoData] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const location = useLocation();
  const data = location.state?.data; 
  const {id,slug2, slug2_id} = useParams()
  const navigate = useNavigate();
  const [currentProducts, setCurrentProducts] = useState([]);
  // const [productsPerPage] = useState(5);



  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSearch = async() => {
    if (data) {
        try {
          let videoResp;
          if (slug2) {
            videoResp = await httpRequest.post(`${getProductsBySearch}`, {
              category_id: data[0]?.category_id ? data[0]?.category_id : -1,
              lang: currentLanguage ? currentLanguage.code : "",
              sub_category_id: data[0]?.sub_category_id ? data[0]?.sub_category_id : -1,
              keyword: query
            });
          } else {
            videoResp = await httpRequest.post(`${getProductsBySearch}`, {
              category_id:  data.length > 0 ? data[0].category_id : -1,
              lang: currentLanguage ? currentLanguage.code : "",
              keyword: query,
              slug: "Video"

            });
          }

          if (videoResp.status === 200 || videoResp.status === 201) {
            setAllProducts(videoResp.data.data);
            setCurrentProducts(videoResp.data?.data?.data)
           
          }
        } catch (err) {
          console.log(err.message);
        }
      
    }
    
    // onSearch(query);
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
          // console.log("audi res", videoResp.data.data);
          setVideoData(videoResp.data.data);
          // dispatch(setCompanyInfo(resp?.data?.data));
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    FetchCategoriesInfo();

    if (data) {
      const fetchProducts = async () => {
        try {
          let videoResp;
          if (slug2) {
            videoResp = await httpRequest.post(
              `${getProductByBothCategory}`,
              {
                category_id: data[0]?.category_id ? data[0]?.category_id : -1,
                lang: currentLanguage ? currentLanguage.code : "",
                sub_category_id: data[0]?.sub_category_id ? data[0]?.sub_category_id : -1
              }
            );
          } else {
            videoResp = await httpRequest.post(`${getProductById}`, {
              category_id:  data.length > 0 ? data[0].category_id : -1,
              lang: currentLanguage ? currentLanguage.code : "",
            });
          }

          if (videoResp.status === 200 || videoResp.status === 201) {
            setCurrentProducts(videoResp.data.data?.data)
            setAllProducts(videoResp.data.data);
          }
        } catch (err) {
          console.log(err.message);
        }
      };
      fetchProducts();
    }
  }, [currentLanguage, id, slug2, data, query]);

  const toggleDropdown = (section) => {
    setIsOpen((prevIsOpen) => (prevIsOpen === section ? null : section));
  };

  const toggleModal = (link = "") => {
    // console.log('link',link)
    if (link.includes("youtube.com")) {
      // Convert YouTube URL to embed URL
      const url = new URL(link);
      const videoId = url.searchParams.get("v");
      setVideoLink(`https://www.youtube.com/embed/${videoId}`);
    } else if (link) {
      setVideoLink(link);
    }
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
        // console.log("audi pro", res.data.data);
        
        navigate(`/videos/${name}/${name2}`, { state: { data: res.data.data.data } });
      }
    } catch (err) {
      console.log(err.message);
    }
  }

   // Get current products
  //  const indexOfLastProduct = currentPage * productsPerPage;
  //  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  //  const currentProducts = allProducts.slice(
  //    indexOfFirstProduct,
  //    indexOfLastProduct
  //  );
 
   // Change page
  //  const paginate = (pageNumber) => setCurrentPage(pageNumber);

   const handleOptionSelect = (value) =>{
    console.log("clicked", value)
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

  const loadMore = async()=>{
    try {
      const response  = await httpRequest.post(`${allProducts?.next_page_url}`, {
        category_id:  data.length > 0 ? data[0].category_id : -1,
        lang: currentLanguage ? currentLanguage.code : "",
        slug: "Video",
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

  const handleRedirect = async(name,id)=>{
    try {
      const res = await httpRequest.post(`${getProductById}`, {
        category_id: id,
        lang: currentLanguage ? currentLanguage.code : "",
      });
      if (res.status === 200 || res.status === 201) {
        // console.log("audi pro", res.data.data);
        
        navigate(`/videos/${name}`, { state: { data: res.data.data?.data } });
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
                    {
                      item?.sub_categories?.length > 0 &&( <span
                        className={`drop-down-button ${
                          isOpen === index ? "active" : "inactive"
                        }`}
                        onClick={() => toggleDropdown(index)}
                      ></span>)
                    }
                    <Link className="yes-bold" onClick={() => handleRedirect(item?.slug, item?.id)}>
                    <a>
                        <FontAwesomeIcon
                          className="qw colo"
                          icon={faVolumeLow}
                        />
                      </a>
                      {t(item.name)}
                    </Link>
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
                  <div className="texttt"> {`Showing ${allProducts?.to} of ${allProducts?.total}`}</div>
                  <form className="rtcl-ordering" method="get">
                    <select
                      className="isko"
                      name="orderby"
                      aria-label="Listing order"
                      tabIndex="-1"
                      aria-hidden="true"
                      onChange={(e)=>handleOptionSelect(e.target.value)}
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
              {
              currentProducts?.length > 0 ? currentProducts?.map((item, index) => (
                <div  style={{ marginTop: "15px" }} key={index} className="audio-player">
                  <div className="major-picture">
                    <div className="image-div">
                      <img
                        style={{width:'100px', height:'100px'}}
                        className="image-border"
                        src={item?.image}
                        alt={item?.title}
                      />
                    </div>
                    <div className="major-content">
                      <h2 className="surah-heading">{t(item?.title)}</h2>
                      <p dangerouslySetInnerHTML={{ __html: item?.description } }/>
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
              )): "No data found"}
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
      <Modal
        isOpen={isModalOpen}
        onRequestClose={()=>toggleModal('')}
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
        <button className="flooot-rrr" onClick={()=>toggleModal('')}>
          {t("close")}
        </button>
      </Modal>
      <Footer />
    </>
  );
};

export default Videos;
