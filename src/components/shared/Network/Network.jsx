import image1 from '../../../assets/image/network/image2.jpg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Network = () => {
    return (
        <motion.div className='container mx-auto mt-5 p-3'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
        >
            <div className="hero h-[500px]" style={{ backgroundImage: `url(${image1})` }}>
                <div className="hero-overlay bg-black bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-4xl font-bold">Join millions of others</h1>
                        <p className="mb-5">Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Blogger. Sign up to discover why millions of people have published their passions here.</p>
                        <Link to={'/addblog'}>
                            <button className="btn border-none bg-light_purple text-white hover:bg-hover_btn">CREATE YOUR BLOG</button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div >
    );
};

export default Network;