import useUsers from "../../../hooks/useUsers";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const LikeTesting = ({ blogId }) => {
    const axiosPublic = useAxiosPublic();
    const [users] = useUsers();
    const user = users?.length > 0 ? users[0] : null;
    const userEmail = user?.email;

    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    // ✅ Load count + liked status
    useEffect(() => {
        if (!blogId || !userEmail) return;

        const fetchLikes = async () => {
            const res = await axiosPublic.get(`/likes/${blogId}/${userEmail}`);
            setLikeCount(res.data.count || 0);
            setLiked(res.data.liked);
        };

        fetchLikes();
    }, [blogId, userEmail, axiosPublic]);

    // ✅ Toggle like/unlike
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
            <div className="flex items-center space-x-2">
                <button onClick={handleLike} className="text-2xl">
                    {liked ? "❤️" : "🤍"}
                </button>
                <span>{likeCount}</span>
            </div>
        </>
    )
}

export default LikeTesting
