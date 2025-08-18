import { useState, useEffect } from "react";
import useAllUsers from "./useAllUsers";
import useBlogs from "./useBlogs";

const useBloggerUsers = () => {
  const [allUsers] = useAllUsers();
  const [blogs] = useBlogs();
  const [bloggerUsers, setBloggerUsers] = useState([]);

  useEffect(() => {
    if (allUsers?.length > 0 && blogs?.length > 0) {
      const filtered = allUsers.filter(user =>
        blogs.some(blog => blog?.owner_Email === user?.email)
      );
      setBloggerUsers(filtered);
    }
  }, [allUsers, blogs]);

  return [bloggerUsers];
};

export default useBloggerUsers;
