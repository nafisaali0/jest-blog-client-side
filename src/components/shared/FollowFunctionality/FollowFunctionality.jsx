import Swal from "sweetalert2";
import useUsers from "../../../hooks/useUsers";
import { PropTypes } from 'prop-types';
import useFollowers from "../../../hooks/useFollowers";
import { useEffect, useState } from "react";
import useUniqueBlogger from "../../../hooks/useUniqueBlogger";

const FollowFunctionality = ({ email, onUnfollow }) => {

    const [users] = useUsers();
    const [uniqueBloggerUser] = useUniqueBlogger();
    const [followers] = useFollowers();
    const [isFollowing, setIsFollowing] = useState(false)
    const [recentFollower, setRecentFollower] = useState(null)
    const [id, setId] = useState()

    const user = users.length > 0 ? users[0] : null;
    // const currentUser = users.length > 0 ? users[0] : {};

    useEffect(() => {
        const selectBlogger = uniqueBloggerUser.find(findSelectedBlogger => findSelectedBlogger.owner_Email === email);
        if (selectBlogger) {
            setRecentFollower(selectBlogger);
        }
    }, [uniqueBloggerUser, email]);
    // console.log(recentFollower)
    useEffect(() => {
        if (recentFollower && user) {
            const followStatus = followers.find(follower => follower.followersEmail === recentFollower.owner_Email);
            if (followStatus) {
                setIsFollowing(true);
                setId(followStatus._id);
            } else {
                setIsFollowing(false);
                setId(null);
            }
        }
    }, [recentFollower, user, followers]);

    // new check - 
    const handleFollow = async (e) => {
        e.preventDefault();

        if (!user) {
            console.error("User not found");
            return;
        }
        const { owner_name, owner_image, owner_Email } = recentFollower;

        if (isFollowing) {
            // Unfollow the user
            try {
                const response = await fetch(`https://blog-server-side-ochre.vercel.app/followers/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    }
                });

                const data = await response.json();
                if (data.deletedCount > 0) {
                    Swal.fire(`Unfollowed ${owner_name}`);
                    setIsFollowing(false);
                    if (onUnfollow) {
                        onUnfollow(owner_Email);
                    }
                } else {
                    console.log('Unfollow not done');
                }
            } catch (error) {
                console.error('Error unfollowing:', error);
            }
        } else {
            // Follow the user
            const followersName = owner_name;
            const followersImage = owner_image;
            const followersEmail = owner_Email;
            const name = user.name;
            const image = user.photo;
            const email = user.email;
            const follow = 1;

            const followingBloggerInfo = { followersName, followersEmail, followersImage, name, image, email, follow };

            try {
                const response = await fetch('https://blog-server-side-ochre.vercel.app/followers', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(followingBloggerInfo)
                });

                const data = await response.json();
                if (data.insertedId) {
                    Swal.fire(`Following ${owner_name}`);
                    setIsFollowing(true);
                } else {
                    console.log('Follow not done');
                }
            } catch (error) {
                console.error('Error following:', error);
            }
        }
    };

    // old

    // const handleFollow = async (e) => {
    //     e.preventDefault();

    //     if (!user) {
    //         console.error("User not found");
    //         return;
    //     }
    //     const { owner_name, owner_image, owner_Email } = recentFollower;

    //     if (isFollowing) {
    //         // Unfollow the user
    //         try {
    //             const response = await fetch(`https://blog-server-side-ochre.vercel.app/followers/${id}`, {
    //                 method: 'DELETE',
    //                 headers: {
    //                     'content-type': 'application/json'
    //                 }
    //             });

    //             const data = await response.json();
    //             if (data.deletedCount > 0) {
    //                 Swal.fire(`Unfollowed ${owner_name}`);
    //                 setIsFollowing(false);
    //             } else {
    //                 console.log('Unfollow not done');
    //             }
    //         } catch (error) {
    //             console.error('Error unfollowing:', error);
    //         }
    //     } else {
    //         // Follow the user
    //         const followersName = owner_name;
    //         const followersImage = owner_image;
    //         const followersEmail = owner_Email;
    //         const name = user.name;
    //         const image = user.photo;
    //         const email = user.email;
    //         const follow = 1;

    //         const followingBloggerInfo = { followersName, followersEmail, followersImage, name, image, email, follow };

    //         try {
    //             const response = await fetch('https://blog-server-side-ochre.vercel.app/followers', {
    //                 method: 'POST',
    //                 headers: {
    //                     'content-type': 'application/json'
    //                 },
    //                 body: JSON.stringify(followingBloggerInfo)
    //             });

    //             const data = await response.json();
    //             if (data.insertedId) {
    //                 Swal.fire(`Following ${owner_name}`);
    //                 setIsFollowing(true);
    //             } else {
    //                 console.log('Follow not done');
    //             }
    //         } catch (error) {
    //             console.error('Error following:', error);
    //         }
    //     }
    // };
    return (
        <>
            {
                user?.email !== email ?
                    <button className="rounded-full px-4 py-1 font-semibold border-light_purple bg-primaryColor text-white hover:bg-primaryHover" onClick={handleFollow}>
                        <span>{isFollowing ? 'Unfollow' : 'Follow'}</span>
                    </button>
                    :
                    <>
                        <button className="rounded-full px-4 py-1 font-semibold border-light_purple bg-primaryColor text-white hover:bg-primaryHover">
                            Editor
                        </button>
                    </>
            }
        </>
    );
};

FollowFunctionality.propTypes = {
    email: PropTypes.string.isRequired,
    onUnfollow: PropTypes.func,
};

export default FollowFunctionality;
