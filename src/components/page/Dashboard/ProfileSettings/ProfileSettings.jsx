
const ProfileSettings = () => {
    return (
        <>
            <div className="max-w-screen-2xl mx-auto p-6 bg-white rounded-lg my-20">
                <form>
                    <div className="flex items-center space-x-8 mb-10">
                        <img
                            className="w-28 h-28 rounded-full"
                            src="https://via.placeholder.com/150"
                            alt="Carly Hester"
                        />
                        <div>
                            <h2 className="text-xl font-medium">Carly Hester</h2>
                            <p className="text-lg text-gray-500">Change Image</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 shawdow-md shadow-sm mb-6">
                        <div className="border-2 border-card_white px-5 py-5">
                            <label className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 sm:text-sm focus:outline-none"
                                defaultValue="Carly"
                            />
                        </div>
                        <div className="border-2 border-card_white px-5 py-5 shadow-sm">
                            <label className="block text-sm font-medium text-gray-700">
                                Surname
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 focus:outline-none sm:text-sm"
                                defaultValue="Hester"
                            />
                        </div>
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
                        <div className="border-2 border-card_white px-5 py-5 shadow-sm ">
                            <label className="block text-sm font-medium text-gray-700">
                                Bio
                            </label>
                            <textarea
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 focus:outline-none sm:text-sm"
                                defaultValue="write your bio"
                            />
                        </div>
                        <div className="border-2 border-card_white px-5 py-5 shadow-sm">
                            <label className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="mt-1 block w-full rounded-md border-gray-300 focus:outline-none sm:text-sm"
                                defaultValue="carly.hester@gmail.com"
                            />
                        </div>
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
                        <div className="border-2 border-card_white px-5 py-5 shadow-sm">
                            <label className="block text-sm font-medium text-gray-700">
                                WorK
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 focus:outline-none sm:text-sm"
                                defaultValue="work"
                            />
                        </div>
                        <div className="border-2 border-card_white px-5 py-5">
                            <label className="block text-sm font-medium text-gray-700">
                                Education
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 focus:outline-none sm:text-sm"
                                defaultValue="#12"
                            />
                        </div>
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3 mb-6">
                        <div className="border-2 border-card_white px-5 py-5 shadow-sm">
                            <label className="block text-sm font-medium text-gray-700">
                                Website Url
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 focus:outline-none sm:text-sm"
                                defaultValue="590 Berkeley Ave"
                            />
                        </div>
                        <div className="border-2 border-card_white px-5 py-5  shadow-sm">
                            <label className="block text-sm font-medium text-gray-700">
                                Github Username
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 focus:outline-none sm:text-sm"
                                defaultValue="Github Username"
                            />
                        </div>
                        <div className="border-2 border-card_white px-5 py-5 shadow-sm">
                            <label className="block text-sm font-medium text-gray-700">
                                LinkedIn Username
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md border-gray-300 focus:outline-none sm:text-sm"
                                defaultValue="LinkedIn username"
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-52 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-center text-white bg-light_purple hover:bg-hover_btn focus:outline-none"
                        >
                            Save changes
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ProfileSettings;