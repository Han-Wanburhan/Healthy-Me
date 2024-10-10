import { Fivefood } from "../components/Fivefood";
import Navbar from "../components/Navbar";
import SideBarHealt from "../components/SideBar_Healtfood";
import MenuItems from "../components/MenuItems";
import "./Healtfood-Page.css";
import { Footer } from "../components/Footer";

const HealthfoodPage = () => {
  return (
    <div>
      <Navbar />
      <Fivefood />
      <div className="HealthfoodPage-Container">
        <SideBarHealt />
        <MenuItems />
      </div>
      <Footer />
    </div>
  );
};

export default HealthfoodPage;
