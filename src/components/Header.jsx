import React, { useState } from "react";

const Header = ({ searchSongs }) => {
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;

    setInputVal(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (inputVal.trim() !== "") {
      await searchSongs(inputVal);
    } else {
      alert("Please enter a text!");
    }
  };

  return (
    <header>
      <h1>Music Lyrics Search</h1>

      <form onSubmit={handleFormSubmit}>
        <input
          value={inputVal}
          onChange={handleInputChange}
          type="text"
          placeholder="Enter artist or song name..."
        />
        <button>Search</button>
      </form>
    </header>
  );
};

export default Header;
