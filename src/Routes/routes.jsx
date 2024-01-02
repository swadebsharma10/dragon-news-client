import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home";
import Category from "../components/Category";
import News from "../components/News";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/category/:id',
            element: <Category></Category>
        },
        {
            path: '/news/:id',
            element: <News></News>
        }
      ]
    },
  ]);