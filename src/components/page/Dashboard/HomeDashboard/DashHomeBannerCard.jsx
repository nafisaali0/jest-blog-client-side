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
        let blogComments  = 0;
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
            <div className="max-w-screen-2xl mx-auto px-3 py-16 -my-20 overflow-hidden">
                <div className="flex items-center gap-4 flex-shrink flex-col md:flex-row">
                    <div className="mt-6 w-96 bg-white p-5 drop-shadow-xl">
                        <div>
                            <FaBloggerB className="mb-4 h-12 w-12 bg-[#9ba6a5] text-white rounded p-2" />
                            <div color="blue-gray" className="mb-2 text-xl font-semibold">
                                Total Blogs
                            </div>
                            <div className="text-6xl font-bold">
                                <h1>{userBlogs.length}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 w-96 bg-white p-5 drop-shadow-xl">
                        <div>
                            <BiSolidCommentDetail className="mb-4 h-12 w-12 bg-[#9ba6a5] text-white rounded p-2" />
                            <div color="blue-gray" className="mb-2 text-xl font-semibold">
                                Total Comments
                            </div>
                            <div className="text-6xl font-bold">
                                <h1>{countCmtBlogs}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 w-96 bg-white p-5 drop-shadow-xl">
                        <div>
                            <BiSolidLike className="mb-4 h-12 w-12 bg-[#9ba6a5] text-white rounded p-2" />
                            <div color="blue-gray" className="mb-2 text-xl font-semibold">
                                Total Blogs
                            </div>
                            <div className="text-6xl font-bold">
                                <h1>{userBlogs.length}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 w-96 bg-white p-5 drop-shadow-xl">
                        <div>
                            <RiUserFollowFill className="mb-4 h-12 w-12  bg-[#9ba6a5] text-white rounded p-2" />
                            <div color="blue-gray" className="mb-2 text-xl font-semibold">
                                Total Blogs
                            </div>
                            <div className="text-6xl font-bold">
                                <h1>{userBlogs.length}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashHomeBannerCard;