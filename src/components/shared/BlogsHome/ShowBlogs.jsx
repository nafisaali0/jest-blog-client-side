import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import iconD from '../../../assets/image/icons/details1.svg'
import iconW from '../../../assets/image/icons/wishlist1.svg'
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const ShowBlogs = ({ blog }) => {

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
        <div>
            <div className="flex flex-col md:gap-6 bg-[#e7e7e9] border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100">
                <img className="object-cover w-full rounded-t-lg h-96 lg:w-[500px] lg:h-[340px] md:w-[400px] md:rounded-l-lg" src={details_image} alt="" />
                <div className="flex flex-col p-4">
                    <h5 className="mb-2 text-2xl font-bold  text-black">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 text-xl ">{short_description}</p>
                    <div className='my-3'>
                        <span className='px-3 py-2 bg-[#5b608b] text-lg text-white font-semibold rounded-full'>{category}</span>
                    </div>
                    <div className='flex gap-5 mt-3'>
                        <Link to={`/blogdetails/${_id}`}>
                            <img title="See Details" className='w-[30px] h-[30px] cursor-pointer' src={iconD} alt="detailsbutton" />
                        </Link>
                        <img title="Wishlist" onClick={handleWishList} className='w-[30px] h-[30px] cursor-pointer' src={iconW} alt="detailsbutton" />
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