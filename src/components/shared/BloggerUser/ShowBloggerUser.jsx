import PropTypes from 'prop-types';
import FollowFunctionality from '../FollowFunctionality/FollowFunctionality';
import useUsers from '../../../hooks/useUsers';
import { Link } from 'react-router-dom';
import { CiCalendarDate } from "react-icons/ci";


const ShowBloggerUser = ({ blog }) => {

    const { owner_name, owner_image, owner_Email, date } = blog
    const [users] = useUsers();
    const currentUser = users.length > 0 ? users[0] : {};

    return (
        <>
            <div
                className="w-full bg-mainTheme relative shadow-lg overflow-hidden hover:shadow-xl group rounded-xl p-5 transition-all duration-500 transform">
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
                                <Link className='text-xm text-textSmallGray font-bold' to={`/dashboard/profile`}>
                                    <h1 className="">
                                        {owner_name}
                                    </h1>
                                </Link>
                        }
                        <a
                            className="text-sm font-medium text-textSmallGray">
                            {owner_Email}
                        </a>
                        <div className="flex gap-2 justify-stretch items-center group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
                            <CiCalendarDate className='text-textSmallGray' style={{ width: '20px', height: '20px' }} />
                            <span className='text-sm font-medium text-textSmallGray'>{date}</span>
                        </div>
                    </div>
                </div>
                <div className="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 right-1 rounded-lg">
                    {
                        currentUser?.email !== owner_Email ?
                            <FollowFunctionality email={owner_Email}></FollowFunctionality>
                            :
                            <>
                                <button className="py-2 px-4 font-semibold rounded border-light_purple bg-primaryColor text-white hover:bg-primaryHover">
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