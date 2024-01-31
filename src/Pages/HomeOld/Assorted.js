import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './slider.css'; 

import i18n from './../../i18n';
import { useTranslation } from 'react-i18next';


const Assorted = () => {
  const { t, i18n } = useTranslation();

  const [swiperSlides, setSwiperSlides] = useState(1);

  useEffect(() => {
    const handleResize = () => {
     
      if (window.innerWidth <= 767) {
        setSwiperSlides(1); 
      } else {
        setSwiperSlides(4); 
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="al-hadith-container c">
      <div className="head">
        <h2 className="heading">{t('assorted')}</h2>
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

export default Assorted;
