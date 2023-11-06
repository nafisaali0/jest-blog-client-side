import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from './../../../Providers/AuthProvider';
import './navbar.css'
import logo from '../../../assets/image/logo/Logo_removebg.png'

const NavBar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="bg-[#e5e6e6]">
            <div className=" container mx-auto overflow-hidden">
                <div className="drawer">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        {/* Navbar */}
                        <div className="w-full navbar bg-base-300">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 px-2 mx-2">
                                <img className="w-[90px] h-[80px]" src={logo} alt="logo" />
                                {/* <h1>JestBlog</h1> */}
                            </div>
                            <div className="flex-none hidden lg:block">
                                <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                                    <ul className="menu menu-horizontal">
                                        {/* Navbar menu content here */}
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/addProduct">Add Blog</NavLink>
                                        <NavLink to="/services">All Blogs</NavLink>
                                        <NavLink to="/blog">Blog</NavLink>
                                        {
                                            user?.email ? <NavLink to="/bookings">Wishlist</NavLink> : ''
                                        }
                                    </ul>
                                </nav>

                            </div>
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200">
                            {/* Sidebar content here */}
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/addProduct">Add Blog</NavLink>
                            <NavLink to="/services">All Blogs</NavLink>
                            <NavLink to="/blog">Blog</NavLink>
                            {
                                user?.email ? <NavLink to="/bookings">Wishlist</NavLink> : ''
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NavBar;