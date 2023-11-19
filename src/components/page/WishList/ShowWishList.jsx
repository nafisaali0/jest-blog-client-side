import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import icon1 from '../../../assets/image/icons/details1.svg'
import icon2 from '../../../assets/image/icons/delete.svg'
import Swal from 'sweetalert2';
const ShowWishList = ({ wishBlog, wishList, setchangeWishListState }) => {

    const { _id, title, details_image, short_description, category } = wishBlog

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
                fetch(`http://localhost:5000/wishlist/${_id}`, {
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
            <div className="flex flex-col md:gap-6 bg-[#e4e6eb] border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100">
                <img className="object-cover w-full rounded-t-lg h-96 lg:w-[500px] lg:h-[340px] md:w-[400px] md:rounded-l-lg" src={details_image} alt="" />
                <div className="flex flex-col p-4">
                    <h5 className="mb-2 text-2xl font-bold  text-black">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 text-xl ">{short_description}</p>

                    <div className='my-3'>
                        <span className='px-3 py-2 bg-[#5b608b] text-lg text-white font-semibold rounded-full'>{category}</span>
                    </div>
                    <div className='flex gap-5 mt-3'>
                        <Link to={`/blogdetails/${_id}`}>
                            <img title="See Details" className='w-[30px] h-[30px]' src={icon1} alt="detailsbutton" />
                        </Link>
                        <img title="Delete" onClick={() => handleDelete(_id)} className='w-[30px] h-[30px] cursor-pointer' src={icon2} alt="detailsbutton" />
                    </div>
                </div>
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