import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useWishLIst from '../../../hooks/useWishList';
import LikeFunctionality from '../LikeFunctionality/LikeFunctionality';
import TotalLikes from '../LikeFunctionality/TotalLikes';
import BlogTotalComments from '../BlogTotalComments/BlogTotalComments';
import { BsBookmarkCheck } from 'react-icons/bs';
import { AiOutlineComment } from 'react-icons/ai';
import { BiSolidCategory } from 'react-icons/bi';


const ShowRecentBlog = ({ blog }) => {

    const { user, } = useContext(AuthContext)
    const [wishList] = useWishLIst()

    const { _id, title, details_image, short_description, category, long_description, date, time, owner_name, owner_image, owner_Email } = blog

    const handleWishList = () => {

        const email = user.email
        const blogId = _id

        const blogWishListInfo = { blogId, email, title, short_description, long_description, details_image, date, time, category, owner_name, owner_image, owner_Email }
        const checkSameBlog = wishList.some(readBlog => readBlog.blogId === blogId)

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
            {/* <div className="flex flex-col justify-start">
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
                            <span href="#" className="mx-2 md:text-sm text-[#6B6B6B] text-base font-medium">{category}</span>
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
                            <div>
                                <BsBookmarkCheck title="save" onClick={handleWishList} className="text-[#6B6B6B] cursor-pointer" style={{ width: '20px', height: '20px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="flex flex-col justify-start">
                <div
                    className="relative flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 md:max-w-3xl border border-[#ffff] bg-[#ffff]">
                    <div className="p-2 sm:w-1/2">
                        <PhotoProvider>
                            <PhotoView src={details_image}>
                                <img className="rounded-xl object-cover w-full h-60" src={details_image} alt="blogImage" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div className="w-full md:w-2/3 bg-mainTheme flex flex-col space-y-2 p-3">
                        <div className="flex items-center">
                            <img className="object-cover h-5 w-5 rounded-full" src={owner_image} alt="Avatar" />
                            <Link to={`/blogs/bloggeremail/${owner_Email}`}>
                                <span className="mx-2 text-textSmallGray text-sm font-medium">{owner_name}</span>
                            </Link>
                        </div>
                        <Link to={`/blogdetails/${_id}`}>
                            <h3 className="font-black text-black md:text-2xl text-xl">{title}</h3>
                            <p className="text-sm text-textSmallGray font-medium">{short_description}</p>
                        </Link>
                        <div className="flex items-center">
                            <BiSolidCategory title="category" className="text-textSmallGray" style={{ width: '20px', height: '20px' }} />
                            <span href="#" className="mx-2 text-sm text-textSmallGray font-medium">{category}</span>
                        </div>
                        <div className="flex md:flex-row justify-between">
                            <div className="flex flex-1 flex-row space-x-3 item-center">
                                <p className="text-sm text-textSmallGray font-medium md:block">{date}</p>
                                <div className="flex justify-center space-x-1">
                                    <LikeFunctionality id={_id}></LikeFunctionality>
                                    <span className="text-sm text-textSmallGray font-medium ml-1">
                                        <TotalLikes id={_id}></TotalLikes>
                                    </span>
                                </div>
                                <div className="flex justify-center space-x-1">
                                    <AiOutlineComment title="comments" className="text-textSmallGray" style={{ width: '20px', height: '20px' }} />
                                    <span className="text-sm text-textSmallGray font-medium ml-1">
                                        <BlogTotalComments id={_id}></BlogTotalComments>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <BsBookmarkCheck title="save" onClick={handleWishList} className="text-textSmallGray cursor-pointer" style={{ width: '20px', height: '20px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

ShowRecentBlog.propTypes = {
    blog: PropTypes.func,
    isLoading: PropTypes.bool
};

export default ShowRecentBlog;