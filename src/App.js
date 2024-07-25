import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { PublicRoute } from "./routes/routes/PublicRoute";
import { PrivateRoute } from "./routes/routes/PrivateRoute";
import {
  AboutUs,
  ContactUs,
  Audios,
  Videos,
  PDF,
  Queries,
  Answers,
  ViewPdf,
  Donate,
  Home,
} from "./Pages/index.jsx";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.languageSlice.currentLanguage);

  useEffect(() => {
    // console.log('Language changed:', currentLanguage);
    // Perform any side effects or dispatch actions needed here
  }, [currentLanguage]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/audios/:slug/:slug2?" element={<Audios />} />
          <Route path="/videos/:slug/:slug2?" element={<Videos />} />
          <Route path="/pdf/:slug/:slug2?" element={<PDF />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/answer" element={<Answers />} />
          <Route path="/view-pdf" element={<ViewPdf />} />
          <Route path="/donate" element={<Donate />} />
          {/* <Route
            path="/login"
            element={
              <PublicRoute type="user">
                <Login />
              </PublicRoute>
            }
          /> */}
          {/* <Route
            path="/Welcome"
            element={
              <PrivateRoute type="user">
                <Welcome />
              </PrivateRoute>
            }
          /> */}
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
