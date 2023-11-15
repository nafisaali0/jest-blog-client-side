import PropTypes from 'prop-types';
import detailbtn from '../../../assets/image/icons/details1.svg'
import { Link } from 'react-router-dom';

const ShowCategoryBlogs = ({ blog }) => {
    const { _id, title, details_image, short_description } = blog
    return (
        <>
            <a href="#" className="flex flex-col-reverse items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row lg:max-w-xl hover:bg-gray-100">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-lg lg:tex-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{short_description}</p>
                    <Link to={`/blogdetails/${_id}`}>
                        <button title='Details'><img className='w-5 h-5' src={detailbtn} alt="DetailsBTN" /></button>
                    </Link>
                </div>
                <img className="object-cover w-full rounded-t-lg h-96 md:w-[300px] md:h-[300px] lg:h-auto lg:w-48 lg:rounded-none lg:rounded-s-lg" src={details_image} alt="" />
            </a>
        </>
    );
};

ShowCategoryBlogs.propTypes = {
    blog: PropTypes.obj
};

export default ShowCategoryBlogs;