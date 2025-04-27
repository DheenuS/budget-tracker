import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";

const BudgetCategories = () => {
  return (
    <div className="bg-white bg-opacity-5 hover:bg-opacity-10 transition duration-300 delay-50 ease-in-out backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-5 sm:p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <FontAwesomeIcon
            icon={faTags}
            className="text-purple-600 mr-2 w-5 h-6"
          />{" "}
          Budget Categories
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Food & Dining</span>
              <span className="text-sm">₹320</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Transportation</span>
              <span className="text-sm">₹120</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Entertainment</span>
              <span className="text-sm">₹75</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Utilities</span>
              <span className="text-sm">₹150</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Shopping</span>
              <span className="text-sm">₹180</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-pink-500 h-2 rounded-full"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Housing</span>
              <span className="text-sm">₹180</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-violet-500 h-2 rounded-full"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Health</span>
              <span className="text-sm">₹180</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full"></div>
            </div>
          </div>

        </div>
      </div>
  );
};

export default BudgetCategories;
