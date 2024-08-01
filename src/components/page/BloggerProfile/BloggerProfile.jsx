
import axios from 'axios';
import { useEffect, useState } from 'react';
import { PiGithubLogoBold, PiLinkedinLogo } from 'react-icons/pi';
import { SiWebauthn } from 'react-icons/si';
import { Link, useParams } from 'react-router-dom';
// useNavigate,

const BloggerProfile = () => {
    // const navigate = useNavigate();
    const { email } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        axios.get('https://blog-server-side-ochre.vercel.app/users')
            .then(response => {
                const user = response.data.find(user => user.email === email);
                if (user) {
                    setUserData(user);
                } else {
                    console.log('User not found');
                }
                // setLoading(false);
            })
            .catch(error => {
                console.log('Error fetching user data', error);
                // setLoading(false);
            });
    }, [email]);

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
        <>
            <div className="max-w-screen-2xl mx-auto my-16">
                <div className="mt-44">
                        <div className="w-full bg-white rounded-lg shadow p-5">
                            <div className="flex justify-between items-center">
                                <div>
                                    <span>{userData?.date}</span>
                                </div>
                                <div>
                                    <span>{userData?.email}</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center pb-10">
                                <img className="w-24 h-24 md:w-32 md:h-32 -mt-24 mb-3 rounded-full shadow-lg" src={userData?.photo} alt="Bonnie image" />
                                <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">{userData?.name}</h5>
                                <span className="text-lg text-gray-500 dark:text-gray-400">{userData?.bio}</span>
                                <div className="mt-6 text-center">
                                    <h5 className="mb-1 text-xl font-medium text-black dark:text-white">{userData?.work}</h5>
                                    <h5 className="mb-1 text-xl font-medium text-black dark:text-white">{userData?.education}</h5>
                                </div>
                                <div className="flex items-center justify-center gap-5 mt-6">
                                    <Link to={userData?.github} className="flex items-center justify-center flex-col">
                                        <PiGithubLogoBold className="w-7 h-7 block" />
                                        <span className="text-gray-600">Github</span>
                                    </Link>
                                    <Link to={userData?.linkedin} className="flex items-center justify-center flex-col">
                                        <PiLinkedinLogo className="block w-7 h-7" />
                                        <span className="text-gray-600">linkedin</span>
                                    </Link>
                                    <Link to={userData?.protfolio} className="flex items-center justify-center flex-col">
                                        <SiWebauthn className="w-7 h-7  block" />
                                        <span className="text-gray-600">Protfolio</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="w-full my-20">
                    <h1 className="w-fit text-start my-5 text-sm font-bold px-6 py-2 bg-purple border-purple rounded-full border-2">All Blogs</h1>
                    <div className="h-96 pr-5 overflow-y-scroll">
                        <div className="flex flex-col gap-5">
                            {
                                blogs.map((ownerBlogs, index) => (
                                    <div key={index} className="bg-card_white p-5 rounded-xl drop-shadow-md">
                                        <div className="flex items-center gap-5 py-2">
                                            <div>
                                                <Link to={`/blogdetails/${ownerBlogs._id}`} target="_blank">
                                                    <img src={ownerBlogs.details_image} className="w-[100px] h-[100px] rounded-md" />
                                                </Link>
                                            </div>
                                            <div className="flex-1">
                                                <span className='px-5 py-2 bg-light_gray text-xs text-black border-1 border-light_gray font-semibold rounded-full'>
                                                    {ownerBlogs.category}
                                                </span>
                                                <Link to={`/blogdetails/${ownerBlogs._id}`} target="_blank">
                                                    <h1 className="text-lg font-bold my-3 hover:text-light_purple">{ownerBlogs.title}</h1>
                                                </Link>
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <span>{ownerBlogs.date}</span>
                                                        <span>{ownerBlogs.time}</span>
                                                    </div>
                                                    <div className="flex gap-2 items-center">
                                                        {/* <img onClick={() => handleDelete(ownerBlogs._id)} title="Delete" className="w-7 cursor-pointer" src={icondelete} alt="" /> */}
                                                        <Link to={`/update/${ownerBlogs._id}`}>
                                                            {/* <img title="Update" className="w-9 cursor-pointer" src={edit} alt="" /> */}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BloggerProfile;
