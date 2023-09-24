import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorite from "../Pages/components/Favorite/Favorite";
import Login from "../Pages/components/Login/Login";
import PhoneDetails from "../Pages/components/PhoneDetails/PhoneDetails";
import ErrorPage from "../ErrorPage/ErrorPage";

const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../phones.json')
            },
            {
                path: '/about',
                element: <div>this is about</div>
            },
            {
                path: '/favorite',
                element: <Favorite></Favorite>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/phone/:phoneId',
                element: <PhoneDetails></PhoneDetails>,
                loader: () => fetch('../phones.json')
            }
        ]
    }
])

export default myCreateRoute;