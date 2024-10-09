import MenuItem from "./MenuItem";
import testinmage from "../image/Mathematics-bro2.png";
import "./MenuItems.css";
const MenuItems = () => {
  const menuItem = [
    {
      img: testinmage,
      title: "กระเพราอกไก่",
      context:
        "วัตถุดิบ \n อกไก่ 300 กรัม xxx cal \n พริก 2 เม็ด xxx cal \n กระเทียม 2 กลีบ xxx cal \n ใบกระเพรา 15 กรัม xxx cal \n",
    },
    {
      img: testinmage,
      title: "กระเพราอกไก่",
      context:
        "วัตถุดิบ \n อกไก่ 300 กรัม xxx cal \n พริก 2 เม็ด xxx cal \n กระเทียม 2 กลีบ xxx cal \n ใบกระเพรา 15 กรัม xxx cal \n",
    },
    {
      img: testinmage,
      title: "กระเพราอกไก่",
      context:
        "วัตถุดิบ \n อกไก่ 300 กรัม xxx cal \n พริก 2 เม็ด xxx cal \n กระเทียม 2 กลีบ xxx cal \n ใบกระเพรา 15 กรัม xxx cal \n",
    },
    {
      img: testinmage,
      title: "กระเพราอกไก่",
      context:
        "วัตถุดิบ \n อกไก่ 300 กรัม xxx cal \n พริก 2 เม็ด xxx cal \n กระเทียม 2 กลีบ xxx cal \n ใบกระเพรา 15 กรัม xxx cal \n",
    },
    {
      img: testinmage,
      title: "กระเพราอกไก่",
      context:
        "วัตถุดิบ \n อกไก่ 300 กรัม xxx cal \n พริก 2 เม็ด xxx cal \n กระเทียม 2 กลีบ xxx cal \n ใบกระเพรา 15 กรัม xxx cal \n",
    },
    {
      img: testinmage,
      title: "กระเพราอกไก่",
      context:
        "วัตถุดิบ \n อกไก่ 300 กรัม xxx cal \n พริก 2 เม็ด xxx cal \n กระเทียม 2 กลีบ xxx cal \n ใบกระเพรา 15 กรัม xxx cal \n",
    },
  ];
  return (
    <div className="MenuItems-Content">
      <div className="MenuItems-Header-Container">
        <h3>{`>>`}</h3>
        <p className="Header-Context">เมนูแนะนำ</p>
        <h3>{`<<`}</h3>
      </div>
      <MenuItem menuItem={menuItem} />
    </div>
  );
};
export default MenuItems;
