import { useState } from "react";
import moment from 'moment';
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useUsers from "../../../hooks/useUsers";
import { FiEdit } from "react-icons/fi";

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
            <form onSubmit={handleUpdateBlog}>
                <div className="flex justify-end items-end mb-6">
                    <button className="btn border-none py-2 px-4 font-semibold rounded bg-primaryColor text-white hover:bg-primaryHover">Update Blog</button>
                </div>
                <div className="bg-mainTheme space-y-5 p-5 rounded-xl shadow-md overflow-hidden">
                    <div className="relative">
                        <figure>
                            <img
                                src={imagePreview}
                                alt="image"
                                className="w-full h-80 object-cover rounded-xl"
                            />
                        </figure>
                        <div className="flex absolute top-0 right-0">
                            <span className="bg-black/40 text-white text-sm px-3 py-3 border-1 border-textSmallGray rounded cursor-pointer">
                                <label htmlFor="fileUpload">
                                    <input type="file" onChange={handleImageChange} name="imageFile" className="hidden" id="fileUpload" />
                                    <FiEdit style={{ width: '20px', height: '20px' }} />
                                </label>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <textarea type="text" name="title" defaultValue={title} placeholder="Title..." className="resize-none w-full border-none focus:border-none bg-transparent focus:outline-none text-xl text-black font-bold" />
                        </div>
                        <div>
                            <textarea type="text" name="category" defaultValue={category} placeholder="Category" className="resize-none w-full border-none focus:border-none bg-transparent focus:outline-none text-md text-textSmallGray font-medium"/>
                        </div>
                        <div>
                            <textarea type="text" name="shortDes" defaultValue={short_description} placeholder="Write Your Short Description here.." className="resize-none w-full border-none focus:border-none bg-transparent focus:outline-none text-md text-textSmallGray font-medium" />
                        </div>
                        <div>
                            <textarea type="text" name="longDes" defaultValue={long_description} placeholder="Write Your Long Description here.." className="resize-none w-full border-none focus:border-none bg-transparent focus:outline-none text-md text-textSmallGray font-medium"/>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};


export default UpdateBlog;