import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useBlogs from './../../../hooks/useBlogs';

const CategoryHome = () => {

    const [uniqueCategories, setUniqueCategories] = useState([]);
    const [displayCount, setDisplayCount] = useState(6);
    const [blogs, loading] = useBlogs();

    useEffect(() => {
        if (!loading && blogs.length > 0) {
            const categories = [...new Set(blogs.map(blog => blog.category))];
            setUniqueCategories(categories);
        }
    }, [blogs, loading]);
    const handleSeeAll = () => {
        setDisplayCount(displayCount + 6);
    }

    return (
        <>
            <div className="w-full">
                <h1 className="text-xl font-bold text-black my-5">Category</h1>
                <div className="flex flex-wrap gap-4 lg:gap-2">
                    {uniqueCategories.slice(0, displayCount).map(category => (
                        <>
                            <Link to={`/blogs/category/${category}`}>
                                <button key={category} className="buttonCategory">
                                    {category}
                                </button>
                            </Link>
                        </>
                    ))}
                </div>
                <div>
                    {
                        uniqueCategories.length > 3 && displayCount < uniqueCategories.length &&
                        <button className="buttonView mt-4 font-semibold" onClick={handleSeeAll}>View More</button>
                    }
                </div>
            </div>
        </>
    );
};

export default CategoryHome;