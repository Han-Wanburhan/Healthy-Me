import "./Footer.css";
import { SocialIcon } from "react-social-icons";
export const Footer = () => {
  return (
    <div className="Footer-Container">
      <div className="Footer-Content">
        <div className="Social-Media">
          <p>Follow us social media</p>
          <div className="Social-Media-Icons">
            <SocialIcon
              url="https://linkedin.com/in/wanburhan-wae-useng"
              style={{ height: 40, width: 40 }}
            ></SocialIcon>
            <SocialIcon
              url="https://www.youtube.com/"
              style={{ height: 40, width: 40 }}
            ></SocialIcon>
            <SocialIcon
              url="https://tiktok.com/"
              style={{ height: 40, width: 40 }}
            ></SocialIcon>
            <SocialIcon
              url="https://github.com/Han-Wanburhan"
              style={{ height: 40, width: 40 }}
            ></SocialIcon>
          </div>
        </div>
        <div className="Service-Site">
          <ul>
            Services
            <li>Calculate Cal</li>
            <li>Save Cal</li>
            <li>Healthy</li>
          </ul>
        </div>
        <div className="Contact-Us">
          <ul>
            Contact Us
            <li>Healthy_Me@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
