import "./RecTopic.css";
import testimg from "../image/Logo-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
interface RecTopicProps {
  jason_context: {
    Header: string;
    Content: string;
  }[];
}
export const RecTopic: React.FC<RecTopicProps> = ({ jason_context }) => {
  return (
    <div className="Topic-Conatiner">
      {jason_context.map((item, index) => (
        <div key={index} className="Topic-Conatiner2">
          <div className="Img-content">
            <img src={testimg} alt="Topic Image" />
          </div>
          <div className="Topic-Content">
            <p className="Topic-Header-Context">{item.Header}</p>
            <p className="Topic-Preview-Context">{item.Content}</p>
            <button className="Topic-MoreView" type="button">
              อ่านเพิ่มเติม <FontAwesomeIcon icon={faCircleChevronRight} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
