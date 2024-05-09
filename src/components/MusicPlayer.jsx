import React from "react";

const MusicPlayer = ({ src }) => {
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
