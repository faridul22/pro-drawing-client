import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems = <>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/instructors">Instructors</Link>
        </li>
        <li>
            <Link to="/classes">Classes</Link>
        </li>
        <li>
            <Link to="/dashboard">Dashboard</Link>
        </li>
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-[#FF944B] text-gray-70000 max-w-7xl">
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
                <Link className="btn bg-[#FF944B] text-white border-0 hover:bg-[#4499B3]" to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;