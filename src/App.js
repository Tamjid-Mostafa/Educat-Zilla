import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import Quizes from './components/Quizes/Quizes';
import Error from './components/Error/Error';
import Questions from './components/Questions/Questions';

function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path:'/quiz/:quizId',
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element:<Questions></Questions>

        }
        
      ]
    }
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
