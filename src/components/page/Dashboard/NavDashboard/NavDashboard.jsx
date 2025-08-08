import { Link, useLocation } from "react-router-dom";
import logo from '../../../../assets/image/logo/upLogoedit11.png'
import bar from '../../../../assets/image/logo/upLogo7-removebg.png'
import { AiOutlineUserSwitch } from "react-icons/ai";
import { RiListSettingsLine } from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";
import { GiPriceTag } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import './navdasboard.css'
import { FaBars } from "react-icons/fa6";
import { HiMiniBars3 } from "react-icons/hi2";
import { RxDashboard } from "react-icons/rx";
import { PiUserSquareThin } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";


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
            {/* <div className="max-w-screen-2xl mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
                            </div>
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
                                        className={ifActive('/dashboard/profile') ? "navbar__link--active_mobile" : "navbar__link_mobile"}
                                        to="/dashboard/profile">
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
                                    <Link activeClassName="navbar__link--active_mobile"
                                        className={ifActive('/dashboard/membership') ? "navbar__link--active_mobile" : "navbar__link_mobile"}
                                        to="/dashboard/membership">
                                        <div>
                                            <GiPriceTag />
                                        </div>
                                        Membership
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
                                        className={ifActive('/dashboard/profile') ? "navbar__link--active" : "navbar__link"}
                                        to="/dashboard/profile">Profile</Link>
                                    <Link activeClassName="navbar__link--active"
                                        className={ifActive('/dashboard/profile-setting') ? "navbar__link--active" : "navbar__link"}
                                        to="/dashboard/profile-setting">Settings</Link>
                                    <Link activeClassName="navbar__link--active"
                                        className={ifActive('/dashboard/membership') ? "navbar__link--active" : "navbar__link"}
                                        to="/dashboard/membership">Membership</Link>
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
                                <Link to={'/signup'}>Add Another Account</Link>
                                <li className="cursor-pointer" onClick={handleLogOut}>Logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* new */}

            <div className="flex flex-col p-3">
                <div className="flex gap-2 justify-start items-center cursor-pointer">
                    {/* <HiMiniBars3
                            style={{
                                width: 24,
                                height: 24,
                                // transform: "scale(1.08)",                     
                                // filter: "drop-shadow(0 0 0.6px currentColor)"  
                            }}
                            strokeWidth={1.08}
                        /> */}
                    <figure>
                        <img className='w-10' src={bar} alt="" />
                    </figure>
                    <Link to={'/'}>
                        <h1 className="text-2xl font-bold text-black">JEST BLOG</h1>
                    </Link>
                </div>
                {/* NavItems */}
                <nav className="mt-20">
                    <ul className="space-y-3">
                        <li className="flex justify-start items-center gap-2 border p-[11px] rounded">
                            <RxDashboard
                                className="text-textSmallGray"
                                style={{
                                    transform: "scale(1)"
                                }} />
                            <Link to={'/dashboard'}>
                                <span className="text-textSmallGray text-xl font-semibold">Dashboard</span>
                            </Link>
                        </li>
                        <li className="flex justify-start items-center gap-2 border p-[11px] rounded">
                            <PiUserSquareThin
                                className="text-textSmallGray"
                                style={{
                                    transform: "scale(1.08)"
                                }} />
                            <Link to={'/dashboard'}>
                                <span className="text-textSmallGray text-xl font-semibold">Profile</span>
                            </Link>
                        </li>
                        <li className="flex justify-start items-center gap-2 border p-[11px] rounded">
                            <IoSettingsOutline
                                className="text-textSmallGray"
                                style={{
                                    transform: "scale(1)"
                                }} />
                            <Link to={'/dashboard'}>
                                <span className="text-textSmallGray text-xl font-semibold">Setting</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <div>
                        
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
};

export default NavDashboard;