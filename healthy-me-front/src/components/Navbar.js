import "./Navbar.css";
import { Logo } from "../general/general.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "EN" },
  { code: "th", name: "TH" },
];

const Navbar = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };
  return (
    <div className="Nav-Container">
      <div className="Logo-Container">
        <img src={Logo} alt="Logo" className="Logo" />
      </div>
      <div className="Option-Container">
        <div className="Page-Container">
          <div className="Main-Container">
            <p className="MainPage-Text">{t("mainpage")}</p>
          </div>
          <div className="CalToDay-Container">
            <p className="CalToDayPage-Text">{t("calpday")}</p>
          </div>
          <div className="HealtFood-Container">
            <p className="HealtFood-Text">{t("healthfood")}</p>
          </div>
          <div className="SaveCal-Container">
            <p className="SaveCal-Text">{t("savecal")}</p>
          </div>
        </div>
        {/* {languages.map((lng) => (
          <div className="Translate-Container">
            <p
              className={lng.code === i18n.language ? "selected" : ""}
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
            >
              {lng.name}
            </p>
          </div>
        ))} */}
        <select
          value={i18n.language}
          onChange={(e) => changeLanguage(e.target.value)}
          className="Language-Select"
        >
          {languages.map((lng) => (
            <option key={lng.code} value={lng.code}>
              {lng.name}
            </option>
          ))}
        </select>
        <div className="Login-Container">
          <p className="Login-Text">{t("login")}</p>
          <FontAwesomeIcon
            icon={faRightToBracket}
            size="xl"
            className="Login-Icon"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
