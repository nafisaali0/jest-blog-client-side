import { useContext, useEffect, useState } from "react";
import useBlogs from "../../../../hooks/useBlogs";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { BiSolidCategory } from "react-icons/bi";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { FiEdit } from "react-icons/fi";
import DeleteFunctionality from './../../../shared/DeleteFunctionality/DeleteFunctionality';

const DashHomeOwnerBlogs = () => {

    const [blogs] = useBlogs();
    const { user } = useContext(AuthContext)
    const [userBlogs, setUserBlogs] = useState([])
    // const [changeBlogState, setChangeBlogsState] = useState([])

    useEffect(() => {
        const bloggerBlogs = blogs.filter(blogger => blogger.owner_Email === user.email);
        setUserBlogs(bloggerBlogs)
    }, [blogs, user]);

    // const handleDelete = (_id) => {

    //     fetch(`https://blog-server-side-ochre.vercel.app/blogs/${_id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.deletedCount > 0) {
    //                 Swal.fire(
    //                     'Deleted!',
    //                     'Your blog has been deleted.',
    //                     'success'
    //                 )
    //             }
    //             // clear state after delete blogs
    //             const loadBlogsAfterDelete = userBlogs.filter(comment => comment._id !== _id)
    //             setUserBlogs(loadBlogsAfterDelete)
    //         })
    // }

    return (
        <>
            {/* <div className="my-16 text-4xl font-bold">
                <h1>Your Blogs</h1>
            </div>
            <div className="flex items-start justify-start flex-col-reverse lg:flex-row gap-7">
                <div className="w-full lg:w-2/4">
                    <h1 className="w-fit text-start my-5 text-sm font-bold px-6 py-2 bg-purple border-purple rounded-full border-2">All Blogs</h1>
                    <div className="h-96 pr-5 overflow-y-scroll">
                        <div className="flex flex-col gap-5">
                            {
                                userBlogs.map((ownerBlogs, index) => (
                                    <div key={index} className="bg-card_white p-5 rounded-xl drop-shadow-md">
                                        <div className="flex items-center gap-5 py-2">
                                            <div>
                                                <Link to={`/blogdetails/${ownerBlogs._id}`} target="_blank">
                                                    <img src={ownerBlogs.details_image} className="w-[100px] h-[100px] rounded-md" />
                                                </Link>
                                            </div>
                                            <div className="flex-1">
                                                <span className='px-5 py-2 bg-light_gray text-xs text-black border-1 border-light_gray font-semibold rounded-full'>
                                                    {ownerBlogs.category}
                                                </span>
                                                <Link to={`/blogdetails/${ownerBlogs._id}`} target="_blank">
                                                    <h1 className="text-lg font-bold my-3 hover:text-light_purple">{ownerBlogs.title}</h1>
                                                </Link>
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <span>{ownerBlogs.date}</span>
                                                        <span>{ownerBlogs.time}</span>
                                                    </div>
                                                    <div className="flex gap-2 items-center">
                                                        <img onClick={() => handleDelete(ownerBlogs._id)} title="Delete" className="w-7 cursor-pointer" src={icondelete} alt="" />
                                                        <Link to={`/update/${ownerBlogs._id}`}>
                                                            <img title="Update" className="w-9 cursor-pointer" src={edit} alt="" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/4">
                    <h1 className="w-fit my-5 text-start text-sm font-bold px-6 py-2 bg-purple border-purple rounded-full border-2">Subscriptions Blogs</h1>
                    <div className="h-96 pr-5 overflow-y-scroll">
                        <div className="flex flex-col gap-5">
                            {
                                userBlogs.map((ownerBlogs, index) => (
                                    <div key={index} className="bg-card_white p-5 rounded-xl drop-shadow-md">
                                        <div className="flex items-center gap-5 py-2">
                                            <div>
                                                <Link to={`/blogdetails/${ownerBlogs._id}`} target="_blank">
                                                    <img src={ownerBlogs.details_image} className="w-[100px] h-[100px] rounded-md" />
                                                </Link>
                                            </div>
                                            <div className="flex-1">
                                                <span className='px-5 py-2 bg-light_gray text-xs text-black border-1 border-light_gray font-semibold rounded-full'>
                                                    {ownerBlogs.category}
                                                </span>
                                                <Link to={`/blogdetails/${ownerBlogs._id}`} target="_blank">
                                                    <h1 className="text-lg font-bold my-3 hover:text-light_purple">{ownerBlogs.title}</h1>
                                                </Link>
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <span>{ownerBlogs.date}</span>
                                                        <span>{ownerBlogs.time}</span>
                                                    </div>
                                                    <div>
                                                        <Link to={`/update/${ownerBlogs._id}`}>
                                                            <img title="Update" className="w-9 cursor-pointer" src={edit} alt="" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="bg-mainTheme border border-borderColour rounded-xl px-5 py-10">
                <h1 className="text-xl font-bold text-black mb-5">Your Blogs</h1>
                {/*  className="overflow-y-scroll overflow-x-hidden pr-5" */}
                <div>
                    {
                        userBlogs.length === 0 ?
                            <>
                                <div className="my-20 flex flex-col justify-center items-center">
                                    <div>
                                        <h1 className="text-xl font-bold text-black">No Blogs</h1>
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