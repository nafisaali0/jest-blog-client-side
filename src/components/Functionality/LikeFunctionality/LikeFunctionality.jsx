import useUsers from './../../../hooks/useUsers';
import { PropTypes } from 'prop-types';
import useLikes from "../../../hooks/useLikes";
import { AiFillHeart } from "react-icons/ai";
// import { FcLike } from "react-icons/fc";
import { Slide, toast } from "react-toastify";
import { useEffect, useState } from 'react';


const LikeFunctionality = ({ id }) => {
    // const [initialLikes, refetch] = useLikes();
    // const [users] = useUsers();
    // const user = users?.length > 0 ? users[0] : null;

    // const checkBlog = initialLikes?.find(like => like?.blog_id === id);

    // const handleLike = async () => {
    //     if (!user) {
    //         toast.info('Please login to like posts!', {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: true,
    //             closeOnClick: false,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: 1,
    //             theme: "light",
    //             transition: Slide,
    //         });
    //         return;
    //     }

    //     const newLike = {
    //         blog_id: id,
    //         owner_name: user?.name,
    //         owner_image: user?.photo,
    //         owner_email: user?.email,
    //         like: 1
    //     };

    //     try {
    //         const response = await fetch("https://blog-server-side-ochre.vercel.app/likes", {
    //             method: "POST",
    //             headers: { "content-type": "application/json" },
    //             body: JSON.stringify(newLike),
    //         });

    //         const data = await response.json();

    //         if (data.status === "liked") {
    //             toast.success('👍 Liked!', {
    //                 position: "top-right",
    //                 autoClose: 5000,
    //                 hideProgressBar: true,
    //                 closeOnClick: false,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: 1,
    //                 theme: "light",
    //                 transition: Slide,
    //             });
    //         } else if (data.status === "unliked") {
    //             toast('👎 Unliked!', {
    //                 position: "top-right",
    //                 autoClose: 5000,
    //                 hideProgressBar: true,
    //                 closeOnClick: false,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: 1,
    //                 theme: "light",
    //                 transition: Slide,
    //             });
    //         }

    //         // fresh data আনো
    //         refetch();
    //     } catch (error) {
    //         console.error("Error liking/unliking:", error);
    //     }
    // };

    // new
    const [initialLikes, refetch] = useLikes();
    const [users] = useUsers();
    const user = users?.length > 0 ? users[0] : null;

    // Local state for like status
    const [liked, setLiked] = useState(false);
    const [loading, setLoading] = useState(false);

    // Initialize local liked state on mount or initialLikes change
    useEffect(() => {
        const blogLike = initialLikes?.find(like => like?.blog_id === id);
        setLiked(!!blogLike);
    }, [initialLikes, id]);

    const handleLike = async () => {
        if (!user) {
            toast.info('Please login to like posts!', { theme: "light", transition: Slide });
            return;
        }

        // Instant UI change
        setLiked(prev => !prev);
        setLoading(true);

        const newLike = {
            blog_id: id,
            owner_name: user?.name,
            owner_image: user?.photo,
            owner_email: user?.email,
            like: 1
        };

        try {
            const response = await fetch("https://blog-server-side-ochre.vercel.app/likes", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(newLike),
            });

            const data = await response.json();

            if (data.status === "liked") {
                toast.success('👍 Liked!', { theme: "light", transition: Slide });
            } else if (data.status === "unliked") {
                toast('👎 Unliked!', { theme: "light", transition: Slide });
            }

            // Update local liked state based on response (optional)
            setLiked(data.status === "liked");

            // Refetch backend data if needed
            await refetch();
        } catch (error) {
            console.error("Error liking/unliking:", error);
            // revert local state if API fails
            setLiked(prev => !prev);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* {checkBlog ? (
                <FcLike title="Unlike" onClick={handleLike} className="cursor-pointer" style={{ width: "20px", height: "20px" }} />
            ) : (
                <AiFillHeart title="Like" onClick={handleLike} className="text-[#6B6B6B] cursor-pointer" style={{ width: "20px", height: "20px" }} />
            )} */}

            {/* new */}

            {loading ? (
                <div className="w-5 h-5 rounded-full animate-pulse bg-gray-300"></div>
            ) : (
                <AiFillHeart
                    title={liked ? "Unlike" : "Like"}
                    onClick={handleLike}
                    className={`cursor-pointer transition-colors duration-200 ${liked ? 'text-iconRed' : 'text-textSmallGray'}`}
                    style={{ width: "20px", height: "20px" }}
                />
            )}
        </>
    );
};



export default LikeFunctionality;
LikeFunctionality.propTypes = {
    id: PropTypes.number
};