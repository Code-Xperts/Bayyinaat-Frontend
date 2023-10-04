import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop, faArrowRotateLeft, faArrowRotateRight, faCalendarDays, faVolumeLow } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import TopHeader from "../../../Common/TopHeader";
import Header from "../../../Common/Header";
import Footer from "../../../Common/Footer";
import viewpdf from "../../../assests/database.pdf"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link } from "react-router-dom";

import i18n from '../../../i18n';
import { useTranslation } from 'react-i18next';


const Audio = ({ onSearch }) => {
    const { t, i18n } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    const [isOpen, setIsOpen] = useState(0);

    const toggleDropdown = (section) => {
        setIsOpen((prevIsOpen) => (prevIsOpen === section ? 0 : section));

    };
    const handleContextMenu = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <TopHeader />
            <Header />
            <div className='container'>
                <section>
                    <div className="two-column-container main-col main-col-neww">

                        

                        <div className="column-right main-right main-right-neww">
                            
                            <div className="mar mar-neww">
                                <div className="bar bar-neww">
                                    <h2 className='pdf-heading'>{t('pdfheading')}</h2>
                                    <iframe src={viewpdf + "#toolbar=0"} width="100%" height="100%" onContextMenu={handleContextMenu}>
                                    </iframe>
                                    <div className='P-button P-button-neww'>
                                        <Link to="/pdf"><button className='download-button'>{t('closepdf')}</button></Link>
                                        <button className='download-button'>{t('download')}</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Audio;
