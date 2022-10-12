import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  return (
    <div className="p-5 py-10 rounded-xl bg-teal-100 text-center transform duration-500 hover:-translate-y-2 cursor-pointer dark:bg-gray-800">
      <img className="mx-auto p-4 " src={logo} alt="" />
      <div className="mx-auto p-4">
        <h1 className="text-gray-900 font-bold text-2xl dark:text-white">
          {name}
        </h1>
        <p className="mt-2 text-gray-600 text-sm dark:text-white">
          Total:{total}
        </p>

        <div className="flex item-center justify-center mt-8">
          <Link to={`/quiz/${id}`}>
            <button className="py-4 px-4  bg-teal-600 hover:bg-teal-700 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              Let's Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
