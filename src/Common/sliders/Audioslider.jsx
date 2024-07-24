import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderArr } from "./Jsons/slider";
import "./styles/style.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import httpRequest from "../../axios/index.js";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { getAllProducts, getProductsByCategories } from "../../constants/apiEndPoints";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <FaChevronRight onClick={onClick} className="CustomArrow right" />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <FaChevronLeft onClick={onClick} className="CustomArrow left" />;
}

const Audioslider = () => {
  const [audioData, setAudioData] = useState([])
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow className="CustomArrow" />,
    prevArrow: <SamplePrevArrow className="CustomArrow" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  const currentLanguage = useSelector((state) => state.languageSlice.currentlanguage);
  useEffect(()=>{
    const FetchProducts = async () => {
      try {
        const audioResp = await httpRequest.post(`${getAllProducts}`,{slug:'Audio',lang:currentLanguage?currentLanguage.code:''});
        if (audioResp.status === 200 || audioResp.status === 201) {
          console.log('audi res',audioResp.data.data)
          setAudioData(audioResp.data.data)
        }
       
      } catch (err) {
        console.log(err.message);
      }
    };

    FetchProducts();

  },[currentLanguage])

  return (
    <div className="MainSlider">
      <Slider {...settings}>
        {audioData?.map((item, index) => (
          <div key={index} className="SliderBox">
            <div className="InnerBoxSlide">
              <img
                className="Sliderimg"
                src={item.image}
                alt={item.title + index}
              />
              <div className="ViewBtn">
                <h1 className="onlineheading">{item.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Audioslider;
