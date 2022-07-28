import "./login.css";
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [sign, setSign] = useState({
    nickname: "",
    password: "",
  });

  const handleToChange = ({ target: input }) => {
    setSign({
      ...sign,
      [input.name]: input.value,
    });
  };

  const handleLogin = async (e) => {
    localStorage.setItem("userlogined", sign.nickname);
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/signin";
      const { sign: res } = await axios.post(url, sign, {
        body: JSON.stringify(localStorage.getItem("userlogined")),
      });
      setSign({
        nickname: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    window.localStorage.clear();
    try {
      const url = "http://localhost:8080/api/signout";
      const { sign: res } = await axios.post(url, sign);
      // console.log(res.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleLogin}>
        <div className="input-group">
          <input
            name="nickname"
            placeholder="nickname"
            value={sign.nickname}
            onChange={handleToChange}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="password"
            value={sign.password}
            onChange={handleToChange}
          />
        </div>
        <button className="primary">Sign In</button>
      </form>

      <button className="signout" onSubmit={handleSignOut}>
        Sign Out
      </button>
    </>
  );
};

export default Login;
