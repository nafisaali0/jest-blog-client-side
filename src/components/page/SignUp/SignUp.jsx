import { Link } from "react-router-dom";

const SignUp = () => {
    
    

    return (
        <div className="bg-[#f3f3f4] w-[100vw] lg:h-[100vh] md:h-[100%]" >
            <div className='container mx-auto overflow-hidden flex flex-col justify-center items-center drop-shadow-lg md:pt-12 lg:pt-20'>
                <div className="bg-white m-10 p-7 md:w-[700px]">
                    <div className="text-black my-5 font-bold text-2xl">
                        <h2>Please create your account</h2>
                    </div>
                    {/* onSubmit={handleSignUp} */}

                    <form>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" name="email" className="block py-2 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300   focus:outline-none focus:border-blue-600 peer" placeholder="Email" required />
                        </div>
                        <div className="relative z-0 w-full mb-7 group">
                            <input type="password" name="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Password" required />
                        </div>
                        {/* <div>
                            <input type="name" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Name" required />
                        </div>
                        <div>
                            <input type="image" name="image" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Image" required />
                        </div> */}
                        <div className="flex gap-2 md:gap-5 lg:gap-10 items-center my-10">
                            <div className="relative z-0 group">
                                <button type="submit" className="text-white md:w-full  bg-black  font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-cent">SIGN UP</button>
                            </div>
                            <div className="relative z-0 group">
                                <Link to={'/signin'}>
                                    <button className="text-white md:w-full  bg-black  font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">SIGN IN</button>
                                </Link>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;