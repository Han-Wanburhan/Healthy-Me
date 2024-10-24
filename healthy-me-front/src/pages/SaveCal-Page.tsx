import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import "./SaveCal-Page.css";

import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { ArcElement, Tooltip, Legend, Chart as ChartJS } from "chart.js";
import { useEffect, useState } from "react"; // Import useEffect to set the date

// Registering plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// Define a type for the data items
interface DataItem {
  label: string;
  value: number;
  color: string;
  cutout: string;
}

const SaveCalPage: React.FC = () => {
  // const data: DataItem[] = [
  //   {
  //     label: "Label 1",
  //     value: 55,
  //     color: "rgba(0, 43, 73, 1)",
  //     cutout: "60%",
  //   },
  //   {
  //     label: "Label 2",
  //     value: 15,
  //     color: "rgba(0, 103, 160, 1)",
  //     cutout: "60%",
  //   },
  //   {
  //     label: "Label 3",
  //     value: 80,
  //     color: "rgba(83, 217, 217, 1)",
  //     cutout: "60%",
  //   },
  // ];
  const data: DataItem[] = [];

  const [haveData, setHaveData] = useState<boolean>(false);
  const options: any = {
    plugins: {
      datalabels: {
        formatter: (value: number) => {
          let val = Math.round(value);
          return new Intl.NumberFormat("tr-TR").format(val);
        },
        color: "white",
        font: {
          weight: "bold",
          size: 14,
          family: "Poppins",
        },
      },
      legend: {
        position: "right",
        labels: {
          font: {
            family: "Poppins",
            size: 12,
            weight: "bold",
          },
          color: "#000", // Label text color
        },
      },
      tooltip: {
        enabled: true,
      },
      responsive: true,
    },
    cutout: data.map((item) => item.cutout),
  };

  const finalData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => Math.round(item.value)),
        backgroundColor: data.map((item) => item.color),
        borderColor: data.map((item) => item.color),
        borderWidth: 1,
        dataVisibility: new Array(data.length).fill(true),
      },
    ],
  };

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const dateInput = document.getElementById("date") as HTMLInputElement;
    if (dateInput) {
      dateInput.value = today;
    }
  }, []);

  const handleClickAddFoodBT = () => {
    setHaveData(true);
  };
  // const toggleHaveData = () => {
  //   setHaveData((prev) => !prev); // สลับค่า true/false
  // };

  return (
    <div>
      <Navbar />
      <div className="SavecalPage-Container">
        <div className="SavecalPage-Content">
          <div className="Graph-Header">
            {data === undefined || data.length === 0 ? ( // If there is no data
              <div className="Graph-Header-Content">
                <h1>NO DATA</h1>
              </div>
            ) : (
              <Doughnut data={finalData} options={options} />
            )}
          </div>
          <div className="SavecalPage-Body-Container">
            {haveData ? (
              <div className="SavecalPage-Body-Content">
                <div className="SavecalPage-Body-Content-Date">
                  <input id="date" type="date" placeholder="dd/mm/yyyy" />
                  <button
                    id="AddFood-BT-HaveData"
                    title="Add Meal"
                    type="button"
                    onClick={handleClickAddFoodBT}
                  >
                    เพิ่มอาหาร
                  </button>
                </div>
                <div className="SavecalPage-Body-Content-List"></div>
              </div>
            ) : (
              <div className="SavecalPage-Body-Content">
                <div className="SavecalPage-Body-Content-Date">
                  <input id="date" type="date" placeholder="dd/mm/yyyy" />
                </div>
                <div className="SavecalPage-Body-Content-List">
                  <button
                    id="AddFood-BT"
                    title="Add Meal"
                    type="button"
                    onClick={handleClickAddFoodBT}
                  >
                    เพิ่มอาหาร
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SaveCalPage;
