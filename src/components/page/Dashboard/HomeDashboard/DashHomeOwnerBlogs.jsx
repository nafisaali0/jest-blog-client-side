import { useContext, useEffect, useState } from "react";
import useBlogs from "../../../../hooks/useBlogs";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { BiSolidCategory } from "react-icons/bi";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { FiEdit } from "react-icons/fi";
import DeleteFunctionality from '../../../Functionality/DeleteFunctionality/DeleteFunctionality';

const DashHomeOwnerBlogs = () => {

    const [blogs] = useBlogs();
    const { user } = useContext(AuthContext)
    const [userBlogs, setUserBlogs] = useState([])
    // const [changeBlogState, setChangeBlogsState] = useState([])

    useEffect(() => {
        const bloggerBlogs = blogs.filter(blogger => blogger.owner_Email === user.email);
        setUserBlogs(bloggerBlogs)
    }, [blogs, user]);


    return (
        <>
            <div className="bg-mainTheme border border-borderColour rounded-xl px-5 py-10">
                <h1 className="text-xl font-bold text-black mb-5">Your Blogs</h1>
                <div>
                    {
                        userBlogs.length === 0 ?
                            <>
                                <div className="my-20 flex flex-col justify-center items-center">
                                    <div>
                                        <h1 className="text-xl font-bold text-textSmallGray">No Blogs</h1>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className="flex flex-col gap-5 flex-wrap">
                                    {userBlogs.map((blog, index) => (
                                        <div
                                            key={blog._id}
                                            className={`w-full ${index !== userBlogs.length - 1 ? "border-b border-borderColour" : ""}`}
                                        >
                                            <div className="flex items-center justify-between py-3">
                                                <div className="w-auto">
                                                    <div className="flex gap-2 items-center">
                                                        <div className="w-auto">
                                                            <div className="avatar">
                                                                <div className="w-16 rounded-xl border border-borderColour">
                                                                    <img src={blog.details_image} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-auto p-2 space-y-1">
                                                            <Link title="See Details" to={`/blogdetails/${blog._id}`}>
                                                                <h2 className="text-sm font-semibold text-black">
                                                                    {blog.title}
                                                                </h2>
                                                            </Link>
                                                            <h3 className="flex items-center gap-1 text-xs font-medium text-textSmallGray">
                                                                <BiSolidCategory
                                                                    title="category"
                                                                    className="text-textSmallGray"
                                                                    style={{ width: "15px", height: "15px" }}
                                                                />
                                                                <span>{blog.category}</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-auto p-2">
                                                    <div className="dropdown dropdown-top dropdown-end">
                                                        <HiOutlineEllipsisVertical
                                                            tabIndex={0}
                                                            role="button"
                                                            style={{ width: "20px", height: "20px" }}
                                                        />
                                                        <ul
                                                            tabIndex={0}
                                                            className="menu dropdown-content mb-5 z-1 w-52 p-2 rounded-md shadow font-semibold text-center border-2 border-borderColour bg-mainTheme text-black backdrop-blur-sm"
                                                        >
                                                            <Link to={`/update/${blog._id}`}>
                                                                <div className="flex justify-center items-center gap-2 py-2 px-4 font-semibold border-b text-textSmallGray hover:text-primaryHover hover:bg-borderColour cursor-pointer border-borderColour">
                                                                    <span>
                                                                        <FiEdit
                                                                            title="update"
                                                                            className="text-textSmallGray"
                                                                            style={{ width: "20px", height: "20px" }}
                                                                        />
                                                                    </span>
                                                                    Update
                                                                </div>
                                                            </Link>
                                                            <div className="flex justify-center items-center gap-2 py-2 px-4 text-md font-semibold text-textSmallGray border-b hover:text-primaryHover hover:border-borderColour cursor-pointer border-borderColour last:border-b-0">
                                                                <span>
                                                                    <DeleteFunctionality
                                                                        _id={blog._id}
                                                                        baseLink="https://blog-server-side-ochre.vercel.app/blogs"
                                                                    />
                                                                </span>
                                                                Delete
                                                            </div>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                    }
                </div>
            </div>
        </>
    );
};

export default DashHomeOwnerBlogs;