import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Questions = () => {
  const questions = useLoaderData().data;
  

  return (
    <div className="container mx-auto">
      {
      questions.questions.map((quest) => (
        <Question key={quest.id} quest={quest}></Question>
      ))}
    </div>
  );
};

export default Questions;
