// import ShowWishList from './ShowWishList';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import LikeFunctionality from '../../shared/LikeFunctionality/LikeFunctionality';
import TotalLikes from '../../shared/LikeFunctionality/TotalLikes';
import { Link } from 'react-router-dom';
import { AiOutlineComment } from 'react-icons/ai';
import BlogTotalComments from '../../shared/BlogTotalComments/BlogTotalComments';
// import { BsBookmarkCheck } from 'react-icons/bs';
import DeleteFunctionality from './../../shared/DeleteFunctionality/DeleteFunctionality';


const WishList = () => {

    const { user } = useContext(AuthContext)
    const [wishList, setWishList] = useState([])
    const [changeWishListState, setchangeWishListState] = useState([])

    useEffect(() => {
        fetch(`https://blog-server-side-ochre.vercel.app/wishlist?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setWishList(data),
                    setchangeWishListState(data)
            })
    }, [user.email])
    return (
        <div className="my-10">
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-5xl font-bold text-black mb-10 ">Your Reading List</h1>
                {
                    changeWishListState.length == 0 ?
                        <>
                            <h1 className="text-xl font-bold text-textSmallGray mt-36">No Blogs In Your Reading List</h1>
                        </>
                        :
                        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-4 gap-2">
                            <>
                                {
                                    changeWishListState.map(wishBlog =>
                                        <>

                                            <div className="card space-y-2 h-96 border border-borderColour bg-mainTheme hover:shadow-xl">
                                                <figure>
                                                    <img
                                                        src={wishBlog.details_image}
                                                        alt="Shoes"
                                                        className="w-full h-[250px] overflow-hidden object-cover" />
                                                </figure>
                                                <div className="p-5">
                                                    <div className="flex justify-start items-center space-x-2 mb-1">
                                                        <div className="flex items-center justify-start">
                                                            <div className="avatar">
                                                                <div className="w-8 rounded">
                                                                    <img src={wishBlog.owner_image} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium text-black">{wishBlog.owner_name}</p>
                                                        </div>
                                                    </div>
                                                    <Link to={`/blogdetails/${wishBlog._id}`}>
                                                        <h1 title="See Details" className="font-bold text-md">{wishBlog.title}</h1>
                                                    </Link>
                                                    <p className="mb-2 text-sm font-medium text-black">{wishBlog.short_description}</p>
                                                    <div className="flex flex-row justify-between mt-5 self-end">
                                                        <div className="flex flex-row space-x-2">
                                                            <p className="text-sm text-textSmallGray font-medium">{wishBlog.date}</p>
                                                            <div className="flex space-x-1">
                                                                <LikeFunctionality id={wishBlog._id}></LikeFunctionality>
                                                                <span className="text-sm text-textSmallGray font-medium ml-1">
                                                                    <TotalLikes id={wishBlog._id}></TotalLikes>
                                                                </span>
                                                            </div>
                                                            <div className="flex space-x-1">
                                                                <AiOutlineComment title="comments" className="text-textSmallGray" style={{ width: '20px', height: '20px' }} />
                                                                <span className="text-sm text-textSmallGray font-medium ml-1">
                                                                    <BlogTotalComments id={wishBlog._id}></BlogTotalComments>
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <DeleteFunctionality
                                                                _id={wishBlog._id}
                                                                baseLink="https://blog-server-side-ochre.vercel.app/wishlist"
                                                                wishList={wishList}
                                                                setchangeWishListState={setchangeWishListState} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            </>
                        </div>

                }
            </div>
        </div>
    );
};

export default WishList;