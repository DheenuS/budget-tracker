import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const QuickStats = () => {
  return (
    <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-5 sm:p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <FontAwesomeIcon
            icon={faBolt}
            className="text-purple-600 mr-2 w-5 h-6"
          />{" "}
          Quick Stats
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white bg-opacity-5 p-3 rounded-lg text-center">
            <p className="text-sm text-white pb-2">Daily Avg. Spend</p>
            <p className="font-bold text-lg">₹28.50</p>
          </div>
          <div className="bg-white bg-opacity-5 p-3 rounded-lg text-center">
            <p className="text-sm text-white pb-2">Biggest Expense</p>
            <p className="font-bold text-lg">₹1,200.00</p>
          </div>
        </div>
      </div>
  );
};

export default QuickStats;
