import { useEffect, useState } from "react";
import { PropTypes } from 'prop-types';


const TotalLikes = ({ id }) => {

    const [likes, setLikes] = useState([])
    const [totalLikes, setTotalLikes] = useState(0)

    useEffect(() => {
        fetch('https://blog-server-side-ochre.vercel.app/likes')
            .then(response => response.json())
            .then(data => {
                setLikes(data);
            });
    }, []);

    useEffect(() => {
        const totalLikes = likes.reduce((acc, like) => {
            if (like.blog_id === id) {
                // acc[like.blog_id] = (acc[like.blog_id] || 0) + 1;
                return acc + 1;
            }
            return acc;
        }, 0);

        setTotalLikes(totalLikes);
    }, [likes, id]);

    return (
        <>
            <span>{totalLikes}</span>
        </>
    );
};

TotalLikes.propTypes = {
    id: PropTypes.number
};

export default TotalLikes;