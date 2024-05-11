import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import moment from 'moment';
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hostion_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddBlog = () => {

    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();

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
        const owner_name = user.displayName;
        const owner_image = user.photoURL;
        const owner_Email = user.email;

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
            <div className="overflow-hidden my-20 p-5">
                <form onSubmit={handleCreateBlog}>
                    <div className="flex items-start justify-start flex-col-reverse lg:flex-row gap-7">
                        <div className="w-full lg:w-2/4 h-screen overflow-y-scroll">
                            <div className="h-screen overflow-y-scroll border-[.6px] border-b-card_white p-12 pt-14">
                                <div>
                                    <label className="text-sm border-2 border-card_white hover:border-light_purple font-semibold px-5 py-3 bg-card_white" htmlFor="fileUpload">
                                        <input type="file" onChange={handleImageChange} name="imageFile" className="hidden" id="fileUpload" />
                                        Add Your Cover Image
                                    </label>
                                </div>
                                <div className="mt-10">
                                    <textarea type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title.." className="resize-none overflow-y-hidden bg-transparent my-5 py-5 w-full text-lg outline-none font-bold placeholder:text-4xl" />
                                </div>
                                <div className="my-3">
                                    <textarea type="category" name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="resize-none overflow-y-hidden bg-transparent my-5 py-5 w-full text-lg  outline-none font-semibold placeholder:text-xl" />
                                </div>
                                <div className="my-3">
                                    <textarea type="text" name="shortDes" value={formData.shortDes} onChange={handleChange} placeholder="Write Your Short Description here.." className="resize-none overflow-y-hidden bg-transparent my-5 py-5 w-full text-lg  outline-none font-semibold placeholder:text-xl" />
                                </div>
                                <div className="my-3">
                                    <textarea type="text" name="longDes" value={formData.longDes} onChange={handleChange} placeholder="Write Your Long Description here.." className="resize-none overflow-y-hidden bg-transparent my-5 py-5 w-full text-lg  outline-none font-semibold placeholder:text-xl" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/4 h-screen overflow-y-scroll">
                            <div className="h-screen space-y-6 border-[.6px] border-card_white p-12 pt-14">
                                <div className="flex flex-col justify-end items-end">
                                    <button className="btn border-none bg-light_purple text-white hover:bg-hover_btn">Publish</button>
                                </div>
                                <div className="my-5 h-3/5 overflow-hidden">
                                    <h1 className=" "><img className="w-full h-full object-cover" src={imagePreview} alt="" /></h1>
                                </div>
                                <div className="my-10">
                                    <h1 type="text" name="title" placeholder="Title.." className="text-4xl font-bold placeholder:text-4xl">{formData.title}</h1>
                                </div>
                                <div className="my-3">
                                    <p className="text-xl font-semibold placeholder:text-xl">{formData.category}</p>
                                </div>
                                <div className="my-3">
                                    <p className="text-xl font-semibold placeholder:text-xl">{formData.shortDes}</p>
                                </div>
                                <div className="my-3">
                                    <p className="text-xl font-semibold placeholder:text-xl">{formData.longDes}</p>
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