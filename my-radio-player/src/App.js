import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    // לאחר טעינת הקומפוננטה, הפעל את הנגן
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error("Autoplay failed: ", err);
      });
    }
  }, []);

  return (
    <div style={{ 
      textAlign: 'center', 
      marginTop: '50px',
      padding: '20px',
      maxWidth: '600px',
      margin: '50px auto',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }}>
      <img 
        src={logo} 
        alt="102FM Logo" 
        style={{
          width: '200px',
          marginBottom: '20px'
        }}
      />
      <h1 style={{
        color: '#E31E24',
        fontSize: '24px',
        marginBottom: '20px'
      }}>102fm-radio-player</h1>
      <audio
        ref={audioRef}
        controls
        src="https://102.livecdn.biz/102fm_aac"
        type="audio/aac"
        style={{
          width: '100%',
          maxWidth: '400px'
        }}
      >
        הדפדפן שלך לא תומך בנגן האודיו.
      </audio>
    </div>
  );
}

export default App;