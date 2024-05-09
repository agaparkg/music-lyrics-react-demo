import React from "react";

const MusicPlayer = () => {
  const src =
    "http://cdn-preview-c.deezer.com/stream/c-cca63b2c92773d54e61c5b4d17695bd2-8.mp3";
  return (
    <div className="music-player">
      <audio controls>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicPlayer;
