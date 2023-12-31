import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import iconW from '../../../assets/image/icons/wishlist1.svg'
import detailbtn from '../../../assets/image/icons/details1.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import Skeleton from 'react-loading-skeleton'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { motion } from 'framer-motion';


const ShowRecentBlog = ({ blog, isLoading }) => {

    const { _id, title, details_image, short_description, category, long_description, date, time, owner_name, owner_image, owner_Email } = blog

    const { user } = useContext(AuthContext)
    const handleWishList = () => {

        const email = user.email
        const blogWishListInfo = { email, title, short_description, long_description, details_image, date, time, category, owner_name, owner_image, owner_Email }

        //send data to the server and below link from backend's created API and load in mongo as DB
        fetch('https://blog-server-side-ochre.vercel.app/wishlist', {
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
            {
                isLoading ?
                    // skeleton
                    <div href="#" className="flex flex-col-reverse items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row-reverse md:max-w-4xl hover:bg-gray-100">
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 "><Skeleton width={400} /></h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400"><Skeleton width={400} count={4} /></p>
                            <div className='flex gap-3 items-center my-3 text-[#5b608b] font-bold'>
                                <div>
                                    <span><Skeleton width={50} /></span>
                                </div>
                                <div>
                                    <span><Skeleton width={50} /></span>
                                </div>
                            </div>
                            <div className='flex gap-5 mt-3'>
                                <Link to={`/blogdetails/${_id}`}>
                                    <Skeleton width={30} height={30} className='cursor-pointer' />
                                </Link>
                                <Skeleton width={30} height={30} className='cursor-pointer' />
                            </div>
                        </div>
                        <Skeleton width={461} height={300} />
                    </div>
                    :
                    <motion.a href="#" className="flex flex-col-reverse items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row-reverse md:max-w-4xl hover:bg-gray-100"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2 }}
                    >
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
                        {/* click image and show image popup */}
                        <PhotoProvider>
                            <PhotoView src={details_image}>
                                <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-80 md:rounded-none md:rounded-s-lg" src={details_image} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                    </motion.a>

            }
        </>
    );
};

ShowRecentBlog.propTypes = {
    blog: PropTypes.obj,
    isLoading: PropTypes.bool
};

export default ShowRecentBlog;