import "./๋DisplayCal.css";
import React, { useState, useEffect } from "react";

interface DisplayCalProps {
  Header: string;
  CalNum: number;
}

const DisplayCal: React.FC<DisplayCalProps> = ({ Header, CalNum }) => {
  const [displayedNum, setDisplayedNum] = useState(0);

  // Set Number Animation
  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1000; // Time of animation
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      const progress = currentTime - startTime;
      const currentNumber = Math.min(
        Math.floor((progress / duration) * CalNum),
        CalNum
      );

      setDisplayedNum(currentNumber);

      if (currentNumber < CalNum) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [CalNum]);

  return (
    <div className="displayCal-Container">
      <div className="displayCal-Content">
        {Header}
        <div className="displayCal-Result">
          <p>{displayedNum}</p>
          <p>Kcal</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayCal;
