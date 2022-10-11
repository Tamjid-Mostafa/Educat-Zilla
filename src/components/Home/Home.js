import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Quizes from "../Quizes/Quizes";

export const QuizesContext = createContext();

const Home = () => {
  const quizes = useLoaderData().data;
 

  return (
    <QuizesContext.Provider value={quizes}>
      <div className="dark:bg-gray-600">
        <Header></Header>
        <Quizes></Quizes>
      </div>
    </QuizesContext.Provider>
  );
};

export default Home;
