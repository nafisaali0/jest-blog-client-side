import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Skeleton from 'react-loading-skeleton';
import { motion } from 'framer-motion';


const ShowBloggerUser = ({ blog }) => {

    const { owner_name, owner_image, owner_Email } = blog
    const { user, loading } = useContext(AuthContext)
    const [following, setFollowing] = useState(false)

    // follow Btn conditon
    const handleFollowUser = () => {
        if (following === false) {
            setFollowing(true)
        } else {
            setFollowing(false)
        }
    }
    return (
        <>
            {
                loading ?
                    <div className='flex gap-8 w-full bg-card_white border border-gray-200 rounded-lg shadow  p-10'>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <Skeleton circle={true} width={100} height={100} />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-lg font-bold'><Skeleton width={100}></Skeleton></h1>
                            <p className='text-sm font-bold'><Skeleton width={100} count={2}></Skeleton></p>
                        </div>
                        <div>
                            <div className="badge  p-3 font-bold text-white bg-light_purple cursor-pointer"><Skeleton></Skeleton></div>
                        </div>
                    </div>
                    :
                    <motion.div className='flex gap-8 w-full bg-card_white rounded-lg shadow hover:bg-hover_gray p-10'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={owner_image} />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-lg font-bold'>{owner_name}</h1>
                            <p className='text-sm font-bold'>CheckOut my blog</p>
                        </div>
                        <div>
                            {
                                user?.email !== owner_Email ?
                                    following ? <div onClick={handleFollowUser} className="badge  p-3 font-bold text-white bg-light_purple hover:bg-hover_btn cursor-pointer">following</div>
                                        :
                                        <div onClick={handleFollowUser} className="badge badge-neutral p-3 font-bold text-white bg-black cursor-pointer">follow</div>
                                    :
                                    <div className="badge  p-3 font-bold text-white bg-hover_btn cursor-pointer">Editor</div>
                            }

                        </div>
                    </motion.div>
            }
        </>
    );
};

ShowBloggerUser.propTypes = {
    blog: PropTypes.obj,
};

export default ShowBloggerUser;