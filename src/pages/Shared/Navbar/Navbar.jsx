import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme]);

    const handleToggleDarkLight = event => {
        if (event.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light")
        }
    };

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
        {
            user && <li>
                <Link to={isAdmin && "/dashboard/manageClasses" || isInstructor && "/dashboard/addClass" || "/dashboard/myselectedclasses"}>Dashboard</Link>
            </li>
        }
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

                {/* ---------------------------- lightDark toggle start ----------------------------------*/}
                <label className="swap swap-rotate">


                    <input type="checkbox" onChange={handleToggleDarkLight} />

                    {/* sun icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>

                {/* ------------------------------Login & LogOut------------------------------- */}
                {
                    user ? <>

                        <button onClick={handleLogOut} className="btn hover:bg-[#FF944B] text-white border-0 bg-[#4499B3] mx-5 normal-case">LogOut</button>
                        <div className="avatar">
                            <div className="w-[50px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                {user.photoURL ?
                                    <img title={user?.displayName} src={user.photoURL} /> :
                                    <img title={user?.displayName} src="https://i.ibb.co/cLNMyCL/user-avata-removebg-preview.png" alt="user" />
                                }
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