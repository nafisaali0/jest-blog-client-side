import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeFeaturesBlog = () => {

    const [blogs, setBlogs] = useState([])
    const [longBlogs, setLongBlogs] = useState([])

    useEffect(() => {
        fetch('https://blog-server-side-ochre.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])

    useEffect(() => {
        const sortload = blogs.sort((a, b) =>
            // in below sorting based on decending order
            b.long_description.length - a.long_description.length
            //in below sorting based on assending order 
            // a.long_description.length - b.long_description.length
        );
        setLongBlogs(sortload)
    }, [blogs])

    return (
        <>
            <div className="p-3">
                <div className="my-6">
                    <h1 className="text-3xl font-bold">Featured Blogs</h1>
                    <p className="text-xl font-semibold my-3">Long Blogs</p>
                </div>
                <div>

                    {
                        longBlogs.slice(0, 4).map(saveBlogs =>
                            <>
                                <div className="bg-card_white my-5 p-5 rounded-xl drop-shadow-md">
                                    <div className="flex items-center gap-5 py-2">
                                        <div>
                                            <Link to={`/blogdetails/${saveBlogs._id}`} target="_blank">
                                                <img src={saveBlogs.details_image} className="w-[100px] h-[100px] rounded-md" />
                                            </Link>
                                        </div>
                                        <div className="flex-1">
                                            <span className='px-5 py-2 bg-light_gray text-xs text-black border-1 border-light_gray font-semibold rounded-full'>{saveBlogs.category}</span>
                                            <Link to={`/blogdetails/${saveBlogs._id}`} target="_blank">
                                                <h1 className="text-lg font-bold my-3 hover:text-light_purple">{saveBlogs.title}</h1>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
                <div>
                    <Link to={"/featureblog"}><h1 className="my-5 text-light_purple text-lg font-semibold hover:text-hover_btn">View All In A Table</h1></Link>
                </div>
            </div >
        </>
    );
};

export default HomeFeaturesBlog;