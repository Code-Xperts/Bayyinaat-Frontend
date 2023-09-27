const AudioPlayer = () => {
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
    audioRef.current.currentTime -= 5; // Adjust the seek duration as needed
  };

  const handleSeekForward = () => {
    audioRef.current.currentTime += 5; // Adjust the seek duration as needed
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

  return (
    <div className="audio-player">
      <div className="audio-controls">
        <div className="audio-buttons">
          <button onClick={handleSeekBackward}>
            <FontAwesomeIcon icon={faArrowRotateLeft} />
          </button>
          <button onClick={handlePlayPause}>
            {isPlaying ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <button onClick={handleSeekForward}>
            <FontAwesomeIcon icon={faArrowRotateRight} />
          </button>
          <button onClick={handleStop}>
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
  );
};

export default AudioPlayer;
