import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from 'sweetalert2';
import ShowComments from './ShowComments';

const CreateComment = ({ id, blog_Email }) => {

    const { user } = useContext(AuthContext)
    const [comments, setComments] = useState([]);
    const [commentDelete, setCommentDelete] = useState([])
    const [isButtonDisabled, setisButtonDisabled] = useState(false)



    //create comment 
    const handlePostComment = e => {
        e.preventDefault();

        const blog_id = id
        const comment = e.target.comment.value;
        const owner_name = user.displayName;
        const owner_image = user.photoURL;
        const owner_Email = user.email;
        const newBlog = { blog_id, comment, owner_name, owner_image, owner_Email }

        if (user.email === blog_Email) {
            setisButtonDisabled(true)
            return (
                Swal.fire({
                    icon: 'error',
                    title: 'Try Again',
                    text: 'Sorry, You cannot comment in your own blog',
                })
            )
        } else {
            
            //post comment
            fetch('http://localhost:5000/comments', {
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
                            'Successfully Created Blog'
                        )
                    }
                })
        }
    }


    // show comment
    useEffect(() => {
        fetch(`http://localhost:5000/comments?blog_id=${id}`)
            .then(res => res.json())
            .then(data => {
                setComments(data),
                    setCommentDelete(data)
            })
    }, [id])
    // has issue!
    // console.log(comments)
    // console.log(commentDelete)
    return (
        <>
            <form onSubmit={handlePostComment} disabled={isButtonDisabled}>
                <div className="form-control ">
                    <label className="input-group">
                        <span className="bg-transparent"><img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" /></span>
                        <textarea rows={4} type="text" name="comment" placeholder="Write your thoughts here..." className="w-full rounded-xl p-2.5 border-b-2" />
                    </label>
                </div>
                <div className="flex justify-end my-3">
                    <button className='px-3 py-2 bg-[#5b608b] text-lg text-white font-semibold rounded-xl'>POST</button>
                </div>
            </form>

            <div className="flex flex-col gap-3">
                {
                    comments.map(comment =>
                        <ShowComments key={comment._id}
                            comment={comment}
                            commentDelete={commentDelete}
                            setCommentDelete={setCommentDelete}>
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