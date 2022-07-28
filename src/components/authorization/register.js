import React, { useState } from "react";
import axios from "axios";
const Register = () => {
  const [data, setData] = useState({
    nickname: "",
    name: "",
    email: "",
    password: "",
  });

  const handlChange = ({ target: input }) => {
    setData({
      ...data,
      [input.name]: input.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(data.nickname));
    try {
      const url = "http://localhost:8080/api/signup";
      const res = await axios.post(url, data, {
        body: JSON.stringify(localStorage.getItem("user")),
      });
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

  return (
    <>
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
    </>
  );
};

export default Register;
