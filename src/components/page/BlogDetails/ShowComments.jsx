import PropTypes from 'prop-types';
import iconDelete from '../../../assets/image/icons/delete.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const ShowComments = ({ comment, comments, setChangeCommentsState }) => {
    const { user } = useContext(AuthContext)
    const { _id } = comment//data come from CreateComment comp

    // delete currentUser comment
    const handleDelete = () => {

        fetch(`http://localhost:5000/comments/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your comment has been deleted.',
                        'success'
                    )
                }
                // clear state after delete comments
                const loadCommentsAfterDelete = comments.filter(comment => comment._id !== _id)
                setChangeCommentsState(loadCommentsAfterDelete)
            })
    }

    return (
        <>
            <div className='flex justify-between items-center my-3'>
                <div className="flex items-center gap-3">
                    <div>
                        <span className="bg-transparent"><img className="w-12 h-12 rounded-full" src={comment?.owner_image} alt="" /></span>
                    </div>
                    <div className='font-semibold'>
                        <p className='text-sm'>{comment.owner_name}</p>
                        <p className='text-lg'>{comment.comment}</p>
                    </div>
                </div>
                <div className='cursor-pointer'>
                    {
                        user?.email === comment.owner_Email ?
                            <>
                                <img onClick={() => handleDelete(comment._id)} className='w-7 h-7' src={iconDelete} alt="delete" />
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