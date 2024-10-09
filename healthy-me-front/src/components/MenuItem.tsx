import React from "react";
import "./MenuItem.css";

interface MenuItemProps {
  menuItem: {
    img: string;
    title: string;
    context: string;
  }[];
}
const MenuItem: React.FC<MenuItemProps> = ({ menuItem }) => {
  return (
    <div className="MenuItem-Container">
      {menuItem.map((item) => (
        <div className="MenuItem-Content">
          <div className="MenuItem-Image">
            <img src={item.img} alt={item.title} width={10} />
          </div>
          <div className="MenuItem-Detail">
            <div key={item.title}>
              <p className="MenuItem-Header">{item.title}</p>
              <p className="MenuItem-Context">
                {item.context.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MenuItem;
