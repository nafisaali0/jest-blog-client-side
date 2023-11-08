import PropTypes from 'prop-types';
// import { useEffect, useState } from 'react';

const RightSide = ({ handleSearchFilter }) => {

    // const [blogs, setBlogs] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/blogs')
    //         .then(res => res.json())
    //         .then(data => setBlogs(data))
    // }, [])
    // console.log(blogs)

    const handleSearch = e => {
        e.preventDefault();

        const title = e.target.title.value
        handleSearchFilter(title)
    }


    return (
        <>
            <div>
                <form onSubmit={handleSearch}>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" name='title' className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  " placeholder="Search by title" />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                    </div>
                </form>
            </div>
            <div>
                <div className="dropdown dropdown-open">
                    <label tabIndex={0} className="btn m-1">Category</label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <li onClick={() => handleFilter('All')}><a>All</a></li>
                        <li onClick={() => handleFilter('Web Development')}><a>Web Development</a></li>
                        <li onClick={() => handleFilter('Self Development')}><a>Self Development</a></li>
                        <li onClick={() => handleFilter('Science')}><a>Science</a></li>
                        <li onClick={() => handleFilter('Productivity')}><a>Productivity</a></li>
                        <li onClick={() => handleFilter('Marketing')}><a>Marketing</a></li> */}
                    </ul>
                </div>
            </div>
        </>
    );
};

RightSide.propTypes = {
    handleSearchFilter: PropTypes.func
};

export default RightSide;