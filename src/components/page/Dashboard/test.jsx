
const test = () => {
    return (
        <>
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full transition-all duration-300 hover:shadow-indigo-500/50 dark:hover:shadow-blue-900/50">
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <img
                            src="https://i.pravatar.cc/100?img=3"
                            alt="User Avatar"
                            className="w-16 h-16 rounded-full object-cover border-2 border-borderColour transition-transform duration-300 hover:scale-110"
                        />
                            <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">Jane Doe</h2>
                        <p className="text-indigo-800">Product Designer</p>
                    </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <button className="bg-indigo-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Follow
                    </button>
                    <div className="text-gray-600 text-sm">
                        <span className="font-semibold">1.2k</span> Followers
                    </div>
                </div>
            </div>
        </>
    )
}

export default test
