import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop, faArrowRotateLeft, faArrowRotateRight, faCalendarDays, faVolumeLow } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import TopHeader from "./../../../Common/TopHeader";
import Header from "./../../../Common/Header";
import Footer from "./../../../Common/Footer";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import i18n from '../../../i18n';
import { useTranslation } from 'react-i18next';



const Audio = ({ onSearch }) => {
    const { t, i18n } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);


    const audioUrl =
        'https://taqwa.nauthemes.net/wp-content/uploads/2021/02/surah-fateh.mp3';

    const handlePlayPause = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleSeekBackward = () => {
        audioRef.current.currentTime -= 15; // Adjust the seek duration as needed
    };

    const handleSeekForward = () => {
        audioRef.current.currentTime += 15; // Adjust the seek duration as needed
    };

    const handleStop = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
    };

    const handleSeek = (e) => {
        const newTime = (e.target.value / 100) * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedData = () => {
        setDuration(audioRef.current.duration);
    };

    useEffect(() => {
        const audioElement = audioRef.current;

        audioElement.addEventListener('timeupdate', handleTimeUpdate);
        audioElement.addEventListener('loadeddata', handleLoadedData);

        return () => {
            audioElement.removeEventListener('timeupdate', handleTimeUpdate);
            audioElement.removeEventListener('loadeddata', handleLoadedData);
        };
    }, []);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${String(seconds).padStart(2, '0')}`;
    };

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
                                        Showing 1–9 of 29 results
                                    </div>
                                    <form className="rtcl-ordering" method="get">
                                        <select className="isko"
                                            name="orderby"
                                            aria-label="Listing order"
                                            tabIndex="-1"
                                            aria-hidden="true"
                                        >
                                            <option value="title-asc">A to Z ( title )</option>
                                            <option value="title-desc">Z to A ( title )</option>
                                            <option value="date-desc" selected="selected">
                                                Recently added ( latest )
                                            </option>
                                            <option value="date-asc">Date added ( oldest )</option>
                                            <option value="views-desc">Most viewed</option>
                                            <option value="views-asc">Less viewed</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                            <div className="audio-player audio-new">
                                <div className="major-picture major-picture-new">
                                    <div className='image-div image-div-new'>
                                        <img className='image-border-new' src="https://static.vecteezy.com/system/resources/thumbnails/023/342/638/small_2x/3d-holy-quran-free-vector.jpg" />
                                        <p className='border-new-p'>Surah Surah Surah Surah Surah Surah Surah Surah  SurahSurahSurah SurahSurahSurah SurahSurahSurah SurahSurahSurahSurahSurahSurah </p>
                                    </div>
                                    <div className="major-content-new">
                                        <div className="audio-players-new">
                                            <div className="audio-controls-new">
                                                <div className="audio-progress-new">
                                                    <input
                                                        type="range"
                                                        min="0"
                                                        max="100"
                                                        value={(currentTime / duration) * 100 || 0}
                                                        onChange={handleSeek}
                                                    />
                                                    <div className="audio-time-new">
                                                        <div className=''>
                                                            {formatTime(currentTime)}
                                                        </div>
                                                        <div className=''>
                                                            {formatTime(duration)}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="audio-buttons audio-buttons-new">
                                                    <button className='cls cls-new' onClick={handleSeekBackward}>
                                                        <FontAwesomeIcon icon={faArrowRotateLeft} />
                                                    </button>
                                                    <button className='cls cls-new' onClick={handlePlayPause}>
                                                        {isPlaying ? (
                                                            <FontAwesomeIcon icon={faPause} />
                                                        ) : (
                                                            <FontAwesomeIcon icon={faPlay} />
                                                        )}
                                                    </button>
                                                    <button className='cls cls-new' onClick={handleSeekForward}>
                                                        <FontAwesomeIcon icon={faArrowRotateRight} />
                                                    </button>
                                                    <button className='cls cls-new' onClick={handleStop}>
                                                        <FontAwesomeIcon icon={faStop} />
                                                    </button>
                                                </div>

                                            </div>
                                            <audio ref={audioRef} src={audioUrl}></audio>
                                        </div>
                                        <div className='p-last-new'>
                                            <p className='publish-new'> <a className='qw colo'><FontAwesomeIcon icon={faCalendarDays} /></a>{t('date')}:&nbsp;01-01-2000</p>
                                            <button className='download-button download-button-new'>{t('download')}</button>
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
            <Footer/>
        </>
    );
};

export default Audio;
