import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './../../../Providers/AuthProvider';
import logo from '../../../assets/image/logo/Logo_removebg.png'
import icon1 from '../../../assets/image/icons/facebook.svg'
import icon2 from '../../../assets/image/icons/linkedin.svg'
import icon3 from '../../../assets/image/icons/github1.svg'
const SubNavBar = () => {
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
        <div className="flex items-center h-[4rem] p-2">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className='flex gap-1 items-center flex-wrap justify-center md:justify-start'>
                        <a href=""><img className='w-[30px] h-[30px]' src={icon1} alt="" /></a>
                        <a href=""><img className='w-[30px] h-[30px]' src={icon2} alt="" /></a>
                        <a href=""><img className='w-[30px] h-[30px]' src={icon3} alt="" /></a>
                    </div>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-end text-[#474f85] font-bold font-roboto">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-20 lg:w-36 border-black border-2 rounded-full">
                                        <img src={user.photoURL ? user.photoURL : `${logo}`} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li><a>{user.email}</a></li>
                                    <li><a>{user.displayName}</a></li>
                                    <Link className="ml-3" to={'/signup'}><a>Add Another Account</a></Link>
                                    <li onClick={handleLogOut} ><a>Logout</a></li>
                                </ul>
                            </div>
                            :
                            <>
                                <div className="flex gap-2 md:gap-5 items-center">
                                    <Link to={'/signin'}>
                                        <button className="px-2 md:px-6 lg:py-2 md:py-1 border-black border-r-2 bg-white md:text-xl text-sm text-black font-semibold">Sign in</button>
                                    </Link>
                                    <Link to={'/signup'}>
                                        <button className="px-3 py-1 md:px-6 lg:py-2 md:py-1 border-black bg-black text-white md:text-xl text-sm rounded-full">Sign up</button>
                                    </Link>
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default SubNavBar;