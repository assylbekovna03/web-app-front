import React, { useState } from "react";
import Header from "../header/header.js";
import axios from "axios";
import Audio from "../records/audio.js";
import Player from "../records/playAudio.js";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import "./App.css";
function App() {
  

  return (
    <div className="App">
      <Header />
      <Audio />
    </div>
  );
}
export default App;
