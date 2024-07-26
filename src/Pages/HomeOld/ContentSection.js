import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./ContentSection.css";
import 'swiper/css';
import "swiper/css/autoplay"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import image1 from './../../assests/images/image1.jpg'; 
import image2 from './../../assests/images/image2.jpg';
import image3 from './../../assests/images/image3.jpg';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getBannerData } from '../../constants/apiEndPoints';
import httpRequest from "../../axios/index.js";


const ContentSection = () => {
  const [bannerData ,  setBannerData] = useState([])
  const currentLanguage = useSelector((state) => state.languageSlice.currentlanguage);

  useEffect(() => {
    const FetchCategoriesInfo = async () => {
      try {
        const res = await httpRequest.get(`${getBannerData}/${currentLanguage?.code}`);
        if (res.status === 200 || res.status === 201) {
          // console.log('audi res',audioResp.data.data)
          setBannerData(res.data.data)
          // dispatch(setCompanyInfo(resp?.data?.data));
        }

    }catch(error){
      console.log(error)
    }
  }
  FetchCategoriesInfo()
  },[currentLanguage])
  return (
    <Swiper
      // Install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ // Enable autoplay
        delay: 5000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Don't stop autoplay on user interaction
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={bannerData[0]?.image} alt="Slide 1" />
        <div className="content-container">
          <div className="heading-section">
            <h1 style={{ fontSize: "30px" }}>
              {" "}
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </h1>
            <h1>
              {bannerData[0]?.title}
            </h1>
            <button className="cta-button">Learn More</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={bannerData[0]?.image} alt="Slide 2" />
        <div className="content-container">
          <div className="heading-section">
            <h1 style={{ fontSize: "30px" }}>
              {" "}
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </h1>
            <h1>
              {bannerData[0]?.title}
            </h1>
            <button className="cta-button">Learn More</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={bannerData[0]?.image} alt="Slide 3" />
        <div className="content-container">
          <div className="heading-section">
            <h1 style={{ fontSize: "30px" }}>
              {" "}
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </h1>
            <h1>
              {bannerData[0]?.title}
            </h1>
            <button className="cta-button">Learn More</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ContentSection;
