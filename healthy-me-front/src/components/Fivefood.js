import "./Fivefood.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDrumstickBite,
  faBowlRice,
  faLeaf,
  faAppleAlt,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

export const Fivefood = () => {
  return (
    <div className="FiveFood-Container">
      <div className="Header-Container">
        <h3>{`>>`}</h3>
        <p className="Header-Context">อาหารหลัก 5 หมู่มีอะไรบ้าง</p>
        <h3>{`<<`}</h3>
      </div>

      <div className="FiveFood-Content">
        <span className="circle-out">
          <span className="circle-in">
            <FontAwesomeIcon icon={faDrumstickBite} size="4x" color="#a6a6a6" />
            <h2 className="context">โปรตีน</h2>
          </span>
        </span>
        <span className="circle-out">
          <span className="circle-in">
            <FontAwesomeIcon icon={faBowlRice} size="4x" color="#a6a6a6" />
            <h2 className="context">คาร์บ</h2>
          </span>
        </span>
        <span className="circle-out">
          <span className="circle-in">
            <FontAwesomeIcon icon={faLeaf} size="4x" color="#a6a6a6" />
            <h2 className="context">ไฟเบอร์</h2>
          </span>
        </span>
        <span className="circle-out">
          <span className="circle-in">
            <FontAwesomeIcon icon={faAppleAlt} size="4x" color="#a6a6a6" />
            <h2 className="context">วิตตามิน</h2>
          </span>
        </span>
        <span className="circle-out">
          <span className="circle-in">
            <FontAwesomeIcon icon={faDroplet} size="4x" color="#a6a6a6" />
            <h2 className="context">ไขมัน</h2>
          </span>
        </span>
      </div>
    </div>
  );
};
