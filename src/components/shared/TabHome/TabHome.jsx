import useBlogs from "../../../hooks/useBlogs";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BlogsShow from "./BlogsShow";
import { useEffect, useState } from "react";
import moment from "moment";
import ShowRecentBlog from "./ShowRecentBlog";
import useComment from "../../../hooks/useComment";
import ShowTopBlogs from "./ShowTopBlogs";

const TabHome = () => {

    const [blogs] = useBlogs();
    const [comments] = useComment();
    const [sortedBlogs, setSortedBlogs] = useState([]);//for top blogs
    const [recentBlogs, setRecentBlogs] = useState([])//show category from backend
    const [sortDateTimeBlogs, setSortDateTimeBlogs] = useState([]) //load sorting blogs
    const [displayCount, setDisplayCount] = useState(10);//for all blogs btn
    const [displayCountSix, setDisplayCountSix] = useState(6);//for recent blogs btn
    const [displayCountTopBg, setDisplayCountTopBg] = useState(6);//for recent blogs btn
    const [selectedTab, setSelectedTab] = useState(0);//for Tab list

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

    //top Blogs
    useEffect(() => {
        if (comments.length > 0 && blogs.length > 0) {
            // Step 2: Count the comments for each blog
            const commentCountByBlog = comments.reduce((acc, comment) => {
                acc[comment.blog_id] = (acc[comment.blog_id] || 0) + 1;
                return acc;
            }, {});

            // Step 3: Merge blog information with comment counts
            const blogsWithCommentCount = blogs.map(blog => ({
                ...blog,
                count: commentCountByBlog[blog._id] || 0
            }));

            // Step 4: Sort the array by comment count in descending order
            blogsWithCommentCount.sort((a, b) => b.count - a.count);

            // Step 5: Update the state with the sorted blogs
            setSortedBlogs(blogsWithCommentCount);
        }
    }, [comments, blogs]);

    const handleSeeAll = () => {
        setDisplayCount(displayCount + 6);
    }
    const handleSeeAllRecent = () => {
        setDisplayCountSix(displayCountSix + 6);
    }
    const handleSeeAllTopBlog = () => {
        setDisplayCountTopBg(displayCountTopBg + 6);
    }
    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };

    return (
        <>
            <div>
                <Tabs onSelect={(index) => handleTabSelect(index)}>
                    <TabList className={"cursor-pointer flex gap-5 items-center text-2xl font-semibold my-5 text-black"}>
                        <Tab className={`${selectedTab === 0 ? 'p-2 border-b-4 border-light_purple outline-none rounded-b-sm' : ''}`}>All</Tab>
                        <Tab className={`${selectedTab === 1 ? 'p-3 border-b-4 border-light_purple outline-none rounded-b-sm' : ''}`}>Recent Blogs</Tab>
                        <Tab className={`${selectedTab === 2 ? 'p-3 border-b-4 border-light_purple outline-none rounded-b-sm' : ''}`}>Top Blogs</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid grid-cols-1 gap-5 my-5">
                            {
                                blogs.slice(0, displayCount).map(blog =>
                                    <BlogsShow
                                        key={blog._id}
                                        blog={blog}>
                                    </BlogsShow>
                                )
                            }
                        </div>
                        {displayCount <= blogs.length &&
                            <div className="text-left">
                                <button className="my-5 px-8 py-3 border-2 border-light_gray bg-hover_gray rounded-full text-light_purple text-sm font-bold hover:text-hover_btn hover:border-light_purple" onClick={handleSeeAll}>View More Blogs</button>
                            </div>
                        }
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 gap-3 my-5">
                            {
                                sortDateTimeBlogs.slice(0, displayCountSix).map(blog =>
                                    <ShowRecentBlog
                                        key={blog._id}
                                        blog={blog}>
                                    </ShowRecentBlog>
                                )
                            }
                        </div>
                        {displayCountSix <= sortDateTimeBlogs.length &&
                            <div className="text-left">
                                <button className="my-5 px-8 py-3 border-2 border-light_gray bg-hover_gray rounded-full text-light_purple text-sm font-bold hover:text-hover_btn hover:border-light_purple" onClick={handleSeeAllRecent}>View More Recent Blogs</button>
                            </div>
                        }
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 gap-3 my-5">
                            {
                                sortedBlogs.slice(0, displayCountTopBg).map(blog =>
                                    <ShowTopBlogs
                                        key={blog._id}
                                        blog={blog}>
                                    </ShowTopBlogs>
                                )
                            }
                        </div>
                        {displayCountTopBg <= sortedBlogs.length &&
                            <div className="text-left">
                                <button className="my-5 px-8 py-3 border-2 border-light_gray bg-hover_gray rounded-full text-light_purple text-sm font-bold hover:text-hover_btn hover:border-light_purple" onClick={handleSeeAllTopBlog}>View More</button>
                            </div>
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default TabHome;

