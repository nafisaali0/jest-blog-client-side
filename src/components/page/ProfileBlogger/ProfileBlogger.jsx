import { useParams } from "react-router-dom";
import useAllUsers from "../../../hooks/useAllUsers";
import { CiCalendarDate } from "react-icons/ci";
import Loader from "../../shared/Loader/Loader";

const ProfileBlogger = () => {
    const { email } = useParams();
    const [allUsers] = useAllUsers();
    const decodedEmail = decodeURIComponent(email);
    const profileBlogger = allUsers?.find(user => user?.email === decodedEmail);

    if (!profileBlogger) {
        return <Loader />;
    }
    // if (!profileBlogger) {
    //     return <p>Loading user details...</p>;
    // }
    return (
        <>
            <div
                data-aos="fade-down"
                data-aos-offset="500"
                data-aos-duration="3000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                className="space-y-8">
                <section className="w-full overflow-hidden bg-mainTheme rounded-xl border border-borderColour">
                    <div className="w-full mx-auto">
                        <div className="w-full lg:h-[15rem] h-[12rem] bg-primaryLightColor"></div>
                        <div className="w-full mx-auto flex justify-center">
                            {
                                profileBlogger?.photo ?
                                    <>
                                        <img src={profileBlogger?.photo}
                                            className="rounded-full object-cover xl:w-[10rem] xl:h-[10rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] w-[8rem] h-[8rem] outline outline-2 outline-offset-2 outline-borderColour shadow-xl relative lg:bottom-[8rem] md:bottom-[6rem] bottom-[4.3rem]" />
                                    </>
                                    :
                                    <>
                                        <div className="rounded-full flex items-center justify-center xl:w-[10rem] xl:h-[10rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] w-[8rem] h-[8rem] border-2 outline-offset-2 border-borderColour bg-bodyColor shadow-xl relative lg:bottom-[8rem] md:bottom-[6rem] bottom-[4.3rem]">
                                            <span className="text-4xl font-bold text-black">
                                                {profileBlogger?.name?.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                    </>
                            }
                        </div>
                        <div
                            className="lg:w-[40%] md:w-[94%] w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative lg:-top-[6rem] md:-top-[4rem] -top-[2.2rem]">
                            <h1 className="text-center text-black font-bold text-3xl">{profileBlogger?.name}</h1>
                            <p className="w-full text-textSmallGray text-md font-medium text-center">{profileBlogger.email}</p>
                            {
                                profileBlogger?.bio ?
                                    <>
                                        <p className="w-full text-textSmallGray text-md text-pretty text-center">{profileBlogger.bio}</p>
                                    </>
                                    :
                                    <>
                                        <p className="w-full text-black text-md font-normal text-center">No description yet.</p>
                                    </>
                            }
                            <div
                                className="px-2 flex justify-center items-center rounded-xl bg-textSmallGray text-white">
                                {
                                    profileBlogger?.github ?
                                        <>
                                            <a href={profileBlogger?.github}>
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
                                    profileBlogger?.linkedin ?
                                        <>
                                            <a href={profileBlogger?.linkedin}>
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
                                    profileBlogger?.protfolio ?
                                        <>
                                            <a href={profileBlogger?.protfolio}>
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
                                <h1>{profileBlogger?.date}</h1>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <div className="bg-mainTheme border border-borderColour rounded-xl p-10">
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
                </div> */}
            </div>
        </>
    )
}

export default ProfileBlogger
