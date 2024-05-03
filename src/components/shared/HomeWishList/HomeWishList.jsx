import { useEffect, useState } from "react";
import useWishLIst from "../../../hooks/useWishList";
import moment from "moment";
import { Link } from "react-router-dom";

const HomeWishList = () => {

    const [wishList] = useWishLIst()
    const [sortRecentSaveBlogs, setSortRecentSaveBlogs] = useState([]) //load sorting blogs
    // console.log(sortRecentSaveBlogs)


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
            <div className="my-5 p-3">
                <div className="my-5">
                    <h1 className="text-3xl font-bold my-7">Recently saved</h1>
                </div>
                <div>

                    {
                        sortRecentSaveBlogs.slice(0, 4).map(saveBlogs =>
                            <>
                                <div className="my-7">
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
                                    <Link to={`/blogdetails/${saveBlogs._id}`} target="_blank">
                                        <h1 className="text-2xl font-bold my-3">{saveBlogs.title}</h1>
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
                    <Link to={"/wishlist"}><h1 className="text-xl font-semibold">See All ({sortRecentSaveBlogs.length})</h1></Link>
                </div>
            </div>
        </>
    );
};

export default HomeWishList;