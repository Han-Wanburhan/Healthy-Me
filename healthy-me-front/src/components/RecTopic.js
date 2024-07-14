import "./RecTopic.css";
import testimg from "../image/Logo-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
export const RecTopic = () => {
  return (
    <div className="Topic-Conatiner">
      <div className="Img-content">
        <img src={testimg} alt="Topic Image" />
      </div>
      <div className="Topic-Content">
        <p className="Topic-Header-Context">หัวข้อบทความแนะนำ!!!!!!</p>
        <p className="Topic-Preview-Context">
          ท้องนอกมดลูก หรือการตั้งครรภ์นอกมดลูก (Ectopic Pregnancy) คือ
          ภาวะที่เกิดจากการฝังตัวของไข่ แล้วกลายเป็นตัวอ่อน
          และไปฝังตัวอยู่บริเวณอื่นที่ไม่ใช่มดลูก
          ซึ่งการท้องนอกมดลูกอาจจะเห็นได้ชัด เมื่อมีการตั้งครรภ์ 7-8
          สัปดาห์ขึ้นไปและถ้าหากไม่ได้รับการตรวจวินิจฉัย อาจส่งผลให้เกิดอันตรายต่อตัวคุณแม่ได้ท้องนอกมดลูก
          เกิดจากสาเหตุใดผู้ป่วยเคยมีประวัติการ
        </p>
        <button className="Topic-MoreView">
          อ่านเพิ่มเติม <FontAwesomeIcon icon={faCircleChevronRight} />
        </button>
      </div>
    </div>
  );
};
