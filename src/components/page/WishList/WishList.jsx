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
        <div className="container mx-auto my-5">
            <div className='text-3xl font-bold my-5'>
                <h2>Your WishList</h2>
            </div>
            <div className="my-5 grid grid-cols-1  gap-4">
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
        </div>
    );
};

export default WishList;