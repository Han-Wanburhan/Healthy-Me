import React from "react";
import "./RadioNormInput.css";
interface RadioNormInputProps {
  forop: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const RadioNormInput: React.FC<RadioNormInputProps> = ({
  forop,
  label,
  value,
  onChange,
}) => {
  return (
    <div className="RadioNormInput-Content">
      <label htmlFor={forop}>{label}</label>
      <input
        type="radio"
        id={forop}
        name="options"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default RadioNormInput;
