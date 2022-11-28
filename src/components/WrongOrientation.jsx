import React from "react";
import Desktop from "../assets/img/computer.png";

const WrongOrientation = () => {
  return (
    <div className="wrongsens">
      <h1>Website Only for Desktop</h1>
      <div className="picturewrong">
        <img src={Desktop} alt="ordinateur" />
      </div>
    </div>
  );
};

export default WrongOrientation;
