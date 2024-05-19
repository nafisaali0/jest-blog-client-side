import { Link, useLocation } from "react-router-dom";
import logo from '../../../../assets/image/logo/upLogoedit11.png'
import navIcon from '../../../../assets/image/icons/nav-icon.svg'
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import './navdasboard.css'

const NavDashboard = () => {

    const { user, logOut } = useContext(AuthContext)
    const location = useLocation()

    const handleLogOut = () => {
        logOut(user)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const isActive = (path) => location.pathname === path;
    return (
        <>
            <div className="max-w-screen-2xl mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
                                {/* <svg xmlns="https://www.svgrepo.com/svg/394298/nav-icon-grid" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg> */}
                                <img src={navIcon} className="h-5 w-4 text-light_purple" alt="Navigation Icon" />
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-light_purple rounded-box w-52">
                                <nav className="flex flex-col">
                                    <Link
                                        activeClassName="navbar__link--active_mobile"
                                        className={isActive('/dashboard') ? "navbar__link--active_mobile" : "navbar__link_mobile"}
                                        to="/dashboard">Home</Link>
                                    <Link
                                        activeClassName="navbar__link--active_mobile"
                                        className={isActive('/profile') ? "navbar__link--active_mobile" : "navbar__link_mobile"}
                                        to="/">Profile</Link>
                                    <Link activeClassName="navbar__link--active_mobile"
                                        className={isActive('/settings') ? "navbar__link--active_mobile" : "navbar__link_mobile"}
                                        to="/">Settings</Link>
                                </nav>
                                <div className="flex items-center gap-3 my-5">
                                    <Link to={'/signin'}>
                                        <button className="text-sm px-3 py-2 border-2 font-semibold text-black rounded border-light_purple hover:bg-hover_btn hover:text-white">Sign in</button>
                                    </Link>
                                    <Link to={'/signup'}>
                                        <button className="text-sm px-3 py-2 font-semibold text-white rounded border-light_purple bg-light_purple  hover:bg-hover_btn">Sign up</button>
                                    </Link>
                                </div>
                            </ul>
                        </div>
                        <Link to={'/'}>
                            <img className="w-12 lg:w-16 cursor-pointer" src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal items-center hidden lg:flex">
                            <div className="flex justify-center items-center">
                                {/* className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} */}
                                <nav>
                                    <Link
                                        activeClassName="navbar__link--active"
                                        className={isActive('/dashboard') ? "navbar__link--active" : "navbar__link"}
                                        to="/dashboard">Home</Link>
                                    <Link
                                        activeClassName="navbar__link--active"
                                        className={isActive('/profile') ? "navbar__link--active" : "navbar__link"}
                                        to="/">Profile</Link>
                                    <Link activeClassName="navbar__link--active"
                                        className={isActive('/setting') ? "navbar__link--active" : "navbar__link"}
                                        to="/">Settings</Link>
                                </nav>
                            </div>
                        </ul>
                    </div>
                    <div className="navbar-end text-white">
                        <div className="dropdown dropdown-end text-[#474f85] font-bold">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                                <div className="w-10 border-black border-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user.photoURL ? user.photoURL : ``} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-dash_nav rounded-box w-52">
                                <Link>{user.displayName}</Link>
                                <Link to={'/signup'}>Add Another Account</Link>
                                <li className="cursor-pointer" onClick={handleLogOut}>Logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >

        </>
    );
};

export default NavDashboard;