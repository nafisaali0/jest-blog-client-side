import { Link, useLoaderData, useLocation } from "react-router-dom";
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
    // console.log(path)


    return (
        <>
            <div className="my-10">
                <div className="flex justify-center items-center mb-10">
                    <h1 className="text-5xl font-bold text-black">{path}</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-4 gap-2">
                    {
                        blogs.map(blog =>
                            <>
                                <div className="card space-y-2 h-96 border border-borderColour bg-mainTheme hover:shadow-xl">
                                    <figure>
                                        <img
                                            src={blog.details_image}
                                            alt="Shoes"
                                            className="w-full h-[250px] overflow-hidden object-cover" />
                                    </figure>
                                    <div className="p-5">
                                        <div className="flex justify-start items-center space-x-2 mb-1">
                                            <div className="flex items-center justify-start">
                                                <div className="avatar">
                                                    <div className="w-8 rounded">
                                                        <img src={blog.owner_image} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-black">{blog.owner_name}</p>
                                            </div>
                                        </div>
                                        <Link to={`/blogdetails/${blog._id}`}>
                                            <h1 title="See Details" className="font-bold text-md">{blog.title}</h1>
                                        </Link>
                                        <p className="mb-2 text-sm font-medium text-black">{blog.short_description}</p>
                                        <div className="flex flex-row justify-between mt-5 self-end">
                                            <div className="flex flex-row space-x-2">
                                                <p className="text-sm text-textSmallGray font-medium">{blog.date}</p>
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