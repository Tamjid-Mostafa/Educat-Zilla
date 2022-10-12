import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Questions = () => {
  const {name,questions} = useLoaderData().data;
  

  return (
    <div className="mx-auto">
      <div className="p-5 py-10 bg-teal-100 text-center dark:bg-gray-700">
        <h1 className="text-gray-900 font-bold text-4xl dark:text-white">
          Questions for {name}
        </h1>
      </div>
      {
      questions.map((quest, index) => (
        <Question key={quest.id} index={index} quest={quest}></Question>
      ))}
    </div>
  );
};

export default Questions;
