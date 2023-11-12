import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import moment from 'moment';
import Swal from "sweetalert2";

const AddBlog = () => {

    const { user } = useContext(AuthContext)//load currentUser check who create new blog
    const [categorys, setCategorys] = useState([])//this for show all category from server
    const [category, setCategory] = useState('')//this for set category value to send DB using post method
    
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])    

    const handleCreateBlog = e => {
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
        const newBlog = { title, short_description, long_description, details_image, date, time, category, owner_name, owner_image, owner_Email }
        // console.log(newBlog)

        fetch('http://localhost:5000/blogs', {
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
    return (
        <div className="max-w-5xl mx-auto overflow-hidden my-20 p-5">
            <form onSubmit={handleCreateBlog}>
                <div className="flex justify-between items-center">
                    <div className="dropdown dropdown-right">
                        <label tabIndex={0} className="btn bg-[#5b608b] text-white hover:bg-[#5b608b] mr-1">Select Category</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                categorys.map(category =>
                                    <>
                                        <li onClick={() => setCategory(`${category.category}`)} key={category._id}><a>{category.category}</a></li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                    <div>
                        <button className='px-3 py-2 bg-[#5b608b] text-lg text-white font-semibold rounded-xl'>Create Blog</button>
                    </div>
                </div>
                <div className="mt-10">
                    <label htmlFor="Title" className="text-2xl font-bold">Title</label>
                    <input type="text" name="title" placeholder="Title" className="bg-transparent my-5 py-5 w-full text-lg border-gray-300 border-b-2 outline-none placeholder:text-4xl" />
                </div>
                <div className="my-3">
                    <label htmlFor="Title" className="text-2xl font-bold">Blog Photo</label>
                    <input type="url" name="photo" placeholder="Photo" className="bg-transparent my-5 py-5 w-full text-lg border-gray-300 border-b-2 outline-none placeholder:text-4xl" />
                </div>
                <div className="my-3">
                    <label htmlFor="Title" className="text-2xl font-bold">Short Description</label>
                    <input type="text" name="shortDes" placeholder="Short Description" className="bg-transparent my-5 py-5 w-full text-lg border-gray-300 border-b-2 outline-none placeholder:text-4xl" />
                </div>
                <div className="my-3">
                    <label htmlFor="Title" className="text-2xl font-bold">Long Description</label>
                    <input type="text" name="longDes" placeholder="Long Description" className="bg-transparent my-5 py-5 w-full text-lg border-gray-300 border-b-2 outline-none placeholder:text-4xl" />
                </div>
            </form>
        </div>
    );
};

export default AddBlog;