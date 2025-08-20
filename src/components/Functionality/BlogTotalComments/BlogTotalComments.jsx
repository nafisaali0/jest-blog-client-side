import { PropTypes } from 'prop-types';
import useCommentsByid from '../../../hooks/useCommentsByBlogId';

const BlogTotalComments = ({ id }) => {
    
    const [blogComments, loading] = useCommentsByid(id);
    if (loading) return <span>Loading...</span>;

    return (
        <>
            <span>{blogComments.length}</span>
        </>
    );
};

BlogTotalComments.propTypes = {
    id: PropTypes.string
};


export default BlogTotalComments;