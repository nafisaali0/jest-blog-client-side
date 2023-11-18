import { useEffect, useState } from "react";
import moment from 'moment';
import ShowRecentBlog from "./ShowRecentBlog";

const RecentBlog = () => {
    const [recentBlogs, setRecentBlogs] = useState([])//show category from backend
    const [sortDateTimeBlogs, setSortDateTimeBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setRecentBlogs(data))
    }, [])
    // console.log(recentBlogs)

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
                        sortDateTimeBlogs.slice(0,6).map(blog =>
                            <ShowRecentBlog
                                key={blog._id} 
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