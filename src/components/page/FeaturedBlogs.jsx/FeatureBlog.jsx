import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowFeaturedBlogs from "./ShowFeaturedBlogs";

const FeatureBlog = () => {

    const blog = useLoaderData();
    const [sortByWord, setSortByWord] = useState([])

    useEffect(() => {
        const sortload = blog.sort((a, b) =>
            b.long_description.length - a.long_description.length
        );
        setSortByWord(sortload)
    }, [blog])
    // console.log(sortByWord)

    return (
        <div className="container mx-auto my-10">
            <h1>FetureBlog</h1>
            {
                sortByWord.slice(0, 10).map((sortBlog, index) =>
                    <ShowFeaturedBlogs
                        key={index}
                        index={index}
                        sortBlog={sortBlog}>
                    </ShowFeaturedBlogs>
                )
            }
        </div>
    );
};

export default FeatureBlog;