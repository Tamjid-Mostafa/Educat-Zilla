import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";

export const QuizesContext = createContext();

const Main = () => {
  const quizes = useLoaderData().data;
  return (
    <QuizesContext.Provider value={quizes}>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </QuizesContext.Provider>
  );
};

export default Main;
