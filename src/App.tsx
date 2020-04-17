import React from 'react';
import './App.css';
import { AtlassianConnect } from "./types/jira-cloud-api";

declare const AP: AtlassianConnect;

function App() {
  function getApObject() {
    console.log(AP);
  }

  return (
    <div className="App">
        <h1>JIRA ts test app</h1>
        <button onClick={getApObject}>Log AP object</button>
    </div>
  );
}

export default App;
