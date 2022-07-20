import React, { useState } from "react";
import axios from "axios";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import Player from "./playAudio.js";
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
  // const sendAudioFile = (file) => {
  //   const formData = new FormData();
  //   formData.append("audio-file", file);
  //   return axios(audioURL, {
  //     method: "POST",
  //     body: formData,
  //   });
  // };

  // let xhr = new XMLHttpRequest();
  // xhr.open("GET", data.audio_url, true);
  // xhr.responseType = "blob";
  // xhr.onload = function(e) {
  //   if (this.status == 200) {
  //     var myBlob = this.response;
  //     console.log(myBlob);
  //   }
  // };
  // xhr.send();

  // console.log(xhr);

  // const blob = new Blob([data], { type: "octet-stream" });

  // const href = URL.createObjectURL(blob);

  const handleChange = ({ target: input }) => {
    setData({
      ...data,
      [input.name]: input.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/saveAudio";
      const { data: res } = await axios.post(url, data);
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
