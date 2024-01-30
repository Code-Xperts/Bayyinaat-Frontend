import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderArr } from "./Jsons/slider";
import "./styles/style.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <FaChevronRight onClick={onClick} className="CustomArrow right" />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <FaChevronLeft onClick={onClick} className="CustomArrow left" />;
}

const Audioslider = () => {
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

  return (
    <div className="MainSlider">
      <Slider {...settings}>
        {SliderArr.map((item, index) => (
          <div key={index} className="SliderBox">
            <div className="InnerBoxSlide">
              <img
                className="Sliderimg"
                src={item.img}
                alt={item.name + index}
              />
              <div className="ViewBtn">
                <h1 className="onlineheading">Online Classess</h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Audioslider;
