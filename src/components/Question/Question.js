import React from "react";
import { toast } from "react-toastify";

const Question = ({ quest }) => {
  console.log(quest);
  const { question, options,correctAnswer
  } = quest;
  return (
    <div className="">
      <div className="mx-auto shadow-lg rounded-xl w-full max-w-lg p-6 bg-white dark:bg-gray-800 bg-teal-200 dark:text-white text-gray-600 overflow-hidden mt-6">
        <h4 className="mt-10 text-xl ">Question</h4>
        <div className="mt-4 text-2xl ">{question.slice(3,-4)}</div>
        <div className="flex flex-col w-full">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl"
            >
              <label className="ml-6 ">
                <input
                onClick={() => option=== correctAnswer ? toast.success('True',{autoClose:500}) : toast.warning('False',{autoClose:500})}
                value={option}
                  type="radio"
                  className="w-6 h-6 bg-black form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  name="flexRadioDefault"
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
