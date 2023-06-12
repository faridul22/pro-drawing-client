import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { FaBookReader, FaBookmark, FaMoneyCheckAlt } from "react-icons/fa";


const Dashboard = () => {

    const isAdmin = true;
    const isInstructors = false;
    const isStudent = false;

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
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {
                            isAdmin && <>
                                <li><NavLink to="manageclasses"><FaBookmark />Manage Classes</NavLink></li>
                                <li><NavLink to="manageusers"><FaBookReader />Manage Users</NavLink></li>


                            </> || isInstructors && <>
                                <li><NavLink to="addAclass"><FaBookmark />Add a Class</NavLink></li>
                                <li><NavLink to="myclasses"><FaBookReader />My Classes</NavLink></li>


                            </> || isStudent && <>
                                <li><NavLink to="myselectedclasses"><FaBookmark />My Selected Classes</NavLink></li>
                                <li><NavLink to="mynrolledclasses"><FaBookReader /> My Enrolled Classes</NavLink></li>
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