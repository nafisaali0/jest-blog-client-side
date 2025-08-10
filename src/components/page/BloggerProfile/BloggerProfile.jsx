
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CiCalendarDate } from 'react-icons/ci';
import { BiSolidCategory } from 'react-icons/bi';

const BloggerProfile = () => {
    const { email } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        axios.get('https://blog-server-side-ochre.vercel.app/users')
            .then(response => {
                const user = response.data.find(user => user?.email === email);
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
            }
        };

        fetchBlogs();
    }, [email]);

    return (
        <>
            {/* <div className="max-w-screen-2xl mx-auto my-16">
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
                                                        <Link to={`/update/${ownerBlogs._id}`}>
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
            </div> */}

            {/* new */}

            <div className="space-y-8">
                <section className="w-full overflow-hidden dark:bg-mainTheme rounded-xl border border-borderColour">
                    <div className="w-full mx-auto">
                        <div className="w-full lg:h-[15rem] h-[12rem] bg-primaryLightColor"></div>
                        <div className="w-full mx-auto flex justify-center">
                            {
                                userData?.photo ?
                                    <>
                                        <img src={userData?.photo}
                                            className="rounded-full object-cover xl:w-[10rem] xl:h-[10rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] w-[8rem] h-[8rem] outline outline-2 outline-offset-2 outline-borderColour shadow-xl relative lg:bottom-[8rem] md:bottom-[6rem] bottom-[4.3rem]" />
                                    </>
                                    :
                                    <>
                                        <div className="rounded-full flex items-center justify-center xl:w-[10rem] xl:h-[10rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] w-[8rem] h-[8rem] border-2 outline-offset-2 border-borderColour bg-bodyColor shadow-xl relative lg:bottom-[8rem] md:bottom-[6rem] bottom-[4.3rem]">
                                            <span className="text-4xl font-bold text-black">
                                                {userData?.name?.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                    </>
                            }
                        </div>
                        <div
                            className="lg:w-[40%] md:w-[94%] w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative lg:-top-[6rem] md:-top-[4rem] -top-[2.2rem]">
                            <h1 className="text-center text-black font-bold text-3xl">{userData?.name}</h1>
                            <p className="w-full text-textSmallGray text-md font-medium text-center">{userData.email}</p>
                            {
                                userData?.bio ?
                                    <>
                                        <p className="w-full text-textSmallGray text-md text-pretty text-center">{userData.bio}</p>
                                    </>
                                    :
                                    <>
                                        <p className="w-full text-black text-md font-normal text-center">No description yet.</p>
                                    </>
                            }
                            <div
                                className="px-2 flex justify-center items-center rounded-xl bg-textSmallGray text-white">
                                {
                                    userData?.github ?
                                        <>
                                            <a href={userData?.github}>
                                                <div className="p-2">
                                                    <svg
                                                        className="w-8 h-8 text-white cursor-pointer"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        fill="currentColor"
                                                        viewBox="0 0 64 64"
                                                    >
                                                        <path
                                                            d="M32.029 8.345c-13.27 0-24.029 10.759-24.029 24.033 0 10.617 6.885 19.624 16.435 22.803 1.202.22 1.64-.522 1.64-1.16 0-.569-.02-2.081-.032-4.086-6.685 1.452-8.095-3.222-8.095-3.222-1.093-2.775-2.669-3.514-2.669-3.514-2.182-1.492.165-1.462.165-1.462 2.412.171 3.681 2.477 3.681 2.477 2.144 3.672 5.625 2.611 6.994 1.997.219-1.553.838-2.612 1.526-3.213-5.336-.606-10.947-2.669-10.947-11.877 0-2.623.937-4.769 2.474-6.449-.247-.608-1.072-3.051.235-6.36 0 0 2.018-.646 6.609 2.464 1.917-.533 3.973-.8 6.016-.809 2.041.009 4.097.276 6.017.809 4.588-3.11 6.602-2.464 6.602-2.464 1.311 3.309.486 5.752.239 6.36 1.54 1.68 2.471 3.826 2.471 6.449 0 9.232-5.62 11.263-10.974 11.858.864.742 1.632 2.208 1.632 4.451 0 3.212-.029 5.804-.029 6.591 0 .644.432 1.392 1.652 1.157 9.542-3.185 16.421-12.186 16.421-22.8 0-13.274-10.76-24.033-24.034-24.033z"
                                                            style={{ fill: 'currentColor' }}
                                                        />
                                                    </svg>
                                                </div>
                                            </a>
                                        </>
                                        :
                                        <></>
                                }
                                {
                                    userData?.linkedin ?
                                        <>
                                            <a href={userData?.linkedin}>
                                                <div data-title="LinkedIn" className="p-2">
                                                    <svg className="w-8 h-8 text-white cursor-pointer" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path d="M19 0H5C3.343 0 2 1.343 2 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3V3c0-1.657-1.343-3-3-3zM8.337 18H6.1V9.337h2.237V18zM7.218 8.153c-.72 0-1.292-.578-1.292-1.29 0-.714.572-1.29 1.292-1.29.72 0 1.292.576 1.292 1.29 0 .712-.572 1.29-1.292 1.29zM18 18h-2.237v-4.5c0-1.076-.021-2.46-1.494-2.46-1.498 0-1.727 1.171-1.727 2.378V18H10.25V9.337h2.148v1.17h.03c.299-.566 1.031-1.163 2.122-1.163 2.269 0 2.688 1.494 2.688 3.434V18z" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </>
                                        :
                                        <></>
                                }
                                {
                                    userData?.protfolio ?
                                        <>
                                            <a href={userData?.protfolio}>
                                                <div className="p-2">
                                                    <svg
                                                        className="w-8 h-8 text-white cursor-pointer"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </>
                                        :
                                        <></>
                                }
                            </div>
                            <div className="w-full mx-auto  flex justify-center text-textSmallGray text-md text-pretty sm:text-center text-justify gap-2 items-center">
                                <span><CiCalendarDate /></span>
                                <h1>{userData?.date}</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="bg-mainTheme border border-borderColour rounded-xl p-10">
                    <h1 className="text-3xl font-bold text-black mb-5">Blogs</h1>
                    <div>
                        {
                            blogs.length === 0 ?
                                <>
                                    <div className="my-20 flex flex-col justify-center items-center">
                                        <div>
                                            <h1 className="text-xl font-bold text-textSmallGray">No Blogs</h1>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="flex flex-col gap-5 flex-wrap">
                                        {blogs.map((blog, index) => (
                                            <div
                                                key={blog._id}
                                                className={`w-full ${index !== blogs.length - 1 ? "border-b border-borderColour" : ""}`}
                                            >
                                                <div className="flex items-center justify-between py-3">
                                                    <div className="w-auto">
                                                        <div className="flex gap-2 items-center">
                                                            <div className="w-auto">
                                                                <div className="avatar">
                                                                    <div className="w-16 rounded-xl border border-borderColour">
                                                                        <img src={blog.details_image} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="w-auto p-2 space-y-1">
                                                                <Link title="See Details" to={`/blogdetails/${blog._id}`}>
                                                                    <h2 className="text-sm font-semibold text-black">
                                                                        {blog.title}
                                                                    </h2>
                                                                </Link>
                                                                <h3 className="flex items-center gap-1 text-xs font-medium text-textSmallGray">
                                                                    <BiSolidCategory
                                                                        title="category"
                                                                        className="text-textSmallGray"
                                                                        style={{ width: "15px", height: "15px" }}
                                                                    />
                                                                    <span>{blog.category}</span>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default BloggerProfile;
