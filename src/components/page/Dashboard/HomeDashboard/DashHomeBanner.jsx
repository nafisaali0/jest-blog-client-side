import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useBlogs from './../../../../hooks/useBlogs';

const DashHomeBanner = () => {

    const { user } = useContext(AuthContext)
    const [userBlogs, setUserBlogs] = useState([])
    const [blogs] = useBlogs();

    useEffect(() => {
        const bloggerBlogs = blogs.filter(blogger => blogger.owner_Email === user.email);
        setUserBlogs(bloggerBlogs)
    }, [blogs, user]);
    
    return (
        <>
            <div className="flex items-center justify-between">
                <div>
                    <h1>Your Blogs </h1>
                    <h1>{userBlogs.length}</h1>
                </div>
                <div></div>
            </div>
        </>
    );
};

export default DashHomeBanner;