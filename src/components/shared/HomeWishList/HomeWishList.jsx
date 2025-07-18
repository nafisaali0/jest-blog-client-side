import { useEffect, useState } from "react";
import useWishLIst from "../../../hooks/useWishList";
import moment from "moment";
import { Link } from "react-router-dom";

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
                <div>
                    <h1 className="text-xl font-semibold">Reading List</h1>
                </div>
                <div>
                    {
                        sortRecentSaveBlogs.slice(0, 2).map(saveBlogs =>
                            <>
                                <div className=" bg-card_white p-5 rounded">
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