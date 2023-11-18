import image1 from '../../../assets/image/network/image2.jpg'
// import banner from '../../../assets/image/background/wave.svg'
import { Link } from 'react-router-dom';
const Network = () => {
    return (
        <div className='container mx-auto mt-5'>
            <div className="hero h-[500px]" style={{ backgroundImage: `url(${image1})` }}>
                <div className="hero-overlay bg-black bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-4xl font-bold">Join millions of others</h1>
                        <p className="mb-5">Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Blogger. Sign up to discover why millions of people have published their passions here.</p>
                        <Link to={'/addblog'}>
                            <button className="btn border-none bg-[#5b608b] text-white hover:bg-none">CREATE YOUR BLOG</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Network;