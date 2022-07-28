import React from "react";
import "./modal.css";
import close from "../assets/close.svg";

const ModalLogin = ({ children, open, isClose }) => {
  if (!open) {
    return null;
  }
  return (
    <div class="modal">
      <div class="modal-wrapper">
        <div class="modal-wrapper-content">
          {children}
          <button class="btn-close" onClick={isClose}>
            <img src={close} alt="close" />
          </button>
        </div>
        {/* <div class="modal-wrapper-content">
          {children}
          <button class="btn-close" onClick={isClose}>
            <img src={close} alt="close" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

const ModalRegister = ({ children, open, isClose }) => {
  if (!open) {
    return null;
  }
  return (
    <div class="modal">
      <div class="modal-wrapper">
        <div class="modal-wrapper-content">
          {children}{" "}
          <button class="btn-close" onClick={isClose}>
            <img src={close} alt="close" />
          </button>
        </div>
      </div>
    </div>
  );
};
export { ModalLogin, ModalRegister };
