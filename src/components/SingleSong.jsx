import React from "react";
import { Button } from "reactstrap";
import MusicPlayer from "./MusicPlayer";

const SingleSong = ({ song, getLyricsText }) => {
  const {
    artist: { name },
    title,
    preview,
  } = song;

  return (
    <li>
      <span>
        <strong>{name}</strong> - {title}
      </span>
      <div className="lyrics-player">
        <Button
          onClick={async () => {
            await getLyricsText(song);
          }}
          color="success"
        >
          Get Lyrics
        </Button>
        <MusicPlayer src={preview} />
      </div>
    </li>
  );
};

export default SingleSong;
