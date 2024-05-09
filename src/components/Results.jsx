import React from "react";
import SingleSong from "./SingleSong";

const Results = ({ songs, getLyricsText }) => {
  return (
    <>
      <div className="wrapper">
        <ul className="songs">
          {songs.map((song) => {
            return (
              <SingleSong
                key={song.id}
                getLyricsText={getLyricsText}
                song={song}
              />
            );
          })}
        </ul>
      </div>

      <div className="wrapper centered"></div>
    </>
  );
};

export default Results;
