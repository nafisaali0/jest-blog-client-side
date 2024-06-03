
const ShowProfile = () => {
    return (
        <>
            <div className="h-96 bg-dash_nav from-pink-500 to-red-500">
            </div>
                <div className="bg-white rounded-2xl w-full max-w-screen-2xl mx-auto shadow-lg p-6 -mt-28 md:p-8 lg:p-10">
                    <div className="flex justify-center">
                        <div className="relative">
                            <img
                                className="w-28 h-28 rounded-full mx-auto shadow-md"
                                src="https://via.placeholder.com/150"
                                alt="Samantha Jones"
                            />
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Samantha Jones</h2>
                        <p className="text-gray-600 mt-2">New York, United States</p>
                        <p className="mt-2 text-gray-600">Web Producer - Web Specialist</p>
                        <p className="text-gray-600">Columbia University - New York</p>
                        <div className="flex justify-between items-center mt-6">
                            <div className="text-center">
                                <span className="block text-lg font-bold text-gray-800">65</span>
                                <span className="text-gray-600">Friends</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-lg font-bold text-gray-800">43</span>
                                <span className="text-gray-600">Photos</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-lg font-bold text-gray-800">21</span>
                                <span className="text-gray-600">Comments</span>
                            </div>
                        </div>
                        <button className="mt-6 w-full py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition duration-200">
                            Show more
                        </button>
                    </div>
                </div>
        </>
    );
};

export default ShowProfile;