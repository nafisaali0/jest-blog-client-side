import { useEffect, useState } from "react";
import useUsers from "./useUsers";
import useBlogs from "./useBlogs";


const useUserblogs = () => {

    const [userBlogs, setUserBlogs] = useState([]);
    const [users] = useUsers();
    const [blogs] = useBlogs();
    const userInfo = users?.length > 0 ? users[0] : null;

    useEffect(() => {
        if (blogs && userInfo?.email) {
            const bloggerBlogs = blogs.filter(
                (blogger) => blogger?.owner_Email === userInfo.email
            );
            setUserBlogs(bloggerBlogs);
        }
    }, [blogs, userInfo]);

    return [userBlogs];
}

export default useUserblogs
