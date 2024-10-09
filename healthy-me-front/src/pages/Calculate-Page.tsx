import "./Calculate-Page.css";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import StepCalBMR from "../components/StepCalBMR";
import StepCalTDEE from "../components/StepCalTDEE";
import StepCalTarget from "../components/StepCalTarget";
import { useState } from "react";
const CalculatePage = () => {
  const [bmr_cal, setBmr_cal] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [option, setOption] = useState<string | null>(null);
  const [tdee_cal, setTdee_cal] = useState(0);
  const [target, setTarget] = useState(0);
  const [day, setDay] = useState(0);
  const [finalcal_target, setFinalcal_target] = useState(0);

  const handleSelectGender = (value: string) => {
    setSelected(value);
  };

  const handleSelectOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value);
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

  const calculateTDEE = () => {
    if (option === null) {
      alert("กรุณาเลือกระดับกิจกรรม");
    } else if (option === "option1") {
      setTdee_cal(Math.round(bmr_cal * 1.2));
    } else if (option === "option2") {
      setTdee_cal(Math.round(bmr_cal * 1.375));
    } else if (option === "option3") {
      setTdee_cal(Math.round(bmr_cal * 1.55));
    } else if (option === "option4") {
      setTdee_cal(Math.round(bmr_cal * 1.725));
    } else if (option === "option5") {
      setTdee_cal(Math.round(bmr_cal * 1.9));
    }
  };

  const calculate_target_day = () => {
    const find_lost_weight = weight - target;
    const lost_weight_per_day = (find_lost_weight / day) * 7700;
    setFinalcal_target(Math.round(tdee_cal - lost_weight_per_day));
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
          <StepCalTDEE
            handleSelectOption={handleSelectOption}
            calculateTDEE={calculateTDEE}
            tdee_cal={tdee_cal}
          />
          <StepCalTarget
            target={target}
            day={day}
            setTarget={setTarget}
            setDay={setDay}
            calculate_target_day={calculate_target_day}
            finalcal_target={finalcal_target}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CalculatePage;
