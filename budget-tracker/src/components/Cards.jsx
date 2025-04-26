import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faChartPie,
  faPiggyBank,
  faEdit,
  faSave
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState, useRef } from "react";
import { Context } from "../context/Context";

const Cards = () => {
  const { total, setTotal, budget, setBudget, savings, setSavings } = useContext(Context);

  const [isTotalEditing, setIsTotalEditing] = useState(false);
  const [tempTotalValue, settempTotalValue] = useState(total);
  const inputRefTotal = useRef(null);
  
  const handleEditTotal = () => {
    setIsTotalEditing(true); 
    inputRefTotal.current?.focus();
  };

  const handleSaveTotal = (event) => {
    if (event.target?.tagName === "BUTTON") return;
    setTotal(tempTotalValue);
    setIsTotalEditing(false);
  };

  const [isBudgetEditing, setIsBudgetEditing] = useState(false);
  const [tempBudgetValue, settempBudgetValue] = useState(budget);
  const inputRefBudget = useRef(null);
  const handleEditBudget = () => {
    setIsBudgetEditing(true); 
    inputRefBudget.current?.focus();
  };

  const handleSaveBudget = (event) => {
    if (event.target?.tagName === "BUTTON") return;
    setBudget(tempBudgetValue);
    setIsBudgetEditing(false);
  };

  const [isSavingsEditing, setIsSavingsEditing] = useState(false);
  const [tempSavingsValue, settempSavingsValue] = useState(savings);
  const inputRefSavings = useRef(null);
  const handleEditSavings = () => {
    setIsSavingsEditing(true); 
    inputRefSavings.current?.focus();
  };

  const handleSaveSavings = (event) => {
    if (event.target?.tagName === "BUTTON") return;
    setSavings(tempSavingsValue);
    setIsSavingsEditing(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white text-white rounded-lg transition bg-opacity-5 hover:bg-opacity-10 duration-300 delay-50 ease-in-out sm:px-6 sm:py-6 py-5 px-5">
        <div className="flex items-center justify-between">
          <div className="mb-2">
            <p className="opacity-80 text-[15px]">Total Balance</p>
            <div className="flex items-center justify-start mt-0.5">
              {isTotalEditing ? (
                <div className="flex items-center justify-center gap-1">
                  <span className="text-2xl font-bold">₹</span>
                <input
                  type="number"
                  value={tempTotalValue}
                  ref={inputRefTotal}
                  onChange={(e) => settempTotalValue(e.target.value)}
                  onBlur={handleSaveTotal}
                  className="w-[100px] px-1 text-2xl font-bold focus:outline-none bg-transparent border-b-2 border-violet-500 mr-2"
                  autoFocus
                />
                </div>
              ) : (
                <h2 className="text-2xl font-bold mr-2" id="total-balance">
                  <span className="text-2xl font-bold mr-0.5">₹</span>{total}
                </h2>
              )}

              <button
                onClick={isTotalEditing ? handleSaveTotal : handleEditTotal}
                id="totaledit-btn"
                className="bg-white bg-opacity-10 hover:bg-opacity-5 active:bg-opacity-10 transition duration-200 delay-50 ease-in-out flex items-center justify-center text-purple-700 px-2 py-2 rounded-lg font-medium hover:bg-gray-100"
              >
                {isTotalEditing ? <FontAwesomeIcon icon={faSave} className="text-purple-600" /> : <FontAwesomeIcon icon={faEdit} className="text-purple-600" />}
                
              </button>
            </div>
          </div>
          <FontAwesomeIcon icon={faCoins} className="w-8 h-10" />
        </div>

        <div className="mt-4 flex justify-between text-sm">
          <div>
            <p className="opacity-80 text-[14px]">Income</p>
            <p
              className="font-semibold text-green-300 text-[16px]"
              id="total-income"
            >
              ₹3,500.00
            </p>
          </div>
          <div>
            <p className="opacity-80 text-[14px]">Expenses</p>
            <p
              className="font-semibold text-red-500 text-[16px]"
              id="total-expenses"
            >
              ₹1,219.50
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white text-white rounded-lg transition bg-opacity-5 hover:bg-opacity-10 duration-300 delay-50 ease-in-out sm:px-6 sm:py-6 py-5 px-5">
        <div className="flex items-center justify-between mb-4">
          <div className="mb-2">
            <p className="opacity-80 text-[15px]">Monthly Budget</p>
            <div className="flex gap-2 items-center justify-center mt-1">
            {isBudgetEditing ? (
                <div className="flex items-center justify-center gap-1">
                  <span className="text-2xl font-bold">₹</span>
                <input
                  type="number"
                  value={tempBudgetValue}
                  ref={inputRefBudget}
                  onChange={(e) => settempBudgetValue(e.target.value)}
                  onBlur={handleSaveBudget}
                  className="w-[100px] px-1 text-2xl font-bold focus:outline-none bg-transparent border-b-2 border-violet-500 mr-2"
                  autoFocus
                />
                </div>
              ) : (
                <h2 className="text-2xl font-bold mr-2" id="budget-balance">
                  <span className="text-2xl font-bold mr-0.5">₹</span>{budget}
                </h2>
              )}
              <button
              onClick={isBudgetEditing ? handleSaveBudget : handleEditBudget}
                id="budgetupdate-btn"
                className="bg-white bg-opacity-10 hover:bg-opacity-5 active:bg-opacity-10 transition duration-200 delay-50 ease-in-out flex items-center justify-center text-purple-700 px-2 py-2 rounded-lg font-medium hover:bg-gray-100"
              >
                {isBudgetEditing ? <FontAwesomeIcon icon={faSave} className="text-purple-600" /> : <FontAwesomeIcon icon={faEdit} className="text-purple-600" />}
              </button>
            </div>
          </div>
          <FontAwesomeIcon icon={faChartPie} className="w-8 h-10" />
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-yellow-400 h-2.5 rounded-full"></div>
        </div>
        <p className="mt-2 opacity-80 text-[14px]">
          65% of budget used (₹1,625.00 remaining)
        </p>
      </div>

      <div className="bg-white text-white rounded-lg transition bg-opacity-5 hover:bg-opacity-10 duration-300 delay-50 ease-in-out sm:px-6 sm:py-6 py-5 px-5">
        <div className="flex items-center justify-between mb-4">
          <div className="mb-2">
            <p className="opacity-80 text-[15px]">Savings Goal</p>
            <div className="flex gap-2 items-center justify-center mt-1">
            {isSavingsEditing ? (
                <div className="flex items-center justify-center gap-1">
                  <span className="text-2xl font-bold">₹</span>
                <input
                  type="number"
                  value={tempSavingsValue}
                  ref={inputRefSavings}
                  onChange={(e) => settempSavingsValue(e.target.value)}
                  onBlur={handleSaveSavings}
                  className="w-[100px] px-1 text-2xl font-bold focus:outline-none bg-transparent border-b-2 border-violet-500 mr-2"
                  autoFocus
                />
                </div>
              ) : (
                <h2 className="text-2xl font-bold mr-2" id="saving-balance">
                  <span className="text-2xl font-bold mr-0.5">₹</span>{savings}
                </h2>
              )}
              <button
              onClick={isSavingsEditing ? handleSaveSavings : handleEditSavings}
                id="savings-btn"
                className="bg-white bg-opacity-10 hover:bg-opacity-5 active:bg-opacity-10 transition duration-200 delay-50 ease-in-out flex items-center justify-center text-purple-700 px-2 py-2 rounded-lg font-medium hover:bg-gray-100"
              >
                {isSavingsEditing ? <FontAwesomeIcon icon={faSave} className="text-purple-600" /> : <FontAwesomeIcon icon={faEdit} className="text-purple-600" />}
              </button>
          </div>
          </div>
          <FontAwesomeIcon icon={faPiggyBank} className="w-8 h-10" />
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-green-400 h-2.5 rounded-full"></div>
        </div>
        <p className="mt-2 opacity-80 text-[14px]">
          42% completed (₹4,200.00 saved)
        </p>
      </div>
    </div>
  );
};

export default Cards;
