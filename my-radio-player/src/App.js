import React, { useRef, useState } from 'react';
import logo from './logo.svg';

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const streamUrl = "https://102.livecdn.biz/102fm_aac";

  const handlePlay = () => {
    if (audioRef.current) {
      if (!audioRef.current.src) {
        audioRef.current.src = streamUrl; // הגדרת מקור האודיו רק אם הוא ריק
      }
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Failed to play:", err));
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // עוצר את הניגון
      setIsPlaying(false);
    }
  };

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        padding: '20px',
        maxWidth: '600px',
        margin: '50px auto',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <img
        src={logo}
        alt="102FM Logo"
        style={{
          width: '200px',
          marginBottom: '20px',
        }}
      />
      <h1
        style={{
          color: '#E31E24',
          fontSize: '24px',
          marginBottom: '20px',
        }}
      >
        102fm-radio-player
      </h1>
      <button
        onClick={isPlaying ? handlePause : handlePlay}
        style={{
          padding: '10px 20px',
          backgroundColor: isPlaying ? '#E31E24' : '#1DB954',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        {isPlaying ? 'עצור' : 'נגן'}
      </button>
      <audio
        ref={audioRef}
        preload="none"
        style={{ display: 'none' }}
      />
    </div>
  );
}

export default App;
