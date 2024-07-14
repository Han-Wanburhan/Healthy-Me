import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import { Fivefood } from "../components/Fivefood";
import { RecTopic } from "../components/RecTopic";
import "./Home-Page.css";
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
        <RecTopic />
      </div>
    </div>
  );
};
export default HomePage;
