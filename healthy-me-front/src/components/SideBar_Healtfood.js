import "./SideBar_Healtfood.css";
const SideBarHealt = () => {
  const FindNumber = 5;
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
        <div className="SideBar-SType">
          <p className="SideBar-Title">ประเภทเมนู</p>
          <div className="Rap-Col">
            <input type="checkbox" id="type1" name="type1" value="type1" />
            <label htmlFor="type1">อาหารไทย</label>
          </div>
          <div className="Rap-Col">
            <input type="checkbox" id="type2" name="type2" value="type2" />
            <label htmlFor="type2">อาหารเอเชีย</label>
          </div>
          <div className="Rap-Col">
            <input type="checkbox" id="type3" name="type3" value="type3" />
            <label htmlFor="type3">อาหารตะวันตก</label>
          </div>
          <div className="Rap-Col">
            <input type="checkbox" id="type4" name="type4" value="type4" />
            <label htmlFor="type4">เครื่องดื่ม</label>
          </div>
          <div className="Rap-Col">
            <input type="checkbox" id="type5" name="type5" value="type5" />
            <label htmlFor="type5">เบเกอรี่และขนม</label>
          </div>
        </div>
        <div className="SideBar-HMake">
          <p className="SideBar-Title">วิธีทำ</p>
          <div className="Rap-Col">
            <input type="checkbox" id="HMake1" name="HMake1" value="HMake1" />
            <label htmlFor="HMake1">ทอด</label>
          </div>
          <div className="Rap-Col">
            <input type="checkbox" id="HMake2" name="HMake2" value="HMake2" />
            <label htmlFor="HMake2">ปิ้งย่าง</label>
          </div>
          <div className="Rap-Col">
            <input type="checkbox" id="HMake3" name="HMake3" value="HMake3" />
            <label htmlFor="HMake3">ยำ-สลัด</label>
          </div>
          <div className="Rap-Col">
            <input type="checkbox" id="HMake4" name="HMake4" value="HMake4" />
            <label htmlFor="HMake4">อบ-ตุ๋น</label>
          </div>
          <div className="Rap-Col">
            <input type="checkbox" id="HMake5" name="HMake5" value="HMake5" />
            <label htmlFor="HMake5">ผัด</label>
          </div>
          <div className="Rap-Col">
            <input type="checkbox" id="HMake6" name="HMake6" value="HMake6" />
            <label htmlFor="HMake6">ต้ม-แกง</label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBarHealt;
