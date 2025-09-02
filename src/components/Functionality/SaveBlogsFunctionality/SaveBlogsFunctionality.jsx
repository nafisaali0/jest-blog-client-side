import { useContext } from "react"
import { AuthContext } from "../../../Providers/AuthProvider"
import { PropTypes } from 'prop-types';
import useWishLIst from "../../../hooks/useWishList";
import { BsBookmarkCheck } from "react-icons/bs";
import { Slide, toast } from "react-toastify";


const SaveBlogsFunctionality = ({ blog }) => {

    const { user, } = useContext(AuthContext)
    const [wishList] = useWishLIst();
    const { _id, title, details_image, short_description, category, long_description, date, time, owner_name, owner_image, owner_Email } = blog

    const handleWishList = () => {

        const email = user?.email
        const blogId = _id

        const blogWishListInfo = { blogId, email, title, short_description, long_description, details_image, date, time, category, owner_name, owner_image, owner_Email }
        const checkSameBlog = wishList?.some(readBlog => readBlog?.blogId === blogId)

        if (checkSameBlog === true) {
            toast.info('Already in Reading List', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: 1,
                theme: "light",
                transition: Slide,
            });
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
                        toast.success('Saved to Reading List!', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: 1,
                            theme: "light",
                            transition: Slide,
                        });
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