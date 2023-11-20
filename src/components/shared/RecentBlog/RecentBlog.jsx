import { useEffect, useState } from "react";
import moment from 'moment';
import ShowRecentBlog from "./ShowRecentBlog";
import 'react-loading-skeleton/dist/skeleton.css'


const RecentBlog = () => {
    const [recentBlogs, setRecentBlogs] = useState([])//show category from backend
    const [sortDateTimeBlogs, setSortDateTimeBlogs] = useState([]) //load sorting blogs
    const [isLoading, setIsLoading] = useState(true)//loading control for showing skeleton

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            fetch('https://blog-server-side-ochre.vercel.app/blogs')
                .then(res => res.json())
                .then(data => setRecentBlogs(data))
        })
        setIsLoading(false)
    }, [])

    // console.log(recentBlogs)

    // sorting by data and time 
    useEffect(() => {
        const sortedDateTime = recentBlogs.sort((a, b) =>
            moment(b.date + ' ' + b.time, 'MMM Do YY LT').toDate() -
            moment(a.date + ' ' + a.time, 'MMM Do YY LT').toDate()
        );
        setSortDateTimeBlogs(sortedDateTime)
    }, [recentBlogs])

    // console.log(sortDateTimeBlogs);

    return (
        <>
            <div className="md:col-span-2 my-5 p-3">
                <div className="my-5">
                    <h1 className="text-3xl font-bold">Recent Blog</h1>
                </div>
                <div className="grid grid-cols-1 gap-3 my-5">
                    {
                        sortDateTimeBlogs.slice(0, 6).map(blog =>
                            <ShowRecentBlog
                                key={blog._id}
                                isLoading={isLoading}
                                setIsLoading={setIsLoading}
                                blog={blog}>
                            </ShowRecentBlog>

                        )

                    }
                </div>
            </div>
        </>
    );
};

export default RecentBlog;