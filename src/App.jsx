import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Results from "./components/Results";
import { getSongs } from "./utils/apiCalls";

function App() {
  const [songs, setSongs] = useState([]);

  // async function searchSongs(){
  // }

  const searchSongs = async (queryTxt) => {
    // const array = await getSongs();
    // setSongs(array)
    setSongs(await getSongs(queryTxt));
  };

  // await searchSongs()
  // searchSongs.then(d => {})

  return (
    <>
      <Header searchSongs={searchSongs} />
      <Results songs={songs} />
    </>
  );
}

export default App;
