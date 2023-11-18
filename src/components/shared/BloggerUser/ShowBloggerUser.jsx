import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
// import { useEffect, useState } from 'react';

const ShowBloggerUser = ({ blog }) => {

    const { owner_name, owner_image, owner_Email } = blog
    const { user } = useContext(AuthContext)
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
            <div className='flex gap-8 w-full bg-white border border-gray-200 rounded-lg shadow  p-10'>
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
                        user.email !== owner_Email ?
                            following ? <div onClick={handleFollowUser} className="badge  p-3 font-bold text-white bg-[#5b608b] cursor-pointer">following</div>
                                :
                                <div onClick={handleFollowUser} className="badge badge-neutral p-3 font-bold text-white bg-black cursor-pointer">follow</div>
                            :
                            <div className="badge  p-3 font-bold text-white bg-[#5b608b] cursor-pointer">Editor</div>
                    }

                </div>
            </div>

        </>
    );
};

ShowBloggerUser.propTypes = {
    blog: PropTypes.obj,
};

export default ShowBloggerUser;