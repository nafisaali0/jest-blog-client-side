import PropTypes from 'prop-types';
import iconDelete from '../../../assets/image/icons/delete.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const ShowComments = ({ comment, commentDelete, setCommentDelete }) => {
    const { user } = useContext(AuthContext)
    const { _id } = comment

    // delete currentUser comment
    const handleDelete = (id) => {
     
        fetch(`http://localhost:5000/comments/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your coffee has been deleted.',
                        'success'
                    )
                    // not working this
                    // filter to check which comments have after delete in state and change the state value 
                    const remaining = commentDelete.filter(deletedCMT => deletedCMT._id !== id)
                    setCommentDelete(remaining)
                }

            })
    }

    return (
        <>
            <div className='flex justify-between items-center'>
                <div className="flex items-center gap-3 my-3">
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
    commentDelete: PropTypes.func,
    setCommentDelete: PropTypes.func
};

export default ShowComments;