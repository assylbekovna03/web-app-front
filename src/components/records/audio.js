import React, { useState } from "react";
import axios from "axios";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";

const Audio = () => {
  const [recordState, setRecordState] = useState(null);
  const [audioURL, setAudioURL] = useState("");

  const userAudio = null;

  const Start = () => {
    setRecordState(RecordState.START);
  };

  const Stop = () => {
    setRecordState(RecordState.STOP);
  };

  const onStop = (audioData) => {
    console.log("audioData", audioData.url);
    setAudioURL(audioData.url);
    // userAudio = audioData;
  };

  // const sendAudio = async () => {
  //   const rate = form.rate;
  //   const message = form.message;

  //   const isFinished = false;
  //   const response = await axios.post("/postAudio", {
  //     rate: rate,
  //     message: message,
  //     audio: userAudio,
  //   });
  //   if (response.status === 200) {
  //     isFinished = true;
  //   }
  // };

  return (
    <div>
      <AudioReactRecorder state={recordState} onStop={onStop} />

      <button onClick={Start}>Start</button>
      <button onClick={Stop}>Stop</button>
      <form action="http://localhost:8080/saveAudio" method="POST">
        <input type="number" name="rate" />
        <input type="text" name="message" />
        <input type="hidden" value={audioURL} name="audio_url" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
export default Audio;
