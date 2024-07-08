import "./Navbar.css";
import { Logo } from "../general/general.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="Nav-Container">
      <div className="Logo-Container">
        <img src={Logo} alt="Logo" className="Logo" />
      </div>
      <div className="Option-Container">
        <div className="Page-Container">
          <div className="Main-Container">
            <p className="MainPage-Text">หน้าแรก</p>
          </div>
          <div className="CalToDay-Container">
            <p className="CalToDayPage-Text">แคลลอรี่ต่อวัน</p>
          </div>
          <div className="HealtFood-Container">
            <p className="HealtFood-Text">เมนูลดน้ำหนัก</p>
          </div>
          <div className="SaveCal-Container">
            <p className="SaveCal-Text">บันทึกแคลลอรี่</p>
          </div>
        </div>
        <div className="Translate-Container">
          <p className="Translate-Text">TH</p>
        </div>
        <div className="Login-Container">
          <p className="Login-Text">เข้าสู่ระบบ</p>
          <FontAwesomeIcon
            icon={faRightToBracket}
            size="xl"
            className="Login-Icon"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
