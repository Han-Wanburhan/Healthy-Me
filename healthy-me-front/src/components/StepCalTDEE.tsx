import RadioNormInput from "./RadioNormInput";
import Cal_BT from "./Cal-BT";
import DisplayCal from "./๋DisplayCal";
import React from "react";

interface StepCalTDEEProps {
  handleSelectOption: (e: React.ChangeEvent<HTMLInputElement>) => void; // Changed to HTMLInputElement
  calculateTDEE: () => void;
  tdee_cal: number;
}

const StepCalTDEE: React.FC<StepCalTDEEProps> = ({
  handleSelectOption,
  calculateTDEE,
  tdee_cal,
}) => {
  return (
    <div className="Step-Cal">
      <div className="Step-Cal-Header">
        <p>Step 2 : คำนวณค่า TDEE</p>
        <p>
          (Total Daily Energy Expenditure)
          คือการใช้พลังงานในแต่ละวันเผาผลาญตลอดทั้งวันพิจารณาจากน้ำหนัก ส่วนสูง
          อายุ และระดับกิจกรรมของคุณ
        </p>
      </div>
      <div className="Step-Cal-Container">
        <div className="Step-Cal-Content">
          <div className="Step-Cal-Content-Header">
            <p>เลือกกิจกรรม</p>
            <div className="Step-Cal-Content-Choice">
              <RadioNormInput
                forop={"option1"}
                label={"นั่งทำงานอยู่กับที่ และไม่ได้ออกกำลังกายเลย"}
                value={"option1"}
                onChange={handleSelectOption} // No wrapping needed
              />
              <RadioNormInput
                forop={"option2"}
                label={
                  "ออกกำลังกายหรือเล่นกีฬาเล็กน้อย ประมาณอาทิตย์ละ 1-3 วัน"
                }
                value={"option2"}
                onChange={handleSelectOption}
              />
              <RadioNormInput
                forop={"option3"}
                label={"ออกกำลังกายหรือเล่นกีฬาปานกลาง ประมาณอาทิตย์ละ 3-5 วัน"}
                value={"option3"}
                onChange={handleSelectOption}
              />
              <RadioNormInput
                forop={"option4"}
                label={
                  "ออกกำลังกายหรือเล่นกีฬาอย่างหนัก ประมาณอาทิตย์ละ 6-7 วัน"
                }
                value={"option4"}
                onChange={handleSelectOption}
              />
              <RadioNormInput
                forop={"option5"}
                label={"ออกกำลังกายหรือเล่นกีฬาอย่างหนักมาก ทุกวันเช้า และเย็น"}
                value={"option5"}
                onChange={handleSelectOption}
              />
            </div>
            <Cal_BT Text={"คำนวน"} calculate={calculateTDEE} />
            <DisplayCal Header={"TDEE (Kcal)"} CalNum={tdee_cal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCalTDEE;
