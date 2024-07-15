import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import { Fivefood } from "../components/Fivefood";
import { RecTopic } from "../components/RecTopic";
import "./Home-Page.css";

const jason_context = [
  {
    Header: "หัวข้อบทความแนะนำ!!!!!!",
    Content:
      "ท้องนอกมดลูก หรือการตั้งครรภ์นอกมดลูก (Ectopic Pregnancy) คือ ภาวะที่เกิดจากการฝังตัวของไข่ แล้วกลายเป็นตัวอ่อน และไปฝังตัวอยู่บริเวณอื่นที่ไม่ใช่มดลูก ซึ่งการท้องนอกมดลูกอาจจะเห็นได้ชัด เมื่อมีการตั้งครรภ์ 7-8 สัปดาห์ขึ้นไปและถ้าหากไม่ได้รับการตรวจวินิจฉัย อาจส่งผลให้เกิดอันตรายต่อตัวคุณแม่ได้ท้องนอกมดลูก เกิดจากสาเหตุใดผู้ป่วยเคยมีประวัติการ",
  },
  {
    Header: "หัวข้อบทความแนะนำ!!!!!!",
    Content:
      "ท้องนอกมดลูก หรือการตั้งครรภ์นอกมดลูก (Ectopic Pregnancy) คือ ภาวะที่เกิดจากการฝังตัวของไข่ แล้วกลายเป็นตัวอ่อน และไปฝังตัวอยู่บริเวณอื่นที่ไม่ใช่มดลูก ซึ่งการท้องนอกมดลูกอาจจะเห็นได้ชัด เมื่อมีการตั้งครรภ์ 7-8 สัปดาห์ขึ้นไปและถ้าหากไม่ได้รับการตรวจวินิจฉัย อาจส่งผลให้เกิดอันตรายต่อตัวคุณแม่ได้ท้องนอกมดลูก เกิดจากสาเหตุใดผู้ป่วยเคยมีประวัติการ",
  },
];

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Fivefood />
      <div className="Main-Page-Content">
        <div className="MP-Header-Container">
          <h3>{`>>`}</h3>
          <p className="Header-Context">บทความแนะนำ</p>
          <h3>{`<<`}</h3>
        </div>
        <RecTopic jason_context={jason_context} />
      </div>
    </div>
  );
};
export default HomePage;
