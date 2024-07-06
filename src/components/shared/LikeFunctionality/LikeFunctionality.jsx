import Swal from "sweetalert2";
import icon3 from "../../../assets/image/icons/like.svg"
import redIcon from "../../../assets/image/icons/redLike.svg"
import useUsers from './../../../hooks/useUsers';
import { PropTypes } from 'prop-types';
import useLikes from "../../../hooks/useLikes";
import { useState } from "react";

const LikeFunctionality = ({ id }) => {

    const [users] = useUsers();
    const [initialLikes] = useLikes();
    const [likes, setLikes] = useState([initialLikes]);
    const user = users.length > 0 ? users[0] : null;
    const checkBlog = initialLikes.find(readBlog => readBlog?.blog_id === id)

    const handleLike = async (e) => {
        e.preventDefault();

        if (!user) {
            console.error("User not found");
            return;
        }

        const blog_id = id;
        const owner_name = user.name;
        const owner_image = user.photo;
        const owner_email = user.email;
        const like = 1; // Assuming a fixed like value of 1 for simplicity. Adjust as needed.

        const newLike = { blog_id, owner_name, owner_image, owner_email, like };

        // Optimistically update the UI
        setLikes(prevLikes => [...prevLikes, newLike]);

        try {
            const response = await fetch('https://blog-server-side-ochre.vercel.app/likes', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newLike)
            });

            const data = await response.json();
            if (data.insertedId) {
                Swal.fire('Added like');
            } else {
                // Revert the like state if the server request fails
                setLikes(prevLikes => prevLikes.filter(like => like.blog_id !== id || like.owner_email !== owner_email));
            }
        } catch (error) {
            console.error('Error adding like:', error);
            // Revert the like state if the server request fails
            setLikes(prevLikes => prevLikes.filter(like => like.blog_id !== id || like.owner_email !== owner_email));
        }
    };
    return (
        <>
            {checkBlog?.like === 1 && (
                <img
                    title="like"
                    onClick={handleLike}
                    className="w-7 cursor-pointer"
                    src={redIcon}
                    alt="like"
                />
            )}
            {checkBlog?.like !== 1 && (
                <img
                    title="like"
                    onClick={handleLike}
                    className="w-7 cursor-pointer"
                    src={icon3}
                    alt="like"
                />
            )}

            {/* {
                checkBlog?.like === 1 ?
                    (<img
                        title="like"
                        onClick={handleLike}
                        className="w-7 cursor-pointer"
                        src={redIcon}
                        alt="like"
                    />)
                    :
                    (<img
                        title="like"
                        onClick={handleLike}
                        className="w-7 cursor-pointer"
                        src={icon3}
                        alt="like"
                    />)
            } */}
        </>
    );
};


LikeFunctionality.propTypes = {
    id: PropTypes.number
};


export default LikeFunctionality;