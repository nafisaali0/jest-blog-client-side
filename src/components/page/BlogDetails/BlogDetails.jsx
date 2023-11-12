// import { useParams } from "react-router-dom";
import { Link, useLoaderData } from "react-router-dom";
import icon1 from '../../../assets/image/icons/wishlist1.svg'
import icon2 from '../../../assets/image/icons/edit.svg'
import CreateComment from "./CreateComment";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";



const BlogDetails = () => {

    const { user } = useContext(AuthContext)//currrent user for update condition and wishlist
    const blog = useLoaderData();

    const { _id, title, details_image, short_description, long_description, category, date, time, owner_name, owner_image, owner_Email } = blog

    const handleWishList = () => {

        const email = user.email
        const blogWishListInfo = { email, title, short_description, long_description, details_image, date, time, category, owner_name, owner_image, owner_Email }

        //send wishlist data to the server and below link from backend's created API and load in mongo as DB
        fetch('http://localhost:5000/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogWishListInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Added Blog to WishList'
                    )
                }
            })
    }

    return (
        <div className=" max-w-5xl mx-auto overflow-hidden mb-10 p-5">
            <div className="">
                <div className="text-4xl font-bold">
                    <h1>{title}</h1>
                </div>
                <div className="flex gap-5 my-5 pb-5 border-b-2 border-[#e7e7e9] drop-shadow-sm">
                    <div className="avatar">
                        <div className="w-8 rounded">
                            <img src={owner_image} alt="owner-Image" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">{owner_name}</h2>
                        <span className="text-black">{date}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center border-b-2 border-[#e7e7e9] drop-shadow-sm">
                    <div>
                        <span className='px-3 py-2 bg-[#5b608b] text-xs text-white font-semibold rounded-lg'>{category}</span>
                    </div>
                    <div className="flex gap-5 my-5">
                        <img title="Wishlist" onClick={handleWishList} className="w-8" src={icon1} alt="" />
                        {
                            user?.email === owner_Email ?
                                <>
                                    <Link to={`/update/${_id}`}><img title="Update" className="w-8" src={icon2} alt="" /></Link>
                                </> : ''
                        }
                    </div>
                </div>
                <div className="my-5">
                    <img className="w-full h-full" src={details_image} alt="blog_image" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold">Introduction</h1>
                    <p className="text-lg my-5">{short_description}</p>
                    <h1 className="text-3xl font-bold">Details</h1>
                    <p className="text-lg my-5">{long_description}</p>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="text-3xl font-bold">Comment</h1>
                </div>
                <CreateComment
                    id={_id}
                    blog_Email={owner_Email}>
                </CreateComment>
            </div>
        </div>
    );
};

export default BlogDetails;