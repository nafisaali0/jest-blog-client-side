import PropTypes from 'prop-types';
import { useState } from "react";
import Swal from 'sweetalert2';
import ShowComments from './ShowComments';
import useUsers from '../../../hooks/useUsers';
// import useComment from './../../../hooks/useComment';
import useCommentsByid from '../../../hooks/useCommentsByBlogId';

const CreateComment = ({ id, blog_Email }) => {

    const [users] = useUsers();
    const currentUser = users.length > 0 ? users[0] : {};
    const [isButtonDisabled, setisButtonDisabled] = useState(false)
    const [blogComments, refetch] = useCommentsByid(id)

    //create comment 
    const handlePostComment = e => {
        e.preventDefault();

        const blog_id = id
        const comment = e.target.comment.value;
        const owner_name = currentUser.name;
        const owner_image = currentUser.photo;
        const owner_Email = currentUser.email;
        const newBlog = { blog_id, comment, owner_name, owner_image, owner_Email }

        // currentUser cannot comment own blog
        if (currentUser?.email === blog_Email) {
            setisButtonDisabled(true)
            return (
                Swal.fire({
                    icon: 'error',
                    title: 'Try Again',
                    text: 'Sorry, You cannot comment in your own blog',
                })
            )
        } else {
            //create comment to backend api
            fetch('https://blog-server-side-ochre.vercel.app/comments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newBlog)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        Swal.fire(
                            'Successfully add comment'
                        )
                    }
                })
        }
    }

    return (
        <>
            <form onSubmit={handlePostComment} disabled={isButtonDisabled}>
                <div className="flex gap-3 items-start w-full bg-mainTheme">
                    {/* Avatar */}
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img src={currentUser.photo} alt="User" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <textarea
                            name="comment"
                            placeholder="Write your thoughts here..."
                            rows={3}
                            className="w-full px-4 py-2 border border-borderColour rounded-xl resize-none focus:outline-none focus:ring-1 focus:ring-borderColour"
                        />
                    </div>
                </div>
                <div className="flex justify-end mt-2">
                    <div className="flex justify-end">
                        <button type="submit" className="py-2 px-4 font-semibold rounded-full bg-primaryColor text-white hover:bg-primaryHover">
                            POST
                        </button>
                    </div>
                </div>
            </form>

            <div className="flex flex-col items-start space-y-4">
                {
                    blogComments.map(comment =>
                        <ShowComments
                            key={comment._id}
                            comment={comment}
                            refetch={refetch}
                        >
                        </ShowComments>
                    )
                }

            </div>
        </>
    );
};

CreateComment.propTypes = {
    id: PropTypes.number,
    blog_Email: PropTypes.string
};

export default CreateComment;


{/* <div className="form-control space-y-4">
                    <label className="flex items-start space-x-3">
                        <span className="flex-shrink-0">
                            <img
                                className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 object-cover"
                                src={currentUser.photo}
                                alt="User avatar"
                            />
                        </span>
                        <textarea
                            rows={4}
                            type="text"
                            name="comment"
                            placeholder="Write your thoughts here..."
                            className="w-full rounded-xl p-3 outline-none"
                        />
                    </label>
                    <div className="flex justify-end">
                        <button className="btn bg-light_purple text-white hover:bg-hover_btn border-none px-6 py-2 rounded-full">
                            POST
                        </button>
                    </div>
                </div> */}