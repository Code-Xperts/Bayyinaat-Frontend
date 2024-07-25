import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStop, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Footer, Header, TopHeader } from "../../components";
import { getAllQuestions, PostQuestion } from "../../constants/apiEndPoints";
import httpRequest from "../../axios/index.js";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Queries = ({ onSearch }) => {
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState(null);
  const [queriesData, setQueriesData] = useState([]);
  const mediaRecorderRef = useRef(null);
  const { t } = useTranslation();
  const [loading, setloading] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const currentLanguage = useSelector((state) => state.languageSlice.currentlanguage);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setloading(true);
      const response = await httpRequest.post(PostQuestion, {...formData,voice_message:audio,lang:currentLanguage?.code});
      if (response.status === 200 || response.status === 201) {
        toast.success(response.data.message);
        setloading(false);
        handleFormEmpty();
      }
    } catch (error) {
      setloading(false);

      toast.error(error.response ? error.response.data : error.message);
    } finally {
      setloading(false);
    }
  };



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
  const handleFormEmpty = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
      phone: "",
      audio: null
    });
  };

  useEffect(()=>{
    const getAllQueries = async()=>{
      try{
        const response = await httpRequest.get(`${getAllQuestions}/${currentLanguage?.code}`)
        if (response.status === 200 || response.status === 201) {
          // console.log("quries res", response.data.data);
          setQueriesData(response.data.data);
          // dispatch(setCompanyInfo(resp?.data?.data));
        }

      }catch(error){
        console.log(error)
      }
    }
  },[])

  const handleQuestionClick = (data) =>{
    navigate(`/answer`, { state: { data: data } });

  }

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
                    {
                       queriesData.length>0 ?  queriesData.map((item,index)=>(
                          <div className="major-tiles">
                      <Link onClick={()=>handleQuestionClick(item)} className="titit">
                        <h2 className="">{item?.question}</h2>
                      </Link>
                      <span className="ss-tiles">{item?.created_at}</span>
                    </div>
                       )) :
                       "No Query Found be the first to query"
                    }
                    
                  </div>
                  {/* <div className="tiles-sub-block">
                    <div className="major-tiles">
                      <Link to="/answer" className="titit">
                        <h2 className="">Answers Title</h2>
                      </Link>
                      <span className="ss-tiles">08-11-2023</span>
                    </div>
                  </div> */}
                  {/* <div className="tiles-sub-block">
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
                  </div> */}
                  {/* <div className="tiles-sub-block">
                    <div className="major-tiles">
                      <Link to="/answer" className="titit">
                        <h2 className="">Answers Title</h2>
                      </Link>
                      <span className="ss-tiles">08-11-2023</span>
                    </div>
                  </div> */}
                  {/* <div className="tiles-sub-block">
                    <div className="major-tiles">
                      <Link to="/answer" className="titit">
                        <h2 className="">Answers Title</h2>
                      </Link>
                      <span className="ss-tiles">08-11-2023</span>
                    </div>
                  </div> */}
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
