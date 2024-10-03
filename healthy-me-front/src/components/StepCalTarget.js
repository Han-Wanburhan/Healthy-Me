import InputBT from "./InputBT";
import Cal_BT from "./Cal-BT";
import DisplayCal from "./๋DisplayCal";
const StepCalTarget = ({
  target,
  day,
  setTarget,
  setDay,
  calculate_target_day,
  finalcal_target,
}) => {
  const handleInputChange = (e, type) => {
    const value = parseFloat(e.target.value);
    if (type === "target") {
      setTarget(value);
    } else if (type === "day") {
      setDay(value);
    }
  };
  return (
    <div className="Step-Cal">
      <div className="Step-Cal-Header">
        <p>Step 3 : เป้าหมายลดน้ำหนัก</p>
        <p>
          เมื่อได้ค่า BMR และค่า TDEE แล้วจะรู้ได้ว่าในแต่ละวันควรได้รับพลังงาน
          และออกกำลังกายอย่างเหมาะสม น้ำหนักควรลงที่ 1.8 - 3.6 กก./เดือน
        </p>
      </div>
      <div className="Step-Cal-Container">
        <div className="Step-Cal-Content">
          <div className="Step-Cal-Content-Header">
            <InputBT
              text={"เป้าหมาย : น้ำหนักที่ต้องการ"}
              type={"number"}
              value={target}
              onChange={(e) => handleInputChange(e, "target")}
            />
            <InputBT
              text={"จำนวนวัน"}
              type={"number"}
              //   value={day}
              onChange={(e) => handleInputChange(e, "day")}
            />

            <Cal_BT Text={"คำนวน"} calculate={calculate_target_day} />
            <DisplayCal Header={"TDEE (Kcal)"} CalNum={finalcal_target} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default StepCalTarget;
