import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white dark:bg-gray-800 bg-teal-100  ">
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-gray-700 dark:text-white sm:text-4xl">
          <span className="block">If you practice hard,</span>
          <span className="block text-teal-500">You can win every battle.</span>
        </h2>
        <div className="flex item-center justify-center mt-8">
          <Link to="/quizes">
            <button className="py-4 px-4  bg-teal-600 hover:bg-teal-700 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              Get Started
            </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
