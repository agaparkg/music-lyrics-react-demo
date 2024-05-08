import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Music Lyrics Search</h1>

        <form>
          <input type="text" placeholder="Enter artist or song name..." />
          <button>Search</button>
        </form>
      </header>

      <div className="container">
        <p>Results will be displayed here</p>
      </div>

      <div className="container centered"></div>
    </>
  );
}

export default App;
