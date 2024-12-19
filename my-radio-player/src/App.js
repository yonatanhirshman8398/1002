import React, { useEffect, useRef } from 'react';

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
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Radio Player</h1>
      <audio
        ref={audioRef}
        controls
        src="https://102.livecdn.biz/102fm_aac"
        type="audio/aac"
      >
        הדפדפן שלך לא תומך בנגן האודיו.
      </audio>
    </div>
  );
}

export default App;
