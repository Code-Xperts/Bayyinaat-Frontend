import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStop, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Footer, Header, TopHeader } from "../../components";

const Queries = ({ onSearch }) => {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with data:", formData);
  };

  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState(null);
  const mediaRecorderRef = useRef(null);

  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };
  const mimeType = "audio";
  const startRecording = async () => {
    setRecordingStatus("recording");
    const media = new MediaRecorder(stream, { type: mimeType });
    mediaRecorderRef.current = media; // Set the ref here
    mediaRecorderRef.current.start();
    let localAudioChunks = [];
    mediaRecorderRef.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };

  const stopRecording = () => {
    setRecordingStatus("inactive");
    mediaRecorderRef.current.stop();
    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
      setAudioChunks([]);
    };
  };

  return (
    <>
      <TopHeader />
      <Header />
      <div className="container">
        <section>
          <div className="conatiner searc">
            <div className="search-bar quer-search">
              <input
                type="se"
                placeholder={t("search")}
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
            <div className="col-cont-main qurie">
              <div className="answer-queries">
                <h2 className="queri-heading">Questions / Answers</h2>
                <div className="tiles-main-block">
                  <div className="tiles-sub-block">
                    <div className="major-tiles">
                      <Link to="/answer" className="titit">
                        <h2 className="">Answers Title</h2>
                      </Link>
                      <span className="ss-tiles">08-11-2023</span>
                    </div>
                  </div>
                  <div className="tiles-sub-block">
                    <div className="major-tiles">
                      <Link to="/answer" className="titit">
                        <h2 className="">Answers Title</h2>
                      </Link>
                      <span className="ss-tiles">08-11-2023</span>
                    </div>
                  </div>
                  <div className="tiles-sub-block">
                    <div className="major-tiles">
                      <Link to="/answer" className="titit">
                        <h2 className="">Answers Title</h2>
                      </Link>
                      <span className="ss-tiles">08-11-2023</span>
                    </div>
                  </div>
                  <div className="tiles-sub-block">
                    <div className="major-tiles">
                      <Link to="/answer" className="titit">
                        <h2 className="">Answers Title</h2>
                      </Link>
                      <span className="ss-tiles">08-11-2023</span>
                    </div>
                  </div>
                  <div className="tiles-sub-block">
                    <div className="major-tiles">
                      <Link to="/answer" className="titit">
                        <h2 className="">Answers Title</h2>
                      </Link>
                      <span className="ss-tiles">08-11-2023</span>
                    </div>
                  </div>
                  <div className="tiles-sub-block">
                    <div className="major-tiles">
                      <Link to="/answer" className="titit">
                        <h2 className="">Answers Title</h2>
                      </Link>
                      <span className="ss-tiles">08-11-2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-right main-right main-right-q">
              <div className="audio-player qure-form">
                <h2 className="quer-form">Ask Questions</h2>
                <div className="ask-form">
                  <form className="hi" onSubmit={handleSubmit}>
                    <div className="mmmm">
                      <div className="i">
                        <input
                          className="llll"
                          type="text"
                          placeholder={t("name")}
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="i">
                        <input
                          className="llll"
                          type="email"
                          placeholder={t("email")}
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="i">
                      <input
                        className="llll"
                        placeholder={t("enteryourphoneno")}
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="i">
                      <textarea
                        className="llll  new-ll"
                        placeholder={t("message")}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <div className="audio-controls lo-g">
                      {!permission ? (
                        <button onClick={getMicrophonePermission} type="button">
                          Voice Message
                        </button>
                      ) : null}
                      {permission && recordingStatus === "inactive" ? (
                        <button onClick={startRecording} type="button">
                          <FontAwesomeIcon icon={faMicrophone} />
                        </button>
                      ) : null}
                      {recordingStatus === "recording" ? (
                        <button onClick={stopRecording} type="button">
                          <FontAwesomeIcon icon={faStop} />
                        </button>
                      ) : null}
                      {audio ? (
                        <div className="audio-container">
                          <audio src={audio} controls></audio>
                        </div>
                      ) : null}
                    </div>
                    <div className="i">
                      <button className="ccnn" type="submit">
                        {t("submit")}
                      </button>
                    </div>
                  </form>
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

export default Queries;
