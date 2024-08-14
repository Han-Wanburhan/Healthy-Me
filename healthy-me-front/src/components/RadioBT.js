import { useState } from "react";
import "./RadioBT.css";
const RadioBT = ({ name, value, label, onChange, checked }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (value) => {
    setSelected(value);
  };
  return (
    <div className="StepOne-Cal-BMR-Content-Radio">
      <label>
        <input
          type="radio"
          name="option"
          value="option1"
          checked={selected === "option1"}
          onChange={() => handleSelect("option1")}
          style={{ display: "none" }} // Hide default radio button
        />
        <img
          src="https://via.placeholder.com/100"
          alt="Option 1"
          style={{
            border: selected === "option1" ? "5px solid blue" : "none",
            cursor: "pointer",
          }}
          onClick={() => handleSelect("option1")}
        />
      </label>

      <label>
        <input
          type="radio"
          name="option"
          value="option2"
          checked={selected === "option2"}
          onChange={() => handleSelect("option2")}
          style={{ display: "none" }} // Hide default radio button
        />
        <img
          src="https://via.placeholder.com/100"
          alt="Option 2"
          style={{
            border: selected === "option2" ? "5px solid blue" : "none",
            cursor: "pointer",
          }}
          onClick={() => handleSelect("option2")}
        />
      </label>
    </div>
  );
};

export default RadioBT;
