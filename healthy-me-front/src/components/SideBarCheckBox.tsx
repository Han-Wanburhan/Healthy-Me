import "./SideBarCheckBox.css";
import React, { useState, useEffect } from "react";
interface SideBarCheckBoxProps {
  title: string;
  list: string[];
}
const SideBarCheckBox: React.FC<SideBarCheckBoxProps> = ({ title, list }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelected((prevSelected) => [...prevSelected, value]);
      console.log(`Selected: ${value}`);
    } else {
      setSelected((prevSelected) =>
        prevSelected.filter((item) => item !== value)
      );
      console.log(`Unselected: ${value}`);
    }
  };
  useEffect(() => {
    {
      console.log(`Selected: ${selected}`);
    }
  }, [selected]);
  return (
    <div className="SideBar-SType">
      <p className="SideBar-Title">{title}</p>
      {list.map((item, index) => (
        <div className="Rap-Col" key={index}>
          <input
            type="checkbox"
            id={item}
            name={item}
            value={item}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={item}>{item}</label>
        </div>
      ))}
    </div>
  );
};
export default SideBarCheckBox;
