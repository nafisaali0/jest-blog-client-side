import PropTypes from 'prop-types';
import FollowFunctionality from '../FollowFunctionality/FollowFunctionality';
import useUsers from '../../../hooks/useUsers';
import { Link } from 'react-router-dom';
// import './bloggerStyle.css'
import { CiCalendarDate } from "react-icons/ci";


const ShowBloggerUser = ({ blog }) => {

    const { owner_name, owner_image, owner_Email, date } = blog
    const [users] = useUsers();
    const currentUser = users.length > 0 ? users[0] : {};

    return (
        <>
            {/* <div className='flex gap-8 w-full bg-[#ffffffE6] rounded-lg shadow hover:bg-hover_gray p-10'>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={owner_image} />
                    </div>
                </div>
                <div>
                    <h1 className='text-lg font-bold pt-5'>{owner_name}</h1>
                    {
                        currentUser?.email !== owner_Email ?
                            <Link className='text-sm font-bold' to={`/blogs/bloggeremail/${owner_Email}`}>
                                <p>CheckOut Profile</p>
                            </Link>
                            :
                            <Link className='text-sm font-bold' to={`/dashboard/profile`}>
                                <p>CheckOut Profile</p>
                            </Link>
                    }
                </div>
                <div>
                    {
                        currentUser?.email !== owner_Email ?
                            <div className="badge  p-3 font-bold text-white bg-light_purple hover:bg-hover_btn cursor-pointer"><FollowFunctionality
                                email={owner_Email}></FollowFunctionality></div>
                            :
                            <div className="badge  p-3 font-bold text-white bg-hover_btn cursor-pointer">Editor</div>
                    }

                </div>
            </div> */}

            {/* new test */}
            <div
                className="w-full bg-[#ffffffE6] relative shadow-lg overflow-hidden hover:shadow-xl group rounded-xl p-5 transition-all duration-500 transform">
                <div className="flex items-center gap-4">
                    <img src={owner_image}
                        className="w-24 group-hover:w-28 group-hover:h-28 h-24 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                    />
                    <div className="w-fit transition-all transform duration-500 space-y-2">

                        {/* edit */}
                        {
                            currentUser?.email !== owner_Email ?
                                <Link className='text-xm font-bold' to={`/blogs/bloggeremail/${owner_Email}`}>
                                    <h1 className="text-black font-bold">
                                        {owner_name}
                                    </h1>
                                </Link>
                                :
                                <Link className='text-base text-[#6B6B6B] font-bold' to={`/dashboard/profile`}>
                                    <h1 className="">
                                        {owner_Email}
                                    </h1>
                                </Link>
                        }
                        <a
                            className="text-base font-medium text-[#6B6B6B]">
                            mary@gmail.com
                        </a>
                        <div className="flex gap-2 justify-stretch items-center group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
                            <CiCalendarDate className='text-[#6B6B6B] font-medium' style={{ width: '20px', height: '20px' }} />
                            <span className='text-base font-medium text-[#6B6B6B]'>{date}</span>
                        </div>
                    </div>
                </div>
                <div className="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 right-1 rounded-lg">
                    {/* edit */}
                    {
                        currentUser?.email !== owner_Email ?
                            <FollowFunctionality email={owner_Email}></FollowFunctionality>
                            :
                            <>
                                <button
                                    className="bg-gradient-to-r from-[#6a61d1] to-[#302ba7] hover:from-[#6a61d1] hover:to-[#302ba7] text-white font-medium py-1 px-3 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                                >
                                    Editor
                                </button>
                            </>

                    }
                </div>
            </div >
        </>
    );
};

ShowBloggerUser.propTypes = {
    blog: PropTypes.obj,
};

export default ShowBloggerUser;