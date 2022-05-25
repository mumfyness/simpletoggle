// App JavaScript
import React , { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Switch from "./Components/Switch";

function App() {
  /* Properties for the Toggle component */
  const [value, setValue] = useState(false);

  return (
    <div className="app">
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
          Explorer react components -> reactjs.org
        </a>
      </header>
      <Switch
          className="App-toggle"
          isOn={value}
          handleToggle={() => setValue(!value)}
          onColor="red" /* "cyan"/"red" */
      />
    </div>
  );
}

export default App;
