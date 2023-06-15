import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { FaBook, FaBookReader, FaBookmark, FaMoneyCheckAlt, FaTelegram, FaTools, FaUsersCog } from "react-icons/fa";
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
                                <li><NavLink to="manageClasses"><FaTools className="text-lg" />Manage Classes</NavLink></li>
                                <li><NavLink to="manageUsers"><FaUsersCog className="text-xl" />Manage Users</NavLink></li>


                            </> || isInstructor && <>
                                <li><NavLink to="addClass"><FaTelegram className="text-xl" />Add a Class</NavLink></li>
                                <li><NavLink to="myClasses"><FaBook className="text-xl" />My Classes</NavLink></li>


                            </> || <>
                                <li><NavLink to="myselectedclasses"><FaBookmark className="text-lg" />Selected Classes</NavLink></li>
                                <li><NavLink to="myenrolledclasses"><FaBookReader className="text-xl" /> Enrolled Classes</NavLink></li>
                                <li><NavLink to="paymentHistory"><FaMoneyCheckAlt className="text-xl" /> Payment History</NavLink></li>

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