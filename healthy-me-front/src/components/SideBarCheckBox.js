import "./SideBarCheckBox.css";
import { useState, useEffect } from "react";
const SideBarCheckBox = ({ title, list }) => {
  const [selected, setSelected] = useState([]);
  const handleCheckboxChange = (event) => {
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
