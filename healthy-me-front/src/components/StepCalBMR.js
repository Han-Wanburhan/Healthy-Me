import "./StepCalBMR.css";
import RadioBT from "./RadioBT";
import InputBT from "./InputBT";
import Cal_BT from "./Cal-BT";
import DisplayCal from "./๋DisplayCal";

const StepCalBMR = ({
  bmr_cal,
  weight,
  height,
  age,
  setBmr_cal,
  setWeight,
  setHeight,
  setAge,
  selected,
  handleSelectGender,
  calculateBMR,
}) => {
  const handleInputChange = (e, type) => {
    const value = parseFloat(e.target.value);
    if (type === "weight") {
      setWeight(value);
    } else if (type === "height") {
      setHeight(value);
    } else if (type === "age") {
      setAge(value);
    }
  };

  return (
    <div className="StepOne-Cal-BMR">
      <div className="StepOne-Cal-BMR-Header">
        <p>Step 1 : คำนวณค่า BMR</p>
        <p>
          (Basal Metabolic Rate) คือ
          อัตราความต้องการเผาผลาญของร่างกายในชีวิตประจำวัน
          หรือจำนวนแคลอรี่ขั้นต่ำที่ต้องการใช้ในชีวิตแต่ละวัน
        </p>
      </div>
      <div className="StepOne-Cal-BMR-Container">
        <div className="StepOne-Cal-BMR-Content">
          <div className="StepOne-Cal-BMR-Content-Header">
            <p>เพศ</p>
            <RadioBT
              selected={selected}
              handleSelectGender={handleSelectGender}
            />
            <div className="StepOne-Cal-BMR-Content-Input">
              <InputBT
                text={"น้ำหนัก (kg.)"}
                type={"number"}
                value={weight}
                onChange={(e) => handleInputChange(e, "weight")}
              />
              <InputBT
                text={"ส่วนสูง (cm.)"}
                type={"number"}
                value={height}
                onChange={(e) => handleInputChange(e, "height")}
              />
              <InputBT
                text={"อายุ (ปี)"}
                type={"number"}
                value={age}
                onChange={(e) => handleInputChange(e, "age")}
              />
              <Cal_BT Text={"คำนวน"} calculateBMR={calculateBMR} />
              <DisplayCal Header={"BMR (Kcal)"} CalNum={bmr_cal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCalBMR;
