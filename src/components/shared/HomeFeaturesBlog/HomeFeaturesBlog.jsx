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
            <div className="hidden lg:flex flex-col">
                <div>
                    <h1 className="text-xl font-bold text-black my-5">Featured Blogs</h1>
                    <p className='text-base text-[#6B6B6B] font-bold'>Long Blogs</p>
                </div>
                <div className="flex flex-col gap-5 my-5">
                    {
                        longBlogs.slice(0, 3).map(saveBlogs =>
                            <>
                                {/* <div className="bg-card_white my-5 p-5 rounded-xl drop-shadow-md">
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
                                </div> */}

                                {/* new */}
                                <div className="w-full bg-[#ffffffE6] rounded-xl shadow-lg">
                                    <div className="md:flex">
                                        <div className="md:shrink-0">
                                            <img className="h-full w-full object-cover md:w-48"       src={saveBlogs.details_image} />
                                        </div>
                                        <div className="p-4 space-y-2">
                                            <div className="flex items-center">
                                                <BiSolidCategory title="category" className="text-[#6B6B6B]" style={{ width: '20px', height: '20px' }} />
                                                <span href="#" className="mx-2 md:text-sm text-[#6B6B6B] font-bold">{saveBlogs.category}</span>
                                            </div>
                                            <Link to={`/blogdetails/${saveBlogs._id}`} className="block text-xl font-medium text-black hover:underline">
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