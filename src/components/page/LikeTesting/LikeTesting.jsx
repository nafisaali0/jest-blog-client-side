import useUsers from "../../../hooks/useUsers";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { HiOutlineHeart } from "react-icons/hi";
import { HiMiniHeart } from "react-icons/hi2";


const LikeTesting = ({ blogId }) => {
    const axiosPublic = useAxiosPublic();
    const [users] = useUsers();
    const user = users?.length > 0 ? users[0] : null;
    const userEmail = user?.email;

    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {
        if (!blogId || !userEmail) return;

        const fetchLikes = async () => {
            const res = await axiosPublic.get(`/likes/${blogId}/${userEmail}`);
            setLikeCount(res.data.count || 0);
            setLiked(res.data.liked);
        };

        fetchLikes();
    }, [blogId, userEmail, axiosPublic]);

    const handleLike = async () => {
        if (!userEmail) {
            alert("Please login to like this post.");
            return;
        }

        const res = await axiosPublic.post("/likes", { blogId, userEmail });
        setLiked(res.data.liked);
        setLikeCount(res.data.count);
    };

    return (
        <>
            <div className="flex justify-center items-center space-x-1">
                <div onClick={handleLike} className="text-2xl">
                    {liked ?
                        <div className="text-sm text-iconRed font-medium"><HiMiniHeart/></div>
                        :
                        <div className="text-sm text-textSmallGray font-medium"><HiOutlineHeart/></div>}
                </div>
                <span className="text-sm text-textSmallGray font-medium">{likeCount}</span>
            </div>
        </>
    )
}

export default LikeTesting
