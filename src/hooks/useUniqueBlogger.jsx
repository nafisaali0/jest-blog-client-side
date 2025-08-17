import { useEffect, useState } from "react";

const useUniqueBlogger = () => {

    const [bloggerUser, setBloggerUser] = useState([])
    const [uniqueBloggerUser, setUniqueBloggerUser] = useState([])

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


    return [uniqueBloggerUser]
};

export default useUniqueBlogger;