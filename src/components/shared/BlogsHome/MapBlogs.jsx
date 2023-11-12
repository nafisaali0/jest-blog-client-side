import { useEffect, useState } from "react";
import ShowBlogs from "./ShowBlogs";

const MapBlogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <>
            <div className="container mx-auto my-10 p-3">
                <div>
                    <h1 className="text-3xl font-bold">Blogs</h1>
                    <div className="grid grid-cols-1  gap-3 my-10">
                        {
                            blogs.slice(0, 6).map(blog =>
                                <ShowBlogs key={blog._id} blog={blog}></ShowBlogs>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default MapBlogs;