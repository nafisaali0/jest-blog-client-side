// import Swal from "sweetalert2";
// import useUsers from "../../../hooks/useUsers";
// import { PropTypes } from 'prop-types';
// import useFollowers from "../../../hooks/useFollowers";
// import { useEffect, useState } from "react";
// import useUniqueBlogger from "../../../hooks/useUniqueBlogger";

// const FollowFunctionality = ({ email }) => {

//     const [users] = useUsers();
//     const [uniqueBloggerUser] = useUniqueBlogger();
//     const [followers] = useFollowers();
//     const [isFollowing, setIsFollowing] = useState(false)
//     const [recentFollower, setRecentFollower] = useState(null)
//     const [id, setId] = useState()

//     const user = users.length > 0 ? users[0] : null;

//     useEffect(() => {
//         const selectBlogger = uniqueBloggerUser.find(findSelectedBlogger => findSelectedBlogger.owner_Email === email);
//         if (selectBlogger) {
//             setRecentFollower(selectBlogger);
//         }
//     }, [uniqueBloggerUser, email]);
//     // console.log(recentFollower)
//     useEffect(() => {
//         if (recentFollower && user) {
//             const followStatus = followers.find(follower => follower.followersEmail === recentFollower.owner_Email);
//             if (followStatus) {
//                 setIsFollowing(true);
//                 setId(followStatus._id);
//             } else {
//                 setIsFollowing(false);
//                 setId(null);
//             }
//         }
//     }, [recentFollower, user, followers]);

//     const handleFollow = async (e) => {
//         e.preventDefault();

//         if (!user) {
//             console.error("User not found");
//             return;
//         }
//         const { owner_name, owner_image, owner_Email } = recentFollower;

//         if (isFollowing) {
//             // Unfollow the user
//             try {
//                 const response = await fetch(`https://blog-server-side-ochre.vercel.app/followers/${id}`, {
//                     method: 'DELETE',
//                     headers: {
//                         'content-type': 'application/json'
//                     }
//                 });

//                 const data = await response.json();
//                 if (data.deletedCount > 0) {
//                     Swal.fire(`Unfollowed ${owner_name}`);
//                     setIsFollowing(false);
//                 } else {
//                     console.log('Unfollow not done');
//                 }
//             } catch (error) {
//                 console.error('Error unfollowing:', error);
//             }
//         } else {
//             // Follow the user
//             const followersName = owner_name;
//             const followersImage = owner_image;
//             const followersEmail = owner_Email;
//             const name = user.name;
//             const image = user.photo;
//             const email = user.email;
//             const follow = 1;

//             const followingBloggerInfo = { followersName, followersEmail, followersImage, name, image, email, follow };

//             try {
//                 const response = await fetch('https://blog-server-side-ochre.vercel.app/followers', {
//                     method: 'POST',
//                     headers: {
//                         'content-type': 'application/json'
//                     },
//                     body: JSON.stringify(followingBloggerInfo)
//                 });

//                 const data = await response.json();
//                 if (data.insertedId) {
//                     Swal.fire(`Following ${owner_name}`);
//                     setIsFollowing(true);
//                 } else {
//                     console.log('Follow not done');
//                 }
//             } catch (error) {
//                 console.error('Error following:', error);
//             }
//         }
//     };
//     return (
//         <>
//             <span onClick={handleFollow}>{isFollowing ? 'Unfollow' : 'Follow'}</span>
//         </>
//     );
// };

// FollowFunctionality.propTypes = {
//     email: PropTypes.email,
// };

// export default FollowFunctionality;

import Swal from "sweetalert2";
import useUsers from "../../../hooks/useUsers";
import { PropTypes } from 'prop-types';
import useFollowers from "../../../hooks/useFollowers";
import { useEffect, useState } from "react";
import useUniqueBlogger from "../../../hooks/useUniqueBlogger";

const FollowFunctionality = ({ email }) => {
    const [users] = useUsers();
    const [uniqueBloggerUser] = useUniqueBlogger();
    const [followers, setFollowers] = useFollowers(); // Update useFollowers to return the setter as well
    const [isFollowing, setIsFollowing] = useState(false);
    const [recentFollower, setRecentFollower] = useState(null);
    const [id, setId] = useState();

    const user = users.length > 0 ? users[0] : null;

    useEffect(() => {
        const selectBlogger = uniqueBloggerUser.find(findSelectedBlogger => findSelectedBlogger.owner_Email === email);
        if (selectBlogger) {
            setRecentFollower(selectBlogger);
        }
    }, [uniqueBloggerUser, email]);

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

    const handleFollow = async (e) => {
        e.preventDefault();

        if (!user) {
            console.error("User not found");
            return;
        }
        const { owner_name, owner_image, owner_Email } = recentFollower;

        if (isFollowing) {
            // Optimistically update the UI
            setIsFollowing(false);
            // setFollowers(prevFollowers => prevFollowers.filter(follower => follower._id !== id));

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
                } else {
                    console.log('Unfollow not done');
                    // Revert the optimistic update
                    setIsFollowing(true);
                    setFollowers(prevFollowers => [...prevFollowers, { _id: id, followersEmail: owner_Email }]);
                }
            } catch (error) {
                console.error('Error unfollowing:', error);
                // Revert the optimistic update
                setIsFollowing(true);
                // setFollowers(prevFollowers => [...prevFollowers, { _id: id, followersEmail: owner_Email }]);
            }
        } else {
            // Optimistically update the UI
            setIsFollowing(true);

            const followersName = owner_name;
            const followersImage = owner_image;
            const followersEmail = owner_Email;
            const name = user.name;
            const image = user.photo;
            const email = user.email;
            const follow = 1;
            // const statas = "following";

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
                    // setFollowers(prevFollowers => [...prevFollowers, { _id: data.insertedId, followersEmail }]);
                } else {
                    console.log('Follow not done');
                    // Revert the optimistic update
                    setIsFollowing(false);
                }
            } catch (error) {
                console.error('Error following:', error);
                // Revert the optimistic update
                setIsFollowing(false);
            }
        }
    };

    return (
        <>
            {/* {followers?.map((statusFlw) => (
                <span onClick={handleFollow} key={statusFlw._id}>
                    {statusFlw.follow === 1 ? 'Follow' : 'unFollow'}
                </span>
            ))} */}
            <span onClick={handleFollow}>{isFollowing ? 'Unfollow' : 'Follow'}</span>
        </>
    );
};

FollowFunctionality.propTypes = {
    email: PropTypes.string.isRequired,
};

export default FollowFunctionality;
