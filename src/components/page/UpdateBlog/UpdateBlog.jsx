import { useState } from "react";
import moment from 'moment';
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useUsers from "../../../hooks/useUsers";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hostion_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateBlog = () => {

    const blogs = useLoaderData()//load all blogs info
    const { _id, title, short_description, long_description, details_image, category } = blogs
    const [users] = useUsers();
    const currentUser = users.length > 0 ? users[0] : {};
    const axiosPublic = useAxiosPublic();
    const [imagePreview, setImagePreview] = useState(details_image)

    //image upload in imgBB web hosting
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("image", file);

        const res = await axiosPublic.post(image_hostion_api, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        if (res.data.success) {
            const details_image = res.data.data.display_url;
            setImagePreview(details_image);
        }
    };

    const handleUpdateBlog = e => {
        e.preventDefault();

        const title = e.target.title.value;
        const short_description = e.target.shortDes.value;
        const long_description = e.target.longDes.value;
        const category = e.target.category.value;
        const date = moment().format("MMM Do YY");
        const time = moment().format('LT');
        const owner_name = currentUser.name;
        const owner_image = currentUser.photo;
        const owner_Email = currentUser.email;
        const updateBlog = { title, short_description, long_description, details_image: imagePreview, date, time, category, owner_name, owner_image, owner_Email }

        // sent update productinfo to server
        fetch(`https://blog-server-side-ochre.vercel.app/blogs/${_id}`, {
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
                    <div className="flex justify-end items-end">
                        <button className="btn border-none bg-light_purple text-white hover:bg-hover_btn">Update Blog</button>
                    </div>
                    <div className="my-5 h-3/5 overflow-hidden relative">
                        <img className="w-full h-full object-cover" src={imagePreview} alt="" />
                        <div>
                            <label className="absolute bottom-0 text-center left-0 w-full text-sm hover:text-white hover:bg-light_purple font-semibold px-5 py-3 bg-card_white" htmlFor="fileUpload">
                                <input type="file" onChange={handleImageChange} name="imageFile" className="hidden" id="fileUpload" />
                                Change Cover Image
                            </label>
                        </div>
                    </div>
                    <div className="mt-10">
                        <label htmlFor="Title" className="text-2xl font-bold">Title</label>
                        <textarea type="text" name="title" defaultValue={title} className="resize-none bg-transparent font-semibold py-5 w-full text-lg outline-none placeholder:text-4xl" />
                    </div>
                    <div>
                        <label htmlFor="Title" className="text-2xl font-bold">Category</label>
                        <input type="text" name="category" defaultValue={category} className="bg-transparent font-semibold py-5 w-full text-lg border-none outline-none placeholder:text-4xl" />
                    </div>
                    <div className="my-3">
                        <label htmlFor="Title" className="text-2xl font-bold">Short Description</label>
                        <textarea type="text" name="shortDes" defaultValue={short_description} placeholder="Write Your Short Description here.." className="resize-none bg-transparent my-5 py-5 w-full text-lg  outline-none font-semibold placeholder:text-xl" />
                    </div>
                    <div>
                        <label htmlFor="Title" className="text-2xl font-bold">Long Description</label>
                        <textarea type="text" name="longDes" defaultValue={long_description} placeholder="Write Your Long Description here.." className="resize-none bg-transparent my-5 py-5 w-full text-lg  outline-none font-semibold placeholder:text-xl" />
                    </div>
                </form>
            </div>
        </>
    );
};


export default UpdateBlog;