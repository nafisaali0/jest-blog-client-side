import { Link, useLoaderData } from "react-router-dom";
import CreateComment from "./CreateComment";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import LikeFunctionality from './../../shared/LikeFunctionality/LikeFunctionality';
import FollowFunctionality from "../../shared/FollowFunctionality/FollowFunctionality";
import { BiSolidCategory } from "react-icons/bi";
import TotalLikes from "../../shared/LikeFunctionality/TotalLikes";
import { AiOutlineComment } from "react-icons/ai";
import BlogTotalComments from "../../shared/BlogTotalComments/BlogTotalComments";
import SaveBlogsFunctionality from './../../shared/SaveBlogsFunctionality/SaveBlogsFunctionality';
import { FiEdit } from "react-icons/fi";



const BlogDetails = () => {

    const { user } = useContext(AuthContext)
    const blog = useLoaderData();
    const { _id, title, details_image, short_description, long_description, category, date, owner_name, owner_image, owner_Email } = blog

    return (
        <>
            <div className="bg-mainTheme rounded-xl  pb-10">
                <div className="p-5 text-start space-y-6">
                    <div className="text-5xl font-bold text-black">
                        <h1>{title}</h1>
                    </div>
                    <div className="flex flex-row gap-2 items-center px-3 py-7 border-b-2 border-borderColour drop-shadow-sm">
                        <div className="avatar">
                            <div className="w-8 rounded">
                                <img src={owner_image} />
                            </div>
                        </div>
                        <Link to={`/profile-blogger/${encodeURIComponent(owner_Email)}`}>
                            <h2 className="text-sm font-semibold text-textSmallGray">{owner_name}</h2>
                        </Link>
                        <FollowFunctionality email={owner_Email}></FollowFunctionality>
                        <div className="flex gap-1 items-center">
                            <BiSolidCategory title="category" className="text-textSmallGray" style={{ width: '20px', height: '20px' }} />
                            <span href="#" className="text-sm text-textSmallGray font-medium">{category}</span>
                        </div>
                        <div className="text-sm font-semibold text-textSmallGray">. {date}</div>
                    </div>
                    <div className="flex flex-row justify-between items-center px-3 py-7 border-b-2 border-borderColour drop-shadow-sm">
                        <div className="flex flex-row gap-2 items-center">
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
                        <div className="flex flex-row gap-2 items-center">
                            <div>
                                <SaveBlogsFunctionality
                                    key={_id}
                                    blog={blog} />
                            </div>
                            <div>
                                {
                                    user?.email === owner_Email ?
                                        <>
                                            <Link to={`/update/${_id}`}>
                                                <FiEdit title="update" className="text-textSmallGray" style={{ width: '20px', height: '20px' }} />
                                            </Link>
                                        </> : ''
                                }
                            </div>
                        </div>
                    </div>
                    <div className="px-3 py-7">
                        <figure >
                            <img
                                src={details_image}
                                alt="image"
                                className="w-full max-h-full object-cover rounded-xl"
                            />
                        </figure>
                    </div>
                    <div className="px-3 space-y-6">
                        <p className="text-3xl font-bold text-black">{short_description}</p>
                        <p className=" text-lg font-medium text-textSmallGray">{long_description}</p>
                    </div>
                </div>
                <div className="mt-10 px-8">
                    <h1 className="text-3xl font-bold mb-16">Comment</h1>
                    <CreateComment
                        id={_id}
                        blog_Email={owner_Email}>
                    </CreateComment>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;