import { useLoaderData } from "react-router-dom";
import ShowAllBlogs from "./ShowAllBlogs";
import RightSide from "./RightSide";
import { useState } from "react";

const AllBlogs = () => {

    const blogs = useLoaderData();
    const [filerBlogs, setFilterBlogs] = useState(blogs)

    //condintion for search by title
    const handleSearchFilter = (e) => {
        const title = blogs.filter(blogTitle => blogTitle.title === e)
        if (title) {
            setFilterBlogs(title)
        }
    }
    //condintion for filter by category
    const handleFilter = filter => {
        const category = blogs.filter(blogCategory => blogCategory.category === filter)
        if (category) {
            setFilterBlogs(category)
        }
    }

    return (
        <div className="overflow-hidden bg-[#f0f2f5]">
            <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 grid grid-cols-1 gap-5">
                    {
                        filerBlogs.map(blog =>
                            <ShowAllBlogs
                                key={blog._id}
                                blog={blog}>
                            </ShowAllBlogs>
                        )
                    }

                </div>
                <div>
                    {/* search data and filter data come from therre */}
                    <RightSide
                        handleSearchFilter={handleSearchFilter}
                        handleFilter={handleFilter}>
                    </RightSide>
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;