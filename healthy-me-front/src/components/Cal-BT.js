import "./Cal-BT.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

const Cal_BT = ({ Text, calculate }) => {
  return (
    <div className="Cal-BT">
      <button onClick={calculate}>
        <div className="inbt">
          <div className="licon1">
            <p>{Text}</p>
          </div>
          <div className="licon2">
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              size="2x"
              color="white"
            />
          </div>
        </div>
      </button>
    </div>
  );
};

export default Cal_BT;
