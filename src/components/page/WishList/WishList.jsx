import ShowWishList from './ShowWishList';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const WishList = () => {
    
    const { user } = useContext(AuthContext)
    const [wishList, setWishList] = useState([])    

    useEffect(() => {
        fetch(`http://localhost:5000/wishlist?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setWishList(data)
            })
    }, [user.email])
    return (
        <div className="container mx-auto my-5">
            <div className='text-3xl font-bold my-5'>
                <h2>Your WishList</h2>
            </div>
            <div className="my-5">
                {
                    wishList.map(wishBlog =>
                        <ShowWishList
                            key={wishBlog._id}
                            wishBlog={wishBlog}>
                        </ShowWishList>
                    )
                }
            </div>
        </div>
    );
};

export default WishList;