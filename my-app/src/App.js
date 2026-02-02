import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// src/App.js
import React from "react";
import Main from "./main";  // <-- path is relative to App.js

function App() {
  return (
    <div className="App">
      <Main />  {/* <-- use your JSX component */}
    </div>
  );
}

export default App;
