import PropTypes from 'prop-types';


const ShowFeaturedBlogs = ({ sortBlog, index }) => {

   

    return (
        <>
            {/* <h1>{index + 1}</h1>
            <h1>{sortBlog.long_description}</h1> */}
        </>
    );
};

ShowFeaturedBlogs.propTypes = {
    sortBlog: PropTypes.obj,
    index: PropTypes.number
};

export default ShowFeaturedBlogs;