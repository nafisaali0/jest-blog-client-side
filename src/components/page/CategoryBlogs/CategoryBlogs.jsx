import { useLoaderData } from "react-router-dom";
import ShowCategoryBlogs from "./ShowCategoryBlogs";


const CategoryBlogs = () => {

    //get all products by specific brand name from backend
    const blogs = useLoaderData();
    // console.log(blogs)

    return (
        <>
            <div className="container mx-auto p-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {
                        blogs.map(blog =>
                            <ShowCategoryBlogs key={blog._id} blog={blog}></ShowCategoryBlogs>
                        )
                    }
                </div>
            </div>
        </>
    );
};



export default CategoryBlogs;