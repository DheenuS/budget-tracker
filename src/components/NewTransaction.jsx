import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faSave } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Context } from "../context/Context";
import { v4 as uuidv4 } from 'uuid';

const NewTransactions = () => {
  const { setFormData } = useContext(Context);

  const handleAddNewTransaction = (e) => {
    e.preventDefault();
  
    const form = e.target;
    const formDataObj = new FormData(form);

    // Convert FormData entries into a plain object
    const newTransaction = Object.fromEntries(formDataObj.entries());
    // Add the unique ID here
    newTransaction.id = uuidv4();
    setFormData((prev) => [...prev, newTransaction]);
  };

  return (
    <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-5 sm:p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <FontAwesomeIcon
          icon={faPlusCircle}
          className="text-violet-600 mr-2 w-5 h-6"
        />{" "}
        Add Transaction
      </h3>
      <form
        id="transaction-form"
        className="space-y-4"
        onSubmit={handleAddNewTransaction}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="transaction-type"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Type
            </label>
            <select
              id="transaction-type"
              name="type"
              className="text-white w-full px-2 py-2 focus:outline-none border border-gray-500 rounded-md focus:ring-1 focus:ring-purple-500 focus:border-purple-500 bg-transparent"
              required
            >
              <option value="expense" className="text-black">
                Expense
              </option>
              <option value="income" className="text-black">
                Income
              </option>
            </select>
          </div>
          <div>
            <label
              htmlFor="transaction-category"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Category
            </label>
            <select
              id="transaction-category"
              name="category"
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="transaction-amount"
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
                name="amount"
                className="w-full pl-7 px-4 py-2 focus:outline-none border border-gray-500 rounded-md focus:ring-1 focus:ring-purple-500 focus:border-purple-500 bg-transparent"
                placeholder="100"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="transaction-date"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="transaction-date"
              className="text-white w-full px-2 py-2 focus:outline-none border border-gray-500 rounded-md focus:ring-1 focus:ring-purple-500 focus:border-purple-500 bg-transparent"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="transaction-description"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Description
          </label>
          <textarea
            id="transaction-description"
            name="description"
            className="w-full max-h-[80px] px-2 py-2 focus:outline-none border border-gray-500 rounded-md focus:ring-1 focus:ring-purple-500 focus:border-purple-500 bg-transparent"
            placeholder="e.g. Grocery shopping at Walmart"
            required
          />
        </div>

        <div className="flex items-center justify-center w-full rounded-md">
          <button
            type="submit"
            className="w-full text-white bg-purple-600 active:bg-purple-700 py-2 px-4 rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faSave} className="mr-2 w-4 h-6" /> Add
            Transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTransactions;
