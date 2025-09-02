import useUsers from "../../../hooks/useUsers";
import { PropTypes } from 'prop-types';
import useFollowers from "../../../hooks/useFollowers";
import { useEffect, useState } from "react";
import useBloggerUsers from "../../../hooks/useBloggerUsers";
import { Slide, toast } from "react-toastify";

const FollowFunctionality = ({ bloggerEmail }) => {

    const [bloggerUsers] = useBloggerUsers();
    const [followers] = useFollowers();
    const [users] = useUsers();
    const user = users?.length > 0 ? users[0] : null;
    const [isFollowing, setIsFollowing] = useState(false);

    const isCurrentUserBlogger = bloggerUsers?.some(b => b?.email === user?.email);

    useEffect(() => {
        if (user && followers) {
            const following = followers?.some(
                f => f?.email === user?.email && f?.followersEmail === bloggerEmail
            );
            setIsFollowing(following);
        }
    }, [followers, user, bloggerEmail]);

    const handleFollow = async () => {
        const bloggerInfo = bloggerUsers?.find(b => b?.email === bloggerEmail);
        if (!bloggerInfo) return;

        const followingBloggerInfo = {
            followersName: bloggerInfo?.name,
            followersEmail: bloggerInfo?.email,
            followersImage: bloggerInfo?.photo,
            name: user?.name,
            image: user?.photo,
            email: user?.email,
            follow: 1
        };

        try {
            const response = await fetch('https://blog-server-side-ochre.vercel.app/followers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(followingBloggerInfo)
            });
            const data = await response.json();
            if (data.insertedId) {
                toast.success(`Following ${bloggerInfo.name}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 1,
                    theme: "light",
                    transition: Slide,
                });
                setIsFollowing(true);
            }
        } catch (error) {
            console.error('Error following:', error);
        }
    };
    const handleUnfollow = async () => {
        const followRecord = followers.find(
            f => f?.email === user?.email && f?.followersEmail === bloggerEmail
        );
        if (!followRecord) return;

        try {
            const response = await fetch(`https://blog-server-side-ochre.vercel.app/followers/${followRecord._id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            if (data.deletedCount > 0) {
                toast(`Unfollowed ${followRecord.followersName}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 1,
                    theme: "light",
                    transition: Slide,
                });
                setIsFollowing(false);
            }
        } catch (error) {
            console.error('Error unfollowing:', error);
        }
    };

    return (
        <>
            {
                isCurrentUserBlogger && user?.email === bloggerEmail ? (
                    <button className="rounded-full px-4 py-1 font-semibold bg-primaryColor text-white hover:bg-primaryHover">
                        Editor
                    </button>
                ) : (
                    <button
                        onClick={isFollowing ? handleUnfollow : handleFollow}
                        className="rounded-full px-4 py-1 font-semibold bg-primaryColor text-white hover:bg-primaryHover"
                    >
                        {isFollowing ? "Unfollow" : "Follow"}
                    </button>
                )}

        </>
    );
};

FollowFunctionality.propTypes = {
    bloggerEmail: PropTypes.string,
};

export default FollowFunctionality;
