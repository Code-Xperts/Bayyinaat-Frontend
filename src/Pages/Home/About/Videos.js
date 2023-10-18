import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop, faArrowRotateLeft, faArrowRotateRight, faCalendarDays, faVolumeLow } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import TopHeader from "../../../Common/TopHeader";
import Header from "../../../Common/Header";
import Footer from "../../../Common/Footer";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import i18n from '../../../i18n';
import { useTranslation } from 'react-i18next';

import Modal from 'react-modal'; // Import the modal library


const Audio = ({ onSearch }) => {
    const { t } = useTranslation();
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoLink, setVideoLink] = useState("");

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    const toggleDropdown = (section) => {
        setIsOpen((prevIsOpen) => (prevIsOpen === section ? 0 : section));
    };

    const toggleModal = (link = "") => {
        setVideoLink(link);
        setIsModalOpen(!isModalOpen);
    };

    const modalStyle = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Transparent background
            zIndex: 10, // Higher z-index
        },
        content: {
            width: '90%',
            height: '90%',
            margin: 'auto',
            background: 'transparent', // Transparent content
            border: 'none',
            zIndex: 10, // Higher z-index
            position: 'fixed',
        },
    };
    
    return (
        <>
            <TopHeader />
            <Header />
            <div className='container'>
                <section>
                    <div className="conatiner searc">
                        <div className="search-bar">
                            <input
                                type="se"
                                placeholder={t('search')}
                                value={query}
                                onChange={handleInputChange}
                            />
                            <button onClick={handleSearch}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="two-column-container main-col">

                        <div className="col-cont-main">
                            <div className="column-left main-left game">
                                <h3 className='main-left-heading'>{t('allcategories')}</h3>
                            </div>
                            <ul className="major">
                                <li>
                                    <span
                                        className={`drop-down-button ${isOpen == 1 ? 'active' : 'inactive'}`}
                                        onClick={() => toggleDropdown(1)}
                                    ></span>
                                    <a className='yes-bold' href="#"><a><FontAwesomeIcon className='qw colo' icon={faVolumeLow} /></a>{t('alquran')}</a>
                                    {isOpen == 1 && (
                                        <ul className={`col-cont-main-dropdown ${isOpen == 1 ? 'active' : ''}`}>
                                            <li><a href="#">{t('recitation')}</a></li>
                                            <li><a href="#">{t('tajweed')}</a></li>
                                            <li><a href="#">{t('hifiz')}</a></li>
                                            <li><a href="#">{t('uloomalquran')}</a></li>
                                            <li><a href="#">{t('takmeel')}</a></li>
                                            <li><a href="#">{t('quranawrihsan')}</a></li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <span
                                        className={`drop-down-button ${isOpen == 2 ? 'active' : 'inactive'}`}
                                        onClick={() => toggleDropdown(2)}
                                    ></span>
                                    <a className='yes-bold' href="#"><a><FontAwesomeIcon className='qw colo' icon={faVolumeLow} /></a>{t('alquran')}</a>
                                    {isOpen == 2 && (
                                        <ul className={`col-cont-main-dropdown ${isOpen == 2 ? 'active' : ''}`}>
                                            <li><a href="#">{t('recitation')}</a></li>
                                            <li><a href="#">{t('tajweed')}</a></li>
                                            <li><a href="#">{t('hifiz')}</a></li>
                                            <li><a href="#">{t('uloomalquran')}</a></li>
                                            <li><a href="#">{t('takmeel')}</a></li>
                                            <li><a href="#">{t('quranawrihsan')}</a></li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <span
                                        className={`drop-down-button ${isOpen == 3 ? 'active' : 'inactive'}`}
                                        onClick={() => toggleDropdown(3)}
                                    ></span>
                                    <a className='yes-bold' href="#"><a><FontAwesomeIcon className='qw colo' icon={faVolumeLow} /></a>{t('alquran')}</a>
                                    {isOpen == 3 && (
                                        <ul className={`col-cont-main-dropdown ${isOpen == 3 ? 'active' : ''}`}>
                                            <li><a href="#">{t('recitation')}</a></li>
                                            <li><a href="#">{t('tajweed')}</a></li>
                                            <li><a href="#">{t('hifiz')}</a></li>
                                            <li><a href="#">{t('uloomalquran')}</a></li>
                                            <li><a href="#">{t('takmeel')}</a></li>
                                            <li><a href="#">{t('quranawrihsan')}</a></li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <span
                                        className={`drop-down-button ${isOpen == 4 ? 'active' : 'inactive'}`}
                                        onClick={() => toggleDropdown(4)}
                                    ></span>
                                    <a className='yes-bold' href="#"><a><FontAwesomeIcon className='qw colo' icon={faVolumeLow} /></a>{t('alquran')}</a>
                                    {isOpen == 4 && (
                                        <ul className={`col-cont-main-dropdown ${isOpen == 4 ? 'active' : ''}`}>
                                            <li><a href="#">{t('recitation')}</a></li>
                                            <li><a href="#">{t('tajweed')}</a></li>
                                            <li><a href="#">{t('hifiz')}</a></li>
                                            <li><a href="#">{t('uloomalquran')}</a></li>
                                            <li><a href="#">{t('takmeel')}</a></li>
                                            <li><a href="#">{t('quranawrihsan')}</a></li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <span
                                        className={`drop-down-button ${isOpen == 5 ? 'active' : 'inactive'}`}
                                        onClick={() => toggleDropdown(5)}
                                    ></span>
                                    <a className='yes-bold' href="#"><a><FontAwesomeIcon className='qw colo' icon={faVolumeLow} /></a>{t('alquran')}</a>
                                    {isOpen == 5 && (
                                        <ul className={`col-cont-main-dropdown ${isOpen == 5 ? 'active' : ''}`}>
                                            <li><a href="#">{t('recitation')}</a></li>
                                            <li><a href="#">{t('tajweed')}</a></li>
                                            <li><a href="#">{t('hifiz')}</a></li>
                                            <li><a href="#">{t('uloomalquran')}</a></li>
                                            <li><a href="#">{t('takmeel')}</a></li>
                                            <li><a href="#">{t('quranawrihsan')}</a></li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <span
                                        className={`drop-down-button ${isOpen == 6 ? 'active' : 'inactive'}`}
                                        onClick={() => toggleDropdown(6)}
                                    ></span>
                                    <a className='yes-bold' href="#"><a><FontAwesomeIcon className='qw colo' icon={faVolumeLow} /></a>{t('alquran')}</a>
                                    {isOpen == 6 && (
                                        <ul className={`col-cont-main-dropdown ${isOpen == 6 ? 'active' : ''}`}>
                                            <li><a href="#">{t('recitation')}</a></li>
                                            <li><a href="#">{t('tajweed')}</a></li>
                                            <li><a href="#">{t('hifiz')}</a></li>
                                            <li><a href="#">{t('uloomalquran')}</a></li>
                                            <li><a href="#">{t('takmeel')}</a></li>
                                            <li><a href="#">{t('quranawrihsan')}</a></li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <span
                                        className={`drop-down-button ${isOpen == 7 ? 'active' : 'inactive'}`}
                                        onClick={() => toggleDropdown(7)}
                                    ></span>
                                    <a className='yes-bold' href="#"><a><FontAwesomeIcon className='qw colo' icon={faVolumeLow} /></a>{t('alquran')}</a>
                                    {isOpen == 7 && (
                                        <ul className={`col-cont-main-dropdown ${isOpen == 7 ? 'active' : ''}`}>
                                            <li><a href="#">{t('recitation')}</a></li>
                                            <li><a href="#">{t('tajweed')}</a></li>
                                            <li><a href="#">{t('hifiz')}</a></li>
                                            <li><a href="#">{t('uloomalquran')}</a></li>
                                            <li><a href="#">{t('takmeel')}</a></li>
                                            <li><a href="#">{t('quranawrihsan')}</a></li>
                                        </ul>
                                    )}
                                </li>

                            </ul>
                        </div>

                        <div className="column-right main-right">
                            <div className="mar">
                                <div className="bar">
                                    <div className="texttt">
                                        {t('showingresults')}
                                    </div>
                                    <form className="rtcl-ordering" method="get">
                                        <select className="isko"
                                            name="orderby"
                                            aria-label="Listing order"
                                            tabIndex="-1"
                                            aria-hidden="true"
                                        >
                                            <option value="title-asc">{t('atoztitle')}</option>
                                            <option value="title-desc">{t('ztoatitle')}</option>
                                            <option value="date-desc" selected="selected">
                                                {t('recentlyaddedlatest')}
                                            </option>
                                            <option value="date-asc">{t('dateaddedoldest')}</option>
                                            <option value="views-desc">{t('mostviewed')}</option>
                                            <option value="views-asc">{t('lessviewed')}</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                            <div className="audio-player">
                                <div className="major-picture">
                                    <div className='image-div'>
                                        <img className='image-border' src="https://static.vecteezy.com/system/resources/thumbnails/023/342/638/small_2x/3d-holy-quran-free-vector.jpg" />
                                    </div>
                                    <div className="major-content">
                                        <h2 className='surah-heading'>{t('surah')}</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit egestas id gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit egestas id gravida.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit egestas id gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit egestas id gravida.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit egestas id gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit egestas id gravida.
                                        </p>
                                        <div className='p-last'>
                                            <p className='publish'> <a className='qw colo'><FontAwesomeIcon icon={faCalendarDays} /></a>{t('date')}:&nbsp;01-01-2000</p>
                                            <button className='download-button' onClick={() => toggleModal("https://www.youtube.com/watch?v=AaS3hnz1D20")}>
                                                {t('watchnow')}
                                            </button>
                                        </div>


                                    </div>
                                </div>
                                <div className='customs-tags'>
                                    <div className="custom-tag">
                                        <p className='tags'>Hello, Custom Tag!</p>
                                    </div>
                                    <div className="custom-tag">
                                        <p className='tags'>Hello, Custom Tag!</p>
                                    </div>
                                    <div className="custom-tag">
                                        <p className='tags'>Hello, Custom Tag!</p>
                                    </div>
                                    <div className="custom-tag">
                                        <p className='tags'>Hello, Custom Tag!</p>
                                    </div>
                                    <div className="custom-tag">
                                        <p className='tags'>Hello, Custom Tag!</p>
                                    </div>
                                    <div className="custom-tag">
                                        <p className='tags'>Hello, Custom Tag!</p>
                                    </div>
                                    <div className="custom-tag">
                                        <p className='tags'>Hello, Custom Tag!</p>
                                    </div>
                                    <div className="custom-tag">
                                        <p className='tags'>Hello, Custom Tag!</p>
                                    </div>
                                    <div className="custom-tag">
                                        <p className='tags'>Hello, Custom Tag!</p>
                                    </div>
                                    <div className="custom-tag">
                                        <p className='tags'>Hello, Custom Tag!</p>
                                    </div>
                                    <div className="custom-tag">
                                        <p className='tags'>Hello, Custom Tag!</p>
                                    </div>
                                    <div className="custom-tag">
                                        <p className='tags'>Hello, Custom Tag!</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={toggleModal}
                contentLabel="Video Modal"
                style={modalStyle}
                shouldCloseOnOverlayClick={false}
            >
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/AaS3hnz1D20"
                    title="Video Title"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
                <button className='flooot-rrr' onClick={toggleModal}>Close</button>
            </Modal>
            <Footer />
        </>
    );
};

export default Audio;
