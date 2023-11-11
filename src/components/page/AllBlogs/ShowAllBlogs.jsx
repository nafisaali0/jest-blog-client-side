import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import iconD from '../../../assets/image/icons/details1.svg'
import iconW from '../../../assets/image/icons/wishlist1.svg'

const ShowAllBlogs = ({ blog }) => {
    const { _id, title, details_image, short_description, category } = blog

    return (
        <div>
            <div className="flex flex-col md:gap-6 bg-[#e4e6eb] border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100">
                <img className="object-cover w-full rounded-t-lg h-96 lg:w-[500px] lg:h-[340px] md:w-[400px] md:rounded-l-lg" src={details_image} alt="" />
                <div className="flex flex-col p-4">
                    <h5 className="mb-2 text-2xl font-bold  text-black">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 text-xl ">{short_description}</p>

                    <div className='my-3'>
                        <span className='px-3 py-2 bg-[#5b608b] text-lg text-white font-semibold rounded-full'>{category}</span>
                    </div>
                    <div className='flex gap-5 mt-3'>
                        <Link to={`/blogdetails/${_id}`}>
                            <img title="See Details" className='w-[30px] h-[30px]' src={iconD} alt="detailsbutton" />
                        </Link>
                        <Link to={'/wishlist'}>
                            <img title="Wishlist" className='w-[30px] h-[30px]' src={iconW} alt="detailsbutton" />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

ShowAllBlogs.propTypes = {
    blog: PropTypes.obj
};

export default ShowAllBlogs;