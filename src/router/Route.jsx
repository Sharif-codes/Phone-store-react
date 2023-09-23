import { createBrowserRouter, useLoaderData } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";

import Favourite from "../Pages/favourite/Favourite";
import Home from "../Pages/home/Home";
import Login from "../Pages/login/Login";
import ErrorPage from "../Pages/errorPage/ErrorPage";
import PhoneDetails from "../components/PhoneDetails/PhoneDetails";


const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage> ,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('Phones.json')
            },
            {
                path: "/favorite",
                element: <Favourite></Favourite>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/phoneDetails/:id",
                element: <PhoneDetails></PhoneDetails>,
                loader: ()=> fetch('Phones.json')
            }

        ]
    }
])

export default Route;