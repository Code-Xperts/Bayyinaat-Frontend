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

const ContentSection = () => {
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
        <img src={image1} alt="Slide 1" />
        <div className="content-container">
          <div className="heading-section">
            <h1 style={{ fontSize: "30px" }}>
              {" "}
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </h1>
            <h1>
              DISCOVER ISLAMIC BELIEVE <br /> WITH ULAMAH HERE
            </h1>
            <button className="cta-button">Learn More</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="Slide 2" />
        <div className="content-container">
          <div className="heading-section">
            <h1 style={{ fontSize: "30px" }}>
              {" "}
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </h1>
            <h1>
              DISCOVER ISLAMIC BELIEF <br /> WITH ULAMAH HERE
            </h1>
            <button className="cta-button">Learn More</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} alt="Slide 3" />
        <div className="content-container">
          <div className="heading-section">
            <h1 style={{ fontSize: "30px" }}>
              {" "}
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </h1>
            <h1>
              DISCOVER ISLAMIC BELIEF <br /> WITH ULAMAH HERE
            </h1>
            <button className="cta-button">Learn More</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ContentSection;
