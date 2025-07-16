import { useState } from "react";
import ShowBloggerUser from "./ShowBloggerUser";
import useUniqueBlogger from "../../../hooks/useUniqueBlogger";
const BloggerUser = () => {

    const [uniqueBloggerUser] = useUniqueBlogger();
    const [displayCount, setDisplayCount] = useState(3);

    const handleSeeAll = () => {
        setDisplayCount(displayCount + 3);
    }

    return (
        <>
            <div>
                <div>
                    <h1 className="text-3xl my-6 font-semibold">Blogger</h1>
                </div>
                <div className="grid gap-5 my-5">
                    {
                        uniqueBloggerUser.slice(0, displayCount).map(blog =>
                            <ShowBloggerUser
                                key={blog._id}
                                blog={blog}>
                            </ShowBloggerUser>
                        )
                    }
                </div>
                {uniqueBloggerUser.length > 3 && displayCount < uniqueBloggerUser.length &&
                    <div className="text-left">
                        <button className="my-5 text-light_purple text-lg font-semibold hover:text-hover_btn" onClick={handleSeeAll}>View More Blogger</button>
                    </div>
                }
            </div>
        </>
    );
};

export default BloggerUser;


