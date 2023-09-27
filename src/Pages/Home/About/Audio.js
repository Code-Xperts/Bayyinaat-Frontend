import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop, faArrowRotateLeft, faArrowRotateRight, faCalendarDays, faVolumeLow } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import TopHeader from "./../../../Common/TopHeader";
import Header from "./../../../Common/Header";
import Footer from "./../../../Common/Footer";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";





const Audio = ({ onSearch }) => {

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
            <section>
                <div className="conatiner searc">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search..."
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
                            <h3 className='main-left-heading'>All Categories</h3>
                        </div>
                        <ul className="major">
                            <li>
                                <span
                                    className={`drop-down-button ${isOpen==1 ? 'active' : 'inactive'}`}
                                    onClick={() => toggleDropdown(1)}
                                ></span>
                                <a className='yes-bold' href="#"><a><FontAwesomeIcon className='qw colo' icon={faVolumeLow} /></a>Al-Quran</a>
                                {isOpen==1 && (
                                    <ul className={`col-cont-main-dropdown ${isOpen==1 ? 'active' : ''}`}>
                                        <li><a href="#">Recitation</a></li>
                                        <li><a href="#">Tajweed</a></li>
                                        <li><a href="#">Hifiz</a></li>
                                        <li><a href="#">Uloom Al-Quran</a></li>
                                        <li><a href="#">Takmeel</a></li>
                                        <li><a href="#">Quran Awr Ihsan</a></li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <span
                                    className={`drop-down-button ${isOpen==2 ? 'active' : 'inactive'}`}
                                    onClick={() => toggleDropdown(2)}
                                ></span>
                                <a className='yes-bold' href="#"><a><FontAwesomeIcon className='qw colo' icon={faVolumeLow} /></a>Al-Quran</a>
                                {isOpen==2 && (
                                    <ul className={`col-cont-main-dropdown ${isOpen==2 ? 'active' : ''}`}>
                                        <li><a href="#">Recitation</a></li>
                                        <li><a href="#">Tajweed</a></li>
                                        <li><a href="#">Hifiz</a></li>
                                        <li><a href="#">Uloom Al-Quran</a></li>
                                        <li><a href="#">Takmeel</a></li>
                                        <li><a href="#">Quran Awr Ihsan</a></li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <span
                                    className={`drop-down-button ${isOpen==3 ? 'active' : 'inactive'}`}
                                    onClick={() => toggleDropdown(3)}
                                ></span>
                                <a className='yes-bold' href="#"><a><FontAwesomeIcon className='qw colo' icon={faVolumeLow} /></a>Al-Quran</a>
                                {isOpen==3 && (
                                    <ul className={`col-cont-main-dropdown ${isOpen==3 ? 'active' : ''}`}>
                                        <li><a href="#">Recitation</a></li>
                                        <li><a href="#">Tajweed</a></li>
                                        <li><a href="#">Hifiz</a></li>
                                        <li><a href="#">Uloom Al-Quran</a></li>
                                        <li><a href="#">Takmeel</a></li>
                                        <li><a href="#">Quran Awr Ihsan</a></li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <span
                                    className={`drop-down-button ${isOpen==4 ? 'active' : 'inactive'}`}
                                    onClick={() => toggleDropdown(4)}
                                ></span>
                                <a className='yes-bold' href="#"><a><FontAwesomeIcon className='qw colo' icon={faVolumeLow} /></a>Al-Quran</a>
                                {isOpen==4  && (
                                    <ul className={`col-cont-main-dropdown ${isOpen==4 ? 'active' : ''}`}>
                                        <li><a href="#">Recitation</a></li>
                                        <li><a href="#">Tajweed</a></li>
                                        <li><a href="#">Hifiz</a></li>
                                        <li><a href="#">Uloom Al-Quran</a></li>
                                        <li><a href="#">Takmeel</a></li>
                                        <li><a href="#">Quran Awr Ihsan</a></li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <span
                                    className={`drop-down-button ${isOpen==5 ? 'active' : 'inactive'}`}
                                    onClick={() => toggleDropdown(5)}
                                ></span>
                                <a className='yes-bold' href="#"><a><FontAwesomeIcon className='qw colo' icon={faVolumeLow} /></a>Al-Quran</a>
                                {isOpen==5 && (
                                    <ul className={`col-cont-main-dropdown ${isOpen==5 ? 'active' : ''}`}>
                                        <li><a href="#">Recitation</a></li>
                                        <li><a href="#">Tajweed</a></li>
                                        <li><a href="#">Hifiz</a></li>
                                        <li><a href="#">Uloom Al-Quran</a></li>
                                        <li><a href="#">Takmeel</a></li>
                                        <li><a href="#">Quran Awr Ihsan</a></li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <span
                                    className={`drop-down-button ${isOpen==6 ? 'active' : 'inactive'}`}
                                    onClick={() => toggleDropdown(6)}
                                ></span>
                                <a className='yes-bold' href="#"><a><FontAwesomeIcon className='qw colo' icon={faVolumeLow} /></a>Al-Quran</a>
                                {isOpen==6 && (
                                    <ul className={`col-cont-main-dropdown ${isOpen==6 ? 'active' : ''}`}>
                                        <li><a href="#">Recitation</a></li>
                                        <li><a href="#">Tajweed</a></li>
                                        <li><a href="#">Hifiz</a></li>
                                        <li><a href="#">Uloom Al-Quran</a></li>
                                        <li><a href="#">Takmeel</a></li>
                                        <li><a href="#">Quran Awr Ihsan</a></li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <span
                                    className={`drop-down-button ${isOpen==7 ? 'active' : 'inactive'}`}
                                    onClick={() => toggleDropdown(7)}
                                ></span>
                                <a className='yes-bold' href="#"><a><FontAwesomeIcon className='qw colo' icon={faVolumeLow} /></a>Al-Quran</a>
                                {isOpen==7 && (
                                    <ul className={`col-cont-main-dropdown ${isOpen==7 ? 'active' : ''}`}>
                                        <li><a href="#">Recitation</a></li>
                                        <li><a href="#">Tajweed</a></li>
                                        <li><a href="#">Hifiz</a></li>
                                        <li><a href="#">Uloom Al-Quran</a></li>
                                        <li><a href="#">Takmeel</a></li>
                                        <li><a href="#">Quran Awr Ihsan</a></li>
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
                        <div className="audio-player">
                            <div className="major-picture">
                                <div className='image-div'>
                                    <img className='image-border' src="https://static.vecteezy.com/system/resources/thumbnails/023/342/638/small_2x/3d-holy-quran-free-vector.jpg" />
                                </div>
                                <div className="major-content">
                                    <h2>Surah</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit egestas id gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit egestas id gravida.</p>
                                    <div className="audio-players">
                                        <div className="audio-controls">
                                            <div className="audio-buttons">
                                                <button className='cls' onClick={handleSeekBackward}>
                                                    <FontAwesomeIcon icon={faArrowRotateLeft} />
                                                </button>
                                                <button className='cls' onClick={handlePlayPause}>
                                                    {isPlaying ? (
                                                        <FontAwesomeIcon icon={faPause} />
                                                    ) : (
                                                        <FontAwesomeIcon icon={faPlay} />
                                                    )}
                                                </button>
                                                <button className='cls' onClick={handleSeekForward}>
                                                    <FontAwesomeIcon icon={faArrowRotateRight} />
                                                </button>
                                                <button className='cls' onClick={handleStop}>
                                                    <FontAwesomeIcon icon={faStop} />
                                                </button>
                                            </div>
                                            <div className="audio-progress">
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="100"
                                                    value={(currentTime / duration) * 100 || 0}
                                                    onChange={handleSeek}
                                                />
                                            </div>
                                            <div className="audio-time">
                                                {formatTime(currentTime)} / {formatTime(duration)}
                                            </div>
                                        </div>
                                        <audio ref={audioRef} src={audioUrl}></audio>
                                    </div>
                                    <div className='p-last'>
                                        <p className='publish'> <a className='qw colo'><FontAwesomeIcon icon={faCalendarDays} /></a>Date:&nbsp;01-01-2000</p>
                                        <button className='download-button'>Download</button>
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
        </>
    );
};

export default Audio;
