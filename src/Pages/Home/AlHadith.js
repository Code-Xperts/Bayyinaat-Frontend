import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './slider.css'; 

const AlHadith = () => {
  const [swiperSlides, setSwiperSlides] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of visible slides based on screen width
      if (window.innerWidth <= 767) {
        setSwiperSlides(1); // Show 1 slide on small screens
      } else {
        setSwiperSlides(4); // Show 4 slides on larger screens
      }
    };

    // Initial adjustment based on screen width
    handleResize();

    // Add a listener for window resize events
    window.addEventListener('resize', handleResize);

    // Remove the listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="al-hadith-container">
      <div className="head">
        <h2 className="heading">AlHadith</h2>
        <img
          decoding="async"
          src="https://taqwa.nauthemes.net/wp-content/uploads/2020/06/prayer-head-shp.png"
          alt="heading-image"
        />
      </div>
      <Swiper
        className="custom-swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        spaceBetween={30}
        slidesPerView={swiperSlides}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="serv-thmb2">
            <a href="" itemprop="url">
              <img
                className="xx"
                decoding="async"
                src="https://taqwa.nauthemes.net/wp-content/uploads/bfi_thumb/services-community-pjyf69scbh90abc3swobt84mka1xq84851tbkvnelq.jpg"
                alt=""
                itemprop="image"
              />
            </a>
            <div className="serv-inf2">
              <h5 itemprop="headline">
                <a className="text" href="" itemprop="url">
                  Community Service
                </a>
              </h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="serv-thmb2">
            <a href="" itemprop="url">
              <img className="xx" decoding="async"
                src="https://taqwa.nauthemes.net/wp-content/uploads/bfi_thumb/special-child-pjyf6sl445yqqiksr4sv73dufzha066uvmv16evj5a.jpg"
                alt="" itemprop="image"></img>
            </a>
            <div className="serv-inf2">
              <h5 itemprop="headline">
                <a className="text" href="" itemprop="url">
                  Special Child Care
                </a>
              </h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="serv-thmb2">
            <a href="" itemprop="url">
              <img className="xx" decoding="async"
                src="https://taqwa.nauthemes.net/wp-content/uploads/bfi_thumb/quran-class-pjyf5tt33an4sxzbe7ro4u5sgq8p3dcseuq2f6b3ji.jpg"
                alt="" itemprop="image"></img>
            </a>
            <div className="serv-inf2">
              <h5 itemprop="headline">
                <a className="text" href="" itemprop="url">
                  Quran Classes
                </a>
              </h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="serv-thmb2">
            <a href="" itemprop="url">
              <img className="xx" decoding="async"
                src="https://taqwa.nauthemes.net/wp-content/uploads/bfi_thumb/quran-class-pjyf5tt33an4sxzbe7ro4u5sgq8p3dcseuq2f6b3ji.jpg"
                alt="" itemprop="image"></img>
            </a>
            <div className="serv-inf2">
              <h5 itemprop="headline">
                <a className="text" href="" itemprop="url">
                  Quran Classes
                </a>
              </h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="serv-thmb2">
            <a href="" itemprop="url">
              <img className="xx" decoding="async"
                src="https://taqwa.nauthemes.net/wp-content/uploads/bfi_thumb/quran-class-pjyf5tt33an4sxzbe7ro4u5sgq8p3dcseuq2f6b3ji.jpg"
                alt="" itemprop="image"></img>
            </a>
            <div className="serv-inf2">
              <h5 itemprop="headline">
                <a className="text" href="" itemprop="url">
                  Quran Classes
                </a>
              </h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="serv-thmb2">
            <a href="" itemprop="url">
              <img className="xx" decoding="async"
                src="https://taqwa.nauthemes.net/wp-content/uploads/bfi_thumb/quran-class-pjyf5tt33an4sxzbe7ro4u5sgq8p3dcseuq2f6b3ji.jpg"
                alt="" itemprop="image"></img>
            </a>
            <div className="serv-inf2">
              <h5 itemprop="headline">
                <a className="text" href="" itemprop="url">
                  Quran Classes
                </a>
              </h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="serv-thmb2">
            <a href="" itemprop="url">
              <img className="xx" decoding="async"
                src="https://taqwa.nauthemes.net/wp-content/uploads/bfi_thumb/quran-class-pjyf5tt33an4sxzbe7ro4u5sgq8p3dcseuq2f6b3ji.jpg"
                alt="" itemprop="image"></img>
            </a>
            <div className="serv-inf2">
              <h5 itemprop="headline">
                <a className="text" href="" itemprop="url">
                  Quran Classes
                </a>
              </h5>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AlHadith;
