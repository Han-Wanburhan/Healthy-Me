import "./RadioNormInput.css";
const RadioNormInput = ({ forop, label, value, onChange }) => {
  return (
    <div className="RadioNormInput-Content">
      <label for={forop}>{label}</label>
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
