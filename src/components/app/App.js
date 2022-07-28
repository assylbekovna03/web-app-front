import React, { useState } from "react";
import axios from "axios";
import Audio from "../records/audio.js";
import Player from "../records/playAudio.js";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import "./App.css";
function App() {
  const [data, setData] = useState({
    nickname: "",
    name: "",
    email: "",
    password: "",
  });

  const [login, setLogin] = useState({
    nickname: "",
    password: "",
  });

  const handlChange = ({ target: input }) => {
    setData({
      ...data,
      [input.name]: input.value,
    });
  };

  const handleToChange = ({ target: input }) => {
    setLogin({
      ...login,
      [input.name]: input.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/signup";
      const { data: res } = await axios.post(url, data);
      // console.log(res.message);
      setData({
        nickname: "",
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/signin";
      const { login: res } = await axios.post(url, login);
      // console.log(res.message);
      setLogin({
        nickname: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/signout";
      const { login: res } = await axios.post(url, login);
      // console.log(res.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Audio />
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="nickname"
            placeholder="Nickname"
            value={data.nickname}
            onChange={handlChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handlChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handlChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handlChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>

      <form className="form" onSubmit={handleLogin}>
        <div className="input-group">
          <input
            name="nickname"
            placeholder="nickname"
            value={login.nickname}
            onChange={handleToChange}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="password"
            value={login.password}
            onChange={handleToChange}
          />
        </div>
        <button className="primary">Sign In</button>
      </form>

      <button className="signout" onSubmit={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}
export default App;
