import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useUsers from "../../../../hooks/useUsers";
import { useState } from "react";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hostion_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const ProfileSettings = () => {


    const axiosPublic = useAxiosPublic();
    const [users] = useUsers();
    const currentUser = users.length > 0 ? users[0] : {};
    const [imagePreview, setImagePreview] = useState(currentUser?.photo)

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
        }
    };

    const handleUpdateProfile = (e, user_id) => {
        e.preventDefault();

        const name = e.target.name.value;
        const bio = e.target.bio.value;
        const email = e.target.email.value;
        const work = e.target.work.value;
        const education = e.target.education.value;
        const protfolio = e.target.protfolio.value;
        const github = e.target.github.value;
        const linkedin = e.target.linkedin.value;

        const updateProfile = { name, bio, email, work, education, protfolio, github, linkedin, photo: imagePreview, }

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
                        'Your user has been uploaded.',
                        'success'
                    )
                }

            })
    }


    return (
        <>
            <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="3000"
                data-aos-mirror="false"
                data-aos-easing="ease-in"
                className="bg-mainTheme rounded-xl p-6">
                <div className="my-5">
                    {
                        users?.map(currentUser =>
                            <>
                                <form onSubmit={(e) => handleUpdateProfile(e, currentUser?._id)}>
                                    <div className="flex items-center space-x-8 mb-5">
                                        {
                                            currentUser?.photo ?
                                                <>
                                                    <figure>
                                                        <img
                                                            src={imagePreview}
                                                            className="w-20 h-20 border-2 border-borderColour rounded-full"
                                                        />
                                                    </figure>

                                                </>
                                                :
                                                <>
                                                    <div className="w-28 h-28 rounded-full bg-bodyColor flex items-center justify-center">
                                                        <span className="text-3xl font-semibold text-black">
                                                            {currentUser?.name?.charAt(0).toUpperCase()}
                                                        </span>
                                                    </div>
                                                </>
                                        }
                                        <div>
                                            <h2 className="text-xl font-semibold">{currentUser?.name}</h2>
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
                                    <div className="grid grid-cols-1">
                                        <div className="border-2 border-borderColour px-5 py-4 rounded-xl">
                                            <label className="block text-sm font-medium text-black">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="name"
                                                className="mt-1 block w-full border-borderColour text-textSmallGray text-sm font-normal focus:outline-none"
                                                defaultValue={currentUser?.name}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div className="border-2 border-borderColour px-5 py-4 rounded-xl">
                                            <label className="block text-sm font-medium text-black">
                                                Bio
                                            </label>
                                            <textarea
                                                type="text"
                                                name="bio"
                                                placeholder="Bio"
                                                className="mt-1 block w-full rounded-xl border-borderColour focus:outline-none text-textSmallGray text-sm font-normal"
                                                defaultValue={currentUser?.bio}
                                            />
                                        </div>
                                        <div className="border-2 border-borderColour px-5 py-4 rounded-xl">
                                            <label className="block text-sm font-medium text-black">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                className="mt-1 block w-full rounded-xl border-borderColour focus:outline-none text-textSmallGray text-sm font-normal"
                                                defaultValue={currentUser?.email}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div className="border-2 border-borderColour px-5 py-4 rounded-xl">
                                            <label className="block text-sm font-medium text-black">
                                                WorK
                                            </label>
                                            <input
                                                type="text"
                                                name="work"
                                                placeholder="Work"
                                                className="mt-1 block w-full border-borderColour text-textSmallGray text-sm    font-normal focus:outline-none"
                                                defaultValue={currentUser?.work}
                                            />
                                        </div>
                                        <div className="border-2 border-borderColour px-5 py-4 rounded-xl">
                                            <label className="block text-sm font-medium text-black">
                                                Education
                                            </label>
                                            <input
                                                type="text"
                                                name="education"
                                                placeholder="Education"
                                                className="mt-1 block w-full border-borderColour text-textSmallGray text-sm    font-normal focus:outline-none"
                                                defaultValue={currentUser?.education}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
                                        <div className="border-2 border-borderColour px-5 py-4 rounded-xl">
                                            <label className="block text-sm font-medium text-black">
                                                Portfolio
                                            </label>
                                            <input
                                                type="text"
                                                name="protfolio"
                                                placeholder="Protfolio"
                                                className="mt-1 block w-full border-borderColour text-textSmallGray text-sm font-normal focus:outline-none"
                                                defaultValue={currentUser?.protfolio}
                                            />
                                        </div>
                                        <div className="border-2 border-borderColour px-5 py-4 rounded-xl">
                                            <label className="block text-sm font-medium text-black">
                                                Github
                                            </label>
                                            <input
                                                type="text"
                                                name="github"
                                                placeholder="Github"
                                                className="mt-1 block w-full border-borderColour text-textSmallGray text-sm     font-normal focus:outline-none"
                                                defaultValue={currentUser?.github}
                                            />
                                        </div>
                                        <div className="border-2 border-borderColour px-5 py-4 rounded-xl">
                                            <label className="block text-sm font-medium text-black">
                                                LinkedIn
                                            </label>
                                            <input
                                                type="text"
                                                name="linkedin"
                                                placeholder="Linkedin"
                                                className="mt-1 block w-full border-borderColour text-textSmallGray text-sm    font-normal focus:outline-none"
                                                defaultValue={currentUser?.linkedin}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <button
                                            type="submit"
                                            className="py-2 px-4 text-md font-semibold rounded bg-primaryColor text-white hover:bg-primaryHover"
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