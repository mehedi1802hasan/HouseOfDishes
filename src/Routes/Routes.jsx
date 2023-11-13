import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Dashboard from "../Pages/Dashboard";
import Registration from "../Authentication/Registration";
import Login from "../Authentication/Login";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About";
import Home from "../Pages/Home";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/dashboard",
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },{
          path:'/registration',
          element:<Registration></Registration>
        },
        {
          path:'/login',
          element:<Login></Login>
        },{
          path:"/about",
          element:<About></About>
        },
        {
          path:"/",
          element:<Home></Home>
        }
      ]
    },
  ]);
  export default router;