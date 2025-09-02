import { useEffect, useState } from "react";
import useComment from './../../../../hooks/useComment';
import { RiBloggerLine, RiUserFollowLine } from "react-icons/ri";
import useLikes from './../../../../hooks/useLikes';
// import useUsers from "../../../../hooks/useUsers";
// import useTotalFollower from "../../../../hooks/useTotalFollower";
import { PiHeartBold } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import useUserblogs from "../../../../hooks/useUserblogs";
import useFollowers from './../../../../hooks/useFollowers';

const DashHomeBannerCard = () => {

    const [comments] = useComment();
    const [likes] = useLikes();
    const [countCmtBlogs, setCountCmtBlogs] = useState([]);
    const [countLikeBlogs, setCountLikeBlogs] = useState([]);
    const [userBlogs] = useUserblogs();
    const [followers] = useFollowers();

    useEffect(() => {
        // Count total comments for the user's blogs
        let totalComments = 0;
        let blogComments = 0;
        const countTotalComments = () => {
            userBlogs.forEach(blog => {
                blogComments = comments?.filter(comment => comment?.blog_id === blog?._id)
                totalComments += blogComments?.length;
            });
            setCountCmtBlogs(totalComments);
        };
        countTotalComments();
    }, [userBlogs, comments]);

    useEffect(() => {
        // Count total likes for the user's blogs
        let totalLikes = 0;
        let blogLikes = 0;
        const countTotalLike = () => {
            userBlogs?.forEach(blog => {
                blogLikes = likes?.filter(like => like?.blog_id === blog?._id)
                totalLikes += blogLikes?.length;
            });
            setCountLikeBlogs(totalLikes);
        };
        countTotalLike();
    }, [userBlogs, likes]);

    return (
        <>
            <div
                data-aos="fade-down"
                data-aos-offset="500"
                data-aos-duration="3000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                className="flex justify-start items-start">
                <div className="grid lg:grid-cols-4 grid-cols-2 md:gap-3 gap-1">
                    {/* total blog */}
                    <div className="bg-mainTheme rounded-xl border border-borderColour px-5 py-3 lg:w-72 md:w-60 ">
                        <h1 className="text-md md:text-xl font-medium text-textSmallgray mb-3">Total Blogs</h1>
                        <div className="flex items-center justify-start gap-3">
                            <div className="text-black rounded-full w-10 p-3 bg-primaryLightColor border border-primaryLightColor">
                                <RiBloggerLine />
                            </div>
                            <div className="text-black text-4xl font-bold">
                                {userBlogs?.length}
                            </div>
                        </div>
                    </div>
                    {/* total likes */}
                    <div className="bg-mainTheme rounded-xl border border-borderColour px-5 py-3 lg:w-72 md:w-60 ">
                        <h1 className="text-md md:text-xl font-medium text-textSmallgray mb-3">Total Likes</h1>
                        <div className="flex items-center justify-start gap-2">
                            <div className=" text-black rounded-full w-10 p-3 bg-primaryLightColor border border-primaryLightColor">
                                <PiHeartBold />
                            </div>
                            <div className="text-black text-4xl font-bold">
                                {countLikeBlogs}
                            </div>
                        </div>
                    </div>
                    {/* total comment */}
                    <div className="bg-mainTheme rounded-xl border border-borderColour px-5 py-3 lg:w-72 md:w-60 ">
                        <h1 className="text-md md:text-xl font-medium text-textSmallgray mb-3">Total Comments</h1>
                        <div className="flex items-center justify-start gap-2">
                            <div className=" text-black rounded-full w-10 p-3 bg-primaryLightColor border border-primaryLightColor">
                                <FaRegComment />
                            </div>
                            <div className="text-black text-4xl font-bold">
                                {countCmtBlogs}
                            </div>
                        </div>
                    </div>
                    {/* total followers */}
                    <div className="bg-mainTheme rounded-xl border border-borderColour px-5 py-3 lg:w-72 md:w-60 ">
                        <h1 className="text-md md:text-xl font-medium text-textSmallgray mb-3">Total Followers</h1>
                        <div className="flex items-center justify-start gap-2">
                            <div className="text-black rounded-full w-10 p-3 bg-primaryLightColor border border-primaryLightColor">
                                <RiUserFollowLine />
                            </div>
                            <div className="text-black text-4xl font-bold">
                                {followers?.length}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashHomeBannerCard;