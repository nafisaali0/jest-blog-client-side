import { useLoaderData } from "react-router-dom";
import ShowAllBlogs from "./ShowAllBlogs";
import RightSide from "./RightSide";

const AllBlogs = () => {

    const blogs = useLoaderData();
    console.log(blogs)

    return (
        <div className="overflow-hidden bg-[#f0f2f5]">
            <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 grid grid-cols-1 gap-5">
                    {
                        blogs.map(blog =>
                            <ShowAllBlogs key={blog._id} blog={blog}></ShowAllBlogs>
                        )
                    }

                </div>
                <div>
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;