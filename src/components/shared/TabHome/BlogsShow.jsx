import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useComment from "../../../hooks/useComment";
import Swal from "sweetalert2";
import iconD from '../../../assets/image/icons/details1.svg'
import iconW from '../../../assets/image/icons/wishlist1.svg'
import { PhotoProvider, PhotoView } from "react-photo-view";
import moment from 'moment';

const BlogsShow = ({ blog }) => {

    const { user } = useContext(AuthContext)//send currentUser to wishlist 
    const [comments] = useComment();

    const comment = comments.filter(item => item.blog_id === blog._id)
    const { _id, title, details_image, short_description, category, long_description, date, time, owner_name, owner_image, owner_Email } = blog

    const handleWishList = () => {
        
        const saveDate = moment().format("MMM Do YY");
        const saveTime = moment().format('LT');
        const email = user.email
        const blogWishListInfo = { saveDate, saveTime, email, title, short_description, long_description, details_image, date, time, category, owner_name, owner_image, owner_Email }

        //send wishlist data to the server and below link to backend's created API and load in mongo as DB
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
            <div href="#" className="flex flex-col-reverse items-center bg-card_white rounded-lg shadow md:flex-row-reverse md:max-w-4xl hover:bg-hover_gray">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">{title}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{short_description}</p>
                    <div className='my-3'>
                        <span className='px-5 py-2 bg-light_gray text-xs text-black font-semibold rounded-full'>{category}</span>
                    </div>
                    <div>
                        <p>commets: {comment.length}</p>
                    </div>
                    {/* <div className='flex gap-3 items-center my-3 text-[#5b608b] font-bold'>
                        <div>
                            <span>{date}</span>
                        </div>
                        <div>
                            <span>{time}</span>
                        </div>
                    </div> */}
                    <div className='flex gap-5 mt-3'>
                        <Link to={`/blogdetails/${_id}`}>
                            <img title="See Details" className='w-[30px] h-[30px] cursor-pointer' src={iconD} alt="detailsbutton" />
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
            </div>
        </>
    );
};

BlogsShow.propTypes = {
    blog: PropTypes.obj
};

export default BlogsShow;