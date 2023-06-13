import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { FaBookReader, FaBookmark, FaMoneyCheckAlt } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";


const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className="">
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center mt-20">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side mt-20">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-52 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {
                            isAdmin && <>
                                <li><NavLink to="manageClasses"><FaBookmark />Manage Classes</NavLink></li>
                                <li><NavLink to="manageUsers"><FaBookReader />Manage Users</NavLink></li>


                            </> || isInstructor && <>
                                <li><NavLink to="addClass"><FaBookmark />Add a Class</NavLink></li>
                                <li><NavLink to="myClasses"><FaBookReader />My Classes</NavLink></li>


                            </> || <>
                                <li><NavLink to="myselectedclasses"><FaBookmark />My Selected Classes</NavLink></li>
                                <li><NavLink to="myenrolledclasses"><FaBookReader /> My Enrolled Classes</NavLink></li>
                                <li><NavLink to="payment"><FaMoneyCheckAlt /> Payment</NavLink></li>

                            </>
                        }

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;