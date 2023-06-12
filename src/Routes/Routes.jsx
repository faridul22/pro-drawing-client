import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import AllClasses from "../pages/AllClasses/AllClasses";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/Dashboard";
import MySelectedClasses from "../pages/Dashboard/StudentDashboard/MySelectedClasses";
import MyEnrolledClasses from "../pages/Dashboard/StudentDashboard/MyEnrolledClasses";
import Payment from "../pages/Dashboard/StudentDashboard/Payment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'allclasses',
                element: <AllClasses></AllClasses>
            },
        ]
    },
    {

        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'myselectedclasses',
                element: <MySelectedClasses></MySelectedClasses>
            },
            {
                path: 'myenrolledclasses',
                element: <MyEnrolledClasses></MyEnrolledClasses>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;