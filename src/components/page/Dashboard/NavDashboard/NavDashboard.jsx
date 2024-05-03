import { NavLink } from "react-router-dom";
import logo from '../../../../assets/image/logo/upLogoedit11.png'
const NavDashboard = () => {
    return (
        <>
            <div className="navbar bg-slate-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>DashBoard</a></li>
                            <li><a>Settings</a></li>
                            <li><a>My Profile</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <div className="flex gap-2 items-center">
                        <span><img className="w-8" src={logo} /></span>
                        <h1 className="text-2xl uppercase font-serif font-semibold">JestBlog</h1>
                    </div>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal hidden lg:flex justify-center items-center">
                        <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                            <NavLink to="/dashboard">DashBoard</NavLink>
                            <NavLink to="/addblog">Settings</NavLink>
                            <NavLink to="/wishlist">My Profile</NavLink>
                        </nav>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavDashboard;