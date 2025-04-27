import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { Context } from "../context/Context";

const BudgetCategories = () => {
  const {
    food,
    setFood,
    transportation,
    setTransportation,
    entertainment,
    setEntertainment,
    shopping,
    setShopping,
    housing,
    setHousing,
    utilities,
    setUtilities,
    health,
    setHealth,
    formData,
  } = useContext(Context);

  useEffect(() => {
    const AddFoodExpense = formData.reduce((acc, item) => {
      return item.type === "expense" && item.category === "food"
        ? acc + Number(item.amount)
        : acc;
    }, 0);

    const AddTransportationExpense = formData.reduce((acc, item) => {
      return item.type === "expense" && item.category === "transport"
        ? acc + Number(item.amount)
        : acc;
    }, 0);

    const AddEntertainmentExpense = formData.reduce((acc, item) => {
      return item.type === "expense" && item.category === "entertainment"
        ? acc + Number(item.amount)
        : acc;
    }, 0);

    const AddShoppingExpense = formData.reduce((acc, item) => {
      return item.type === "expense" && item.category === "shopping"
        ? acc + Number(item.amount)
        : acc;
    }, 0);

    const AddHousingExpense = formData.reduce((acc, item) => {
      return item.type === "expense" && item.category === "housing"
        ? acc + Number(item.amount)
        : acc;
    }, 0);

    const AddUtilitiesExpense = formData.reduce((acc, item) => {
      return item.type === "expense" && item.category === "utilities"
        ? acc + Number(item.amount)
        : acc;
    }, 0);

    const AddHealthExpense = formData.reduce((acc, item) => {
      return item.type === "expense" && item.category === "health"
        ? acc + Number(item.amount)
        : acc;
    }, 0);

    setFood(AddFoodExpense);
    setTransportation(AddTransportationExpense);
    setEntertainment(AddEntertainmentExpense);
    setShopping(AddShoppingExpense);
    setHousing(AddHousingExpense);
    setUtilities(AddUtilitiesExpense);
    setHealth(AddHealthExpense);
  }, [
    setFood,
    setTransportation,
    setEntertainment,
    setShopping,
    setHousing,
    setUtilities,
    setHealth,
    formData,
  ]);

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
            <span className="text-sm">₹{food}</span>
          </div>
          <div className="w-full bg-gray-400 bg-opacity-20 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-red-500 h-2.5 rounded-full"
              style={{
                width: `${Math.min(food, 100)}%`,
              }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Transportation</span>
            <span className="text-sm">₹{transportation}</span>
          </div>
          <div className="w-full bg-gray-400 bg-opacity-20 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-blue-500 h-2.5 rounded-full"
              style={{
                width: `${Math.min(transportation, 100)}%`,
              }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Entertainment</span>
            <span className="text-sm">₹{entertainment}</span>
          </div>
          <div className="w-full bg-gray-400 bg-opacity-20 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-yellow-500 h-2.5 rounded-full"
              style={{
                width: `${Math.min(entertainment, 100)}%`,
              }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Utilities</span>
            <span className="text-sm">₹{utilities}</span>
          </div>
          <div className="w-full bg-gray-400 bg-opacity-20 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{
                width: `${Math.min(utilities, 100)}%`,
              }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Shopping</span>
            <span className="text-sm">₹{shopping}</span>
          </div>
          <div className="w-full bg-gray-400 bg-opacity-20 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-pink-500 h-2.5 rounded-full"
              style={{
                width: `${Math.min(shopping, 100)}%`,
              }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Housing</span>
            <span className="text-sm">₹{housing}</span>
          </div>
          <div className="w-full bg-gray-400 bg-opacity-20 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-violet-500 h-2.5 rounded-full"
              style={{
                width: `${Math.min(housing, 100)}%`,
              }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Health</span>
            <span className="text-sm">₹{health}</span>
          </div>
          <div className="w-full bg-gray-400 bg-opacity-20 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{
                width: `${Math.min(health, 100)}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetCategories;
