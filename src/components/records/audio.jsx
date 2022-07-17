import React, { useState } from "react";

import AudioReactRecorder, { RecordState } from "audio-react-recorder";

const Audio = () => {
  const [recordState, setRecordState] = useState(null);

  const userAudio = null;

  const Start = () => {
    setRecordState(RecordState.START);
  };

  const Stop = () => {
    setRecordState(RecordState.STOP);
  };

  const onStop = (audioData) => {
    console.log("audioData", audioData);
    userAudio = audioData;
  };

  const sendAudio = async () => {
    const rate = form.rate;
    const message = form.message;

    const isFinished = false;
    const response = await axios.post("/postAudio", {
      rate: rate,
      message: message,
      audio: userAudio,
    });
    if (response.status === 200) {
      isFinished = true;
    }
  };

  return (
    <div>
      <AudioReactRecorder state={recordState} onStop={onStop} />

      <button onClick={Start}>Start</button>
      <button onClick={Stop}>Stop</button>
      <button onClick={sendAudio}>Save</button>
    </div>
  );
};

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       recordState: null,
//     };
//   }

//   start = () => {
//     this.setState({
//       recordState: RecordState.START,
//     });
//   };

//   stop = () => {
//     this.setState({
//       recordState: RecordState.STOP,
//     });
//   };

//   //audioData contains blob and blobUrl
//   onStop = (audioData) => {
//     console.log("audioData", audioData);
//   };

//   render() {
//     const { recordState } = this.state;

//     return (
//       <div>
//         <AudioReactRecorder state={recordState} onStop={this.onStop} />

//         <button onClick={this.start}>Start</button>
//         <button onClick={this.stop}>Stop</button>
//       </div>
//     );
//   }
// }

export default Audio;
