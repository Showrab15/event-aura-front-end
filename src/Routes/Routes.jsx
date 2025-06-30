import {
  createBrowserRouter
} from "react-router-dom";
import App from "../App";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddEvent from "../Pages/AddEvent/AddEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
{
    path : '/',
    element: <Home/>
},
{
  path : '/register',
  element: <Register/>
},
{
  path: '/login',
  element: <Login/>
},
{
  path: '/add-events',
  element: <AddEvent/>
}
    ]
  },
]);

export default router;