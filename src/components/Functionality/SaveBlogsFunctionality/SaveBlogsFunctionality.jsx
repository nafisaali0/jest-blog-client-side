import { useContext } from "react"
import Swal from "sweetalert2"
import { AuthContext } from "../../../Providers/AuthProvider"
import { PropTypes } from 'prop-types';
import useWishLIst from "../../../hooks/useWishList";
import { BsBookmarkCheck } from "react-icons/bs";


const SaveBlogsFunctionality = ({ blog }) => {
    const { user, } = useContext(AuthContext)
    const [wishList] = useWishLIst();
    const { _id, title, details_image, short_description, category, long_description, date, time, owner_name, owner_image, owner_Email } = blog

    const handleWishList = () => {

        const email = user.email
        const blogId = _id

        const blogWishListInfo = { blogId, email, title, short_description, long_description, details_image, date, time, category, owner_name, owner_image, owner_Email }
        const checkSameBlog = wishList.some(readBlog => readBlog.blogId === blogId)

        if (checkSameBlog === true) {
            Swal.fire(
                'Already Added in Reading List'
            )
        } else {
            //send wishlist data to the server and below link to backend's created API and load in mongo as DB
            fetch('https://blog-server-side-ochre.vercel.app/wishlist', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(blogWishListInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        Swal.fire(
                            'Added Blog to Reading List'
                        )
                    }
                })
        }
    }
    return (
        <>
            <BsBookmarkCheck onClick={handleWishList} title="save" className="text-textSmallGray cursor-pointer" style={{ width: '20px', height: '20px' }} />
        </>
    )
}

export default SaveBlogsFunctionality

SaveBlogsFunctionality.propTypes = {
    blog: PropTypes.func,
};