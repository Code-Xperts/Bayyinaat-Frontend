import { useRoutes, useNavigate } from "react-router-dom";
import React, {useEffect} from "react";
// import {doPost} from "../utils/apiCalls";
// import { ToastContainer, toast } from 'react-toastify';
import Home from "./../Pages/Home/Index";
import AboutUs from "./../Pages/Home/About/AboutUs";
import ContactUs from "./../Pages/Home/About/ContactUs";
import AUDIOS from "../Pages/Home/About/Audio";
import useAuth from "../hooks/useAuth";

function Router() {
  const {getLoggedObject, setLoggedObject, isLoggedIn, checkLogin} = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
  }, [])


  const authRoutes = [
      {path: "*", element: <Home/>},
    ];

    const unAuthRoutes = [
      {path: "/Home", element: <Home/>},
      {path: "/about-us", element: <AboutUs/>},
      {path: "/contact-us", element: <ContactUs/>},
      {path: "/audios", element: <AUDIOS/>},
      {path: "*", element: <Home/>}
    ];

  const routes = isLoggedIn ? authRoutes : unAuthRoutes;
  // const routes = unAuthRoutes;
  return useRoutes(routes);
}

export default Router;
