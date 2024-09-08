import { useState } from "react";
import "./RadioBT.css";
import { MenImage, WomenImage } from "../general/general";
const RadioBT = ({ selected, handleSelectGender }) => {
  return (
    <div className="StepOne-Cal-BMR-Content-Radio">
      <div className="StepOne-Cal-BMR-Content-Radio-Setter">
        <label>
          <input
            type="radio"
            name="option"
            value="men"
            checked={selected === "men"}
            onChange={() => handleSelectGender("men")}
            style={{ display: "none" }}
          />
          <div
            className="menorwomen"
            alt="Option 1"
            style={{
              backgroundColor: "#A7C2F5",
              border: selected === "men" ? "2px solid blue" : "none",
              cursor: "pointer",
            }}
            onClick={() => handleSelectGender("men")}
          >
            <img className="imageradio" src={MenImage} />
            <p>Male</p>
          </div>
        </label>

        <label>
          <input
            type="radio"
            name="option"
            value="women"
            checked={selected === "women"}
            onChange={() => handleSelectGender("women")}
            style={{ display: "none" }}
          />
          <div
            className="menorwomen"
            alt="Option 2"
            style={{
              backgroundColor: "#E7CAFA",
              border: selected === "women" ? "2px solid blue" : "none",
              cursor: "pointer",
            }}
            onClick={() => handleSelectGender("women")}
          >
            <img className="imageradio" src={WomenImage} />
            <p>Female</p>
          </div>
        </label>
      </div>
    </div>
  );
};

export default RadioBT;
