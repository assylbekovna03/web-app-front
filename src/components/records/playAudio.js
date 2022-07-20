import React, { useState, useEffect } from "react";
// import Audio from "./audio.js";

const useAudio = (url) => {
  const blob = new Blob([url], { type: "audio/wav" });
  const blobUrl = URL.createObjectURL(blob);

  const [audio] = useState(new Audio(blobUrl));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

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

  return (
    <div>
      <button
        onClick={() => {
          console.log({ url });
          toggle();
        }}
      >
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default Player;
