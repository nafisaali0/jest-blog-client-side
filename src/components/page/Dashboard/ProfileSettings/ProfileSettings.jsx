import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hostion_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const ProfileSettings = () => {

    // const { _id, title, short_description, long_description, details_image, category } = userInfo
    const axiosPublic = useAxiosPublic();
    const [imagePreview, setImagePreview] = useState()

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
            Swal.Success(
                'Updated!',
                'Your image has been uploaded.',
                'success'
            )
        }
    };

    // const handleUpdateUsers = e => {
    //     e.preventDefault();

    //     const title = e.target.title.value;
    //     const short_description = e.target.shortDes.value;
    //     const long_description = e.target.longDes.value;
    //     const category = e.target.category.value;
    //     const date = moment().format("MMM Do YY");
    //     const time = moment().format('LT');
    //     const owner_name = user.displayName;
    //     const owner_image = user.photoURL;
    //     const owner_Email = user.email;
    //     const updateBlog = { title, short_description, long_description, details_image: imagePreview, date, time, category, owner_name, owner_image, owner_Email }
    //     // console.log(updateBlog)


    //     // sent update productinfo to server
    //     fetch(`https://blog-server-side-ochre.vercel.app/blogs/${_id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updateBlog)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.modifiedCount > 0) {
    //                 Swal.fire(
    //                     'Updated!',
    //                     'Your blog has been Updated.',
    //                     'success'
    //                 )
    //             }

    //         })
    // }


    return (
        <>
            <div className="max-w-screen-2xl mx-auto bg-white rounded-lg p-5 mt-44 mb-9 drop-shadow-2xl">
                <div className="p-6">
                    <form>
                        <div className="flex items-center space-x-8 mb-5">
                            <img

                                className="w-28 h-28 rounded-full"
                                src={imagePreview ? imagePreview : "https://via.placeholder.com/150"}
                                // src={imagePreview}
                            />
                            <div>
                                <h2 className="text-xl font-medium">Carly Hester</h2>
                                <div>
                                    <label className="w-28 text-sm font-semibold" htmlFor="fileUpload">
                                        <input type="file" onChange={handleImageChange} name="imageFile" className="hidden" id="fileUpload" />
                                        {
                                            imagePreview ?  "Change Image" : 'Add Image'
                                        }
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 shawdow-md shadow-sm mb-4">
                            <div className="border-2 border-card_white px-5 py-4 rounded-lg">
                                <label className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="fname"
                                    className="mt-1 block w-full rounded-md border-gray-300 sm:text-sm focus:outline-none"
                                    defaultValue="Carly"
                                />
                            </div>
                            <div className="border-2 border-card_white px-5 py-4 rounded-lg shadow-sm">
                                <label className="block text-sm font-medium text-gray-700">
                                    Last Name 
                                </label>
                                <input
                                    type="text"
                                    name="lname"
                                    className="mt-1 block w-full rounded-md border-gray-300 focus:outline-none sm:text-sm"
                                    defaultValue="Hester"
                                />
                            </div>
                        </div>
                        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 mb-4">
                            <div className="border-2 border-card_white px-5 py-4 rounded-lg shadow-sm ">
                                <label className="block text-sm font-medium text-gray-700">
                                    Bio
                                </label>
                                <textarea
                                    type="text"
                                    name="bio"
                                    className="mt-1 block w-full rounded-md border-gray-300 focus:outline-none sm:text-sm"
                                    defaultValue="write your bio"
                                />
                            </div>
                            <div className="border-2 border-card_white px-5 py-4 rounded-lg shadow-sm">
                                <label className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="mt-1 block w-full rounded-md border-gray-300 focus:outline-none sm:text-sm"
                                    defaultValue="carly.hester@gmail.com"
                                />
                            </div>
                        </div>
                        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 mb-4">
                            <div className="border-2 border-card_white px-5 py-4 rounded-lg shadow-sm">
                                <label className="block text-sm font-medium text-gray-700">
                                    WorK
                                </label>
                                <input
                                    type="text"
                                    name="work"
                                    className="mt-1 block w-full rounded-md border-gray-300 focus:outline-none sm:text-sm"
                                    defaultValue="work"
                                />
                            </div>
                            <div className="border-2 border-card_white px-5 py-4 rounded-lg">
                                <label className="block text-sm font-medium text-gray-700">
                                    Education
                                </label>
                                <input
                                    type="text"
                                    name="education"
                                    className="mt-1 block w-full rounded-md border-gray-300 focus:outline-none sm:text-sm"
                                    defaultValue="#12"
                                />
                            </div>
                        </div>
                        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3 mb-4">
                            <div className="border-2 border-card_white rounded-lg px-5 py-4 shadow-sm">
                                <label className="block text-sm font-medium text-gray-700">
                                    Website Url
                                </label>
                                <input
                                    type="text"
                                    name="protfolio"
                                    className="mt-1 block w-full rounded-md border-gray-300 focus:outline-none sm:text-sm"
                                    defaultValue="590 Berkeley Ave"
                                />
                            </div>
                            <div className="border-2 border-card_white rounded-lg px-5 py-4 shadow-sm">
                                <label className="block text-sm font-medium text-gray-700">
                                    Github Username
                                </label>
                                <input
                                    type="text"
                                    name="github"
                                    className="mt-1 block w-full rounded-md border-gray-300 focus:outline-none sm:text-sm"
                                    defaultValue="Github Username"
                                />
                            </div>
                            <div className="border-2 border-card_white px-5 py-4 rounded-lg shadow-sm">
                                <label className="block text-sm font-medium text-gray-700">
                                    LinkedIn Username
                                </label>
                                <input
                                    type="text"
                                    name="linkedin"
                                    className="mt-1 block w-full rounded-md border-gray-300 focus:outline-none sm:text-sm"
                                    defaultValue="LinkedIn username"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-52 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-center text-white bg-light_purple hover:bg-hover_btn focus:outline-none"
                            >
                                Save changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProfileSettings;