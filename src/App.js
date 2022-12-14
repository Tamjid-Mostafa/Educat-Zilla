import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Blogs from "./components/Blogs/Blogs";
import Error from "./components/Error/Error";
import Questions from "./components/Questions/Questions";
import Quizes from "./components/Quizes/Quizes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/statistics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistics></Statistics>,
        },
        {
          path: "/quizes",
          element: <Quizes></Quizes>,
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
        {
          path: "/quiz/:quizId",
          loader: ({ params }) =>
            fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            ),
          element: <Questions></Questions>,
        },
      ],
    },
  ]);
  return (
    <div className="App dark:bg-gray-600 bg-teal-50">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
