import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faAngleDown, faPhoneVolume, faPhone, faMagnifyingGlass, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBackward, faPlay, faPause, faForward, faStop, faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMap, faClock, faCalendarDays, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import logo from "./../../assests/images/logo.png";
import TopHeader from "./../../Common/TopHeader";
import Header from "./../../Common/Header";
import AboutSection from "./../../Pages/Home/AboutSection";
import ContentSection from "./../../Pages/Home/ContentSection";
import NamazTimings from "./../../Pages/Home/NamazTimings";
import AlQuran from "./../../Pages/Home/AlQuran";
import AlHadith from "./../../Pages/Home/AlHadith";
import Fiqh from "./../../Pages/Home/Fiqh";
import Footer from "./../../Common/Footer";


export default function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <ContentSection />
      <AboutSection />
      <NamazTimings />
      <AlQuran />
      <AlHadith />
      <Fiqh />
      <Footer />
    </>
  );
}
