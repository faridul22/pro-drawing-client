import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const navItems = <>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/instructors">Instructors</Link>
        </li>
        <li>
            <Link to="/allclasses">Classes</Link>
        </li>
        {user && <li>
            <Link to="/dashboard/myselectedclasses">Dashboard</Link>
        </li>}
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => { console.log(error) })
    }

    return (
        <div className="navbar fixed mb-32 z-10 bg-opacity-30 bg-[#4499B3] text-gray-70000 max-w-screen-xl rounded-md px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg font-semibold">
                        {navItems}
                    </ul>
                </div>
                <div className="text-2xl font-bold uppercase flex justify-center items-center py-0 h-1/4">
                    <img className="mr-3" width={80} src="https://i.ibb.co/Cn29qsD/drawing.png" alt="" />
                    <Link to="/">Pro Drawing</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>

                        <button onClick={handleLogOut} className="btn hover:bg-[#FF944B] text-white border-0 bg-[#4499B3] mx-5 normal-case">LogOut</button>
                        <div className="avatar">
                            <div className="w-[50px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img title={user?.displayName} src={user.photoURL ? user.photoURL : <FaUserCircle />} />
                            </div>
                        </div>
                    </> : <>
                        <Link className="btn hover:bg-[#FF944B] text-white border-0 mx-5 bg-[#4499B3]" to="/login">Login</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;