import { Fivefood } from "../components/Fivefood";
import Navbar from "../components/Navbar";
import SideBarHealt from "../components/SideBar_Healtfood";
import MenuItems from "../components/MenuItems";
import "./Healtfood-Page.css";

const HealthfoodPage = () => {
  return (
    <div>
      <Navbar />
      <Fivefood />
      <div className="HealthfoodPage-Container">
        <SideBarHealt />
        <MenuItems />
      </div>
    </div>
  );
};

export default HealthfoodPage;
