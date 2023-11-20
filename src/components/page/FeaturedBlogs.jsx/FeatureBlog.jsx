import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowFeaturedBlogs from "./ShowFeaturedBlogs";

const FeatureBlog = () => {

    const blog = useLoaderData();
    const [sortByWord, setSortByWord] = useState([])


    useEffect(() => {
        const sortload = blog.sort((a, b) =>
            // in below sorting based on decending order
            b.long_description.length - a.long_description.length
            //in below sorting based on assending order 
            // a.long_description.length - b.long_description.length
        );
        setSortByWord(sortload)
    }, [blog])
    // console.log(sortByWord)

    return (
        <div className="container mx-auto my-10 p-3">
            <div className="font-bold my-5">
                <h1 className="text-5xl ">FetureBlog</h1>
                <p className="text-lg my-3">This table content sort by blogs long description. Which are shown in accending order</p>
            </div>
            <div className="my-5">
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