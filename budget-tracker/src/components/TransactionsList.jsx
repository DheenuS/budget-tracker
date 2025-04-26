import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExchangeAlt,
  faEdit,
  faTrash,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import EmptyTransactionIcon from "../assets/transaction-history.png";

const TransactionsList = () => {
  const { formData, setFormData } = useContext(Context);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  const handleDeleteListItem = (toDeleteid) => {
    const filteredItems = formData.filter((item) => item.id !== toDeleteid);
    setFormData(filteredItems);
  };

  const handleEditClick = (idToEdit) => { 
    // Find the object(we want to edit data) in the formData array by its unique id matching with idToEdit
    const itemToEdit = formData.find(item => item.id === idToEdit);

    if (itemToEdit) { // Make sure the item was found
        setEditId(idToEdit); // Set the ID of the item being edited
        setEditData(itemToEdit); // Set the found item's data into editData
    } else {
        console.error("Item with ID", idToEdit, "not found for editing.");
        // Optionally, clear edit state if somehow an invalid ID was passed
        setEditId(null);
        setEditData({});
    }
}

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSaveEdit = () => {
    const updatedFormData = formData.map((item) =>
      item.id === editId ? editData : item
    );
    setFormData(updatedFormData);
    setEditId(null);
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
            formData.map((item, idx) => (
              <div key={item.id} id="transactions-list">
                <div className="bg-transparent bg-opacity-5 hover:bg-opacity-40 transition duration-300 delay-50 ease-in-out backdrop-filter backdrop-blur-md px-4 py-2 rounded-lg ">
                  <div className="flex justify-between items-center">
                    {editId === item.id ? (
                      <div className="flex flex-col space-y-2 w-full relative">
                        <p className="absolute -right-0 -top-0 rounded-md px-2 py-0.5 bg-white bg-opacity-10 text-gray-300">
                          Item: {idx + 1}
                        </p>
                        {/* Type */}
                        <div className="flex items-center justify-start py-1.5 px-2 bg-white bg-opacity-10 rounded-md w-fit absolute -left-0 -top-2">
                          <p className="block text-[15px] font-medium text-gray-300">
                            Type: &nbsp;
                          </p>
                          <p
                            className={`font-semibold ${
                              editData.type === "expense"
                                ? "text-red-500"
                                : "text-green-500"
                            }`}
                          >
                            {editData.type.charAt(0).toUpperCase() +
                              editData.type.slice(1)}
                          </p>
                        </div>
                        {/* Category */}
                        <div>
                          <label
                            htmlFor="category-edit"
                            className="block text-sm font-medium text-gray-300 mb-2 mt-10"
                          >
                            Category
                          </label>
                          <select
                            id="transaction-category-edit"
                            name="category"
                            value={editData.category}
                            onChange={handleEditChange}
                            className="text-white w-full px-2 py-2 focus:outline-none border border-gray-500 rounded-md focus:ring-1 focus:ring-purple-500 focus:border-purple-500 bg-transparent"
                            required
                          >
                            <option value="food" className="text-black">
                              Food & Dining
                            </option>
                            <option value="transport" className="text-black">
                              Transportation
                            </option>
                            <option value="housing" className="text-black">
                              Housing
                            </option>
                            <option value="utilities" className="text-black">
                              Utilities
                            </option>
                            <option value="entertainment" className="text-black">
                              Entertainment
                            </option>
                            <option value="shopping" className="text-black">
                              Shopping
                            </option>
                            <option value="health" className="text-black">
                              Health
                            </option>
                            <option value="salary" className="text-black">
                              Salary
                            </option>
                            <option value="freelance" className="text-black">
                              Freelance
                            </option>
                            <option value="investment" className="text-black">
                              Investment
                            </option>
                          </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Amount */}
                          <div>
                            <label
                              htmlFor="amount-edit"
                              className="block text-sm font-medium text-gray-300 mb-2"
                            >
                              Amount
                            </label>
                            <div className="relative">
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white font-bold">
                                ₹
                              </span>
                              <input
                                type="number"
                                id="transaction-amount"
                                value={editData.amount}
                                onChange={handleEditChange}
                                name="amount"
                                className="w-full pl-7 px-4 py-2 focus:outline-none border border-gray-500 rounded-md focus:ring-1 focus:ring-purple-500 focus:border-purple-500 bg-transparent"
                                placeholder="100"
                                required
                              />
                            </div>
                          </div>
                          {/* Date */}
                          <div>
                            <label
                              htmlFor="date-edit"
                              className="block text-sm font-medium text-gray-300 mb-2"
                            >
                              Date
                            </label>
                            <input
                              type="date"
                              name="date"
                              id="date-edit"
                              value={editData.date}
                              onChange={handleEditChange}
                              className="text-white w-full px-2 py-2 focus:outline-none border border-gray-500 rounded-md focus:ring-1 focus:ring-purple-500 focus:border-purple-500 bg-transparent"
                              required
                            />
                          </div>
                        </div>

                        {/* Description */}
                        <div>
                          <label
                            htmlFor="Description-edit"
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Description
                          </label>
                          <textarea
                            name="description"
                            value={editData.description}
                            placeholder="eg. Bought Grocery from Walmart"
                            onChange={handleEditChange}
                            className="px-2 py-1 bg-transparent border border-gray-500 focus:ring-1 focus:ring-purple-500 focus:outline-none w-full rounded-md max-h-[70px] min-h-[70px]"
                          />
                        </div>

                        {/* Button */}
                        <div className="flex items-center justify-center w-full rounded-md">
                          <button
                            type="submit"
                            onClick={handleSaveEdit}
                            className="w-full text-white bg-purple-600 active:bg-purple-700 py-2 px-4 rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center mt-2"
                          >
                            <FontAwesomeIcon
                              icon={faSave}
                              className="mr-2 w-4 h-6"
                            />{" "}
                            Save
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full flex ">
                        <div className="flex items-center w-full ">
                          {/* <div className="px-4 py-3 rounded-full bg-green-200 mr-3">
                            <FontAwesomeIcon
                              icon={faHome}
                              className="text-green-400"
                            />
                          </div> */}

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

                        <div className="flex flex-col items-end text-right space-y-2">
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
                            <button
                              id="listitemedit-btn"
                              onClick={() => handleEditClick(item.id)}
                              className="bg-purple-500 active:bg-opacity-40 hover:bg-purple-600 transition duration-200 delay-50 ease-in-out flex items-center justify-center px-2 py-2 rounded-lg font-medium "
                            >
                              {
                                <FontAwesomeIcon
                                  icon={faEdit}
                                  className="text-white "
                                />
                              }
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
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
          formData.filter(incomeItem => incomeItem.type === 'income').map((item) => (
            <div key={item.id} id="transactions-list">
              <div className="bg-transparent bg-opacity-5 hover:bg-opacity-40 transition duration-300 delay-50 ease-in-out backdrop-filter backdrop-blur-md px-4 py-2 rounded-lg ">
                <div className="flex justify-between items-center">
                  {editId === item.id ? (
                    <div className="flex flex-col space-y-2 w-full relative">
                      <p className="absolute -right-0 -top-0 rounded-md px-2 py-0.5 bg-white bg-opacity-10 text-gray-300">
                        Item: {item.id}
                      </p>
                      {/* Category */}
                      <div>
                        <label
                          htmlFor="category-edit"
                          className="block text-sm font-medium text-gray-300 mb-2 mt-10"
                        >
                          Category
                        </label>
                        <select
                          id="transaction-category-edit"
                          name="category"
                          value={editData.category}
                          onChange={handleEditChange}
                          className="text-white w-full px-2 py-2 focus:outline-none border border-gray-500 rounded-md focus:ring-1 focus:ring-purple-500 focus:border-purple-500 bg-transparent"
                          required
                        >
                          <option value="food" className="text-black">
                            Food & Dining
                          </option>
                          <option value="transport" className="text-black">
                            Transportation
                          </option>
                          <option value="housing" className="text-black">
                            Housing
                          </option>
                          <option value="utilities" className="text-black">
                            Utilities
                          </option>
                          <option value="entertainment" className="text-black">
                            Entertainment
                          </option>
                          <option value="shopping" className="text-black">
                            Shopping
                          </option>
                          <option value="health" className="text-black">
                            Health
                          </option>
                          <option value="salary" className="text-black">
                            Salary
                          </option>
                          <option value="freelance" className="text-black">
                            Freelance
                          </option>
                          <option value="investment" className="text-black">
                            Investment
                          </option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Amount */}
                        <div>
                          <label
                            htmlFor="amount-edit"
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Amount
                          </label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white font-bold">
                              ₹
                            </span>
                            <input
                              type="number"
                              id="transaction-amount"
                              value={editData.amount}
                              onChange={handleEditChange}
                              name="amount"
                              className="w-full pl-7 px-4 py-2 focus:outline-none border border-gray-500 rounded-md focus:ring-1 focus:ring-purple-500 focus:border-purple-500 bg-transparent"
                              placeholder="100"
                              required
                            />
                          </div>
                        </div>
                        {/* Date */}
                        <div>
                          <label
                            htmlFor="date-edit"
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Date
                          </label>
                          <input
                            type="date"
                            name="date"
                            id="date-edit"
                            value={editData.date}
                            onChange={handleEditChange}
                            className="text-white w-full px-2 py-2 focus:outline-none border border-gray-500 rounded-md focus:ring-1 focus:ring-purple-500 focus:border-purple-500 bg-transparent"
                            required
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <label
                          htmlFor="Description-edit"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Description
                        </label>
                        <textarea
                          name="description"
                          value={editData.description}
                          placeholder="eg. Bought Grocery from Walmart"
                          onChange={handleEditChange}
                          className="px-2 py-1 bg-transparent border border-gray-500 focus:ring-1 focus:ring-purple-500 focus:outline-none w-full rounded-md max-h-[70px] min-h-[70px]"
                        />
                      </div>

                      {/* Button */}
                      <div className="flex items-center justify-center w-full rounded-md">
                        <button
                          type="submit"
                          onClick={handleSaveEdit}
                          className="w-full text-white bg-purple-600 active:bg-purple-700 py-2 px-4 rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center mt-2"
                        >
                          <FontAwesomeIcon
                            icon={faSave}
                            className="mr-2 w-4 h-6"
                          />{" "}
                          Save
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full flex ">
                      <div className="flex items-center w-full ">
                        {/* <div className="px-4 py-3 rounded-full bg-green-200 mr-3">
                          <FontAwesomeIcon
                            icon={faHome}
                            className="text-green-400"
                          />
                        </div> */}

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

                      <div className="flex flex-col items-end text-right space-y-2">
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
                          <button
                            id="listitemedit-btn"
                            onClick={() => handleEditClick(item.id)}
                            className="bg-purple-500 active:bg-opacity-40 hover:bg-purple-600 transition duration-200 delay-50 ease-in-out flex items-center justify-center px-2 py-2 rounded-lg font-medium "
                          >
                            {
                              <FontAwesomeIcon
                                icon={faEdit}
                                className="text-white "
                              />
                            }
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
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
          formData.filter(expenseItem => expenseItem.type === 'expense').map((item) => (
            <div key={item.id} id="transactions-list">
              <div className="bg-transparent bg-opacity-5 hover:bg-opacity-40 transition duration-300 delay-50 ease-in-out backdrop-filter backdrop-blur-md px-4 py-2 rounded-lg ">
                <div className="flex justify-between items-center">
                  {editId === item.id ? (
                    <div className="flex flex-col space-y-2 w-full relative">
                      <p className="absolute -right-0 -top-0 rounded-md px-2 py-0.5 bg-white bg-opacity-10 text-gray-300">
                        Item: {item.id}
                      </p>
                      {/* Category */}
                      <div>
                        <label
                          htmlFor="category-edit"
                          className="block text-sm font-medium text-gray-300 mb-2 mt-10"
                        >
                          Category
                        </label>
                        <select
                          id="transaction-category-edit"
                          name="category"
                          value={editData.category}
                          onChange={handleEditChange}
                          className="text-white w-full px-2 py-2 focus:outline-none border border-gray-500 rounded-md focus:ring-1 focus:ring-purple-500 focus:border-purple-500 bg-transparent"
                          required
                        >
                          <option value="food" className="text-black">
                            Food & Dining
                          </option>
                          <option value="transport" className="text-black">
                            Transportation
                          </option>
                          <option value="housing" className="text-black">
                            Housing
                          </option>
                          <option value="utilities" className="text-black">
                            Utilities
                          </option>
                          <option value="entertainment" className="text-black">
                            Entertainment
                          </option>
                          <option value="shopping" className="text-black">
                            Shopping
                          </option>
                          <option value="health" className="text-black">
                            Health
                          </option>
                          <option value="salary" className="text-black">
                            Salary
                          </option>
                          <option value="freelance" className="text-black">
                            Freelance
                          </option>
                          <option value="investment" className="text-black">
                            Investment
                          </option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Amount */}
                        <div>
                          <label
                            htmlFor="amount-edit"
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Amount
                          </label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white font-bold">
                              ₹
                            </span>
                            <input
                              type="number"
                              id="transaction-amount"
                              value={editData.amount}
                              onChange={handleEditChange}
                              name="amount"
                              className="w-full pl-7 px-4 py-2 focus:outline-none border border-gray-500 rounded-md focus:ring-1 focus:ring-purple-500 focus:border-purple-500 bg-transparent"
                              placeholder="100"
                              required
                            />
                          </div>
                        </div>
                        {/* Date */}
                        <div>
                          <label
                            htmlFor="date-edit"
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Date
                          </label>
                          <input
                            type="date"
                            name="date"
                            id="date-edit"
                            value={editData.date}
                            onChange={handleEditChange}
                            className="text-white w-full px-2 py-2 focus:outline-none border border-gray-500 rounded-md focus:ring-1 focus:ring-purple-500 focus:border-purple-500 bg-transparent"
                            required
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <label
                          htmlFor="Description-edit"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Description
                        </label>
                        <textarea
                          name="description"
                          value={editData.description}
                          placeholder="eg. Bought Grocery from Walmart"
                          onChange={handleEditChange}
                          className="px-2 py-1 bg-transparent border border-gray-500 focus:ring-1 focus:ring-purple-500 focus:outline-none w-full rounded-md max-h-[70px] min-h-[70px]"
                        />
                      </div>

                      {/* Button */}
                      <div className="flex items-center justify-center w-full rounded-md">
                        <button
                          type="submit"
                          onClick={handleSaveEdit}
                          className="w-full text-white bg-purple-600 active:bg-purple-700 py-2 px-4 rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center mt-2"
                        >
                          <FontAwesomeIcon
                            icon={faSave}
                            className="mr-2 w-4 h-6"
                          />{" "}
                          Save
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full flex ">
                      <div className="flex items-center w-full ">
                        {/* <div className="px-4 py-3 rounded-full bg-green-200 mr-3">
                          <FontAwesomeIcon
                            icon={faHome}
                            className="text-green-400"
                          />
                        </div> */}

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

                      <div className="flex flex-col items-end text-right space-y-2">
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
                          <button
                            id="listitemedit-btn"
                            onClick={() => handleEditClick(item.id)}
                            className="bg-purple-500 active:bg-opacity-40 hover:bg-purple-600 transition duration-200 delay-50 ease-in-out flex items-center justify-center px-2 py-2 rounded-lg font-medium "
                          >
                            {
                              <FontAwesomeIcon
                                icon={faEdit}
                                className="text-white "
                              />
                            }
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
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
        <h3 className={`${formData.length > 0 && formData.length && 'text-lg font-semibold px-3 py-0.5 bg-white bg-opacity-10 rounded-lg'}`}>{formData.length > 0 && formData.length}</h3>
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
      <div className="mt-4 px-2">{tabContent[activeTab]}</div>
    </div>
  );
};

export default TransactionsList;
