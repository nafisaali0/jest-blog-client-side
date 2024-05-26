// import React from 'react';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useBlogs from './../../../../hooks/useBlogs';
import useComment from './../../../../hooks/useComment';
import { FaBloggerB } from "react-icons/fa6";
import { BiSolidCommentDetail } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { RiUserFollowFill } from "react-icons/ri";

const DashHomeBannerCard = () => {

    const [blogs] = useBlogs();
    const [comments] = useComment();
    const { user } = useContext(AuthContext)
    const [userBlogs, setUserBlogs] = useState([])
    const [countCmtBlogs, setCountCmtBlogs] = useState([])

    useEffect(() => {
        const bloggerBlogs = blogs.filter(blogger => blogger.owner_Email === user.email);
        setUserBlogs(bloggerBlogs)
    }, [blogs, user]);

    useEffect(() => {
        // Count total comments for the user's blogs
        let totalComments = 0;
        let blogComments = 0;
        const countTotalComments = () => {
            userBlogs.forEach(blog => {
                blogComments = comments.filter(comment => comment.blog_id === blog._id)
                totalComments += blogComments.length;
            });
            setCountCmtBlogs(totalComments);
        };
        countTotalComments();
    }, [userBlogs, comments]);

    return (
        <>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 drop-shadow-xl">
                    <div className="flex items-center gap-5 py-2 md:flex-col md:items-start">
                        <div>
                            <FaBloggerB className="mb-4 w-24 h-24 md:w-16 md:h-16 bg-[#9ba6a5] text-white rounded p-2" />
                        </div>
                        <div className="flex-1 md:flex-auto">
                            <h1 className="mb-2 text-xl font-semibold">Total Blogs</h1>
                            <h1 className="text-4xl md:text-6xl font-bold">{userBlogs.length}</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-5 drop-shadow-xl">
                    <div className="flex items-center gap-5 py-2 md:flex-col md:items-start">
                        <div>
                            <BiSolidCommentDetail className="mb-4 w-24 h-24 md:w-16 md:h-16 bg-[#9ba6a5] text-white rounded p-2" />
                        </div>
                        <div className="flex-1 md:flex-auto">
                            <h1 className="mb-2 text-xl font-semibold">Total Comments</h1>
                            <h1 className="text-4xl md:text-6xl font-bold">{countCmtBlogs}</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-5 drop-shadow-xl">
                    <div className="flex items-center gap-5 py-2 md:flex-col md:items-start">
                        <div>
                            <BiSolidLike className="mb-4 w-24 h-24 md:w-16 md:h-16 bg-[#9ba6a5] text-white rounded p-2" />
                        </div>
                        <div className="flex-1 md:flex-auto">
                            <h1 className="mb-2 text-xl font-semibold">Total Likes</h1>
                            <h1 className="text-4xl md:text-6xl font-bold">{countCmtBlogs}</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-5 drop-shadow-xl">
                    <div className="flex items-center gap-5 py-2 md:flex-col md:items-start">
                        <div>
                            <RiUserFollowFill className="mb-4 w-24 h-24 md:w-16 md:h-16 bg-[#9ba6a5] text-white rounded p-2" />
                        </div>
                        <div className="flex-1 md:flex-auto">
                            <h1 className="mb-2 text-xl font-semibold">Followers</h1>
                            <h1 className="text-4xl md:text-6xl font-bold">{countCmtBlogs}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashHomeBannerCard;