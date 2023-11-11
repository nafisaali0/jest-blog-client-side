import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import iconD from '../../../assets/image/icons/details1.svg'
import iconW from '../../../assets/image/icons/wishlist1.svg'

const ShowBlogs = ({ blog }) => {

    const { _id, title, details_image, short_description, category } = blog

    return (
        <div>

            {/* <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2">

                <img className="rounded-t-lg w-full h-[300px]" src={details_image} alt="" />

                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div> */}


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

ShowBlogs.propTypes = {
    blog: PropTypes.obj
};

export default ShowBlogs;