import { useEffect, useState } from "react";
import ShowBloggerUser from "./ShowBloggerUser";
import { motion } from 'framer-motion'
const BloggerUser = () => {

    const [bloggerUser, setBloggerUser] = useState([])
    const [uniqueBloggerUser, setUniqueBloggerUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                setBloggerUser(data)
            })
    }, [uniqueBloggerUser])

    // console.log(bloggerUser)

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

    // console.log(uniqueBloggerUser);

    return (
        <>
            <motion.div className="my-5 p-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3 }}
            >
                <div className="my-5">
                    <h1 className="text-3xl font-bold">Blogger</h1>
                </div>
                <div className="grid grid-cols-1 gap-5 my-5">
                    {
                        uniqueBloggerUser.map(blog =>
                            <ShowBloggerUser
                                key={blog._id}
                                blog={blog}>
                            </ShowBloggerUser>
                        )
                    }
                </div>
            </motion.div>
        </>
    );
};

export default BloggerUser;


