import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import DeleteFunctionality from '../../shared/DeleteFunctionality/DeleteFunctionality';

const ShowComments = ({ comment, comments, setChangeCommentsState }) => {
    const { user } = useContext(AuthContext)
    const { _id } = comment

    return (
        <>
            <div className='flex justify-between items-center my-3 w-full'>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img src={comment?.owner_image} alt="User" />
                        </div>
                    </div>
                    <div className='font-semibold text-sm text-black'>
                        <p>{comment.owner_name}</p>
                        <p>{comment.comment}</p>
                    </div>
                </div>
                <div className='cursor-pointer'>
                    {
                        user?.email === comment.owner_Email ?
                            <>
                                <DeleteFunctionality
                                    _id={_id}
                                    baseLink="https://blog-server-side-ochre.vercel.app/comments"
                                    comments={comments} 
                                    setChangeCommentsState={setChangeCommentsState}
                                />
                            </> : ''
                    }
                </div>
            </div>
        </>
    );
};

ShowComments.propTypes = {
    comment: PropTypes.obj,
    comments: PropTypes.array,
    setChangeCommentsState: PropTypes.func
};

export default ShowComments;