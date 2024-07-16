import PropTypes from 'prop-types';
import FollowFunctionality from '../FollowFunctionality/FollowFunctionality';
import useUsers from '../../../hooks/useUsers';
import { Link } from 'react-router-dom';


const ShowBloggerUser = ({ blog }) => {

    const { owner_name, owner_image, owner_Email } = blog
    const [users] = useUsers();
    const currentUser = users.length > 0 ? users[0] : {};

    return (
        <>

            <div className='flex gap-8 w-full bg-card_white rounded-lg shadow hover:bg-hover_gray p-10'>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={owner_image} />
                    </div>
                </div>
                <div>
                    <h1 className='text-lg font-bold'>{owner_name}</h1>
                    <Link className='text-sm font-bold' to={`/blogs/bloggeremail/${owner_Email}`}>
                        <p>CheckOut my Profile</p>
                    </Link>
                </div>
                <div>
                    {
                        currentUser?.email !== owner_Email ?
                            <div className="badge  p-3 font-bold text-white bg-light_purple hover:bg-hover_btn cursor-pointer"><FollowFunctionality
                                email={owner_Email}></FollowFunctionality></div>
                            :
                            <div className="badge  p-3 font-bold text-white bg-hover_btn cursor-pointer">Editor</div>
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