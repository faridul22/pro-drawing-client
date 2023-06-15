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
import ManageUsers from "../pages/Dashboard/AdminDashboard/ManageUsers";
import AddAClass from "../pages/Dashboard/InstructorDashboard/AddAClass";
import MyClasses from "../pages/Dashboard/InstructorDashboard/MyClasses";
import ManageClasses from "../pages/Dashboard/AdminDashboard/ManageClasses";
import Instructors from "../pages/Instructors/Instructors";
import InstructorsRoutes from "./InstructorsRoutes";
import AdminRoute from './AdminRoutes';
import Feedback from "../pages/Dashboard/AdminDashboard/Feedback";
import UpdateClass from "../pages/Dashboard/InstructorDashboard/UpdateClass";
import PaymentHistory from "../pages/Dashboard/StudentDashboard/PaymentHistory";

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
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            }
        ]
    },
    /* --------------------
    Dashboard routes 
    -----------------------*/
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            /* Student routes */
            {
                path: 'myselectedclasses',
                element: <MySelectedClasses></MySelectedClasses>
            },
            {
                path: 'myenrolledclasses',
                element: <MyEnrolledClasses></MyEnrolledClasses>
            },
            {
                path: 'myselectedclasses/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/selectedclasses/${params.id}`)
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },

            /* Instructor route */
            {
                path: 'addClass',
                element: <InstructorsRoutes><AddAClass></AddAClass></InstructorsRoutes>
            },
            {
                path: 'myClasses',
                element: <InstructorsRoutes><MyClasses></MyClasses></InstructorsRoutes>
            },
            {
                path: 'myClasses/update/:id',
                element: <UpdateClass></UpdateClass>,
                loader: ({ params }) => fetch(`http://localhost:5000/classes/${params.id}`)
            },

            /* Admin routes */
            {
                path: 'manageClasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'manageUsers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'manageClasses/feedback/:id',
                element: <AdminRoute><Feedback></Feedback></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/classes/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;