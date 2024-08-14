import "./StepCalBMR.css";
import RadioBT from "./RadioBT";
import InputBT from "./InputBT";
const StepCalBMR = () => {
  return (
    <div className="StepOne-Cal-BMR">
      <div className="StepOne-Cal-BMR-Header">
        <p>Step 1 :คำนวณค่า BMR</p>
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
            <RadioBT />
            <div className="StepOne-Cal-BMR-Content-Input">
              <InputBT />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCalBMR;
