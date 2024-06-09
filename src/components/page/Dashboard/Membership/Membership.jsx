import { Player } from '@lottiefiles/react-lottie-player';
import BasicMember from '../../../../assets/image/animation/basicmember.json'
import StandardMember from '../../../../assets/image/animation/StandardMember.json'

const Membership = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-center items-center mt-44 gap-7 p-5">
                <div className="bg-white rounded-lg shadow-md p-6 text-center w-full max-w-lg">
                    <h2 className="text-xl font-bold mb-2">Basic</h2>
                    <div className='my-5'>
                        <Player
                            autoplay
                            loop
                            src={BasicMember}
                            style={{ height: '200px', width: '200px' }}
                        >
                        </Player>
                    </div>
                    <p className="text-2xl font-semibold mb-4">0 TK / month</p>
                    <ul className="text-left mb-6">
                        <li className="flex items-center mb-2">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Users are permitted to create a maximum of 10 blogs.
                        </li>
                        <li className="flex items-center mb-2">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Creation of premium blogs is not allowed.
                        </li>
                        <li className="flex items-center mb-2">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Premium blogs will not be displayed.
                        </li>
                    </ul>
                    <button className="bg-light_purple text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition duration-200">
                        Available
                    </button>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center w-full max-w-lg">
                    <h2 className="text-xl font-bold mb-2">Standard</h2>
                    <div className='my-5'>
                        <Player
                            autoplay
                            loop
                            src={StandardMember}
                            style={{ height: '200px', width: '200px' }}
                            className='mx-auto'
                        >
                        </Player>
                    </div>
                    <p className="text-2xl font-semibold mb-4">100 TK / month</p>
                    <ul className="text-left mb-6">
                        <li className="flex items-center mb-2">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Users have the ability to create more than 10 blogs.
                        </li>
                        <li className="flex items-center mb-2">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Users can create premium blogs.
                        </li>
                        <li className="flex items-center mb-2">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Users have access to view the full content of blogs.
                        </li>
                    </ul>
                    <button className="bg-light_purple text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition duration-200">
                        Get Started
                    </button>
                </div>
            </div>
        </>
    );
};

export default Membership;