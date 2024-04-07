import { Link, NavLink } from "react-router-dom";
import './navbar.css'
import logo from '../../../assets/image/logo/upLogoedit11.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { PropTypes } from 'prop-types';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)

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
            <div className="bg-body_color fixed top-0 w-full z-50 shadow-md">
                <div className="navbar container mx-auto">
                    <div className="navbar-start flex">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost text-[#5b608b] lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#e7e7e9] rounded-box w-52">
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/addblog">Add Blog</NavLink>
                                    <NavLink to="/allblogs">All Blogs</NavLink>
                                    <NavLink to="/featureblog">Featured Blogs</NavLink>
                                    <NavLink to="/wishlist">Wishlist</NavLink>
                                    <div className="flex items-center">
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
                        <div className="md:flex-1 lg:ml-5">
                            <form className="hidden md:block md:w-full">
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path className="text-light_purple" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" name='title' className="block w-full p-4 pl-10 text-sm text-gray-900 border border-light_gray rounded-lg bg-white focus:ring-light_purple0 focus:border-light_purple" placeholder="Search by title" />
                                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-light_purple hover:bg-light_purple focus:ring-4 focus:outline-none focus:ring-light_purple font-medium rounded-lg text-sm px-4 py-2">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="navbar-center md:hidden flex">
                        <div className="lg:flex-1 lg:ml-9">
                            <form>
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" name='title' className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-light_blue" placeholder="Search by title" />
                                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-light_purple hover:bg-light_purple focus:ring-4 focus:outline-none focus:ring-light_blue font-medium rounded-lg text-sm px-4 py-2">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
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
                                            <NavLink to="/wishlist">Wishlist</NavLink>
                                            {/* <NavLink to="/allblogs">All Blogs</NavLink>
                                    <NavLink to="/featureblog">Featured Blogs</NavLink> */}
                                        </nav>
                                        <div className="dropdown dropdown-end text-[#474f85] font-bold font-roboto">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 border-black border-2 rounded-full">
                                                    <img src={user.photoURL ? user.photoURL : ``} />
                                                </div>
                                            </label>
                                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                                <li><a>{user.displayName}</a></li>
                                                <Link className="ml-3" to={'/dashboard'}><a>Dashboard</a></Link>
                                                <Link className="ml-3" to={'/signup'}><a>Add Another Account</a></Link>
                                                <li onClick={handleLogOut}><a>Logout</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                                :
                                <>
                                    <div className="hidden lg:flex gap-2 md:gap-5 items-center">
                                        <Link to={'/signin'}>
                                            {/* border-r-2 */}
                                            <button className="md:text-2xl md:px-10 md:py-1 lg:py-2 font-semibold border-2 rounded border-light_purple  text-light_purple hover:bg-hover_btn hover:text-white">Sign in</button>
                                        </Link>
                                        <Link to={'/signup'}>
                                            <button className="md:text-2xl md:px-10 md:py-1 lg:py-2 font-semibold rounded border-light_purple bg-light_purple text-white hover:bg-hover_btn">Sign up</button>
                                        </Link>
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
    // blog: PropTypes.obj,
    handleSearchFilter: PropTypes.func
};
