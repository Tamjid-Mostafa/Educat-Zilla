import React, { useContext } from "react";
import { QuizesContext } from "../Home/Home";
import Quiz from "../Quiz/Quiz";

const Quizes = () => {
  const quizes = useContext(QuizesContext);
  console.log(quizes);

  return (
    <div class="container mx-auto mt-10 grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-8 ">
      {quizes.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz}></Quiz>
      ))}
    </div>
  );
};

export default Quizes;
