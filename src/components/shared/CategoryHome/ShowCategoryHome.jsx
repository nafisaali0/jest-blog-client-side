import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const ShowCategoryHome = ({ showCategory }) => {

    const { category } = showCategory
    return (
        <>
            <Link to={`/blogs/category/${category}`}>
                <motion.div className='bg-[#dbdbde] px-7 py-4 text-sm md:text-lg font-bold text-black rounded-full'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3 }}
                >
                    <h1>{category}</h1>
                </motion.div>
            </Link>
        </>
    );
};

ShowCategoryHome.propTypes = {
    showCategory: PropTypes.obj
};

export default ShowCategoryHome;