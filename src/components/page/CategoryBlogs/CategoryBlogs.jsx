import { Link, useLoaderData, useLocation } from "react-router-dom";
import { AiOutlineComment } from "react-icons/ai";
import SaveBlogsFunctionality from './../../Functionality/SaveBlogsFunctionality/SaveBlogsFunctionality';
import LikeFunctionality from './../../Functionality/LikeFunctionality/LikeFunctionality';
import BlogTotalComments from "../../Functionality/BlogTotalComments/BlogTotalComments";


const CategoryBlogs = () => {

    const blogs = useLoaderData();
    const location = useLocation();
    const parts = location.pathname.split('/');
    const path = decodeURIComponent(parts[3]);

    return (
        <>
            <div>
                <div className="flex justify-center items-center mb-10">
                    <h1
                        data-aos="fade-down"
                        data-aos-offset="500"
                        data-aos-duration="3000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        className="text-5xl font-bold text-black">{path}</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-4 gap-2">
                    {
                        blogs?.map(blog =>
                            <>
                                <div
                                    data-aos="fade-right"
                                    data-aos-offset="500"
                                    data-aos-duration="3000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    className="card space-y-2 h-96 border border-borderColour bg-mainTheme hover:shadow-xl">
                                    <figure>
                                        <img
                                            src={blog?.details_image}
                                            alt="blog"
                                            className="w-full h-[250px] overflow-hidden object-cover" />
                                    </figure>
                                    <div className="p-5">
                                        <div className="flex justify-start items-center space-x-2 mb-1">
                                            <div className="flex items-center justify-start">
                                                <div className="avatar">
                                                    <div className="w-8 rounded">
                                                        <img src={blog?.owner_image} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-black">{blog?.owner_name}</p>
                                            </div>
                                        </div>
                                        <Link to={`/blogdetails/${blog?._id}`}>
                                            <h1 title="See Details" className="font-bold text-md">{blog?.title}</h1>
                                        </Link>
                                        <p className="mb-2 text-sm font-medium text-black">{blog?.short_description}</p>
                                        <div className="flex flex-row justify-between mt-5 self-end">
                                            <div className="flex flex-row space-x-2">
                                                <p className="text-sm text-textSmallGray font-medium">{blog?.date}</p>
                                                <LikeFunctionality blogId={blog?._id}/>
                                                <div className="flex space-x-1">
                                                    <AiOutlineComment title="comments" className="text-textSmallGray" style={{ width: '20px', height: '20px' }} />
                                                    <span className="text-sm text-textSmallGray font-medium ml-1">
                                                        <BlogTotalComments id={blog?._id} />
                                                    </span>
                                                </div>
                                            </div>

                                            <div>
                                                <SaveBlogsFunctionality
                                                    key={blog?._id}
                                                    blog={blog} />
                                            </div>
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