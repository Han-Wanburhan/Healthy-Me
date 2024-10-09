import "./InputBT.css";

interface InputBTProps {
  text: string;
  placeholder: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputBT: React.FC<InputBTProps> = ({
  text,
  placeholder,
  value,
  onChange,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (value === 0 && newValue === "") {
      onChange({
        target: { value: "0" },
      } as React.ChangeEvent<HTMLInputElement>);
      return;
    }

    if (newValue === "") {
      onChange({
        target: { value: "0" },
      } as React.ChangeEvent<HTMLInputElement>);
      return;
    }
    onChange(e);
  };
  return (
    <div className="Input-Container">
      <label>{text}</label>
      <input
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputBT;
