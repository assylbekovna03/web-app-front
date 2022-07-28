import React, { useState } from "react";
import "./header.css";
import Login from "../authorization/login";
import Register from "../authorization/register";
import { ModalLogin, ModalRegister } from "../modal/modal";

const Header = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <div>
      <header className="header">
        <div className="header-wrapper">
          <nav className="header-wrapper-nav nav">
            <a className="nav-links" href="#">
              Days
            </a>
            <a className="nav-links" href="#">
              Weeks
            </a>
          </nav>
          <div className="header-wrapper-auth">
            <button className="btn-login" onClick={() => setLogin(true)}>
              Sign In
            </button>
            <button className="btn-register" onClick={() => setRegister(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </header>
      <ModalLogin open={login} isClose={() => setLogin(false)}>
        <Login />
      </ModalLogin>
      <ModalRegister open={register} isClose={() => setRegister(false)}>
        <Register />
      </ModalRegister>
    </div>
  );
};

export default Header;
