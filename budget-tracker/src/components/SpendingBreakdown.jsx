import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import SpendingChart from "./SpendingChart";

const SpendingBreakdown = () => {
  return (
      <div className="bg-white bg-opacity-5 hover:bg-opacity-10 transition duration-300 delay-50 ease-in-out backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-5 sm:p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <FontAwesomeIcon
            icon={faChartBar}
            className="text-purple-600 mr-2 w-5 h-6"
          />{" "}
          Spending Breakdown
        </h3>
        <div className="chart-container">
          <SpendingChart />
        </div>
      </div>
  );
};

export default SpendingBreakdown;
