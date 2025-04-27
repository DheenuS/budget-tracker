import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { Context } from "../context/Context";

const QuickStats = () => {
  const {
    dailySpend,
    setDailySpend,
    formData,
  } = useContext(Context);

  useEffect(() => {
    try {
      const expenseTransactions = formData.filter((item) => item.type === "expense");
    
      const uniqueDates = new Set(expenseTransactions.map((item) => item.date));

      const totalExpense = expenseTransactions.reduce((acc, item) => acc + Number(item.amount), 0);
  
      const numberOfDays = uniqueDates.size || 1; // To prevent division by 0
  
      const averageSpend = totalExpense / numberOfDays;
  
      setDailySpend(averageSpend.toFixed(2));
    } catch (error) {
      console.log(error.message);
    }
  }, [formData, setDailySpend]);
  

  return (
    <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-5 sm:p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <FontAwesomeIcon
          icon={faBolt}
          className="text-purple-600 mr-2 w-5 h-6"
        />{" "}
        Quick Stats
      </h3>
      <div className="grid grid-cols-1">
        <div className="bg-white bg-opacity-5 p-3 rounded-lg text-left">
          <p className="text-sm text-white pb-2">Daily Avgerage Spend</p>
          <p className="font-bold text-lg">₹{dailySpend}</p>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
