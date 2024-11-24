import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AvatarCreation from '../pages/AvatarCreation'
import AvatarCloset from "../pages/AvatarCloset";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/creation",
        element: <AvatarCreation/>
    },
    {
        path: "/closet",
        element: <AvatarCloset/>
    }
]) 

const Routes = () => {
    return <RouterProvider router={router}/>
}

export default Routes;