import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Assignments from "../pages/Assignments";
import CreateAssignments from "../pages/CreateAssignments";
import PendingAssignments from "../pages/PendingAssignments";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<ErrorPage/>,
    children:[
        {
            path:'/',
            element:<Home/>,
   
        },

        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/assignments',
          element:<Assignments/>,
          // loader:()=>fetch(`${import.meta.env.VITE_APP_URL}`)
      
        },
        {
          path:'/create-assignments',
          element:<PrivateRoute><CreateAssignments/></PrivateRoute>
        },
        {
          path:'/pending-assignments',
          element:<PendingAssignments/>
        },
    ]
  },
]);
