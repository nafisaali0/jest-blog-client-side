import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const ShowFeaturedBlogs = ({ sortByWord }) => {
    // console.log(sortByWord)

    const customStyles = {
        headRow: {
            style: {
                backgroundColor: 'black',
                color: 'white'
            }
        },
        headCells: {
            style: {
                fontSize: '16px',
                fontWeight: '600',
            }
        },
        cells: {
            style: {
                fontSize: '16px',
                fontWeight: '500',
                padding: '1rem',
            }
        },
    }
    const columns = [
        {
            name: 'Serial Number',
            selector: row => row.id
        },
        {
            name: 'Blog Title',
            selector: (row) => <Link target='_blank' to={`/blogdetails/${row._id}`}>{row.title}</Link>
        },
        {
            name: 'Blog Category',
            selector: row => row.category
        },
        {
            name: 'Blog Owner',
            selector: row => row.owner_name
        },
        {
            name: 'Blog Owner Image',
            cell: (row) => <img src={row.owner_image} alt={row.owner_name} style={{ width: '50px', height: '50px', borderRadius: '50px', margin: '3px' }} />,
        }
    ]
    // Assuming sortBlogs is an array of blog objects
    const data = sortByWord.map((blog, index) => ({
        _id: blog._id,
        id: index + 1,
        title: blog.title,
        category: blog.category,
        owner_name: blog.owner_name,
        owner_image: blog.owner_image,
        long_description: blog.long_description,
    }));

    return (
        <>
            <div className='bg-base-100 text-xl drop-shadow-2xl'>
                <DataTable
                    columns={columns}
                    data={data}
                    customStyles={customStyles}
                    responsive
                    pagination
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={[10, 15, 20]} />
            </div>
        </>
    );
};

ShowFeaturedBlogs.propTypes = {
    sortByWord: PropTypes.array,
};

export default ShowFeaturedBlogs;