
const ShowProfile = () => {
    return (
        <>
            <div className="max-w-screen-2xl mx-auto mt-44 p-5 mb-16">
                <div className="bg-white rounded-2xl drop-shadow-2xl p-5">
                    <div className="flex justify-between items-center">
                        <div>
                            Join Date
                        </div>
                        <div className="-mt-20">
                            <img
                                className="w-32 h-32 rounded-full mx-auto shadow-md"
                                src="https://via.placeholder.com/150"
                                alt="Samantha Jones"
                            />
                        </div>
                        <div>
                            email
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Samantha Jones</h2>
                        <p className="text-gray-600 mt-2">Bio</p>
                        <p className="mt-2 text-gray-600">work</p>
                        <p className="text-gray-600">Education</p>
                        <div className="flex items-center justify-center gap-5 mt-6">
                            <div className="text-center">
                                <span className="block text-lg font-bold text-gray-800">65</span>
                                <span className="text-gray-600">Github</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-lg font-bold text-gray-800">43</span>
                                <span className="text-gray-600">linkedin</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-lg font-bold text-gray-800">21</span>
                                <span className="text-gray-600">Protfolio</span>
                            </div>
                        </div>
                        <button className="my-6 w-36 py-2 bg-light_purple text-white rounded-full hover:bg-pink-700 transition duration-200">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowProfile;