import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import detailbtn from '../../../assets/image/icons/details1.svg'

// import moment from 'moment';
const ShowRecentBlog = ({ blog }) => {

    const { _id, title, details_image, short_description, date, time } = blog

    return (
        <>
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{short_description}</p>
                    <div className='flex gap-3 items-center my-3 text-[#5b608b] font-bold'>
                        <div>
                            <span>{date}</span>
                        </div>
                        <div>
                            <span>{time}</span>
                        </div>
                    </div>
                    <Link to={`/blogdetails/${_id}`}>
                        <button title='Details'><img className='w-5 h-5' src={detailbtn} alt="" /></button>
                    </Link>
                </div>
                <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src={details_image} alt="" />
            </a>
        </>
    );
};

ShowRecentBlog.propTypes = {
    blog: PropTypes.obj
};

export default ShowRecentBlog;