import { Link } from "react-router-dom";
import logo from '../../../assets/image/logo/logoBlack_noBG.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { PropTypes } from 'prop-types';
import useUsers from "../../../hooks/useUsers";
import { FaBars } from "react-icons/fa";
import SearchFunctionality from "../../Functionality/SearchFunctionality/SearchFunctionality";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
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
            <div className="fixed top-0 w-full z-50 px-2 lg:px-5 bg-mainTheme backdrop-blur-sm shadow-md">
                <div className="navbar px-5">
                    <div className="navbar-start md:space-x-5">
                        <div tabIndex={0} role="button">
                            <Link to={'/'}>
                                <figure className="w-16">
                                    <img
                                        alt="logo"
                                        src={logo} />
                                </figure>
                            </Link>
                        </div>

                        <SearchFunctionality />
                    </div>
                    <div className="navbar-end">
                        {
                            user ?
                                <>
                                    <div className="hidden md:flex mx-3">
                                        {
                                            location.pathname !== '/addblog' ?
                                                <button className="buttonPrimary">
                                                    <span><Link to={"/addblog"}>Create Blog</Link></span>
                                                </button>
                                                :
                                                ""
                                        }
                                    </div>
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            {currentUser?.photo ? (
                                                <div className="w-10 rounded-full">
                                                    <img src={currentUser.photo} alt={currentUser?.name} />
                                                </div>
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-bodyColor pt-2">
                                                    <span className="text-base font-medium text-black">
                                                        {currentUser?.name?.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content w-52 mt-3 p-2 rounded-md shadow font-semibold text-center border-2 border-borderColour bg-mainTheme text-black backdrop-blur-sm">
                                            <a href={"/dashboard"}><div className="py-2 px-4 font-semibold border-b hover:text-primaryHover hover:bg-borderColour cursor-pointer border-borderColour">Dashboard</div></a>
                                            <a href={"dashboard/profile-setting"}><div className="hidden lg:flex justify-center py-2 px-4 font-semibold border-b hover:text-primaryHover hover:border-borderColour cursor-pointer border-borderColour">Setting</div></a>
                                            <a href={"/wishlist"}><div className="lg:hidden flex justify-center py-2 px-4 font-semibold border-b hover:text-primaryHover hover:border-borderColour cursor-pointer border-borderColour">Reading List</div></a>
                                            <a href={"/featureblog"}><div className="lg:hidden flex justify-center py-2 px-4 font-semibold border-b hover:text-primaryHover hover:border-borderColour cursor-pointer border-borderColour">Feature Blog</div></a>
                                            <div className="py-2 px-4 font-semibold border-b hover:text-primaryHover hover:border-borderColour cursor-pointer border-borderColour last:border-b-0" onClick={handleLogOut}>Logout</div>
                                        </ul>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="hidden md:flex space-x-3">
                                        <Link to={'/signin'}>
                                            <button className="buttonPrimary" role="button"><span className="font-semibold text-primaryColor hover:text-white !normal-case">Sign in</span></button>
                                        </Link>
                                        <Link to={'/signup'}>
                                            <button className="py-2 px-4 font-semibold rounded bg-primaryColor text-white hover:bg-primaryHover">Create Account</button>
                                        </Link>
                                    </div>
                                    {/* mobile screen: sign in/ sign up*/}
                                    <div className="md:hidden flex">
                                        <div className="dropdown dropdown-end">
                                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                                <FaBars style={{ width: '20px', height: '20px' }} />
                                            </div>
                                            <ul className="menu menu-sm dropdown-content w-52 mt-3 p-2 rounded-md shadow font-semibold border border-borderColour bg-mainTheme text-black backdrop-blur-sm">
                                                <Link to={'/signin'} className="px-4 py-2 hover:text-primaryHover hover:bg-borderColour cursor-pointer border-b border-borderColour">Sign in</Link>
                                                <Link to={'/signup'} className="px-4 py-2 hover:text-primaryHover hover:bg-borderColour cursor-pointer border-b border-borderColour last:border-b-0">Create Account</Link>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div >
        </>

    );
};

export default NavBar;



NavBar.propTypes = {
    handleSearchFilter: PropTypes.func
};
