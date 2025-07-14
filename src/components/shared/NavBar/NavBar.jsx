import { Link, useLocation } from "react-router-dom";
import './navbar.css'
import logo from '../../../assets/image/logo/upLogoedit11.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { PropTypes } from 'prop-types';
import useUsers from "../../../hooks/useUsers";
import { FaBars } from "react-icons/fa";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    const location = useLocation();
    const [users] = useUsers();
    const currentUser = users.length > 0 ? users[0] : {};

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
            {/* <div className="bg-body_color fixed top-0 w-full z-50 shadow-md">
                <div className="navbar">
                    <div className="navbar-start flex">
                        <div className="dropdown lg:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </div>
                            <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-body_color rounded-box w-52">
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/addblog">Add Blog</NavLink>
                                    <NavLink to="/dashboard">Dashboard</NavLink>
                                    <div className="flex items-center my-5">
                                        <Link to={'/signin'}>
                                            <button className="text-sm px-3 py-2 border-2 font-semibold text-light_purple rounded border-light_purple hover:bg-hover_btn hover:text-white">Sign in</button>
                                        </Link>
                                        <Link to={'/signup'}>
                                            <button className="text-sm px-3 py-2 font-semibold text-white rounded border-light_purple bg-light_purple  hover:bg-hover_btn">Sign up</button>
                                        </Link>
                                    </div>
                                </ul>
                            </nav>
                        </div>

                        <div>
                            <Link to={'/'}>
                                <img className="w-16 lg:flex hidden cursor-pointer" src={logo} alt="" />
                            </Link>
                        </div>
                        {
                            location.pathname == '/' ?
                                <>
                                    <div className="md:flex-1 lg:ml-5">
                                        <form className="hidden md:block md:w-full">
                                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                        <path className="text-light_purple" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                    </svg>
                                                </div>
                                                <input type="search" name='title' className="block w-full p-4 pl-10 text-sm text-gray-900 border border-light_gray rounded-lg bg-white focus:outline-none focus:border-light_purple" placeholder="Search by title" />
                                                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-light_purple hover:bg-light_purple focus:ring-4 focus:outline-none focus:ring-light_purple font-medium rounded-lg text-sm px-4 py-2">Search</button>
                                            </div>
                                        </form>
                                    </div>
                                </>
                                :
                                " "
                        }
                    </div>
                    {
                        location.pathname == '/' ?
                            <>
                                <div className="navbar-center md:hidden flex">
                                    <form className="lg:flex-1 lg:ml-9">
                                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path className="text-light_purple" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                </svg>
                                            </div>
                                            <input type="search" name='title' className="block w-full p-4 pl-10 text-sm text-gray-900 border border-light_gray rounded-lg bg-white focus:outline-none focus:border-light_purple" placeholder="Search by title" />
                                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-light_purple hover:bg-light_purple focus:ring-4 focus:outline-none focus:ring-light_purple font-medium rounded-lg text-sm px-4 py-2">Search</button>
                                        </div>
                                    </form>
                                </div>
                            </>
                            :
                            " "
                    }
                    <div className="navbar-end">
                        <Link to={'/'}>
                            <img className="w-14 flex lg:hidden" src={logo} alt="" />
                        </Link>

                        {
                            user ?
                                <ul className="menu menu-horizontal items-center hidden lg:flex">
                                    <div className="flex justify-center items-center text-light_blue">
                                        <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                                            <NavLink to="/">Home</NavLink>
                                            <NavLink to="/addblog">Add Blog</NavLink>
                                            <Link className="ml-3" to={'/dashboard'}><a>Dashboard</a></Link>
                                        </nav>
                                        <div className="dropdown dropdown-end text-[#474f85] font-bold font-roboto">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 border-black border-2 rounded-full">
                                                    <img src={currentUser?.photo ? currentUser?.photo : ``} />
                                                </div>
                                            </label>
                                            <ul tabIndex={0} className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                                <Link>{currentUser.name}</Link>
                                                <Link to={'/signup'}>Add Another Account</Link>
                                                <li className="cursor-pointer" onClick={handleLogOut}>Logout</li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                                :
                                <>
                                    <div className="hidden lg:flex gap-2 md:gap-5 items-center">
                                        <Link to={'/signin'}>
                                            <button className="py-2 px-4 font-semibold border-2 rounded border-light_purple  text-light_purple hover:bg-hover_btn hover:text-white">Sign in</button>
                                        </Link>
                                        <Link to={'/signup'}>
                                            <button className="py-2 px-4 font-semibold rounded border-light_purple bg-light_purple text-white hover:bg-hover_btn">Sign up</button>
                                        </Link>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div> */}

            <div className="fixed top-0 w-full z-50 px-5bg-white/90 backdrop-blur-sm shadow-md">
                <div className="navbar">
                    <div className="navbar-start md:space-x-5">
                        <div tabIndex={0} role="button">
                            <div className="w-16">
                                <Link to={'/'}>
                                    <img
                                        alt="logo"
                                        src={logo} />
                                </Link>
                            </div>
                        </div>
                        {
                            location.pathname == '/' ?
                                <input type="text" placeholder="Search by title..." className="hidden md:flex border text-lg p-1 px-3 lg:w-[30rem] border-[#dbdbde] outline-[#dbdbde] rounded-lg text-black"></input>
                                :
                                ""
                        }

                    </div>
                    {/* for mobile screen: search*/}
                    {
                        location.pathname == '/' ?
                            <div className="navbar-center flex md:hidden">
                                <input type="text" placeholder="Search by title..." className="border text-lg p-1 px-3 w-44 border-[#dbdbde] outline-[#dbdbde] rounded-lg text-black"></input>
                            </div>
                            :
                            ""
                    }
                    <div className="navbar-end lg:space-x-6">
                        {
                            user ?
                                <>
                                    <div className="hidden md:flex">
                                        <button className="button-48" role="button"><span className="font-semibold text-[#6a61d1] hover:text-white"><Link to={"/addblog"}>Create Blog</Link></span></button>
                                    </div>
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img
                                                    src={currentUser?.photo ? currentUser?.photo : ``} />
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content w-52 mt-3 p-2 rounded-md shadow font-semibold text-center border-2 border-[#dbdbde] bg-white/90 text-black backdrop-blur-sm">
                                            <div className="py-2 px-4 font-semibold border-b hover:text-[#302ba7] hover:bg-[#dbdbde] cursor-pointer border-[#dbdbde]"><Link to={"/dashboard"}>Dashboard</Link></div>
                                            <div className="py-2 px-4 font-semibold border-b hover:text-[#302ba7] hover:bg-[#dbdbde] cursor-pointer border-[#dbdbde]"><Link to={"/dashboard"}>Setting</Link></div>
                                            <div className="py-2 px-4 font-semibold border-b hover:text-[#302ba7] hover:bg-[#dbdbde] cursor-pointer border-[#dbdbde] last:border-b-0" onClick={handleLogOut}>Logout</div>
                                        </ul>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="hidden md:flex space-x-3">
                                        <Link to={'/signin'}>
                                            <button className="button-48" role="button"><span className="font-semibold text-[#6a61d1] hover:text-white !normal-case">Sign in</span></button>
                                        </Link>
                                        <Link to={'/signup'}>
                                            <button className="py-2 px-4 font-semibold rounded border-light_purple bg-[#6a61d1] text-white hover:bg-[#302ba7]">Create Account</button>
                                        </Link>
                                    </div>
                                    {/* mobile screen: sign in/ sign up*/}
                                    <div className="md:hidden flex">
                                        <div className="dropdown dropdown-end">
                                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                                <FaBars style={{ width: '20px', height: '20px' }} />
                                            </div>
                                            <ul className="menu menu-sm dropdown-content w-52 mt-3 p-2 rounded-md shadow font-semibold border border-[#dbdbde] bg-white/90 text-black backdrop-blur-sm">
                                                <Link to={'/signin'} className="px-4 py-2 hover:text-[#302ba7] hover:bg-[#dbdbde] cursor-pointer border-b border-[#dbdbde]">Sign in</Link>
                                                <Link to={'/signup'} className="px-4 py-2 hover:text-[#302ba7] hover:bg-[#dbdbde] cursor-pointer border-b border-[#dbdbde] last:border-b-0">Create Account</Link>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        </>

    );
};

export default NavBar;



NavBar.propTypes = {
    handleSearchFilter: PropTypes.func
};
