import { useEffect, useState } from "react";
import ShowBloggerUser from "./ShowBloggerUser";

const BloggerUser = () => {

    const [bloggerUser, setBloggerUser] = useState([])
    // const [bloggerUser, setBloggerUser] = useState([])
    const [uniqueBloggerUser, setUniqueBloggerUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                setBloggerUser(data)
                // setUniqueBloggerUser(data)
            })
    }, [uniqueBloggerUser])

    // console.log(bloggerUser)
    useEffect(() => {
        // Create an array of unique emails
        const uniqueEmails = [...new Set(bloggerUser.map(blogger => blogger.owner_Email))];
        console.log(uniqueEmails)
        // Filter bloggerUser to get uniqueBloggerUsers based on unique emails
        const uniqueBloggerUsersArray = uniqueEmails.map(email => {
            return bloggerUser.find(blogger => blogger.owner_Email === email);
        });

        setUniqueBloggerUser(uniqueBloggerUsersArray);
    }, [bloggerUser]);

    // console.log(uniqueBloggerUser);

    return (
        <>
            <div className="md:col-span-2 my-5 p-3">
                <div className="my-5">
                    <h1 className="text-3xl font-bold">Recent Blog</h1>
                </div>
                {/* md:col-span-2 */}
                <div className="grid grid-cols-1 gap-3 my-5">
                    {
                        uniqueBloggerUser.map(blog =>
                            <ShowBloggerUser
                                key={blog._id}
                                blog={blog}
                                uniqueBloggerUser={uniqueBloggerUser}
                                setUniqueBloggerUser={setUniqueBloggerUser}>
                            </ShowBloggerUser>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default BloggerUser;