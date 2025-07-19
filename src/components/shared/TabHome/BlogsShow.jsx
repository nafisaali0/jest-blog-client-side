import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { PhotoProvider, PhotoView } from "react-photo-view";
import moment from 'moment';
import useWishLIst from './../../../hooks/useWishList';
import LikeFunctionality from "../LikeFunctionality/LikeFunctionality";
import TotalLikes from "../LikeFunctionality/TotalLikes";
import BlogTotalComments from "../BlogTotalComments/BlogTotalComments";
import { BiSolidCategory } from "react-icons/bi";
import { BsBookmarkCheck } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";

const BlogsShow = ({ blog }) => {

    const { user } = useContext(AuthContext)//send currentUser to wishlist 
    const [wishList] = useWishLIst();

    const { _id, title, details_image, short_description, category, long_description, date, time, owner_name, owner_image, owner_Email } = blog

    const handleWishList = (e) => {
        e.stopPropagation();
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
            {/* <div href="#" className="flex flex-col-reverse items-center bg-card_white rounded-lg shadow md:flex-row-reverse md:max-w-4xl hover:bg-hover_gray">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <div className='my-3'>
                        <span className='px-5 py-2 bg-light_gray text-xs text-black font-semibold rounded-full'>{category}</span>
                    </div>
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-black">{title}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{short_description}</p>
                    <div className="flex justify-between items-center my-3">
                        <div className="flex gap-5 items-center">
                            <div className="flex gap-2 items-center">
                                <LikeFunctionality id={_id}></LikeFunctionality>
                                <TotalLikes id={_id}></TotalLikes>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img title="comment" className="w-7 cursor-pointer" src={iconComment} alt="" />
                                <BlogTotalComments id={_id}></BlogTotalComments>
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
                <PhotoProvider>
                    <PhotoView src={details_image}>
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-80 md:rounded-none md:rounded-s-lg" src={details_image} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </div> */}

            {/* final card */}
            <div className="flex flex-col justify-start">
                <div
                    className="relative flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 md:max-w-3xl border border-[#ffff] bg-[#ffff]">
                    <div className="p-2 sm:w-1/2">
                        <PhotoProvider>
                            <PhotoView src={details_image}>
                                <img className="rounded object-cover w-full h-60" src={details_image} alt="blogImage" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div className="w-full md:w-2/3 bg-[#ffff] flex flex-col space-y-2 p-3">
                        <div className="flex items-center">
                            <img className="object-cover h-5 w-5 rounded-full" src={owner_image} alt="Avatar" />
                            <Link to={`/blogs/bloggeremail/${owner_Email}`}>
                                <span href="#" className="mx-2 md:text-sm text-[#6B6B6B] text-base font-medium">{owner_name}</span>
                            </Link>
                        </div>
                        <Link to={`/blogdetails/${_id}`}>
                            <h3 className="font-black text-[#000000] md:text-2xl text-xl">{title}</h3>
                            <p className="md:text-sm text-[#6B6B6B] text-base font-medium">{short_description}</p>
                        </Link>
                        <div className="flex items-center">
                            <BiSolidCategory title="category" className="text-[#6B6B6B]" style={{ width: '20px', height: '20px' }} />
                            <span href="#" className="mx-2 md:text-sm text-[#6B6B6B] font-medium">{category}</span>
                        </div>
                        <div className="flex md:flex-row justify-between">
                            <div className="flex flex-1 flex-row space-x-3 item-center">
                                <p className="md:text-sm text-[#6B6B6B] text-base font-medium md:block">{date}</p>
                                <div className="flex justify-center space-x-1">
                                    <LikeFunctionality id={_id}></LikeFunctionality>
                                    <span className="md:text-sm text-[#6B6B6B] text-base font-medium ml-1">
                                        <TotalLikes id={_id}></TotalLikes>
                                    </span>
                                </div>
                                <div className="flex justify-center space-x-1">
                                    <AiOutlineComment title="comments" className="text-[#6B6B6B]" style={{ width: '20px', height: '20px' }} />
                                    <span className="md:text-sm text-[#6B6B6B] text-base font-medium ml-1">
                                        <BlogTotalComments id={_id}></BlogTotalComments>
                                    </span>
                                </div>
                            </div>
                            {/* Wishlist */}
                            <div>
                                <BsBookmarkCheck title="save" onClick={handleWishList} className="text-[#6B6B6B] cursor-pointer" style={{ width: '20px', height: '20px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

BlogsShow.propTypes = {
    blog: PropTypes.func
};

export default BlogsShow;