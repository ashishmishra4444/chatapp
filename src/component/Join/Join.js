import React from "react";
import "./Join.css";
import logo from "../../images/logo.png";

const Join = () => {
  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={logo} alt="Logo" />
        <h1>C CHAT</h1>
        <input type="text" id="joinInput" />
        <button className="joinbtn">Join</button>
      </div>
    </div>
  );
};

export default Join;
