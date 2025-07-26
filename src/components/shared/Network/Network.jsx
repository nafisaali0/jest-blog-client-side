import image1 from '../../../assets/image/network/image2.jpg'
import { Link } from 'react-router-dom';

const Network = () => {
    return (
        <>
            <div
                className="hero h-[500px] my-16 rounded-xl"
                style={{ backgroundImage: `url(${image1})`}}
            >
                <div className="hero-overlay bg-black/50 bg-opacity-50 rounded-xl"></div>
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-xl text-white font-bold">Join millions of others</h1>
                        <p className="mb-5 text-white text-sm font-medium">
                            Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Blogger. Sign up to discover why millions of people have published their passions here.
                        </p>
                        <div className='flex justify-center items-center'>
                            <Link to={'/addblog'}>
                                <button className="buttonPrimary !border-white !text-white hover:!border-primaryColor">CREATE YOUR BLOG</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Network;