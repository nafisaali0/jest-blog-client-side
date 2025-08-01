import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import LikeFunctionality from '../LikeFunctionality/LikeFunctionality';
import TotalLikes from '../LikeFunctionality/TotalLikes';
import BlogTotalComments from '../BlogTotalComments/BlogTotalComments';
import { AiOutlineComment } from 'react-icons/ai';
import { BiSolidCategory } from 'react-icons/bi';
import SaveBlogsFunctionality from '../SaveBlogsFunctionality/SaveBlogsFunctionality';


const ShowRecentBlog = ({ blog }) => {

    const { _id, title, details_image, short_description, category, date, owner_name, owner_image, owner_Email } = blog

    return (
        <>
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
                                <SaveBlogsFunctionality
                                    key={_id}
                                    blog={blog} />
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