import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import iconDetails from '../../../assets/image/icons/details1.svg'
import iconDelete from '../../../assets/image/icons/delete.svg'
import iconLike from '../../../assets/image/icons/like.svg'
import iconComment from '../../../assets/image/icons/comment.svg'
import Swal from 'sweetalert2';
import useComment from '../../../hooks/useComment';


const ShowWishList = ({ wishBlog, wishList, setchangeWishListState }) => {

    const [comments] = useComment();
    const { _id, blogId, title, date, time, details_image, short_description, category } = wishBlog
    const comment = comments.filter(item => item.blog_id === blogId)


    // execute delete form client site and execute through backend
    const handleDelete = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://blog-server-side-ochre.vercel.app/wishlist/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your save blog has been deleted.',
                                'success'
                            )
                            // clear state after delete wishlist's blog
                            const loadBlogAfterDelete = wishList.filter(blog => blog._id !== _id)
                            setchangeWishListState(loadBlogAfterDelete)
                        }

                    })
            }
        })

    }

    return (
        <>
            <div href="#" className="flex flex-col-reverse items-center bg-card_white rounded-lg shadow md:flex-row-reverse md:max-w-4xl hover:bg-hover_gray">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <div className='my-3'>
                        <span className='px-5 py-2 bg-light_gray text-xs text-black font-semibold rounded-full'>{category}</span>
                    </div>
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">{title}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{short_description}</p>
                    <div className='flex gap-3 items-center my-3 font-bold'>
                        <div>
                            <span>{date}</span>
                        </div>
                        <div>
                            <span>{time}</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center my-3">
                        <div className="flex gap-5 items-center">
                            <div className="flex gap-2 items-center">
                                <img title="love" className="w-7 cursor-pointer" src={iconLike} alt="" /><span>{comment.length}</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img title="comment" className="w-7 cursor-pointer" src={iconComment} alt="" /><span>{comment.length}</span>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Link to={`/blogdetails/${blogId}`}>
                                <img title="See Details" className='w-[30px] h-[30px] cursor-pointer' src={iconDetails} alt="detailsbutton" />
                            </Link>
                            <img title="Wishlist" onClick={() => handleDelete(_id)} className='w-[30px] h-[30px] cursor-pointer' src={iconDelete} alt="detailsbutton" />
                        </div>
                    </div>
                </div>
                <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-80 md:rounded-none md:rounded-s-lg" src={details_image} alt="" />
            </div>
        </>

    );
};

ShowWishList.propTypes = {
    wishBlog: PropTypes.obj,
    wishList: PropTypes.array,
    setchangeWishListState: PropTypes.func
};

export default ShowWishList;