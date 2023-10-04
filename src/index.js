import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import "./assests/style.css";
import React, { useEffect, useRef } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import WOW from 'wowjs';
// import 'wowjs/css/libs/animate.css';
import reportWebVitals from './reportWebVitals';
import i18n from './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  useEffect(() => {
    // const wow = new WOW.WOW();
    // wow.init();
  }, []);
  

  return (
    <BrowserRouter>
      <Router />
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        className="toast_class"
      /> */}
    </BrowserRouter>
  );
};

root.render(<App />);