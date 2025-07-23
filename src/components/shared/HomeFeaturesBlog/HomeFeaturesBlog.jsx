import { useEffect, useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
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
        );
        setLongBlogs(sortload)
    }, [blogs])

    return (
        <>
            <div className="hidden lg:flex flex-col my-5">
                <h1 className="text-xl font-bold text-black">Featured Blogs</h1>
                <p className='text-sm text-textSmallGray font-bold'>Long Blogs</p>
                <div className="flex flex-col gap-5 my-5">
                    {
                        longBlogs.slice(0, 3).map(saveBlogs =>
                            <>
                                <div className="w-full border border-borderColour bg-mainTheme rounded-xl shadow-lg">
                                    <div className="md:flex">
                                        <div className="md:shrink-0">
                                            <img src={saveBlogs.details_image} className="h-full w-full object-cover md:w-48"/>
                                        </div>
                                        <div className="p-2 space-y-2">
                                            <div className="flex items-center">
                                                <BiSolidCategory title="category" className="text-textSmallGray" style={{ width: '20px', height: '20px' }} />
                                                <span className="mx-2 text-sm text-textSmallGray font-medium">{saveBlogs.category}</span>
                                            </div>
                                            <Link to={`/blogdetails/${saveBlogs._id}`} className="block text-xl font-bold text-black hover:underline">
                                                {saveBlogs.title}
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