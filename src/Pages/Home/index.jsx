import React from "react";
import { Footer, Header, TopHeader } from "../../components";
import ContentSection from "../HomeOld/ContentSection";
import AboutSection from "../HomeOld/AboutSection";
import AlQuran from "../HomeOld/AlQuran";
import AlHadith from "../HomeOld/AlHadith";
import Fiqh from "../HomeOld/Fiqh";

const Home = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <ContentSection />
      <AboutSection />
      <AlQuran />
      <AlHadith />
      <Fiqh />
      <Footer />
    </div>
  );
};

export default Home;
