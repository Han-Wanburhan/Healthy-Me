import { Fivefood } from "../components/Fivefood";
import Navbar from "../components/Navbar";
import SideBarHealt from "../components/SideBar_Healtfood";

const HealthfoodPage = () => {
  return (
    <div>
      <Navbar />
      <Fivefood />
      <div>
        <SideBarHealt />
      </div>
    </div>
  );
};

export default HealthfoodPage;
