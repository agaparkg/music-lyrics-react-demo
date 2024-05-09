import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Results from "./components/Results";
import { getLyrics, getSongs } from "./utils/apiCalls";
import LyricsModal from "./components/LyricsModal";

function App() {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState({});
  const [lyrics, setLyrics] = useState("");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const searchSongs = async (queryTxt) => {
    // const array = await getSongs();
    // setSongs(array)
    setSongs(await getSongs(queryTxt));
  };

  const getLyricsText = async (song) => {
    const {
      artist: { name },
      title,
    } = song;
    const lyricsTxt = await getLyrics(name, title);
    setLyrics(lyricsTxt);
    setSelectedSong(song);
    toggle();
  };

  return (
    <>
      <Header searchSongs={searchSongs} />
      <Results getLyricsText={getLyricsText} songs={songs} />
      {modal && (
        <LyricsModal
          selectedSong={selectedSong}
          modal={modal}
          toggle={toggle}
          lyrics={lyrics}
        />
      )}
    </>
  );
}

export default App;
