import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExchangeAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import EmptyTransactionIcon from "../assets/transaction-history.png";

const TransactionsList = () => {
  const { formData, setFormData} = useContext(Context);

  const handleDeleteListItem = (toDeleteid) => {
    const filteredItems = formData.filter((item) => item.id !== toDeleteid);
    setFormData(filteredItems);
  };


  const tab = [
    { id: "tabAll", label: "All" },
    { id: "tabIncome", label: "Income" },
    { id: "tabExpense", label: "Expense" },
  ];

  const tabContent = {
    tabAll: (
      <div className="overflow-y-auto custom-scrollbar max-h-[480px] space-y-3">
        {formData.length > 0 ? (
          formData.map((item) => (
            <div key={item.id} id="transactions-list">
              <div className="bg-transparent bg-opacity-5 hover:bg-opacity-40 transition duration-300 delay-50 ease-in-out backdrop-filter backdrop-blur-md px-4 py-2 rounded-lg ">
                <div className="flex justify-between items-center">
                  
                    <div className="w-full flex ">
                      <div className="flex items-center w-full ">
                        <div className="space-y-2 flex flex-col items-start justify-start w-full">
                          <p className="font-normal text-wrap md:text-nowrap">
                            {item.description}
                          </p>
                          <div className="text-sm text-white items-center flex flex-wrap justify-start gap-2">
                            <p
                              className={`font-semibold ${
                                item.type === "expense"
                                  ? "text-red-500"
                                  : "text-green-500"
                              }`}
                            >
                              {item.category.charAt(0).toUpperCase() +
                                item.category.slice(1)}{" "}
                            </p>
                            <span className=" text-[26px]">•</span>{" "}
                            <span className="text-gray-400 italic">
                              {item.date}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end text-right text-nowrap space-y-2">
                        <p
                          className={`font-semibold ${
                            item.type === "income"
                              ? "text-green-400"
                              : "text-red-500"
                          }`}
                        >
                          {item.type === "income" ? "+" : "-"}₹{item.amount}
                        </p>
                        <div className="flex items-center justify-center gap-2">
                          <button
                            id="listitemdelete-btn"
                            onClick={() => handleDeleteListItem(item.id)}
                            className="bg-red-500 active:bg-opacity-40 hover:bg-red-600 transition duration-200 delay-50 ease-in-out flex items-center justify-center px-2 py-2 rounded-lg font-medium"
                          >
                            {
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="text-white"
                              />
                            }
                          </button>
                        </div>
                      </div>
                    </div>
                  
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center mt-20 text-[16px] sm:text-[18px] italic text-[#5b5c60] font-semibold">
              No Transactions Available
            </p>
            <img
              src={EmptyTransactionIcon}
              alt="transaction-history"
              className="sm:w-[200px] w-[120px] h-[120px] sm:h-auto opacity-30 sm:mt-6"
            />
          </div>
        )}
      </div>
    ),
    tabIncome: (
      <div className="overflow-y-auto custom-scrollbar max-h-[480px] space-y-3">
        {formData.length > 0 ? (
          formData
            .filter((incomeItem) => incomeItem.type === "income")
            .map((item) => (
              <div key={item.id} id="transactions-list">
                <div className="bg-transparent bg-opacity-5 hover:bg-opacity-40 transition duration-300 delay-50 ease-in-out backdrop-filter backdrop-blur-md px-4 py-2 rounded-lg ">
                  <div className="flex justify-between items-center">
                    
                      <div className="w-full flex ">
                        <div className="flex items-center w-full ">
                          <div className="space-y-2 flex flex-col items-start justify-start w-full">
                            <p className="font-normal text-wrap md:text-nowrap">
                              {item.description}
                            </p>
                            <div className="text-sm text-white items-center flex flex-wrap justify-start gap-2">
                              <p
                                className={`font-semibold ${
                                  item.type === "expense"
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {item.category.charAt(0).toUpperCase() +
                                  item.category.slice(1)}{" "}
                              </p>
                              <span className=" text-[26px]">•</span>{" "}
                              <span className="text-gray-400 italic">
                                {item.date}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end text-right text-nowrap space-y-2">
                          <p
                            className={`font-semibold ${
                              item.type === "income"
                                ? "text-green-400"
                                : "text-red-500"
                            }`}
                          >
                            {item.type === "income" ? "+" : "-"}₹{item.amount}
                          </p>
                          <div className="flex items-center justify-center gap-2">
                            <button
                              id="listitemdelete-btn"
                              onClick={() => handleDeleteListItem(item.id)}
                              className="bg-red-500 active:bg-opacity-40 hover:bg-red-600 transition duration-200 delay-50 ease-in-out flex items-center justify-center px-2 py-2 rounded-lg font-medium"
                            >
                              {
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className="text-white"
                                />
                              }
                            </button>
                          </div>
                        </div>
                      </div>
                    
                  </div>
                </div>
              </div>
            ))
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center mt-20 text-[16px] sm:text-[18px] italic text-[#5b5c60] font-semibold">
              No Income Transactions Available
            </p>
            <img
              src={EmptyTransactionIcon}
              alt="transaction-history"
              className="sm:w-[200px] w-[120px] h-[120px] sm:h-auto opacity-30 sm:mt-6"
            />
          </div>
        )}
      </div>
    ),
    tabExpense: (
      <div className="overflow-y-auto custom-scrollbar max-h-[480px] space-y-3">
        {formData.length > 0 ? (
          formData
            .filter((expenseItem) => expenseItem.type === "expense")
            .map((item) => (
              <div key={item.id} id="transactions-list">
                <div className="bg-transparent bg-opacity-5 hover:bg-opacity-40 transition duration-300 delay-50 ease-in-out backdrop-filter backdrop-blur-md px-4 py-2 rounded-lg ">
                  <div className="flex justify-between items-center">
                    
                      <div className="w-full flex ">
                        <div className="flex items-center w-full ">
                          <div className="space-y-2 flex flex-col items-start justify-start w-full">
                            <p className="font-normal text-wrap md:text-nowrap">
                              {item.description}
                            </p>
                            <p className="text-sm text-white items-center flex flex-wrap justify-start gap-2">
                              <p
                                className={`font-semibold ${
                                  item.type === "expense"
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              >
                                {item.category.charAt(0).toUpperCase() +
                                  item.category.slice(1)}{" "}
                              </p>
                              <span className=" text-[26px]">•</span>{" "}
                              <span className="text-gray-400 italic">
                                {item.date}
                              </span>
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col items-end text-right space-y-2 text-nowrap">
                          <p
                            className={`font-semibold ${
                              item.type === "income"
                                ? "text-green-400"
                                : "text-red-500"
                            }`}
                          >
                            {item.type === "income" ? "+" : "-"}₹{item.amount}
                          </p>
                          <div className="flex items-center justify-center gap-2">
                            <button
                              id="listitemdelete-btn"
                              onClick={() => handleDeleteListItem(item.id)}
                              className="bg-red-500 active:bg-opacity-40 hover:bg-red-600 transition duration-200 delay-50 ease-in-out flex items-center justify-center px-2 py-2 rounded-lg font-medium"
                            >
                              {
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className="text-white"
                                />
                              }
                            </button>
                          </div>
                        </div>
                      </div>

                  </div>
                </div>
              </div>
            ))
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center mt-20 text-[16px] sm:text-[18px] italic text-[#5b5c60] font-semibold">
              No Expense Transactions Available
            </p>
            <img
              src={EmptyTransactionIcon}
              alt="transaction-history"
              className="sm:w-[200px] w-[120px] h-[120px] sm:h-auto opacity-30 sm:mt-6"
            />
          </div>
        )}
      </div>
    ),
  };

  const [activeTab, setActiveTab] = useState("tabAll");

  return (
    <div className=" bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg sm:p-6 p-5 min-h-[572px]">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-4">
        <div className="flex items-center justify-start gap-2 mb-4 sm:mb-0">
          <h3 className="text-lg font-semibold flex items-center">
            <FontAwesomeIcon
              icon={faExchangeAlt}
              className="text-purple-600 mr-2 w-5 h-6"
            />
            Recent Transactions
          </h3>
          <h3
            className={`${
              formData.length > 0 &&
              formData.length &&
              "text-lg font-semibold px-3 py-0.5 bg-white bg-opacity-10 rounded-lg"
            }`}
          >
            {formData.length > 0 && formData.length}
          </h3>
        </div>
        <div className="flex flex-wrap space-x-2">
          {tab.map((t) => (
            <button
              key={t.id}
              className={`px-4 py-1 ${
                activeTab === t.id
                  ? " bg-purple-500 active:bg-purple-600 transition duration-200 delay-100 ease-out text-white rounded-lg"
                  : "bg-white bg-opacity-10 text-white hover:bg-opacity-15 rounded-lg"
              }`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4">{tabContent[activeTab]}</div>
    </div>
  );
};

export default TransactionsList;
