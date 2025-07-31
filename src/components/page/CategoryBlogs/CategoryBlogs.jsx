import { useLoaderData, useLocation } from "react-router-dom";
// import ShowCategoryBlogs from "./ShowCategoryBlogs";
import { BiSolidCategory } from "react-icons/bi";
import LikeFunctionality from "../../shared/LikeFunctionality/LikeFunctionality";
import TotalLikes from "../../shared/LikeFunctionality/TotalLikes";
import { AiOutlineComment } from "react-icons/ai";
import BlogTotalComments from "../../shared/BlogTotalComments/BlogTotalComments";
import { BsBookmarkCheck } from "react-icons/bs";


const CategoryBlogs = () => {

    //get all products by specific brand name from backend
    const blogs = useLoaderData();
    console.log(blogs)
    const location = useLocation();
    const parts = location.pathname.split('/');
    const path = decodeURIComponent(parts[3]);
    console.log(path)
    

    return (
        <>
            <div className="my-10">
                <div className="flex justify-center items-center mb-14">
                    <h1 className="text-3xl font-bold text-black">{path}</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        blogs.map(blog =>
                            <>
                                <div className="card bg-mainTheme hover:shadow-xl space-y-2 h-96">
                                    <figure>
                                        <img
                                            src={blog.details_image}
                                            alt="Shoes"
                                            className="w-full h-[200px] object-cover" />
                                    </figure>
                                    <div className="p-5">
                                        <div className="flex justify-start items-center space-x-2">
                                            <div className="flex items-center justify-start">
                                                <div className="avatar">
                                                    <div className="w-8 rounded">
                                                        <img src={blog.owner_image} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p>{blog.owner_name}</p>
                                            </div>
                                        </div>

                                        <p className="my-3">{blog.short_description}</p>
                                        <div className="flex flex-row justify-between self-end">
                                            <div className="flex flex-row space-x-2">
                                               <p className="text-sm text-textSmallGray font-medium md:block">{blog.date}</p>
                                                <div className="flex space-x-1">
                                                    <LikeFunctionality id={blog._id}></LikeFunctionality>
                                                    <span className="text-sm text-textSmallGray font-medium ml-1">
                                                        <TotalLikes id={blog._id}></TotalLikes>
                                                    </span>
                                                </div>
                                                <div className="flex space-x-1">
                                                    <AiOutlineComment title="comments" className="text-textSmallGray" style={{ width: '20px', height: '20px' }} />
                                                    <span className="text-sm text-textSmallGray font-medium ml-1">
                                                        <BlogTotalComments id={blog._id}></BlogTotalComments>
                                                    </span>
                                                </div>
                                            </div>

                                            <div>
                                                <BsBookmarkCheck title="save" className="text-textSmallGray cursor-pointer" style={{ width: '20px', height: '20px' }} />
                                            </div>
                                            {/*  onClick={handleWishList}  */}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
};



export default CategoryBlogs;