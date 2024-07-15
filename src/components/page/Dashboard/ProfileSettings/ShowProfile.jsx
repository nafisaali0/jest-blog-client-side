import { Link } from "react-router-dom";
import useUsers from "../../../../hooks/useUsers";
import { PiGithubLogoBold } from "react-icons/pi";
import { PiLinkedinLogo } from "react-icons/pi";
import { SiWebauthn } from "react-icons/si";
import useFollowers from "../../../../hooks/useFollowers";
import FollowFunctionality from "../../../shared/FollowFunctionality/FollowFunctionality";


const ShowProfile = () => {

    const [users] = useUsers();
    const [followers] = useFollowers();

    return (
        <>
            <div className="max-w-screen-2xl mx-auto">
                <div className="mt-44">
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
                        followers?.map((follower) => (
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
                                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-light_purple hover:bg-hover_btn rounded-lg focus:outline-none"><FollowFunctionality email={follower.followersEmail}></FollowFunctionality></a>
                                        <a href={'/dashboard/profile-setting'} className="py-2 px-4 ms-2 text-sm font-medium text-light_purple focus:outline-none bg-white rounded-lg border border-light_purple hover:text-white hover:border-hover_btn hover:bg-hover_btn focus:z-10">View Profile</a>
                                    </div>
                                </div>
                            </>
                        ))}
                </div>
            </div>





        </>
    );
};

export default ShowProfile;