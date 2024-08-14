import "./Calculate-Page.css";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import StepCalBMR from "../components/StepCalBMR";
const CalculatePage = () => {
  return (
    <div>
      <Navbar />
      <div className="Calculate-Page-Container">
        <div className="Calculate-Page-Content">
          <div className="Calculate-Page-Header">
            <p>โปรแกรมคำนวนแคลลอรี่ต่อวัน</p>
          </div>
          <StepCalBMR />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CalculatePage;
