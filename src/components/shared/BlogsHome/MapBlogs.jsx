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
            <div className="my-5 p-3">
                <div>
                    <div className="my-5">
                        <h1 className="text-3xl font-bold my-5">Blogs</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-3 my-5">
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