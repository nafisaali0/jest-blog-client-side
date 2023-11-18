import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import detailbtn from '../../../assets/image/icons/details1.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import iconW from '../../../assets/image/icons/wishlist1.svg'

// import moment from 'moment';
const ShowRecentBlog = ({ blog }) => {

    const { _id, title, details_image, short_description, category, long_description, date, time, owner_name, owner_image, owner_Email } = blog

    const { user } = useContext(AuthContext)
    const handleWishList = () => {

        const email = user.email
        const blogWishListInfo = { email, title, short_description, long_description, details_image, date, time, category, owner_name, owner_image, owner_Email }

        //send data to the server and below link from backend's created API and load in mongo as DB
        fetch('http://localhost:5000/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogWishListInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Added Blog to WishList'

                    )
                }
            })
    }

    return (
        <>
            <a href="#" className="flex flex-col-reverse items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row-reverse md:max-w-4xl hover:bg-gray-100">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">{title}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{short_description}</p>
                    <div className='my-3'>
                        <span className='px-5 py-2 bg-[#5b608b] text-xs text-white font-semibold rounded-full'>{category}</span>
                    </div>
                    <div className='flex gap-3 items-center my-3 text-[#5b608b] font-bold'>
                        <div>
                            <span>{date}</span>
                        </div>
                        <div>
                            <span>{time}</span>
                        </div>
                    </div>
                    <div className='flex gap-5 mt-3'>
                        <Link to={`/blogdetails/${_id}`}>
                            <img title="See Details" className='w-[30px] h-[30px] cursor-pointer' src={detailbtn} alt="detailsbutton" />
                        </Link>
                        <img title="Wishlist" onClick={handleWishList} className='w-[30px] h-[30px] cursor-pointer' src={iconW} alt="detailsbutton" />
                    </div>
                </div>
                <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-60 md:rounded-none md:rounded-s-lg" src={details_image} alt="" />
            </a>
        </>
    );
};

ShowRecentBlog.propTypes = {
    blog: PropTypes.obj
};

export default ShowRecentBlog;