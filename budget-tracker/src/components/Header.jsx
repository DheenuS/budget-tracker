import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExport,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {

  return (
    <div className="text-white bg-[#242424]">
      {" "}
      {/* bg-[#667eea] */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faWallet}
              className="text-purple-600 w-8 h-10 mr-2"
            />
            <h1 className="text-[20px] sm:text-2xl font-bold">Budget Tracker</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button
              id="export-btn"
              className="bg-white bg-opacity-5 hover:bg-opacity-10 transition duration-300 delay-50 ease-in-out flex items-center justify-center text-purple-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
            >
              <FontAwesomeIcon
                icon={faFileExport}
                className="text-purple-600 mr-2"
              />
              <p className=" text-white">Export</p>
            </button>
          </div>
        </header>

      </div>
  );
};

export default Header;
