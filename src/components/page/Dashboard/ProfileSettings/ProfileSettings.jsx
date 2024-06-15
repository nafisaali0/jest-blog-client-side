import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useUsers from "../../../../hooks/useUsers";
import { useState } from "react";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hostion_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const ProfileSettings = () => {

    const [imagePreview, setImagePreview] = useState()
    const axiosPublic = useAxiosPublic();
    const [users] = useUsers();
    console.log(users)

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
            const photo = res.data.data.display_url;
            setImagePreview(photo);
            Swal.fire(
                'Updated!',
                'Your image has been uploaded.',
                'success'
            )
        }
    };

    const handleUpdateProfile = (e, user_id) => {
        e.preventDefault();
    
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        const bio = e.target.bio.value;
        const email = e.target.email.value;
        const work = e.target.work.value;
        const education = e.target.education.value;
        const protfolio = e.target.protfolio.value;
        const github = e.target.github.value;
        const linkedin = e.target.linkedin.value;

        const updateProfile = { fname, lname, bio, email, work, education, protfolio, github, linkedin, photo: imagePreview }
        // console.log(updateProfile)

        // sent update productinfo to server
        fetch(`https://blog-server-side-ochre.vercel.app/users/${user_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProfile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Updated!',
                        'Your user has been Updated.',
                        'success'
                    )
                }

            })
    }


    return (
        <>
            <div className="max-w-screen-2xl mx-auto bg-white rounded-lg p-5 mt-44 mb-9 drop-shadow-2xl">
                <div className="p-6">

                    {
                        users.map(currentUser =>
                            <>
                                <form onSubmit={(e) => handleUpdateProfile(e, currentUser._id)}>
                                    <div className="flex items-center space-x-8 mb-5">
                                        <img
                                            className="w-28 h-28 rounded-full"
                                            // src={imagePreview ? currentUser.photo : "https://via.placeholder.com/150"}
                                            src={imagePreview ? imagePreview : currentUser?.photo}
                                        // src={imagePreview}
                                        />
                                        <div>
                                            <h2 className="text-xl font-medium">Carly Hester</h2>
                                            <div>
                                                <label className="w-28 text-sm font-semibold" htmlFor="fileUpload">
                                                    <input type="file" onChange={handleImageChange} name="imageFile" className="hidden" id="fileUpload" />
                                                    {
                                                        imagePreview ? "Change Image" : 'Add Image'
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
                                                placeholder="fname"
                                                className="mt-1 block w-full rounded-md border-gray-300 sm:text-sm focus:outline-none"
                                                defaultValue={currentUser?.fname}
                                            />
                                        </div>
                                        <div className="border-2 border-card_white px-5 py-4 rounded-lg shadow-sm">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                name="lname"
                                                placeholder="fname"
                                                className="mt-1 block w-full rounded-md border-gray-300 focus:outline-none sm:text-sm"
                                                defaultValue={currentUser?.lname}
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
                                                placeholder="bio"
                                                className="mt-1 block w-full rounded-md border-gray-300 focus:outline-none sm:text-sm"
                                                defaultValue={currentUser?.bio}
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
                                                defaultValue={currentUser?.email}
                                                readOnly
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
                                                defaultValue={currentUser?.work}
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
                                                defaultValue={currentUser?.education}
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
                                                defaultValue={currentUser?.protfolio}
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
                                                defaultValue={currentUser?.github}
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
                                                defaultValue={currentUser?.linkedin}
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
                            </>
                        )
                    }

                </div>
            </div>
        </>
    );
};

export default ProfileSettings;