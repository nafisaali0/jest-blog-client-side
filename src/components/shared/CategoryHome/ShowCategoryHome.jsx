import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ShowCategoryHome = ({ showCategory }) => {
    const { category } = showCategory
    return (
        <>
            <Link to={`/blogs/category/${category}`}>
                <div className='bg-[#dbdbde] px-7 py-4 text-sm md:text-lg font-bold text-black rounded-full'>
                    <h1>{category}</h1>
                </div>
            </Link>
        </>
    );
};

ShowCategoryHome.propTypes = {
    showCategory: PropTypes.obj
};

export default ShowCategoryHome;