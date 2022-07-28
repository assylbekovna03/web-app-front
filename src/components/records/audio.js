import React, { useState } from "react";
import axios from "axios";
// import { useParams } from "react-router";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import Player from "./playAudio.js";
// import music from "./music.mp3";
const Audio = () => {
  const [recordState, setRecordState] = useState(null);
  const [data, setData] = useState({
    audio_url: "",
    rate: 0,
    message: "",
  });

  const Start = () => {
    setRecordState(RecordState.START);
  };

  const Stop = () => {
    setRecordState(RecordState.STOP);
  };

  const onStop = (audioData) => {
    console.log("audioData", audioData.url);

    setData(({ audio_url }) => {
      return {
        ...data,
        audio_url: audioData.url,
      };
    });
    // userAudio = audioData;
  };
  const handleChange = ({ target: input }) => {
    setData({
      ...data,
      [input.name]: input.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/saveAudio/62e2deb83bc880af4b29a0b0";
      const { data } = await axios.post(url, data);
      // console.log(res.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Player url={data.audio_url} />
      <AudioReactRecorder state={recordState} onStop={onStop} />

      <button onClick={Start}>Start</button>
      <button onClick={Stop}>Stop</button>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <input
          type="number"
          value={data.rate}
          name="rate"
          onChange={handleChange}
        />
        <input
          type="text"
          value={data.message}
          name="message"
          placeholder="Description"
          onChange={handleChange}
        />
        <input type="hidden" value={data.audio_url} name="audio_url" />
        <button type="submit">
          {/* onClick={sendAudioFile}  */}
          Save
        </button>
      </form>
    </div>
  );
};
export default Audio;
