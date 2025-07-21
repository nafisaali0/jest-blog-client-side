import { useEffect, useState } from "react";
import useWishLIst from "../../../hooks/useWishList";
import moment from "moment";
import { Link } from "react-router-dom";
import { BiSolidCategory } from "react-icons/bi";
import LikeFunctionality from "../LikeFunctionality/LikeFunctionality";
import TotalLikes from "../LikeFunctionality/TotalLikes";
import { AiOutlineComment } from "react-icons/ai";
import BlogTotalComments from "../BlogTotalComments/BlogTotalComments";

const HomeWishList = () => {

    const [wishList] = useWishLIst()
    const [sortRecentSaveBlogs, setSortRecentSaveBlogs] = useState([]) //load sorting blogs

    // sorting by data and time 
    useEffect(() => {
        const sortedDateTime = wishList.sort((a, b) =>
            moment(b.saveDate + ' ' + b.saveTime, 'MMM Do YY LT').toDate() -
            moment(a.saveDate + ' ' + a.saveTime, 'MMM Do YY LT').toDate()
        );
        setSortRecentSaveBlogs(sortedDateTime)
    }, [wishList])

    return (
        <>
            <div>
                <h1 className="text-xl font-bold text-black my-5">Reading List</h1>
                <div className="flex flex-col gap-5">
                    {
                        sortRecentSaveBlogs.slice(0, 2).map(saveBlogs =>
                            <>
                                {/* <div className=" bg-card_white p-5 rounded">
                                    <div className="flex items-center gap-4">
                                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                            <div className="avatar w-9">
                                                <img src={saveBlogs.owner_image} />
                                            </div>
                                        </div>
                                        <div>
                                            <span className="font-semibold">{saveBlogs.owner_name}</span>
                                        </div>
                                    </div>
                                    <Link to={`/blogdetails/${saveBlogs.blogId}`} target="_blank">
                                        <h1 className="text-2xl font-bold my-3 hover:text-light_purple">{saveBlogs.title}</h1>
                                    </Link>
                                    <div className="flex gap-4 items-center my-5">
                                        <span>{saveBlogs.saveDate}</span>
                                        <span>{saveBlogs.saveTime}</span>
                                    </div>
                                </div> */}

                                {/* new card */}

                                <div className="flex flex-col justify-start">
                                    <div className="relative flex flex-col md:space-x-3 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 border border-borderColour bg-mainTheme">
                                        <div className="w-full bg-[#ffffffE6] flex flex-col space-y-2 p-3">
                                            <div className="flex items-center">
                                                <img className="object-cover h-5 w-5 rounded-full" src={saveBlogs.owner_image} alt="Avatar" />
                                                <Link to={`/blogs/bloggeremail/${saveBlogs.owner_Email}`}>
                                                    <span className="mx-2 md:text-sm text-[#6B6B6B] text-base font-medium">{saveBlogs.owner_name}</span>
                                                </Link>
                                            </div>
                                            <Link to={`/blogdetails/${saveBlogs.blogId}`}>
                                                <h3 className="font-black text-[#000000] md:text-2xl text-xl">{saveBlogs.title}</h3>
                                            </Link>
                                            <div className="flex items-center">
                                                <BiSolidCategory title="category" className="text-[#6B6B6B]" style={{ width: '20px', height: '20px' }} />
                                                <span className="mx-2 md:text-sm text-[#6B6B6B] font-medium">{saveBlogs.category}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <p className="md:text-sm text-[#6B6B6B] text-base font-medium md:block">{saveBlogs.date}</p>
                                                <div className="flex space-x-2 item-center">
                                                    <div className="flex items-center">
                                                        <LikeFunctionality id={saveBlogs._id}></LikeFunctionality>
                                                        <span className="md:text-sm text-[#6B6B6B] text-base font-medium ml-1">
                                                            <TotalLikes id={saveBlogs.blogId}></TotalLikes>
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <AiOutlineComment title="comments" className="text-[#6B6B6B]" style={{ width: '20px', height: '20px' }} />
                                                        <span className="md:text-sm text-[#6B6B6B] text-base font-medium ml-1">
                                                            <BlogTotalComments id={saveBlogs.blogId}></BlogTotalComments>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
                <div>
                    <Link to={"/wishlist"}><h1 className="my-3 text-light_purple text-lg font-semibold hover:text-hover_btn">View All ({sortRecentSaveBlogs.length})</h1></Link>
                </div>
            </div>
        </>
    );
};

export default HomeWishList;