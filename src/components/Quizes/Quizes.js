import React, { useContext } from "react";
import { QuizesContext } from "../../Layout/Main";
import Quiz from "../Quiz/Quiz";

const Quizes = () => {
  const quizes = useContext(QuizesContext);
  // console.log(quizes);
  

  return (
    <div className="container mx-auto mt-10 grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-8 pb-40 ">
      {quizes.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz}></Quiz>
      ))}
    </div>
  );
};

export default Quizes;
