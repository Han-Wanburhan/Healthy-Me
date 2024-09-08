import "./Calculate-Page.css";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import StepCalBMR from "../components/StepCalBMR";
import { useState, useEffect } from "react";
const CalculatePage = () => {
  const [bmr_cal, setBmr_cal] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleSelectGender = (value) => {
    setSelected(value);
  };

  const calculateBMR = () => {
    if (selected === null) {
      alert("กรุณาเลือกเพศ");
      return;
    } else if (selected === "men") {
      setBmr_cal(
        Math.round(88.362 + 13.397 * weight + 4.799 * height - 5.677 * age)
      );
    } else if (selected === "women") {
      setBmr_cal(
        Math.round(447.593 + 9.247 * weight + 3.098 * height - 4.33 * age)
      );
    }
  };
  return (
    <div>
      <Navbar />
      <div className="Calculate-Page-Container">
        <div className="Calculate-Page-Content">
          <div className="Calculate-Page-Header">
            <p>โปรแกรมคำนวนแคลลอรี่ที่ควรได้รับต่อวัน</p>
          </div>
          <StepCalBMR
            bmr_cal={bmr_cal}
            weight={weight}
            height={height}
            age={age}
            selected={selected}
            setBmr_cal={setBmr_cal}
            setWeight={setWeight}
            setHeight={setHeight}
            setAge={setAge}
            setSelected={setSelected}
            handleSelectGender={handleSelectGender}
            calculateBMR={calculateBMR}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CalculatePage;
