import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Assignments from "../pages/Assignments";
import CreateAssignments from "../pages/CreateAssignments";
import PendingAssignments from "../pages/PendingAssignments";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<ErrorPage/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },

        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/assignments',
          element:<Assignments/>
        },
        {
          path:'/create-assignments',
          element:<CreateAssignments/>
        },
        {
          path:'/pending-assignments',
          element:<PendingAssignments/>
        },
    ]
  },
]);
