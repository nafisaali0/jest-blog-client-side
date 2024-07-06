import Swal from "sweetalert2";
import useUsers from "../../../hooks/useUsers";
import { PropTypes } from 'prop-types';

const FollowFunctionality = ({ blog }) => {

    const [users] = useUsers();
    const { owner_name, owner_image, owner_Email } = blog
    const user = users.length > 0 ? users[0] : null;

    const handleFollow = async (e) => {
        e.preventDefault();

        if (!user) {
            console.error("User not found");
            return;
        }

        const followersName = owner_name;
        const followersImage = owner_image;
        const followersEmail = owner_Email;
        const name = user.name;
        const image = user.photo;
        const email = user.email;
        const follow = 1;

        const followingBloggerInfo = { followersName, followersEmail, followersImage, name, image, email, follow }
        console.log(followingBloggerInfo)
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
                Swal.fire('following');
            } else {
                console.log('not done')
            }
        } catch (error) {
            console.error('Error adding like:', error);
            // Revert the like state if the server request fails
            // setLikes(prevLikes => prevLikes.filter(like => like.blog_id !== id || like.owner_email !== owner_email));
        }
    }

    return (
        <>
            <span onClick={handleFollow}> Follow</span>
        </>
    );
};

FollowFunctionality.propTypes = {
    blog: PropTypes.object
};

export default FollowFunctionality;