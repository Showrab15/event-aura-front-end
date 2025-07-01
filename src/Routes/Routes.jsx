import {
  createBrowserRouter
} from "react-router-dom";
import App from "../App";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddEvent from "../Pages/AddEvent/AddEvent";
import PrivateRoute from "./PrivateRoute";
import Events from "../Pages/Events/Events";
import MyEvents from "../Pages/MyEvents/MyEvents";

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
  element:           <PrivateRoute>
            <AddEvent />
          </PrivateRoute>

},
{
  path: '/events',
  element:   <PrivateRoute>
           <Events/>
          </PrivateRoute> 
},
{
  path: '/my-event',
  element: <MyEvents/>
}
    ]
  },
]);

export default router;