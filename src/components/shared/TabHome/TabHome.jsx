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
    const [displayCount, setDisplayCount] = useState(6);//for all blogs btn
    const [displayCountSix, setDisplayCountSix] = useState(6);//for recent blogs btn
    const [selectedTab, setSelectedTab] = useState(0);//for Tab list    
    // const [displayCountTopBg, setDisplayCountTopBg] = useState(6);

    // recent blog
    useEffect(() => {
        if (!blogs.length) return;

        const sorted = [...blogs].sort((a, b) =>
            moment(b.date + " " + b.time, "MMM Do YY LT").toDate() -
            moment(a.date + " " + a.time, "MMM Do YY LT").toDate()
        );
        setRecentBlogs(sorted);
    }, [blogs]);

    //top Blogs
    // useEffect(() => {
    //     if (comments.length > 0 && blogs.length > 0) {

    //         // Step 2: Count the comments for each blog
    //         const commentCountByBlog = comments.reduce((acc, comment) => {
    //             acc[comment.blog_id] = (acc[comment.blog_id] || 0) + 1;
    //             return acc;
    //         }, {});

    //         // Step 3: Merge blog information with comment counts
    //         const blogsWithCommentCount = blogs.map(blog => ({
    //             ...blog,
    //             count: commentCountByBlog[blog._id] || 0
    //         }));

    //         // Step 4: Sort the array by comment count in descending order
    //         blogsWithCommentCount.sort((a, b) => b.count - a.count);

    //         // Step 5: Update the state with the sorted blogs
    //         setSortedBlogs(blogsWithCommentCount);
    //     }
    // }, [comments, blogs]);

    // new:Top blog, that only give top comments blog.
    useEffect(() => {
        if (!blogs?.length || !comments?.length) return;

        const sorted = [...blogs]
            .map(blog => ({
                ...blog,
                commentCount: comments?.filter(c => c?.blog_id === blog?._id).length,
            }))
            .sort((a, b) => b?.commentCount - a?.commentCount)
            .slice(0, 5);

        setSortedBlogs(sorted);
    }, [blogs, comments]);

    const handleSeeAll = () => {
        setDisplayCount(displayCount + 6);
    }
    const handleSeeAllRecent = () => {
        setDisplayCountSix(displayCountSix + 6);
    }
    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };
    // const handleSeeAllTopBlog = () => {
    //     setDisplayCountTopBg(displayCountTopBg + 6);
    // }

    return (
        <>
            <div>
                <Tabs onSelect={(index) => handleTabSelect(index)}>
                    <TabList className={"cursor-pointer flex gap-5 items-center text-xl font-bold my-5 text-black"}>
                        <Tab className={`${selectedTab === 0 ? 'outline-none text-primaryColor' : ''}`}>All</Tab>
                        <Tab className={`${selectedTab === 1 ? 'outline-none text-primaryColor' : ''}`}>Recent Blogs</Tab>
                        <Tab className={`${selectedTab === 2 ? 'outline-none text-primaryColor' : ''}`}>Top Blogs</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid gap-5">
                            {
                                blogs?.slice(0, displayCount).map(blog =>
                                    <BlogsShow
                                        key={blog?._id}
                                        blog={blog}>
                                    </BlogsShow>
                                )
                            }
                        </div>
                        {displayCount <= blogs?.length &&
                            <button className="buttonView mt-4 font-semibold" onClick={handleSeeAll}>View More</button>
                        }
                    </TabPanel>
                    <TabPanel>
                        <div className="grid gap-5">
                            {
                                recentBlogs?.slice(0, displayCountSix).map(blog =>
                                    <ShowRecentBlog
                                        key={blog._id}
                                        blog={blog}>
                                    </ShowRecentBlog>
                                )
                            }
                        </div>
                        {displayCountSix <= recentBlogs.length &&
                            <button className="buttonView mt-5 font-semibold" onClick={handleSeeAllRecent}>View More</button>
                        }
                    </TabPanel>
                    <TabPanel>
                        <div className="grid gap-5">
                            {
                                sortedBlogs?.map(blog =>
                                    <ShowTopBlogs
                                        key={blog._id}
                                        blog={blog}>
                                    </ShowTopBlogs>
                                )
                                // sortedBlogs.slice(0, displayCountTopBg).map(blog =>
                                //     <ShowTopBlogs
                                //         key={blog._id}
                                //         blog={blog}>
                                //     </ShowTopBlogs>
                                // )
                            }
                        </div>
                        {/* {displayCountTopBg <= sortedBlogs.length &&
                            <button className="buttonView mt-5 font-semibold" onClick={handleSeeAllTopBlog}>View More</button>
                        } */}
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default TabHome;

