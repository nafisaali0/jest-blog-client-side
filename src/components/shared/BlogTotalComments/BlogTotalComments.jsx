import { useEffect, useState } from "react";
import useComment from "../../../hooks/useComment";
import { PropTypes } from 'prop-types';

const BlogTotalComments = ({ id }) => {
    // const [comments] = useComment();
    const [comments] = useComment();
    const [totalComments, setTotalComments] = useState(0)

    useEffect(() => {
        const totalLikes = comments.reduce((acc, like) => {
            if (like.blog_id === id) {
                return acc + 1;
            }
            return acc;
        }, 0);

        setTotalComments(totalLikes);
    }, [comments, id]);
    return (
        <>
            <span>{totalComments}</span>
        </>
    );
};

BlogTotalComments.propTypes = {
    id: PropTypes.string
};


export default BlogTotalComments;