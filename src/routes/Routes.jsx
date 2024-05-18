import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Assignments from "../pages/Assignments";
import CreateAssignments from "../pages/CreateAssignments";
import PendingAssignments from "../pages/PendingAssignments";
import PrivateRoute from "./PrivateRoute";
import UpdateAssignment from "../pages/UpdateAssignment";
import ViewDetails from "../pages/ViewDetails";
import Register from "../pages/Register";
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
          path:'/register',
          element:<Register/>
        },

        {
          path:'/assignments',
          element:<Assignments/>
      
        },
        {
          path:'/create-assignments',
          element:<PrivateRoute><CreateAssignments/></PrivateRoute>
        },
        {
          path:'/pending-assignments',
          element:<PrivateRoute><PendingAssignments/></PrivateRoute>
        },
        {
          path:'/updateAssignment/:id',
          element:<UpdateAssignment/>,
          loader:({params})=>fetch(`${import.meta.env.VITE_APP_URL}/create/${params.id}`)
        },
        {
          path:'/viewDetails/:id',
          element:<ViewDetails/>,
          loader:({params})=> fetch(`${import.meta.env.VITE_APP_URL}/create/${params.id}`)
        }
    ]
  },
]);
