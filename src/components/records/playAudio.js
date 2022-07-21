import React, { useState, useEffect } from "react";
// import Audio from "./audio.js";

const useAudio = (url) => {
  // const blob = new Blob([url], { type: "audio/wav" });
  // const blobUrl = URL.createObjectURL(blob);

  const audio = new Audio(url);
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying((prevPlaying) => !prevPlaying);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);
  console.log(url);
  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};
// const playPromise = Player.play();

// if (playPromise !== undefined) {
//   playPromise
//     .then((_) => {
//       // Automatic playback started!
//       // Show playing UI.
//       console.log("audio played auto");
//     })
//     .catch((error) => {
//       // Auto-play was prevented
//       // Show paused UI.
//       console.log("playback prevented");
//     });
// }

export default Player;
