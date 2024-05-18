import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";
import useComment from "../../../hooks/useComment";
import useWishLIst from "../../../hooks/useWishList";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import iconD from '../../../assets/image/icons/details1.svg'
import iconW from '../../../assets/image/icons/wishlist1.svg'
import iconComment from '../../../assets/image/icons/comment.svg'
import iconLike from '../../../assets/image/icons/like.svg'
import { PropTypes } from 'prop-types';
import moment from "moment";

const ShowTopBlogs = ({ blog }) => {

    const { user } = useContext(AuthContext)//send currentUser to wishlist 
    const [comments] = useComment();
    const [wishList] = useWishLIst();

    const comment = comments.filter(item => item.blog_id === blog._id)
    const { _id, title, details_image, short_description, category, long_description, date, time, owner_name, owner_image, owner_Email } = blog

    const handleWishList = () => {

        const saveDate = moment().format("MMM Do YY");
        const saveTime = moment().format('LT');
        const email = user.email
        const blogId = _id;
        const blogWishListInfo = { blogId, saveDate, saveTime, email, title, short_description, long_description, details_image, date, time, category, owner_name, owner_image, owner_Email }
        const checkSameBlog = wishList.some(readBlog => readBlog.blogId === _id)

        if (checkSameBlog === true) {
            Swal.fire(
                'Already Added in Reading List'
            )
        } else {
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
                            'Added Blog to Reading List'
                        )
                    }
                })
        }

    }

    return (
        <>
            <div href="#" className="flex flex-col-reverse items-center bg-card_white rounded-lg shadow md:flex-row-reverse md:max-w-4xl hover:bg-hover_gray">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <div className='my-3'>
                        <span className='px-5 py-2 bg-light_gray text-xs text-black font-semibold rounded-full'>{category}</span>
                    </div>
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">{title}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{short_description}</p>
                    <div className="flex justify-between items-center my-3">
                        <div className="flex gap-5 items-center">
                            <div className="flex gap-2 items-center">
                                <img title="love" className="w-7 cursor-pointer" src={iconLike} alt="" /><span>{comment.length}</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img title="comment" className="w-7 cursor-pointer" src={iconComment} alt="" /><span>{comment.length}</span>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Link to={`/blogdetails/${_id}`}>
                                <img title="See Details" className='w-[30px] h-[30px] cursor-pointer' src={iconD} alt="detailsbutton" />
                            </Link>
                            <img title="Wishlist" onClick={handleWishList} className='w-[30px] h-[30px] cursor-pointer' src={iconW} alt="detailsbutton" />
                        </div>
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

ShowTopBlogs.propTypes = {
    blog: PropTypes.obj
};

export default ShowTopBlogs;