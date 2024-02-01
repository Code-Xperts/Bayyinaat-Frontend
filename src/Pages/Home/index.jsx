import React, { useEffect } from "react";
import { Footer, Header, TopHeader } from "../../components";
import ContentSection from "../HomeOld/ContentSection";
import AboutSection from "../HomeOld/AboutSection";
import AlQuran from "../HomeOld/AlQuran";
import AlHadith from "../HomeOld/AlHadith";
import Fiqh from "../HomeOld/Fiqh";
import { useDispatch } from "react-redux";
import { Company } from "../../constants/apiEndPoints";
import httpRequest from "../../axios/index.js";
import { setCompanyInfo } from "../../lib/Redux/slices/userslice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const FetchCompanyInfo = async () => {
      try {
        const resp = await httpRequest.get(`${Company}/company`);
        if (resp.status === 200 || resp.status === 201) {
          dispatch(setCompanyInfo(resp?.data?.data));
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    FetchCompanyInfo();
  }, []);

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
