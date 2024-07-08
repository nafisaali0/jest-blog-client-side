import Swal from "sweetalert2";
import useUsers from "../../../hooks/useUsers";
import { PropTypes } from 'prop-types';
import useFollowers from "../../../hooks/useFollowers";
import { useEffect, useState } from "react";

const FollowFunctionality = ({ blog }) => {

    const [users] = useUsers();
    const { owner_name, owner_image, owner_Email } = blog
    const [followers] = useFollowers();
    const [isFollowing, setIsFollowing] = useState(false)
    const [followerId, setFollowerId] = useState(null)

    const user = users.length > 0 ? users[0] : null;

    useEffect(() => {
        if (user) {
            const followStatus = followers.find(follower => follower.followersEmail === owner_Email);
            if (followStatus) {
                setIsFollowing(true);
                setFollowerId(followStatus._id);
            } else {
                setIsFollowing(false);
                setFollowerId(null);
            }
        }
    }, [user, followers, owner_Email]);

    const handleFollow = async (e) => {
        e.preventDefault();

        if (!user) {
            console.error("User not found");
            return;
        }

        if (isFollowing) {
            // Unfollow the user
            try {
                const response = await fetch(`https://blog-server-side-ochre.vercel.app/followers/${followerId}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    }
                });

                const data = await response.json();
                if (data.deletedCount > 0) {
                    Swal.fire(`Unfollowed ${owner_name}`);
                    setIsFollowing(false);
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
    return (
        <>
            <span onClick={handleFollow}>{isFollowing ? 'Unfollow' : 'Follow'}</span>
        </>
    );
};

FollowFunctionality.propTypes = {
    blog: PropTypes.object
};

export default FollowFunctionality;