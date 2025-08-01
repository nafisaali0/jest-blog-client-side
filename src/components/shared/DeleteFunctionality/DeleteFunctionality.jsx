import { RiDeleteBin3Line } from "react-icons/ri"
import Swal from "sweetalert2"
import { PropTypes } from 'prop-types';


const DeleteFunctionality = ({ baseLink, _id, wishList, setchangeWishListState }) => {

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
                fetch(`${baseLink}/${_id}`, {
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
            <RiDeleteBin3Line title="Remove" className="text-textSmallGray cursor-pointer" style={{ width: '20px', height: '20px' }} onClick={handleDelete} />
        </>
    )
}

export default DeleteFunctionality

DeleteFunctionality.propTypes = {
    baseLink: PropTypes.string,
    _id: PropTypes.string,
    wishList: PropTypes.array,
    setchangeWishListState: PropTypes.func
};