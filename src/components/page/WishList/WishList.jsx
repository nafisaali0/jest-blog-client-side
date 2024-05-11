import ShowWishList from './ShowWishList';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


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
        <div className="container mx-auto my-36">
            <div className='text-3xl font-bold my-5'>
                <h2>Your Reading List</h2>
            </div>
            <div className="my-5 grid grid-cols-1  gap-4">
                {
                    changeWishListState.length == 0 ?
                        <>
                            <div className='text-xl font-bold flex flex-col justify-center items-center my-20 p-5'>
                                <h1>No Blogs In Your Reading List</h1>
                            </div>
                        </>
                        :
                        <>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-5'>
                                {
                                    changeWishListState.map(wishBlog =>
                                        <ShowWishList
                                            key={wishBlog._id}
                                            wishBlog={wishBlog}
                                            wishList={wishList}
                                            setchangeWishListState={setchangeWishListState}>
                                        </ShowWishList>
                                    )
                                }
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default WishList;