import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import TermsCondition from "../Pages/TermsCondition";
import Category from "../components/Category";
import News from "../components/News";
import PrivetRoute from "./PrivetRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch(`http://localhost:5000/news`)
        },
        {
            path: '/category/:id',
            element: <Category></Category>,
            loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
            path: '/news/:id',
            element: <PrivetRoute><News></News></PrivetRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/terms',
          element: <TermsCondition></TermsCondition>
        }
      ]
    },
  ]);