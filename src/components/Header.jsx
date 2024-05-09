import React from "react";

const Header = () => {
  return (
    <header>
      <h1>Music Lyrics Search</h1>

      <form>
        <input type="text" placeholder="Enter artist or song name..." />
        <button>Search</button>
      </form>
    </header>
  );
};

export default Header;
