import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from './../../../Providers/AuthProvider';
import './navbar.css'
import logo from '../../../assets/image/logo/logof3.png'

const NavBar = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <div className="bg-[#e7e7e9]">
                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost text-[#5b608b] lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#e7e7e9] rounded-box w-52">
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/addblog">Add Blog</NavLink>
                                    <NavLink to="/allblogs">All Blogs</NavLink>
                                    <NavLink to="/blog">Blog</NavLink>
                                    {
                                        user?.email ? <NavLink to="/wishlist">Wishlist</NavLink> : ''
                                    }
                                </ul>
                            </nav>
                        </div>
                        <img className="w-20 lg:flex hidden" src={logo} alt="" />
                    </div>
                    <div className="navbar-end ">
                        <img className="w-20 flex lg:hidden" src={logo} alt="" />
                        <ul className="menu menu-horizontal items-center hidden lg:flex">
                            <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/addblog">Add Blog</NavLink>
                                <NavLink to="/allblogs">All Blogs</NavLink>
                                <NavLink to="/blog">Blog</NavLink>
                                {
                                    user?.email ? <NavLink to="/wishlist">Wishlist</NavLink> : ''
                                }
                            </nav>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );
};

export default NavBar;