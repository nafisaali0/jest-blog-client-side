import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowFeaturedBlogs from "./ShowFeaturedBlogs";

const FeatureBlog = () => {

    const blog = useLoaderData();
    const [sortByWord, setSortByWord] = useState([])


    useEffect(() => {
        const sortload = blog?.sort((a, b) =>
            // in below sorting based on decending order
            b?.long_description.length - a?.long_description.length
            //in below sorting based on assending order (small to large)
            // a.long_description.length - b.long_description.length
        );
        setSortByWord(sortload)
    }, [blog])

    return (
        <div>
            <div
                data-aos="fade-down"
                data-aos-offset="500"
                data-aos-duration="3000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                className="flex justify-center items-center flex-col space-y-3 mb-10">
                <h1 className="text-5xl font-bold text-black">Featured Blogs</h1>
                <p className="text-sm font-bold text-textSmallGray">This table content sort by blogs long description. Which are shown in decending order</p>
            </div>
            <div>
                {
                    <ShowFeaturedBlogs
                        sortByWord={sortByWord}>
                    </ShowFeaturedBlogs>
                }
            </div>
        </div>
    );
};

export default FeatureBlog;