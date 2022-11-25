import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  // React.useEffect(() => {
  //   fetch("http://127.0.0.1:80/")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload..
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yes - Lets Learn CI/CD via Node and React Application hosted on AWS via
          github actions.
        </a>
      </header>
    </div>
  );
}

export default App;
