import "./SideBar_Healtfood.css";
import SideBarCheckBox from "./SideBarCheckBox";
const SideBarHealt = () => {
  const FindNumber = 5;
  const TypeTitle = "ประเภทเมนู";
  const HMakeTitle = "วิธีทำ";
  const TypeList = [
    "อาหารไทย",
    "อาหารเอเชีย",
    "อาหารตะวันตก",
    "เครื่องดื่ม",
    "เบเกอรี่และขนม",
  ];
  const HMakeList = ["ทอด", "ปิ้งย่าง", "ยำ-สลัด", "อบ-ตุ๋น", "ผัด", "ต้ม-แกง"];
  return (
    <div className="SideBar-Container">
      <div className="SideBar-Content">
        <div className="SideBar-Header">
          <p className="SideBar-Header-Title">ค้นหาโดย ({FindNumber})</p>
          <div className="SideBar-Header-SearchBox">
            <input type="text" placeholder="ค้นหา" />
            <button>ค้นหา</button>
          </div>
        </div>
        <SideBarCheckBox title={TypeTitle} list={TypeList} />
        <SideBarCheckBox title={HMakeTitle} list={HMakeList} />
      </div>
    </div>
  );
};
export default SideBarHealt;
