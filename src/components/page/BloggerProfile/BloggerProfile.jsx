
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BloggerProfile = () => {
    const navigate = useNavigate();
    const { email } = useParams();
    const [blogs, setBlogs] = useState([]);
    console.log(blogs)
    console.log(navigate)
    console.log(email)
    // /blogs/bloggeremail/:email

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(`https://blog-server-side-ochre.vercel.app/blogs/bloggeremail/${email}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                // Handle error, e.g., show a message to the user
            }
        };

        fetchBlogs();
    }, [email]);

    return (
        <div className='my-20'>
            <h2>Blogs for {email}</h2>
            <ul>
                {blogs.map(blog => (
                    <li key={blog._id}>
                        <h3>{blog.title}</h3>
                        <p>{blog.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BloggerProfile;
