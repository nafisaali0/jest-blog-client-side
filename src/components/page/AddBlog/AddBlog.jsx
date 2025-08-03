import { useState } from "react";
import moment from 'moment';
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useUsers from "../../../hooks/useUsers";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hostion_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddBlog = () => {

    const axiosPublic = useAxiosPublic();
    const [users] = useUsers();
    const currentUser = users.length > 0 ? users[0] : {};

    //for intent output 
    const [imagePreview, setImagePreview] = useState(null)
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        shortDes: "",
        longDes: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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

    // create final post to server 
    const handleCreateBlog = async (e) => {
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

        const newBlog = { title, short_description, long_description, details_image: imagePreview, date, time, category, owner_name, owner_image, owner_Email }
        fetch('https://blog-server-side-ochre.vercel.app/blogs', {
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
        <>
            <div className="bg-white">
                <form onSubmit={handleCreateBlog}>
                    <div className="flex items-start justify-start flex-col-reverse lg:flex-row lg:gap-0 gap-5">
                        <div className="w-full lg:w-2/4 h-screen overflow-y-scroll border-[.6px] border-borderColour">
                            <div className="h-screen p-12 pt-14 space-y-6">
                                <div className="w-full space-y-6">
                                    <div>
                                        <label className="py-2 px-4 font-semibold rounded bg-primaryColor text-white hover:bg-primaryHover" htmlFor="fileUpload">
                                            <input type="file" onChange={handleImageChange} name="imageFile" className="hidden text-white" id="fileUpload" />
                                            <span className="">Add Your Cover Image</span>
                                        </label>
                                    </div>
                                    <div>
                                        <textarea
                                            placeholder="Title.."
                                            type="text" name="title" value={formData.title} onChange={handleChange}
                                            className="resize-none w-full border-none focus:border-none bg-transparent text-xl focus:outline-none placeholder:text-textSmallGray text-black font-bold"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <textarea
                                            type="category" name="category" value={formData.category} onChange={handleChange} placeholder="Category"
                                            className="resize-none w-full border-none focus:border-none bg-transparent focus:outline-none text-md text-textSmallGray font-medium"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <textarea
                                            type="shortDes" name="shortDes" value={formData.shortDes} onChange={handleChange} placeholder="Write Your Short Description here.."
                                            className="resize-none w-full border-none focus:border-none bg-transparent focus:outline-none text-md text-textSmallGray font-medium"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <textarea
                                            type="longDes" name="longDes" value={formData.longDes} onChange={handleChange} placeholder="Write Your Long Description here.."
                                            className="resize-none w-full border-none focus:border-none bg-transparent focus:outline-none text-md text-textSmallGray font-medium"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/4 h-screen overflow-y-scroll border-[.6px] border-borderColour">
                            <div className="h-screen p-12 pt-14 space-y-6">
                                <div className="flex flex-col justify-end items-end">
                                    <button className="py-2 px-4 font-semibold rounded bg-primaryColor text-white hover:bg-primaryHover">Publish</button>
                                </div>
                                {imagePreview && (
                                    <figure>
                                        <img
                                            src={imagePreview}
                                            alt="image"
                                            className="w-full h-32 overflow-hidden object-cover"
                                        />
                                    </figure>
                                )}
                                <div>
                                    <h1 type="text" name="title" placeholder="Title.." className="text-xl text-black font-bold placeholder:text-textSmallGray">{formData.title}</h1>
                                </div>
                                <div>
                                    <p className="text-md text-textSmallGray font-medium">{formData.category}</p>
                                </div>
                                <div>
                                    <p className="text-md text-textSmallGray font-medium">{formData.shortDes}</p>
                                </div>
                                <div>
                                    <p className="text-md text-textSmallGray font-medium">{formData.longDes}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddBlog;