import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useUsers from "../../../hooks/useUsers";
import { CiCalendarDate } from "react-icons/ci";
import FollowFunctionality from './../../Functionality/FollowFunctionality/FollowFunctionality';
import useAllUsers from './../../../hooks/useAllUsers';
import useBlogs from './../../../hooks/useBlogs';

const BloggerUser = () => {

    const [bloggerUsers, setBloggerUsers] = useState([]);
    const [allUsers] = useAllUsers();
    const [blogs] = useBlogs();
    const [displayCount, setDisplayCount] = useState(2);
    const [users] = useUsers();
    const currentUser = users.length > 0 ? users[0] : {};

    useEffect(() => {
        if (allUsers?.length > 0 && blogs?.length > 0) {
            const filtered = allUsers.filter(user =>
                blogs?.some(blog => blog?.owner_Email === user?.email)
            );
            setBloggerUsers(filtered);
        }
    }, [allUsers, blogs]);

    const handleSeeAll = () => {
        setDisplayCount(displayCount + 3);
    }

    return (
        <>
            <div className="hidden lg:flex flex-col">
                <h1 className="text-xl font-bold text-black my-5">Blogger</h1>
                <div className="grid gap-5">
                    {
                        bloggerUsers?.slice(0, displayCount).map(blog =>
                            <>
                                <div
                                    className="w-full bg-mainTheme relative shadow-lg overflow-hidden hover:shadow-xl group rounded-xl p-5 transition-all duration-500 transform">
                                    <div className="flex items-center gap-4">
                                        <img src={blog?.photo} className="w-24 group-hover:w-28 group-hover:h-28 h-24 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                                        />
                                        <div className="w-fit transition-all transform duration-500 space-y-2">

                                            {
                                                currentUser?.email !== blog?.email ?
                                                    <Link className='text-xm font-bold' to={`/profile-blogger/${encodeURIComponent(blog.email)}`}>
                                                        <h1 className="text-black font-bold">
                                                            {blog?.name}
                                                        </h1>
                                                    </Link>
                                                    :
                                                    <Link className='text-xm text-textSmallGray font-bold' to={`/dashboard/profile`}>
                                                        <h1 className="">
                                                            {blog?.name}
                                                        </h1>
                                                    </Link>
                                            }
                                            <a
                                                className="text-sm font-medium text-textSmallGray">
                                                {blog?.email}
                                            </a>
                                            <div className="flex gap-2 justify-stretch items-center group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
                                                <CiCalendarDate className='text-textSmallGray' style={{ width: '20px', height: '20px' }} />
                                                <span className='text-sm font-medium text-textSmallGray'>{blog?.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 right-1 rounded-lg">
                                        <FollowFunctionality email={blog?.email} />
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
                <div>
                    {bloggerUsers?.length > 2 && displayCount < bloggerUsers?.length &&
                        <button className="buttonView mt-4 font-semibold" onClick={handleSeeAll}>View More</button>
                    }
                </div>
            </div>
        </>
    );
};

export default BloggerUser;


