import useBlogs from "../../../hooks/useBlogs";
// import useComment from './../../../hooks/useComment';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BlogsShow from "./BlogsShow";
// import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import moment from "moment";
import ShowRecentBlog from "./ShowRecentBlog";



const TabHome = () => {

    const [blogs] = useBlogs();
    // const [comments] = useComment();

    const [recentBlogs, setRecentBlogs] = useState([])//show category from backend
    const [sortDateTimeBlogs, setSortDateTimeBlogs] = useState([]) //load sorting blogs

    useEffect(() => {
        fetch('https://blog-server-side-ochre.vercel.app/blogs')
            .then(res => res.json())
            .then(data => setRecentBlogs(data))

    }, [])

    // sorting by data and time 
    useEffect(() => {
        const sortedDateTime = recentBlogs.sort((a, b) =>
            moment(b.date + ' ' + b.time, 'MMM Do YY LT').toDate() -
            moment(a.date + ' ' + a.time, 'MMM Do YY LT').toDate()
        );
        setSortDateTimeBlogs(sortedDateTime)
    }, [recentBlogs])

    return (
        <>
            <div>
                <Tabs>
                    <TabList className={"cursor-pointer flex gap-5 items-center my-10"}>
                        <Tab className="">All</Tab>
                        <Tab>Recent Blogs</Tab>
                        <Tab>Top Blogs</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid grid-cols-1 gap-5 my-5">
                            {
                                blogs.map(blog =>
                                    <BlogsShow
                                        key={blog._id}
                                        blog={blog}>
                                    </BlogsShow>
                                )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 gap-3 my-5">
                            {
                                sortDateTimeBlogs.slice(0, 6).map(blog =>
                                    <ShowRecentBlog
                                        key={blog._id}
                                        blog={blog}>
                                    </ShowRecentBlog>
                                )

                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default TabHome;

