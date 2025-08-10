import { Link } from "react-router-dom";
import useUsers from "../../../../hooks/useUsers";
import { PiGithubLogoBold } from "react-icons/pi";
import { PiLinkedinLogo } from "react-icons/pi";
import { SiWebauthn } from "react-icons/si";
import useFollowers from "../../../../hooks/useFollowers";
import FollowFunctionality from "../../../shared/FollowFunctionality/FollowFunctionality";
import { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";


const ShowProfile = () => {

    const [users] = useUsers();
    const [followers] = useFollowers();
    const [isfollowers, setIsFollowers] = useState([]);
    useEffect(() => {
        setIsFollowers(followers);
    }, [followers]);

    const handleUnfollow = (email) => {
        setIsFollowers((prevFollowers) => prevFollowers.filter(follow => follow.followersEmail !== email));
    };

    return (
        <>
            {/* <div>
                <div>
                    {
                        users.map(userProfile =>
                            <>
                                <div className="w-full bg-white rounded-lg shadow p-5">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <span>{userProfile.date}</span>
                                        </div>
                                        <div>
                                            <span>{userProfile.email}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center pb-10">
                                        <img className="w-24 h-24 md:w-32 md:h-32 -mt-24 mb-3 rounded-full shadow-lg" src={userProfile.photo} alt="Bonnie image" />
                                        <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">{userProfile.name}</h5>
                                        <span className="text-lg text-gray-500 dark:text-gray-400">{userProfile.bio}</span>
                                        <div className="mt-6 text-center">
                                            <h5 className="mb-1 text-xl font-medium text-black dark:text-white">{userProfile.work}</h5>
                                            <h5 className="mb-1 text-xl font-medium text-black dark:text-white">{userProfile.education}</h5>
                                        </div>
                                        <div className="flex items-center justify-center gap-5 mt-6">
                                            <Link to={userProfile.github} className="flex items-center justify-center flex-col">
                                                <PiGithubLogoBold className="w-7 h-7 block" />
                                                <span className="text-gray-600">Github</span>
                                            </Link>
                                            <Link to={userProfile.linkedin} className="flex items-center justify-center flex-col">
                                                <PiLinkedinLogo className="block w-7 h-7" />
                                                <span className="text-gray-600">linkedin</span>
                                            </Link>
                                            <Link to={userProfile.protfolio} className="flex items-center justify-center flex-col">
                                                <SiWebauthn className="w-7 h-7  block" />
                                                <span className="text-gray-600">Protfolio</span>
                                            </Link>
                                        </div>
                                        <div className="flex mt-4 md:mt-6">
                                            <a href={'/dashboard/profile-setting'} className="py-2 px-4 ms-2 text-sm font-medium text-light_purple focus:outline-none bg-white rounded-lg border border-light_purple hover:text-white hover:border-hover_btn hover:bg-hover_btn focus:z-10">Profile Edit</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
                    {
                        isfollowers?.map((follower) => (
                            <>
                                <div className="bg-white shadow-lg rounded-xl overflow-hidden p-6">
                                    <div className="flex flex-col items-center">
                                        <div className="bg-gray-300 rounded-full h-24 w-24 flex items-center justify-center mb-4">
                                            <img src={follower.followersImage} alt="Profile" className="rounded-full h-24 w-24 object-cover" />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-gray-700 text-lg font-bold">{follower.followersName}</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex gap-5 items-center justify-center">
                                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-light_purple hover:bg-hover_btn rounded-lg focus:outline-none">
                                            <FollowFunctionality
                                                email={follower.followersEmail}>
                                                onUnfollow={handleUnfollow}
                                            </FollowFunctionality>
                                        </a>
                                        <a href={'/dashboard/profile-setting'} className="py-2 px-4 ms-2 text-sm font-medium text-light_purple focus:outline-none bg-white rounded-lg border border-light_purple hover:text-white hover:border-hover_btn hover:bg-hover_btn focus:z-10">View Profile</a>
                                    </div>
                                </div>
                            </>
                        ))}
                </div>
            </div> */}

            {/* <div className=" container mx-auto">
                <div className="flex items-center">
                    <div className="lg:w-[60%] w-full shadow-lg flex flex-col gap-2 justify-center items-center p-4 mx-4 border-2 border-borderColour rounded-xl bg-mainTheme ">
                        <img src="https://media.licdn.com/media/AAYQAgSuAAgAAQAAAAAAACusnN9kMj0wRRWck-KbrrrLSg.png" alt="User Profile" className="w-[6rem] h-[6rem] border-2 border-borderColour rounded-full" />
                        <div className="w-full pt-4 text-center">
                            <h3 className="text-2xl font-serif text-gray-900 dark:text-white">Hi Samuel, are you hiring?</h3>
                            <p className="text-xl text-serif pt-2 text-gray-500 dark:text-gray-400">Discover free and easy ways to find a great
                                hire,
                                fast.</p>
                        </div>

                        <div className="flex sm:flex-row xs:flex-col gap-4 pt-4 dark:text-white">
                            <button className="px-6 py-1 rounded-full outline outline-1 outline-blue-700 font-serif">Yes, I'm hiring</button>
                            <button className="px-6 py-1 rounded-full outline outline-1 outline-blue-700 font-serif">No, not right now</button>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* test-2 */}
            {
                users.map(userProfile =>
                    <>

                        <section className="w-full overflow-hidden dark:bg-mainTheme rounded-xl">
                            <div className="w-full mx-auto">
                                <div className="w-full xl:h-[15rem] lg:h-[15rem] md:h-[10rem] sm:h-[8rem] h-[9.5rem] bg-primaryLightColor"></div>

                                <div className="w-full mx-auto flex justify-center">
                                    <img src={userProfile.photo}
                                        className="rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] w-[8rem] h-[8rem] outline outline-2 outline-offset-2 outline-borderColour shadow-xl relative xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] sm:bottom-[5rem] bottom-[4.3rem]" />
                                </div>
                                <div
                                    className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] -top-[2.2rem]">
                                    <h1 className="text-center text-textSmallGray text-4xl">{userProfile.name}</h1>

                                    <p className="w-full text-textSmallGray text-md text-pretty sm:text-center text-justify">{userProfile.email}</p>
                                    <p className="w-full text-textSmallGray text-md text-pretty sm:text-center text-justify">Lorem, ipsum dolor sit amet
                                        consectetur adipisicing elit. Quisquam debitis labore consectetur voluptatibus mollitia dolorem</p>

                                    <div
                                        className="px-2 flex rounded-xl bg-textSmallGray text-white">
                                        <a href={userProfile.github}>
                                            <div data-title="LinkedIn" className="p-2">
                                                <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path fillRule="evenodd"
                                                        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                                                        clipRule="evenodd" />
                                                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                                </svg>
                                            </div>
                                        </a>
                                        <a href={userProfile.github}>
                                            <div className="p-2">
                                                <svg
                                                    className="w-8 h-8 text-gray-800 dark:text-white"
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
                                        <a href={userProfile.github}>
                                            <div className="p-2">
                                                <svg
                                                 className="w-8 h-8 text-gray-800 dark:text-white"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                                </svg>

                                            </div>
                                        </a>
                                    </div>

                                    <div className="w-full mx-auto  flex justify-center text-textSmallGray text-md text-pretty sm:text-center text-justify gap-2 items-center">
                                        <span><CiCalendarDate /></span>
                                        <h1>{userProfile.date}</h1>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>

                )
            }
        </>
    );
};

export default ShowProfile;