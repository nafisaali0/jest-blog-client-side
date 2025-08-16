import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useBlogs from '../../../hooks/useBlogs';
import { Link, useLocation } from 'react-router-dom';


const SearchFunctionality = () => {
    const location = useLocation();
    const { searchQuery, setSearchQuery } = useContext(AuthContext);
    const [blogs] = useBlogs();
    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            {
                location.pathname == '/' ?
                    <div className="dropdown">
                        <input
                            tabIndex={0}
                            role="button"
                            type="text"
                            placeholder="Search by title..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="navbar-center ml-5 md:ml-0 md:flex md:navbar-start border text-lg p-1 px-3 w-[13rem] md:w-[25rem] lg:w-[30rem] border-borderColour outline-borderColour rounded-lg text-textSmallGray font-semibold"></input>
                        <div
                            tabIndex={0}
                            className="dropdown-content bg-mainTheme w-[13rem] md:w-[25rem] lg:w-[30rem] z-1  ml-5 md:ml-0 shadow-md rounded-b-xl">
                            <div className="overflow-y-scroll max-h-64">
                                {filteredBlogs.map((blog) => (
                                    <div key={blog._id} className="p-4 border-b border-borderColour">
                                        <Link to={`/blogdetails/${blog._id}`}>
                                            <h2 className="text-sm font-semibold md:font-bold md:text-md text-textSmallGray cursor-pointer hover:text-primaryHover">
                                                {blog.title}
                                            </h2>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    :
                    ""
            }


           
        </>
    )
}

export default SearchFunctionality
