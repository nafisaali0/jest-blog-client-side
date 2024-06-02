import { Link, useLocation } from "react-router-dom";
import logo from '../../../../assets/image/logo/upLogoedit11.png'
import navIcon from '../../../../assets/image/icons/nav-icon.svg'
// import { CgUserlane } from "react-icons/cg";
// import { LuSettings2 } from "react-icons/lu";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { RiListSettingsLine } from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import './navdasboard.css'

const NavDashboard = () => {

    const { user, logOut } = useContext(AuthContext)
    const location = useLocation()
    const ifActive = (path) => location.pathname === path;

    const handleLogOut = () => {
        logOut(user)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <div className="max-w-screen-2xl mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
                                <img src={navIcon} className="h-5 w-4 text-light_purple" alt="Navigation Icon" />
                            </div>
                            {/* mobile menu */}
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow bg-light_purple rounded-box w-52">
                                <nav className=" flex flex-col">
                                    <Link
                                        activeClassName="navbar__link--active_mobile"
                                        className={ifActive('/dashboard') ? "navbar__link--active_mobile" : "navbar__link_mobile"}
                                        to="/dashboard">
                                        <div>
                                            < MdOutlineDashboard />
                                        </div>
                                        Dashboard
                                    </Link>
                                    <Link
                                        activeClassName="navbar__link--active_mobile"
                                        className={ifActive('/profile') ? "navbar__link--active_mobile" : "navbar__link_mobile"}
                                        to="/">
                                        <div>
                                            <AiOutlineUserSwitch />
                                        </div>
                                        Profile
                                    </Link>
                                    <Link activeClassName="navbar__link--active_mobile"
                                        className={ifActive('/dashboard/profile-setting') ? "navbar__link--active_mobile" : "navbar__link_mobile"}
                                        to="/dashboard/profile-setting">
                                        <div>
                                            <RiListSettingsLine />
                                        </div>
                                        Settings
                                    </Link>
                                </nav>
                                <div className="flex items-center gap-3 my-5">
                                    <Link to={'/signin'}>
                                        <button className="text-sm px-3 py-2 border-2 font-semibold text-white rounded border-white hover:bg-white hover:text-light_purple">Sign in</button>
                                    </Link>
                                    <Link to={'/signup'}>
                                        <button className="text-sm px-3 py-2 font-semibold text-light_purple rounded border-white bg-white  hover:bg-transparent hover:border-2 hover:border-white hover:text-white">Sign up</button>
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
                                <nav>
                                    <Link
                                        activeClassName="navbar__link--active"
                                        className={ifActive('/dashboard') ? "navbar__link--active" : "navbar__link"}
                                        to="/dashboard">Dashboard</Link>
                                    <Link
                                        activeClassName="navbar__link--active"
                                        className={ifActive('/profile') ? "navbar__link--active" : "navbar__link"}
                                        to="/">Profile</Link>
                                    <Link activeClassName="navbar__link--active"
                                        className={ifActive('/dashboard/profile-setting') ? "navbar__link--active" : "navbar__link"}
                                        to="/dashboard/profile-setting">Settings</Link>
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
                            <ul tabIndex={0} className="mt-3 z-[1] p-5 shadow menu menu-sm dropdown-content bg-dash_nav rounded-box w-52">
                                {/* <Link>{user.displayName}</Link> */}
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