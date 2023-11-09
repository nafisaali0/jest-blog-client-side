// import PropTypes from 'prop-types';

import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const CreateComment = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <>
            <form>
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

            <div className="flex items-center gap-3 my-3">
                <div>
                    <span className="bg-transparent"><img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" /></span>
                </div>
                <div>
                    <p>user name</p>
                    <p>Awsome Blog</p>
                </div>
            </div>
        </>
    );
};

CreateComment.propTypes = {

};

export default CreateComment;