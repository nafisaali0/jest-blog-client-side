import { useContext, useEffect, useState } from "react";
import useBlogs from "../../../../hooks/useBlogs";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import icon2 from '../../../../assets/image/icons/edit.svg'

const DashHomeOwnerBlogs = () => {

    const [blogs] = useBlogs();
    const { user } = useContext(AuthContext)
    const [userBlogs, setUserBlogs] = useState([])

    useEffect(() => {
        const bloggerBlogs = blogs.filter(blogger => blogger.owner_Email === user.email);
        setUserBlogs(bloggerBlogs)
    }, [blogs, user]);

    return (
        <>
            <div className="my-16 text-4xl font-bold">
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
                                                    <div>
                                                        <Link to={`/update/${ownerBlogs._id}`}>
                                                            <img title="Update" className="w-9 cursor-pointer" src={icon2} alt="" />
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
                                                            <img title="Update" className="w-9 cursor-pointer" src={icon2} alt="" />
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
            </div>
        </>
    );
};

export default DashHomeOwnerBlogs;