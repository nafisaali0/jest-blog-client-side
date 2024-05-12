import { useEffect, useState } from "react";
import ShowBloggerUser from "./ShowBloggerUser";
const BloggerUser = () => {

    const [bloggerUser, setBloggerUser] = useState([])
    const [uniqueBloggerUser, setUniqueBloggerUser] = useState([])
    const [displayCount, setDisplayCount] = useState(3);

    useEffect(() => {
        fetch('https://blog-server-side-ochre.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                setBloggerUser(data)
            })
    }, [uniqueBloggerUser])

    // get blogger user by filter all blogger's user
    useEffect(() => {

        // Create an array of unique emails
        const uniqueEmails = [...new Set(bloggerUser.map(blogger => blogger.owner_Email))];

        // Filter bloggerUser to get uniqueBloggerUsers based on unique emails
        const uniqueBloggerUsersArray = uniqueEmails.map(email => {
            return bloggerUser.find(blogger => blogger.owner_Email === email);
        });

        setUniqueBloggerUser(uniqueBloggerUsersArray);
    }, [bloggerUser]);

    const handleSeeAll = () => {
        setDisplayCount(displayCount + 3);
    }


    return (
        <>
            <div className="p-3">
                <div>
                    <h1 className="text-3xl my-6 font-semibold">Blogger</h1>
                </div>
                <div className="grid grid-cols-1 gap-5 my-5">
                    {
                        uniqueBloggerUser.slice(0, displayCount).map(blog =>
                            <ShowBloggerUser
                                key={blog._id}
                                blog={blog}>
                            </ShowBloggerUser>
                        )
                    }
                </div>
                {displayCount <= uniqueBloggerUser.length &&
                    <div className="text-left">
                        <button className="my-5 text-light_purple text-lg font-semibold hover:text-hover_btn" onClick={handleSeeAll}>View All Blogger</button>
                    </div>
                }
            </div>
        </>
    );
};

export default BloggerUser;


