import "./StepCalBMR.css";
import RadioBT from "./RadioBT";
import InputBT from "./InputBT";
import Cal_BT from "./Cal-BT";
import DisplayCal from "./๋DisplayCal";

interface StepCalBMRProps {
  bmr_cal: number;
  weight: number;
  height: number;
  age: number;
  selected: string | null;
  setBmr_cal: React.Dispatch<React.SetStateAction<number>>;
  setWeight: React.Dispatch<React.SetStateAction<number>>;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
  setAge: React.Dispatch<React.SetStateAction<number>>;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
  handleSelectGender: (value: string) => void;
  calculateBMR: () => void;
}

const StepCalBMR: React.FC<StepCalBMRProps> = ({
  bmr_cal,
  weight,
  height,
  age,
  selected,
  setBmr_cal,
  setWeight,
  setHeight,
  setAge,
  setSelected,
  handleSelectGender,
  calculateBMR,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
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
    <div className="Step-Cal">
      <div className="Step-Cal-Header">
        <p>Step 1 : คำนวณค่า BMR</p>
        <p>
          (Basal Metabolic Rate) คือ
          อัตราความต้องการเผาผลาญของร่างกายในชีวิตประจำวัน
          หรือจำนวนแคลอรี่ขั้นต่ำที่ต้องการใช้ในชีวิตแต่ละวัน
        </p>
      </div>
      <div className="Step-Cal-Container">
        <div className="Step-Cal-Content">
          <div className="Step-Cal-Content-Header">
            <p>เพศ</p>
            <RadioBT
              selected={selected}
              handleSelectGender={handleSelectGender}
            />
            <div className="Step-Cal-Content-Input">
              <InputBT
                text={"น้ำหนัก (kg.)"}
                placeholder={"number"}
                value={weight}
                onChange={(e) => handleInputChange(e, "weight")}
              />
              <InputBT
                text={"ส่วนสูง (cm.)"}
                placeholder={"number"}
                value={height}
                onChange={(e) => handleInputChange(e, "height")}
              />
              <InputBT
                text={"อายุ (ปี)"}
                placeholder={"number"}
                value={age}
                onChange={(e) => handleInputChange(e, "age")}
              />
              <Cal_BT Text={"คำนวน"} calculate={calculateBMR} />
              <DisplayCal Header={"BMR (Kcal)"} CalNum={bmr_cal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCalBMR;
