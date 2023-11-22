import {
    createBrowserRouter,
} from "react-router-dom";
import Foundation from "../Layouts/Foundation";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Gallery from "../Pages/Gallery";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Testimonials from "../Pages/Testimonials";

import ErrorPage from "../Pages/ErrorPage";
// import EachDetail from "../Components/EachDetail";
import Detail from "../Pages/Detail";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Foundation></Foundation>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
       
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('/data.json')
          
           
        },
       
        {
          path:'/eachDetail/:id',
          element:<PrivateRoute><Detail></Detail></PrivateRoute>,
          loader: () => fetch('/data.json')
        },
        {
          path:'testimonials',
          element:<PrivateRoute><Testimonials></Testimonials></PrivateRoute>,
        },
        {
          path:'blog',
          element: <PrivateRoute><Blog></Blog></PrivateRoute>,
        },
       
       
        {
          path:'/about-us',
          element:<AboutUs></AboutUs>
        },
        {
          path:'/gallery',
          element:<Gallery></Gallery>,
         
          loader: () => fetch('/data.json')

        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
       
        

      ]
    },
  ]);
  export default router