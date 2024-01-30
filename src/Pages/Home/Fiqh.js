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
import { PdfSlider } from '../../Common/sliders';

const Fiqh = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <div className="al-hadith-container c">
      <div className="head">
        <h2 className="heading">{t('pdf')}</h2>
        <img
          decoding="async"
          src="https://taqwa.nauthemes.net/wp-content/uploads/2020/06/prayer-head-shp.png"
          alt="heading-image"
        />
      </div>
     <PdfSlider />
    </div>
  );
};

export default Fiqh;
