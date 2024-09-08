import "./InputBT.css";
const InputBT = ({ text, placeholder, value, onChange }) => {
  // console.log(value, ":", onChange);
  return (
    <div className="Input-Container">
      <label>{text}</label>
      <input placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default InputBT;
