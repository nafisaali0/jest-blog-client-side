import { Link, useLocation } from "react-router-dom";
import bar from '../../../../assets/image/logo/upLogo7-removebg.png'
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { PiUserSquareThin } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";
import { PropTypes } from 'prop-types';
import useUsers from './../../../../hooks/useUsers';


const NavDashboard = ({ isOpen, setIsOpen }) => {

    const { user, logOut } = useContext(AuthContext)
    const [users] = useUsers();
    const currentUser = users.length > 0 ? users[0] : {};
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
            <div className="flex flex-col h-screen">
                {/* Logo */}
                <div className="flex gap-2 justify-start items-center cursor-pointer p-3 border-b border-borderColour">
                    <figure
                        onClick={() => {
                            if (window.innerWidth <= 768) { // 768px or less = mobile
                                setIsOpen(!isOpen);
                            }
                        }}
                    >
                        <img className="w-[37px]" src={bar} alt="" />
                    </figure>
                    <Link to={'/'}>
                        <h1 className={`md:flex  text-[26px] font-semibold text-black ${isOpen ? "flex" : "hidden"}`}>JEST BLOG</h1>
                    </Link>
                </div>

                {/* Middle navigation */}
                <nav className="mt-20 flex-1 p-3">
                    <ul className="space-y-3">
                        <Link
                            to="/dashboard"
                            className={`flex justify-start items-center gap-2 rounded p-[11px] transition-colors
                                   ${ifActive('/dashboard')
                                    ? 'bg-primaryColor text-white'
                                    : 'text-textSmallGray'
                                }`}
                        >
                            <RxDashboard
                                className={`${ifActive('/dashboard') ? 'text-white' : 'text-textSmallGray'}`}
                            />
                            <span
                                className={`md:flex text-md font-semibold
                                 ${ifActive('/dashboard') ? 'text-white' : 'text-textSmallGray'}  
                                 ${isOpen ? "flex" : "hidden"}`}
                            >
                                Dashboard
                            </span>
                        </Link>
                        <Link
                            to='/dashboard/profile'
                            className={`flex justify-start items-center gap-2 rounded p-[11px] transition-colors
                                   ${ifActive('/dashboard/profile') ? 'bg-primaryColor text-white' : 'text-textSmallGray'}`}
                        >
                            <PiUserSquareThin
                                style={{
                                    width: 20,
                                    height: 20,
                                    transform: "scale(1.08)",
                                }}
                                className={`${ifActive('/dashboard/profile') ? 'text-white ' : 'text-textSmallGray'}`}
                            />
                            <span
                                className={`md:flex text-md font-semibold 
                                    ${ifActive('/dashboard/profile') ? 'text-white' : 'text-textSmallGray'}
                                    ${isOpen ? "flex" : "hidden"}`}
                            >
                                Profile
                            </span>
                        </Link>
                        <Link
                            to='/dashboard/profile-setting'
                            className={`flex justify-start items-center gap-2 rounded p-[11px] transition-colors
                                   ${ifActive('/dashboard/profile-setting')
                                    ? 'bg-primaryColor text-white'
                                    : 'text-textSmallGray'
                                }`}
                        >
                            <SlSettings
                                className={`${ifActive('/dashboard/profile-setting') ? 'text-white' : 'text-textSmallGray'}`}
                            />
                            <span
                                className={`md:flex text-md font-semibold 
                                ${ifActive('/dashboard/profile-setting') ? 'text-white' : 'text-textSmallGray'}
                                 ${isOpen ? "flex" : "hidden"}`}
                            >
                                Setting
                            </span>
                        </Link>
                    </ul>
                </nav>

                {/* Bottom user section */}
                <div className="flex md:justify-between items-center leading-4 border-t border-borderColour p-2 py-5">
                    <div className="flex gap-2 items-center">
                        {
                            currentUser?.photo ?
                                <>
                                    <div className="avatar flex">
                                        <div className="w-9 rounded-full">
                                            <img src={currentUser?.photo} />
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="w-10 h-10 rounded-full bg-bodyColor flex items-center justify-center">
                                        <span className="text-sm font-normal text-black">
                                            {currentUser?.name?.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                </>
                        }
                        <div className={`md:flex flex-col max-w-[150px] ${isOpen ? "flex" : "hidden"}`}>
                            <h1 className="text-[14px] font-medium text-black truncate whitespace-nowrap overflow-hidden">{currentUser?.name}</h1>
                            <span
                                className="text-[12px] font-normal text-textSmallGray truncate whitespace-nowrap overflow-hidden"
                                title={currentUser?.email}
                            >
                                {currentUser?.email}
                            </span>
                        </div>
                    </div>
                    <div className={`md:flex ${isOpen ? "flex" : "hidden"}`}>
                        <div className="dropdown dropdown-top dropdown-end">
                            <HiOutlineEllipsisVertical
                                tabIndex={0}
                                role="button"
                                style={{ width: '20px', height: '20px' }} />
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content mb-5 z-1 w-52 p-2 rounded-md shadow font-semibold text-center border-2 border-borderColour bg-mainTheme text-black backdrop-blur-sm">
                                <div className="py-2 px-4 text-md font-semibold border-b hover:text-primaryHover hover:border-borderColour cursor-pointer border-borderColour last:border-b-0" onClick={handleLogOut}>Logout</div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavDashboard;

NavDashboard.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
};