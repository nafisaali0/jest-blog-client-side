import { useState } from "react";
import ShowBloggerUser from "./ShowBloggerUser";
import useUniqueBlogger from "../../../hooks/useUniqueBlogger";
import '../../style/btnView.css'

const BloggerUser = () => {

    const [uniqueBloggerUser] = useUniqueBlogger();
    const [displayCount, setDisplayCount] = useState(2);

    const handleSeeAll = () => {
        setDisplayCount(displayCount + 3);
    }

    return (
        <>
            <div>
                <h1 className="text-xl font-bold text-black my-5">Blogger</h1>
                <div className="grid gap-5">
                    {
                        uniqueBloggerUser.slice(0, displayCount).map(blog =>
                            <ShowBloggerUser
                                key={blog._id}
                                blog={blog}>
                            </ShowBloggerUser>
                        )
                    }
                </div>
                {uniqueBloggerUser.length > 2 && displayCount < uniqueBloggerUser.length &&
                    <button className="button_Tab my-5 font-bold" onClick={handleSeeAll}>View More</button>
                }
            </div>
        </>
    );
};

export default BloggerUser;


