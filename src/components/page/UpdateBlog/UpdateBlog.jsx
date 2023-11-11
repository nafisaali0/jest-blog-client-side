// import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import moment from 'moment';
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateBlog = () => {

    //get specific product through unique id from backend created api   
    const blogs = useLoaderData()
    // console.log(blogs)

    const { _id, title, short_description, long_description, details_image, } = blogs

    const { user } = useContext(AuthContext)
    const [categorys, setCategorys] = useState([])
    const [category, setCategory] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])


    const handleUpdateBlog = e => {
        e.preventDefault();

        const title = e.target.title.value;
        const short_description = e.target.shortDes.value;
        const long_description = e.target.longDes.value;
        const details_image = e.target.photo.value;
        const date = moment().format("MMM Do YY");
        const time = moment().format('LT');
        const owner_name = user.displayName;
        const owner_image = user.photoURL;
        const owner_Email = user.email;
        const updateBlog = { title, short_description, long_description, details_image, date, time, category, owner_name, owner_image, owner_Email }
        console.log(updateBlog)


        // sent update productinfo to server
        fetch(`http://localhost:5000/blogs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Updated!',
                        'Your blog has been Updated.',
                        'success'
                    )
                }

            })

    }
    return (
        <>
            <div className="max-w-5xl mx-auto overflow-hidden my-20 p-5">
                <form onSubmit={handleUpdateBlog}>
                    <div className="flex justify-between items-center">
                        <div className="dropdown dropdown-right">
                            <label tabIndex={0} className="btn bg-[#5b608b] text-white hover:bg-[#5b608b] mr-1">Select Category</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    categorys.map(category =>
                                        <>
                                            <li onClick={() => setCategory(`${category.category}`)} key={category._id} defaultValue={category.category}><a>{category.category}</a></li>
                                        </>
                                    )
                                }
                            </ul>
                        </div>
                        <div>
                            <button className='px-3 py-2 bg-[#5b608b] text-lg text-white font-semibold rounded-xl'>Update Blog</button>
                        </div>
                    </div>
                    <div className="mt-10">
                        <label htmlFor="Title" className="text-2xl font-bold">Title</label>
                        <input type="text" name="title"  defaultValue={title} className="bg-transparent my-5 py-5 w-full text-lg border-gray-300 border-b-2 outline-none placeholder:text-4xl" />
                    </div>
                    <div className="my-3">
                        <label htmlFor="Title" className="text-2xl font-bold">Blog Photo</label>
                        <input type="url" name="photo" defaultValue={details_image} className="bg-transparent my-5 py-5 w-full text-lg border-gray-300 border-b-2 outline-none placeholder:text-4xl" />
                    </div>
                    <div className="my-3">
                        <label htmlFor="Title" className="text-2xl font-bold">Short Description</label>
                        <input type="text" name="shortDes" defaultValue={short_description} className="bg-transparent my-5 py-5 w-full text-lg border-gray-300 border-b-2 outline-none placeholder:text-4xl" />
                    </div>
                    <div className="my-3">
                        <label htmlFor="Title" className="text-2xl font-bold">Long Description</label>
                        <input type="text" name="longDes" defaultValue={long_description} className="bg-transparent my-5 py-5 w-full text-lg border-gray-300 border-b-2 outline-none placeholder:text-4xl" />
                    </div>
                </form>
            </div>
        </>
    );
};

// UpdateBlog.propTypes = {

// };

export default UpdateBlog;