import React from "react";
import { Footer, Header, TopHeader } from "../../components";
import ContentSection from "../HomeOld/ContentSection";
import AboutSection from "../HomeOld/AboutSection";
import AlQuran from "../HomeOld/AlQuran";
import Pdf from "../HomeOld/Pdf";
import AlHadith from "../HomeOld/AlHadith";



const Home = () => {

  
 
  return (
    <div>
      <TopHeader  />
      <Header  />
      <ContentSection />
      <AboutSection />
      <AlQuran />
      <AlHadith />
      <Pdf />
      <Footer />
    </div>
  );
};

export default Home;
